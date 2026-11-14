import { getLegacyContentDatabase, safeError } from "../../../../lib/db.js";
import { hashPassword, verifyPassword } from "../../../../lib/passwords.js";
import { makeSessionCookie } from "../../../../lib/session.js";

export const runtime = "nodejs";

export async function POST(request) {
  let body;
  try { body = await request.json(); } catch { return Response.json({ error: "Invalid request." }, { status: 400 }); }
  const username = typeof body.username === "string" ? body.username.trim().slice(0, 160) : "";
  const password = typeof body.password === "string" ? body.password : "";
  if (!username || !password || password.length > 256) return Response.json({ error: "Enter your username and password." }, { status: 400 });
  try {
    const db = getLegacyContentDatabase();
    const [rows] = await db.execute("SELECT username, password FROM admins WHERE username = ? LIMIT 1", [username]);
    if (!rows.length) return Response.json({ error: "Invalid username or password." }, { status: 401 });
    const verification = await verifyPassword(rows[0].password, password);
    if (!verification.valid) return Response.json({ error: "Invalid username or password." }, { status: 401 });
    if (verification.needsUpgrade) await db.execute("UPDATE admins SET password = ? WHERE username = ?", [await hashPassword(password), username]);
    return Response.json({ success: true }, { headers: { "set-cookie": makeSessionCookie({ role: "legacy-content-admin", email: username }) } });
  } catch (error) { return safeError(error); }
}
