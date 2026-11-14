import { randomBytes } from "node:crypto";
import { getAffiliateDatabase, safeError } from "../../../../lib/db.js";
import { hashPassword } from "../../../../lib/passwords.js";
import { makeSessionCookie } from "../../../../lib/session.js";

export const runtime = "nodejs";

export async function POST(request) {
  let body;
  try { body = await request.json(); } catch { return Response.json({ error: "Invalid request." }, { status: 400 }); }
  const name = String(body.name || "").trim().slice(0, 200);
  const email = String(body.email || "").trim().toLowerCase().slice(0, 254);
  const password = String(body.password || "");
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || password.length < 10 || password.length > 256) return Response.json({ error: "Enter your name, email and a password of at least 10 characters." }, { status: 400 });
  try {
    const db = getAffiliateDatabase();
    const code = randomBytes(9).toString("base64url");
    const [result] = await db.execute("INSERT INTO affiliates (name, email, password, referral_code, total_commission) VALUES (?, ?, ?, ?, 0)", [name, email, await hashPassword(password), code]);
    const cookie = makeSessionCookie({ role: "affiliate", userId: result.insertId, email, name });
    return new Response(JSON.stringify({ success: true, referralCode: code, redirect: "/affiliate-program/affiliate-system/affiliate/dashboard" }), { status: 201, headers: { "content-type": "application/json; charset=utf-8", "set-cookie": cookie } });
  } catch (error) { return safeError(error); }
}
