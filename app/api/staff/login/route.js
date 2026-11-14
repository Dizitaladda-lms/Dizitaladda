import { getStaffDatabase, safeError } from "../../../../lib/db.js";
import { hashPassword, verifyPassword } from "../../../../lib/passwords.js";
import { makeSessionCookie } from "../../../../lib/session.js";

export const runtime = "nodejs";

export async function POST(request) {
  let body;
  try { body = await request.json(); } catch { return Response.json({ error: "Invalid request." }, { status: 400 }); }
  const type = body.type === "admin" ? "admin" : "employee";
  const identifier = String(body.identifier || "").trim().slice(0, 254);
  const password = String(body.password || "");
  if (!identifier || !password || password.length > 256) return Response.json({ error: "Enter your login and password." }, { status: 400 });
  try {
    const db = getStaffDatabase();
    const [rows] = type === "admin"
      ? await db.execute("SELECT username AS login, password FROM admins WHERE username = ? LIMIT 1", [identifier])
      : await db.execute("SELECT id, employee_id AS login, name, password FROM employees WHERE employee_id = ? LIMIT 1", [identifier]);
    if (!rows.length) return Response.json({ error: "Login or password is incorrect." }, { status: 401 });
    const account = rows[0];
    const result = await verifyPassword(account.password, password);
    if (!result.valid) return Response.json({ error: "Login or password is incorrect." }, { status: 401 });
    const role = type === "admin" ? "hr-admin" : "employee";
    if (result.needsUpgrade) {
      const hash = await hashPassword(password);
      if (type === "admin") await db.execute("UPDATE admins SET password = ? WHERE username = ?", [hash, identifier]);
      else await db.execute("UPDATE employees SET password = ? WHERE employee_id = ?", [hash, identifier]);
    }
    const cookie = makeSessionCookie({ role, userId: account.id || identifier, email: identifier, name: account.name || "" });
    return new Response(JSON.stringify({ success: true, redirect: type === "admin" ? "/project-root/dashboard" : "/project-root/employee_dashboard" }), {
      headers: { "content-type": "application/json; charset=utf-8", "set-cookie": cookie },
    });
  } catch (error) { return safeError(error); }
}
