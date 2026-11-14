import { getManagementDatabase, safeError } from "../../../../lib/db.js";
import { hashPassword, verifyPassword } from "../../../../lib/passwords.js";
import { makeSessionCookie } from "../../../../lib/session.js";

export const runtime = "nodejs";

export async function POST(request) {
  let body;
  try { body = await request.json(); } catch { return Response.json({ error: "Invalid request." }, { status: 400 }); }
  const username = String(body.username || "").trim().slice(0, 190);
  const password = String(body.password || "");
  if (!username || !password) return Response.json({ error: "Enter your username and password." }, { status: 400 });
  try {
    const db = getManagementDatabase();
    const [rows] = await db.execute("SELECT id, username, password, role FROM users WHERE username = ? LIMIT 1", [username]);
    if (!rows.length) return Response.json({ error: "Username or password is incorrect." }, { status: 401 });
    const user = rows[0];
    const verified = await verifyPassword(user.password, password);
    if (!verified.valid) return Response.json({ error: "Username or password is incorrect." }, { status: 401 });
    if (verified.needsUpgrade) await db.execute("UPDATE users SET password = ? WHERE id = ?", [await hashPassword(password), user.id]);
    const role = user.role === "admin" ? "mgmt-admin" : "mgmt-student";
    const destination = user.role === "admin" ? "/new-panel/student-management-system/admin/dashboard" : "/new-panel/student-management-system/student/dashboard";
    const cookie = makeSessionCookie({ role, userId: user.id, name: user.username });
    return new Response(JSON.stringify({ success: true, redirect: destination }), { headers: { "content-type": "application/json; charset=utf-8", "set-cookie": cookie } });
  } catch (error) { return safeError(error); }
}
