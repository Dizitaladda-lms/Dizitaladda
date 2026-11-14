import { createHmac, timingSafeEqual } from "node:crypto";
import { getDatabase, getLeadDatabase, safeError } from "../../../../lib/db.js";
import { requireRole } from "../../../../lib/session.js";
import { POST as submitBookDemo } from "../../forms/book-demo/route.js";
import { POST as submitTestingForm } from "../../testing-purpose/submissions/route.js";
import { handleScholarshipPost } from "../../testing-purpose/scholarship/[action]/route.js";
import { POST as startEnrollmentPayment } from "../../../enroll-payment/route.js";
import { POST as handlePayUCallback } from "../../payments/payu/callback/route.js";
const json = (data, status = 200) => new Response(JSON.stringify(data), {
  status,
  headers: { "content-type": "application/json; charset=utf-8" },
});

const clean = (value, max = 250) => typeof value === "string"
  ? value.replace(/[<>\u0000-\u001f]/g, "").trim().slice(0, max)
  : "";

async function parseForm(request) {
  const type = request.headers.get("content-type") || "";
  if (type.includes("application/json")) return await request.json();
  return Object.fromEntries(await (await request.formData()).entries());
}

async function submitLead(request, inquiry = false) {
  const form = await parseForm(request);
  const name = clean(form.name, 120);
  const phone = clean(form.phone, 32);
  const email = clean(form.email, 254).toLowerCase();
  const course = clean(form.course, 160);
  const mode = clean(form.class_mode, 60);
  if (!name || !phone || !email || !course || (inquiry && !mode)) {
    return json({ success: false, message: "All fields are required." }, 400);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ success: false, message: "Enter a valid email address." }, 400);
  try {
    const db = getLeadDatabase();
    if (inquiry) {
      await db.execute("INSERT INTO inquiries (name, phone, email, course, class_mode) VALUES (?, ?, ?, ?, ?)", [name, phone, email, course, mode]);
    } else {
      const [existing] = await db.execute("SELECT 1 FROM form_submissions WHERE email = ? OR phone = ? LIMIT 1", [email, phone]);
      if (existing.length) return json({ success: false, message: "You have already submitted the form." }, 409);
      await db.execute("INSERT INTO form_submissions (name, phone, email, course, submission_time) VALUES (?, ?, ?, ?, ?)", [name, phone, email, course, new Date()]);
    }
    return json({ success: true, message: "Form submitted successfully." });
  } catch (error) {
    return safeError(error);
  }
}

async function createRazorpayOrder(request, { enrollment = false } = {}) {
  const form = await parseForm(request);
  const session = enrollment ? null : requireRole(request, ["student"]);
  if (!enrollment && !session) return json({ error: "Sign in to your student account before checkout." }, 401);
  let amount = Number(form.id ?? form.amount);
  const courseId = clean(form.course_id, 32);
  const courseName = clean(form.course_name ?? form.course, 160) || "Selected Course";
  const name = clean(form.name, 120);
  const email = clean(session?.email || form.email, 254).toLowerCase();
  const phone = clean(form.phone, 32);
  const keyId = process.env.RAZORPAY_KEY_ID;
  const secret = process.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !secret) return json({ error: "Payment gateway is not configured." }, 503);
  if (enrollment && (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !/^[6-9][0-9]{9}$/.test(phone))) {
    return json({ error: "Enter your name, a valid email address and a 10-digit mobile number." }, 400);
  }
  if (!Number.isFinite(amount) || amount < 1 || amount > 10000000) return json({ error: "Invalid amount." }, 400);
  if (courseId) {
    try {
      const db = getDatabase();
      const [courses] = await db.execute("SELECT course_price FROM course WHERE course_id = ? LIMIT 1", [courseId]);
      if (!courses.length) return json({ error: "Selected course was not found." }, 404);
      amount = Number(courses[0].course_price);
    } catch (error) {
      return safeError(error);
    }
  }
  const txnAmount = amount.toFixed(2);
  const receipt = `ORDS${Date.now().toString().slice(-8)}${Math.floor(Math.random() * 90 + 10)}`;
  try {
    const response = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        authorization: `Basic ${Buffer.from(`${keyId}:${secret}`).toString("base64")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({ amount: Math.round(amount * 100), currency: "INR", receipt,
        notes: { course_name: courseName, course_id: courseId, student_email: email } }),
      signal: AbortSignal.timeout(20000),
    });
    const data = await response.json();
    if (!response.ok || !data.id) return json({ error: "Razorpay order creation failed." }, 502);
    return json({ key_id: keyId, order_id: data.id, amount: data.amount, receipt,
      course_name: courseName, course_id: courseId, stu_email: email, txn_amount: txnAmount,
      name, email, phone });
  } catch {
    return json({ error: "Could not connect to Razorpay." }, 502);
  }
}

async function saveRazorpayPayment(request) {
  const form = await parseForm(request);
  const orderId = clean(form.razorpay_order_id || form.ORDER_ID, 80);
  const paymentId = clean(form.razorpay_payment_id, 80);
  const signature = clean(form.razorpay_signature, 128);
  const secret = process.env.RAZORPAY_KEY_SECRET;
  if (!secret || !orderId || !paymentId || !signature) return json({ success: false, message: "Payment verification details are missing." }, 400);
  const expected = createHmac("sha256", secret).update(`${orderId}|${paymentId}`).digest();
  let received;
  try { received = Buffer.from(signature, "hex"); } catch { received = Buffer.alloc(0); }
  if (expected.length !== received.length || !timingSafeEqual(expected, received)) {
    return json({ success: false, message: "Payment signature verification failed." }, 400);
  }
  const keyId = process.env.RAZORPAY_KEY_ID;
  try {
    const auth = `Basic ${Buffer.from(`${keyId}:${secret}`).toString("base64")}`;
    const paymentResponse = await fetch(`https://api.razorpay.com/v1/payments/${encodeURIComponent(paymentId)}`, { headers: { authorization: auth }, signal: AbortSignal.timeout(20000) });
    const payment = await paymentResponse.json();
    if (!paymentResponse.ok || payment.order_id !== orderId || !["captured", "authorized"].includes(payment.status)) {
      return json({ success: false, message: "Razorpay payment could not be verified." }, 400);
    }
    const orderResponse = await fetch(`https://api.razorpay.com/v1/orders/${encodeURIComponent(orderId)}`, { headers: { authorization: auth }, signal: AbortSignal.timeout(20000) });
    const order = await orderResponse.json();
    if (!orderResponse.ok || Number(order.amount) !== Number(payment.amount) || order.status !== "paid") {
      return json({ success: false, message: "Payment amount or order status could not be verified." }, 400);
    }
    const email = clean(form.CUST_ID, 254).toLowerCase();
    const courseId = clean(form.COURSE_ID, 32);
    if (clean(order.notes?.student_email, 254).toLowerCase() !== email || clean(order.notes?.course_id, 32) !== courseId) {
      return json({ success: false, message: "Payment does not match the student or course." }, 400);
    }
    const amount = (Number(payment.amount) / 100).toFixed(2);
    const date = new Date().toLocaleString("en-GB", { timeZone: "Asia/Kolkata", hour12: true }).replaceAll("/", "-");
    const db = getDatabase();
    await db.execute("INSERT INTO courseorder (order_id, stu_email, course_id, status, respmsg, amount, order_date) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [orderId, email, courseId, "Success", `Razorpay payment ID: ${paymentId}`, amount, date]);
    return new Response("<!doctype html><html><head><meta http-equiv=\"refresh\" content=\"0;url=/panel/student/myCourse\"></head><body>Payment successful. <a href=\"/panel/student/myCourse\">Continue</a></body></html>", { headers: { "content-type": "text/html; charset=utf-8" } });
  } catch (error) {
    return safeError(error);
  }
}

async function startPanelRazorpayPayment(request) {
  const session = requireRole(request, ["student"]);
  if (!session) return Response.redirect(new URL("/panel/student/login?redirect=payment-page", request.url), 303);
  let form;
  try { form = await parseForm(request); } catch { return new Response("Invalid payment request.", { status: 400 }); }
  const courseId = clean(form.course_id, 32);
  const courseName = clean(form.course_name, 160) || "Selected Course";
  const order = await createRazorpayOrder(new Request(request.url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ id: form.id, course_id: courseId, course_name: courseName, email: session.email }),
  }));
  if (!order.ok) {
    const result = await order.json();
    return new Response(`<main style="font-family:Arial;max-width:500px;margin:15vh auto;padding:24px"><h1>Payment unavailable</h1><p>${escapeHtml(result.error || "Unable to create payment order.")}</p><a href="/courses">Return to courses</a></main>`, { status: order.status, headers: { "content-type": "text/html; charset=utf-8" } });
  }
  const data = await order.json();
  const js = JSON.stringify({ ...data, image: "https://dizitaladda.com/assets/img/logo.webp" }).replace(/</g, "\\u003c");
  const page = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Opening Secure Payment | DizitalAdda</title><style>*{box-sizing:border-box}body{min-height:100vh;margin:0;display:grid;place-items:center;background:linear-gradient(135deg,#0f172a,#1e293b 55%,#111827);font-family:'Segoe UI',sans-serif;color:#e2e8f0}.card{text-align:center;padding:28px}.logo{width:72px;height:72px;border-radius:16px;background:#fff;padding:10px;margin-bottom:28px}.spinner{width:44px;height:44px;border:4px solid #ffffff20;border-top-color:#3b82f6;border-radius:50%;animation:spin .8s linear infinite;margin:28px auto}@keyframes spin{to{transform:rotate(360deg)}}p{color:#94a3b8}</style></head><body><main class="card"><img class="logo" src="https://dizitaladda.com/assets/img/logo.webp" alt="DizitalAdda"><h1>Opening Secure Payment</h1><p>${escapeHtml(data.course_name)} · Rs. ${escapeHtml(data.txn_amount)}</p><div class="spinner"></div></main><script src="https://checkout.razorpay.com/v1/checkout.js"></script><script>const order=${js};const options={key:order.key_id,amount:order.amount,currency:'INR',name:'DizitalAdda',description:order.course_name,image:order.image,order_id:order.order_id,prefill:{email:order.stu_email},notes:{course_id:order.course_id,course_name:order.course_name},theme:{color:'#1d4ed8'},handler:async response=>{const body=new URLSearchParams({ORDER_ID:order.order_id,CUST_ID:order.stu_email,TXN_AMOUNT:order.txn_amount,COURSE_ID:order.course_id||'',PAYMENT_GATEWAY:'razorpay',razorpay_payment_id:response.razorpay_payment_id,razorpay_order_id:response.razorpay_order_id,razorpay_signature:response.razorpay_signature});const result=await fetch('/panel/paymentdone.php',{method:'POST',body});if(result.redirected)location.href=result.url;else document.body.innerHTML=await result.text()},modal:{ondismiss:()=>location.href='/courses'}};new Razorpay(options).open();</script></body></html>`;
  return new Response(page, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } });
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

async function saveEnrollPayment(request) {
  const form = await parseForm(request);
  const paymentId = clean(form.rzp_payment_id, 80);
  const orderId = clean(form.rzp_order_id, 80);
  const signature = clean(form.rzp_signature, 128);
  const name = clean(form.name, 120);
  const email = clean(form.email, 254).toLowerCase();
  const phone = clean(form.phone, 32);
  const course = clean(form.course_name, 200);
  const secret = process.env.RAZORPAY_KEY_SECRET;
  const keyId = process.env.RAZORPAY_KEY_ID;
  if (!secret || !keyId || !paymentId || !orderId || !signature || !name || !email || !phone || !course) {
    return json({ success: false, message: "Payment details are incomplete." }, 400);
  }
  const expected = createHmac("sha256", secret).update(`${orderId}|${paymentId}`).digest();
  const received = Buffer.from(signature, "hex");
  if (expected.length !== received.length || !timingSafeEqual(expected, received)) {
    return json({ success: false, message: "Payment signature verification failed." }, 400);
  }
  try {
    const auth = `Basic ${Buffer.from(`${keyId}:${secret}`).toString("base64")}`;
    const response = await fetch(`https://api.razorpay.com/v1/payments/${encodeURIComponent(paymentId)}`, { headers: { authorization: auth }, signal: AbortSignal.timeout(20000) });
    const payment = await response.json();
    if (!response.ok || payment.order_id !== orderId || !["captured", "authorized"].includes(payment.status)) {
      return json({ success: false, message: "Razorpay payment could not be verified." }, 400);
    }
    const orderResponse = await fetch(`https://api.razorpay.com/v1/orders/${encodeURIComponent(orderId)}`, { headers: { authorization: auth }, signal: AbortSignal.timeout(20000) });
    const order = await orderResponse.json();
    if (!orderResponse.ok || Number(order.amount) !== Number(payment.amount) || order.status !== "paid") {
      return json({ success: false, message: "Payment amount or order status could not be verified." }, 400);
    }
    if (clean(order.notes?.student_email, 254).toLowerCase() !== email || clean(order.notes?.course_name, 200) !== course || Number(form.amount).toFixed(2) !== (Number(payment.amount) / 100).toFixed(2)) {
      return json({ success: false, message: "Payment does not match the enrollment details." }, 400);
    }
    const db = getDatabase();
    await db.execute("INSERT INTO course_payments (name, email, phone, course_name, amount, razorpay_order_id, razorpay_payment_id, payment_status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [name, email, phone, course, (Number(payment.amount) / 100).toFixed(2), orderId, paymentId, "Success"]);
    if (process.env.GOOGLE_SHEETS_WEBHOOK) {
      const paidAmount = (Number(payment.amount) / 100).toFixed(2);
      const body = JSON.stringify({ name, phone, email, course, mode: "Razorpay Payment", message: `Gateway: Razorpay | Status: Success | Amount: Rs ${paidAmount} | Payment ID: ${paymentId} | Order ID: ${orderId}` });
      try { await fetch(process.env.GOOGLE_SHEETS_WEBHOOK, { method: "POST", headers: { "content-type": "text/plain;charset=utf-8" }, body, signal: AbortSignal.timeout(12000) }); } catch { /* Sheet sync does not change the verified payment result. */ }
    }
    return Response.redirect(new URL("/enroll-success?payment=success", request.url), 303);
  } catch (error) {
    return safeError(error);
  }
}

export async function POST(_request, { params }) {
  const { slug } = await params;
  const route = slug.join("/").toLowerCase();
  if (route === "submit-form.php") return submitLead(_request, false);
  if (route === "submit_form.php") return submitLead(_request, true);
  if (route === "courses/submit-book-demo.php") return submitBookDemo(_request);
  if (route === "testing-purpose/form-submission/submit-form.php") return submitTestingForm(_request);
  if (route === "testing-purpose/shocholar/check_eligibility.php" || route === "testing-purpose/shocholar/register_scholarship.php") {
    return handleScholarshipPost(_request, route.split("/").at(-1));
  }
  if (route === "enroll" || route === "enroll-order.php" || route === "enroll.php") return createRazorpayOrder(_request, { enrollment: true });
  if (route === "enroll-payment.php") return startEnrollmentPayment(_request);
  if (route === "enroll-success.php") return saveEnrollPayment(_request);
  if (route === "enroll-upay-response.php") return handlePayUCallback(_request);
  if (route === "panel/create-order" || route === "panel/create-order.php") return createRazorpayOrder(_request);
  if (route === "panel/payment-page.php") return startPanelRazorpayPayment(_request);
  if (route === "panel/paymentdone.php") return saveRazorpayPayment(_request);
  return new Response("Not found", { status: 404 });
}
