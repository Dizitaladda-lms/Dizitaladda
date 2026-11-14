export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
const errorPage = (message, status) => new Response(`<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Secure Payment | DizitalAdda</title><body style="font:16px/1.6 Arial,sans-serif;max-width:560px;margin:12vh auto;padding:24px;color:#172033"><h1>Secure checkout unavailable</h1><p>${esc(message)}</p><a href="/">Return to website</a></body></html>`, { status, headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } });

export function GET(request) {
  return Response.redirect(new URL("/", request.url), 303);
}

export async function POST(request) {
  let form;
  try {
    const type = request.headers.get("content-type") || "";
    form = type.includes("application/json") ? await request.json() : Object.fromEntries(await request.formData());
  } catch { return errorPage("Please submit the enrollment form again.", 400); }
  const name = String(form.name || "").replace(/[<>\u0000-\u001f]/g, "").trim().slice(0, 120);
  const email = String(form.email || "").trim().toLowerCase().slice(0, 254);
  const phone = String(form.phone || "").replace(/\D/g, "").slice(-10);
  const course = String(form.course_name || form.course || "Selected Course").replace(/[<>\u0000-\u001f]/g, "").trim().slice(0, 200);
  const amount = Number(form.amount);
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !/^[6-9]\d{9}$/.test(phone) || !course || !Number.isFinite(amount) || amount < 1 || amount > 500000) {
    return errorPage("Enter your name, valid email, 10-digit mobile number, course and payment amount.", 400);
  }
  const keyId = process.env.RAZORPAY_KEY_ID;
  const secret = process.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !secret) return errorPage("Payment gateway is not configured.", 503);
  const amountText = amount.toFixed(2);
  try {
    const response = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: { authorization: `Basic ${Buffer.from(`${keyId}:${secret}`).toString("base64")}`, "content-type": "application/json" },
      body: JSON.stringify({ amount: Math.round(amount * 100), currency: "INR", receipt: `ENRL${Date.now().toString().slice(-10)}`, notes: { course_name: course, student_email: email } }),
      signal: AbortSignal.timeout(20000),
    });
    const order = await response.json();
    if (!response.ok || !order.id || Number(order.amount) !== Math.round(amount * 100)) return errorPage("Razorpay could not create the payment order. Please try again.", 502);
    const data = JSON.stringify({ keyId, orderId: order.id, amount: order.amount, amountText, name, email, phone, course }).replace(/</g, "\\u003c");
    const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Secure Payment | DizitalAdda</title><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet"><style>*{box-sizing:border-box}body{font-family:Inter,Arial,sans-serif;min-height:100vh;margin:0;background:linear-gradient(135deg,#0f0c29,#302b63,#24243e);display:grid;place-items:center;color:#e2e8f0;padding:20px}.box{width:min(100%,460px);text-align:center;padding:36px 24px}.logo{width:76px;height:76px;padding:10px;border-radius:18px;background:white;object-fit:contain;margin-bottom:20px}h1{font-size:1.35rem}p{color:#cbd5e1;line-height:1.6}.spinner{width:44px;height:44px;border:4px solid #ffffff30;border-top-color:#9333ea;border-radius:50%;animation:spin .8s linear infinite;margin:28px auto}@keyframes spin{to{transform:rotate(360deg)}}button{padding:12px 20px;border:0;border-radius:9px;background:#7c3aed;color:white;font-weight:700;cursor:pointer}</style></head><body><main class="box"><img class="logo" src="https://dizitaladda.com/assets/img/logo.webp" alt="DizitalAdda"><h1>Secure Checkout</h1><p>${esc(course)} · ₹${esc(amountText)}</p><div class="spinner"></div><p>Opening Razorpay checkout…</p><button id="retry" hidden>Open checkout</button></main><script src="https://checkout.razorpay.com/v1/checkout.js"></script><script>const d=${data};const options={key:d.keyId,amount:d.amount,currency:'INR',name:'DizitalAdda',description:d.course,image:'https://dizitaladda.com/assets/img/logo.webp',order_id:d.orderId,prefill:{name:d.name,email:d.email,contact:d.phone},notes:{course_name:d.course,student_email:d.email},theme:{color:'#7c3aed'},handler:async r=>{const body=new URLSearchParams({rzp_payment_id:r.razorpay_payment_id,rzp_order_id:r.razorpay_order_id,rzp_signature:r.razorpay_signature,name:d.name,email:d.email,phone:d.phone,course_name:d.course,amount:d.amountText});const response=await fetch('/enroll-success.php',{method:'POST',body});if(response.redirected)location.href=response.url;else document.body.innerHTML=await response.text()},modal:{ondismiss:()=>location.href='/'}};function open(){new Razorpay(options).open()}document.getElementById('retry').onclick=open;if(window.Razorpay)open();else document.getElementById('retry').hidden=false;</script></body></html>`;
    return new Response(html, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } });
  } catch { return errorPage("Could not connect to Razorpay. Please try again.", 502); }
}
