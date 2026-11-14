import { createHash, timingSafeEqual } from "node:crypto";

export const runtime = "nodejs";

const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);

function validHash(expectedHex, receivedHex) {
  if (!/^[a-f0-9]{128}$/i.test(receivedHex)) return false;
  const expected = Buffer.from(expectedHex, "hex"), received = Buffer.from(receivedHex, "hex");
  return expected.length === received.length && timingSafeEqual(expected, received);
}

export async function POST(request) {
  const form = await request.formData();
  const get = (key, max = 300) => String(form.get(key) || "").trim().slice(0, max);
  const salt = process.env.PAYU_KEY_SALT || "";
  const key = process.env.PAYU_KEY_ID || "";
  const postedKey = get("key", 100);
  const status = get("status", 32).toLowerCase();
  const txnid = get("txnid", 100);
  const amount = get("amount", 24);
  const productinfo = get("productinfo", 200);
  const firstname = get("firstname", 120);
  const email = get("email", 254).toLowerCase();
  const paymentId = get("mihpayid", 100);
  const receivedHash = get("hash", 128).toLowerCase();
  const additionalCharges = get("additionalCharges", 24);
  let verified = false;
  if (key && salt && postedKey === key && txnid && paymentId && Number.isFinite(Number(amount))) {
    const sequence = additionalCharges
      ? `${additionalCharges}|${salt}|${status}|||||||||||${email}|${firstname}|${productinfo}|${amount}|${txnid}|${key}`
      : `${salt}|${status}|||||||||||${email}|${firstname}|${productinfo}|${amount}|${txnid}|${key}`;
    verified = validHash(createHash("sha512").update(sequence).digest("hex"), receivedHash);
  }
  const success = verified && status === "success";
  if (success && process.env.GOOGLE_SHEETS_WEBHOOK) {
    const body = JSON.stringify({ name: firstname, email, phone: get("phone", 30), course: productinfo, mode: "PayU Payment", message: `Gateway: PayU | Status: Success | Amount: Rs ${amount} | Payment ID: ${paymentId} | Order ID: ${txnid}` });
    try { await fetch(process.env.GOOGLE_SHEETS_WEBHOOK, { method: "POST", headers: { "content-type": "text/plain;charset=utf-8" }, body, signal: AbortSignal.timeout(12000) }); } catch { /* Sheet sync does not change the verified gateway result. */ }
  }
  const title = success ? "Payment successful" : "Payment could not be confirmed";
  const detail = success ? "Your PayU transaction was successful. Our team will contact you with the next steps." : verified ? "The PayU transaction was not successful. No payment confirmation was recorded." : "The payment response could not be verified. Please contact support before retrying.";
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title} | Dizital Adda</title><style>body{font:16px/1.65 Arial,sans-serif;color:#253046;background:#f4f6fa;margin:0;min-height:100vh;display:grid;place-items:center}.card{max-width:600px;margin:20px;padding:36px;background:#fff;border-radius:16px;box-shadow:0 8px 28px #14213b18}h1{color:${success ? "#168147" : "#ae453c"}}a{display:inline-block;margin:10px 10px 0 0;color:#2158a8}</style></head><body><main class="card"><h1>${title}</h1><p>${esc(detail)}</p>${success ? `<p>Course: ${esc(productinfo)} · Amount: ₹${esc(amount)}</p><p>Transaction ID: ${esc(paymentId)}</p>` : ""}<a href="/">Return to website</a><a href="/enroll-upay">Try again</a></main></body></html>`;
  return new Response(html, { status: success || verified ? 200 : 400, headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } });
}
