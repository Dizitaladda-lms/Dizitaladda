import { getDatabase, safeError } from "../../../../lib/db.js";
import { hashPassword, verifyPassword } from "../../../../lib/passwords.js";
import { makeSessionCookie } from "../../../../lib/session.js";

export const runtime = "nodejs";

const reply = (body, status = 200, cookie) => new Response(JSON.stringify(body), {
  status,
  headers: {
    "content-type": "application/json; charset=utf-8",
    ...(cookie ? { "set-cookie": cookie } : {}),
  },
});

export async function POST(request) {
  let body;
  try { body = await request.json(); } catch { return reply({ error: "Invalid request." }, 400); }
  const type = body.type === "admin" ? "admin" : body.type === "student" ? "student" : "";
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase().slice(0, 254) : "";
  const password = typeof body.password === "string" ? body.password : "";
  if (!type || !email || !password || password.length > 256) return reply({ error: "Enter your email and password." }, 400);
  try {
    const db = getDatabase();
    const [rows] = type === "admin"
      ? await db.execute("SELECT admin_email AS email, admin_pass AS password FROM admin WHERE LOWER(admin_email) = ? LIMIT 1", [email])
      : await db.execute("SELECT stu_id AS id, stu_name AS name, stu_email AS email, stu_pass AS password FROM student WHERE LOWER(stu_email) = ? LIMIT 1", [email]);
    if (!rows.length) return reply({ error: "Email or password is incorrect." }, 401);
    const account = rows[0];
    const verification = await verifyPassword(account.password, password);
    if (!verification.valid) return reply({ error: "Email or password is incorrect." }, 401);

    if (verification.needsUpgrade) {
      const hash = await hashPassword(password);
      const table = type === "admin" ? "admin" : "student";
      const passColumn = type === "admin" ? "admin_pass" : "stu_pass";
      const emailColumn = type === "admin" ? "admin_email" : "stu_email";
      await db.execute(`UPDATE ${table} SET ${passColumn} = ? WHERE ${emailColumn} = ?`, [hash, email]);
    }

    const role = type === "admin" ? "admin" : "student";
    const cookie = makeSessionCookie({ role, userId: account.id || account.email, email: account.email, name: account.name || "" });
    return reply({ success: true, role, name: account.name || "", redirect: role === "admin" ? "/panel/admin" : "/panel/student" }, 200, cookie);
  } catch (error) {
    return safeError(error);
  }
}
