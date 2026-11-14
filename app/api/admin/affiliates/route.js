import { randomBytes } from "node:crypto";
import { getAffiliateDatabase, safeError } from "../../../../lib/db.js";
import { hashPassword } from "../../../../lib/passwords.js";
import { requireRole } from "../../../../lib/session.js";

export const runtime = "nodejs";

export async function GET(request) {
  if (!requireRole(request, ["admin", "hr-admin"])) return Response.json({ error: "Unauthorized." }, { status: 401 });
  try { const [rows] = await (await getAffiliateDatabase()).execute("SELECT id, name, email, referral_code, total_commission FROM affiliates ORDER BY id DESC"); return Response.json(rows); }
  catch (error) { return safeError(error); }
}

export async function POST(request) {
  if (!requireRole(request, ["admin", "hr-admin"])) return Response.json({ error: "Unauthorized." }, { status: 401 });
  let data;
  try { data = await request.json(); } catch { return Response.json({ error: "Invalid request." }, { status: 400 }); }
  const name = String(data.name || "").trim().slice(0, 200), email = String(data.email || "").trim().toLowerCase().slice(0, 254), password = String(data.password || "");
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || password.length < 10) return Response.json({ error: "Name, valid email and a password of at least 10 characters are required." }, { status: 400 });
  try {
    const db = getAffiliateDatabase();
    const [result] = await db.execute("INSERT INTO affiliates (name, email, password, referral_code, total_commission) VALUES (?, ?, ?, ?, 0)", [name, email, await hashPassword(password), randomBytes(9).toString("base64url")]);
    return Response.json({ success: true, id: result.insertId }, { status: 201 });
  } catch (error) { return safeError(error); }
}
