import { getSchoolDatabase, safeError } from "../../../../lib/db.js";
import { hashPassword, verifyPassword } from "../../../../lib/passwords.js";
import { makeSessionCookie } from "../../../../lib/session.js";

export const runtime = "nodejs";

export async function POST(request) {
  let body;
  try { body = await request.json(); } catch { return Response.json({ error: "Invalid request." }, { status: 400 }); }
  const action = body.action === "register" ? "register" : "login";
  const email = String(body.email || "").trim().toLowerCase().slice(0, 254);
  const name = String(body.name || "").trim().slice(0, 200);
  const password = String(body.password || "");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !password || password.length > 256 || (action === "register" && (!name || password.length < 10))) {
    return Response.json({ error: "Enter a valid email and password. New passwords need at least 10 characters." }, { status: 400 });
  }
  try {
    const db = getSchoolDatabase();
    if (action === "register") {
      const [found] = await db.execute("SELECT user_email FROM users WHERE user_email = ? LIMIT 1", [email]);
      if (found.length) return Response.json({ error: "An account with this email already exists." }, { status: 409 });
      const connection = await db.getConnection();
      try {
        await connection.beginTransaction();
        const passHash = await hashPassword(password);
        await connection.execute("INSERT INTO users (user_email, user_pass) VALUES (?, ?)", [email, passHash]);
        await connection.execute("INSERT INTO student (stu_name, stu_email, stu_pass, stu_occ) VALUES (?, ?, ?, ?)", [name, email, passHash, ""]);
        await connection.commit();
      } catch (error) { await connection.rollback(); throw error; }
      finally { connection.release(); }
      const cookie = makeSessionCookie({ role: "school-student", userId: email, email, name });
      return new Response(JSON.stringify({ success: true, redirect: "/project-root-1/student/profile" }), { status: 201, headers: { "content-type": "application/json; charset=utf-8", "set-cookie": cookie } });
    }
    const [rows] = await db.execute("SELECT user_email, user_pass FROM users WHERE user_email = ? LIMIT 1", [email]);
    if (!rows.length) return Response.json({ error: "Email or password is incorrect." }, { status: 401 });
    const verified = await verifyPassword(rows[0].user_pass, password);
    if (!verified.valid) return Response.json({ error: "Email or password is incorrect." }, { status: 401 });
    if (verified.needsUpgrade) {
      const passHash = await hashPassword(password);
      await db.execute("UPDATE users SET user_pass = ? WHERE user_email = ?", [passHash, email]);
      await db.execute("UPDATE student SET stu_pass = ? WHERE stu_email = ?", [passHash, email]);
    }
    const cookie = makeSessionCookie({ role: "school-student", userId: email, email });
    return new Response(JSON.stringify({ success: true, redirect: "/project-root-1/student/profile" }), { headers: { "content-type": "application/json; charset=utf-8", "set-cookie": cookie } });
  } catch (error) { return safeError(error); }
}
