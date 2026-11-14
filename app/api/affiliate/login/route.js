import { getAffiliateDatabase, safeError } from "../../../../lib/db.js";
import { hashPassword, verifyPassword } from "../../../../lib/passwords.js";
import { makeSessionCookie } from "../../../../lib/session.js";

export const runtime = "nodejs";

export async function POST(request) {
  let body;
  try { body = await request.json(); } catch { return Response.json({ error: "Invalid request." }, { status: 400 }); }
  const email = String(body.email || "").trim().toLowerCase().slice(0, 254);
  const password = String(body.password || "");
  if (!email || !password) return Response.json({ error: "Enter your email and password." }, { status: 400 });
  try {
    const db = getAffiliateDatabase();
    const [rows] = await db.execute("SELECT id, name, email, password, referral_code FROM affiliates WHERE email = ? LIMIT 1", [email]);
    if (!rows.length) return Response.json({ error: "Email or password is incorrect." }, { status: 401 });
    const affiliate = rows[0];
    const verified = await verifyPassword(affiliate.password, password);
    if (!verified.valid) return Response.json({ error: "Email or password is incorrect." }, { status: 401 });
    if (verified.needsUpgrade) await db.execute("UPDATE affiliates SET password = ? WHERE id = ?", [await hashPassword(password), affiliate.id]);
    const cookie = makeSessionCookie({ role: "affiliate", userId: affiliate.id, email, name: affiliate.name });
    return new Response(JSON.stringify({ success: true, redirect: "/affiliate-program/affiliate-system/affiliate/dashboard" }), { headers: { "content-type": "application/json; charset=utf-8", "set-cookie": cookie } });
  } catch (error) { return safeError(error); }
}
