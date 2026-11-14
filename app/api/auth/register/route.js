import bcrypt from "bcryptjs";
import { getDatabase, safeError } from "../../../../lib/db.js";
import { makeSessionCookie } from "../../../../lib/session.js";

export const runtime = "nodejs";

export async function POST(request) {
  let body;
  try { body = await request.json(); } catch { return Response.json({ error: "Invalid request." }, { status: 400 }); }
  const name = typeof body.name === "string" ? body.name.trim().slice(0, 200) : "";
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase().slice(0, 254) : "";
  const phone = typeof body.phone === "string" ? body.phone.replace(/\D/g, "").slice(-10) : "";
  const password = typeof body.password === "string" ? body.password : "";
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || password.length < 10 || password.length > 256) {
    return Response.json({ error: "Enter your name, a valid email and a password with at least 10 characters." }, { status: 400 });
  }
  try {
    const db = getDatabase();
    const [existing] = await db.execute("SELECT stu_id FROM student WHERE LOWER(stu_email) = ? LIMIT 1", [email]);
    if (existing.length) return Response.json({ error: "An account with this email already exists." }, { status: 409 });
    const hash = await bcrypt.hash(password, 12);
    const [result] = await db.execute("INSERT INTO student (stu_name, stu_email, stu_pass, stu_occ) VALUES (?, ?, ?, ?)", [name, email, hash, ""]);
    const cookie = makeSessionCookie({ role: "student", userId: result.insertId, email, name });
    return new Response(JSON.stringify({ success: true, redirect: "/panel/student" }), {
      status: 201,
      headers: { "content-type": "application/json; charset=utf-8", "set-cookie": cookie },
    });
  } catch (error) { return safeError(error); }
}
