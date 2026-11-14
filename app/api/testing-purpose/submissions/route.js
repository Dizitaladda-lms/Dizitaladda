import { getTestFormDatabase, safeError } from "../../../../lib/db.js";
import { requireRole } from "../../../../lib/session.js";

export const runtime = "nodejs";
const clean = (value, max) => typeof value === "string" ? value.trim().replace(/[<>\u0000-\u001f]/g, "").slice(0, max) : "";

export async function POST(request) {
  let form;
  try { form = await request.formData(); } catch { return Response.json({ success: false, message: "Invalid form submission." }, { status: 400 }); }
  const name = clean(form.get("name"), 120), phone = clean(form.get("phone"), 32), email = clean(form.get("email"), 254).toLowerCase(), course = clean(form.get("course"), 160);
  if (!name || !phone || !course || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return Response.json({ success: false, message: "Enter all required fields and a valid email." }, { status: 400 });
  try {
    const db = getTestFormDatabase();
    const [existing] = await db.execute("SELECT id FROM form_submissions WHERE email = ? OR phone = ? LIMIT 1", [email, phone]);
    if (existing.length) return Response.json({ success: false, message: "This phone or email has already been submitted." }, { status: 409 });
    await db.execute("INSERT INTO form_submissions (name, phone, email, course, submission_time) VALUES (?, ?, ?, ?, ?)", [name, phone, email, course, new Date().toISOString().slice(0, 19).replace("T", " ")]);
    return Response.json({ success: true, message: "Your details were submitted." });
  } catch (error) { return safeError(error); }
}

export async function GET(request) {
  if (!requireRole(request, ["admin"])) return Response.json({ error: "Unauthorized." }, { status: 401 });
  try {
    const db = getTestFormDatabase();
    const [rows] = await db.execute("SELECT id, name, phone, email, course, submission_time FROM form_submissions ORDER BY submission_time DESC LIMIT 500");
    return Response.json(rows);
  } catch (error) { return safeError(error); }
}
