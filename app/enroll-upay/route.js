import { readFile } from "node:fs/promises";
import path from "node:path";
import { createHash } from "node:crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);

export async function GET() {
  try {
    const page = await readFile(path.join(process.cwd(), "legacy-export", "enroll-upay.html"), "utf8");
    return new Response(page, { headers: { "content-type": "text/html; charset=utf-8" } });
  } catch {
    return new Response("Checkout page is being prepared.", { status: 503 });
  }
}

export async function POST(request) {
  const form = await request.formData();
  const name = String(form.get("name") || "").trim().replace(/[<>\u0000-\u001f]/g, "").slice(0, 120);
  const email = String(form.get("email") || "").trim().toLowerCase().slice(0, 254);
  const phone = String(form.get("phone") || "").replace(/\D/g, "").slice(-10);
  const course = String(form.get("course_name") || form.get("course") || "").trim().replace(/[<>\u0000-\u001f]/g, "").slice(0, 200);
  const amount = Number(form.get("amount"));
  const key = process.env.PAYU_KEY_ID;
  const salt = process.env.PAYU_KEY_SALT;
  if (!key || !salt) return new Response("PayU checkout is not configured.", { status: 503 });
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !/^[6-9]\d{9}$/.test(phone) || !course || !Number.isFinite(amount) || amount < 1 || amount > 500000) {
    return new Response("Please check your details and try again.", { status: 400 });
  }
  const txnid = `PAYU${Date.now()}${Math.floor(Math.random() * 1000).toString().padStart(3, "0")}`;
  const amountText = amount.toFixed(2);
  const productinfo = course;
  const hashString = `${key}|${txnid}|${amountText}|${productinfo}|${name}|${email}|||||||||||${salt}`;
  const hash = createHash("sha512").update(hashString).digest("hex");
  const origin = new URL(request.url).origin;
  const gateway = process.env.PAYU_GATEWAY_URL || (process.env.PAYU_ENV === "live" ? "https://secure.payu.in/_payment" : "https://test.payu.in/_payment");
  const values = {
    key, txnid, amount: amountText, productinfo, firstname: name, email, phone,
    surl: `${origin}/api/payments/payu/callback`, furl: `${origin}/api/payments/payu/callback`,
    service_provider: "payu_paisa", hash,
  };
  const fields = Object.entries(values).map(([field, value]) => `<input type="hidden" name="${esc(field)}" value="${esc(value)}">`).join("");
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Opening PayU checkout | Dizital Adda</title><style>body{font:16px/1.6 Arial,sans-serif;color:#263244;background:#f5f7fb;display:grid;place-items:center;min-height:100vh;margin:0}.card{background:#fff;padding:36px;border-radius:16px;box-shadow:0 8px 30px #15233a18;text-align:center;max-width:520px}.spinner{width:34px;height:34px;border:4px solid #ddd;border-top-color:#2458a6;border-radius:50%;margin:20px auto;animation:s 1s linear infinite}@keyframes s{to{transform:rotate(360deg)}}button{background:#2458a6;color:#fff;border:0;padding:12px 22px;border-radius:8px;cursor:pointer}</style></head><body><main class="card"><h1>Secure PayU Checkout</h1><p>Your secure payment window is opening.</p><div class="spinner"></div><form id="payu" method="post" action="${esc(gateway)}">${fields}<button type="submit">Continue to PayU</button></form></main><script>document.getElementById('payu').submit()</script></body></html>`;
  return new Response(html, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } });
}
