import bcrypt from "bcryptjs";
import { getDatabase, safeError } from "../../../../lib/db.js";
import { requireRole } from "../../../../lib/session.js";

export const runtime = "nodejs";
const response = (data, status = 200) => Response.json(data, { status });
const clean = (value, max = 1000) => typeof value === "string" ? value.trim().slice(0, max) : "";

export async function GET(request, { params }) {
  const session = requireRole(request, ["student"]);
  if (!session) return response({ error: "Unauthorized." }, 401);
  const { resource } = await params;
  try {
    const db = getDatabase();
    if (resource === "profile") {
      const [rows] = await db.execute("SELECT stu_id, stu_name, stu_email, stu_occ, stu_img FROM student WHERE stu_email = ? LIMIT 1", [session.email]);
      return rows.length ? response(rows[0]) : response({ error: "Account not found." }, 404);
    }
    if (resource === "courses") {
      const [rows] = await db.execute("SELECT co.order_id, co.status, co.amount, co.order_date, c.course_id, c.course_name, c.course_duration, c.course_desc, c.course_img, c.course_author FROM courseorder co JOIN course c ON c.course_id = co.course_id WHERE co.stu_email = ? AND co.status = 'Success' ORDER BY co.co_id DESC", [session.email]);
      return response(rows);
    }
    if (resource === "feedback") {
      const [rows] = await db.execute("SELECT f.f_id, f.f_content, f.stu_id FROM feedback f JOIN student s ON s.stu_id = f.stu_id WHERE s.stu_email = ? ORDER BY f.f_id DESC", [session.email]);
      return response(rows);
    }
    if (resource === "help") return response({ email: session.email, message: "Contact Dizital Adda support for assistance with your course." });
    return response({ error: "Not found." }, 404);
  } catch (error) { return safeError(error); }
}

export async function PATCH(request, { params }) {
  const session = requireRole(request, ["student"]);
  if (!session) return response({ error: "Unauthorized." }, 401);
  const { resource } = await params;
  let body;
  try { body = await request.json(); } catch { return response({ error: "Invalid request." }, 400); }
  try {
    const db = getDatabase();
    if (resource === "profile") {
      const name = clean(body.name, 200), occupation = clean(body.occupation, 200);
      if (!name) return response({ error: "Name is required." }, 400);
      await db.execute("UPDATE student SET stu_name = ?, stu_occ = ? WHERE stu_email = ?", [name, occupation, session.email]);
      return response({ success: true });
    }
    if (resource === "password") {
      const currentPassword = clean(body.currentPassword, 256), newPassword = clean(body.newPassword, 256);
      if (!currentPassword || newPassword.length < 10) return response({ error: "Enter your current password and a new password of at least 10 characters." }, 400);
      const [rows] = await db.execute("SELECT stu_pass FROM student WHERE stu_email = ? LIMIT 1", [session.email]);
      const stored = String(rows[0]?.stu_pass || "");
      const valid = /^\$2[aby]\$/.test(stored) ? await bcrypt.compare(currentPassword, stored) : stored === currentPassword;
      if (!valid) return response({ error: "Current password is incorrect." }, 400);
      await db.execute("UPDATE student SET stu_pass = ? WHERE stu_email = ?", [await bcrypt.hash(newPassword, 12), session.email]);
      return response({ success: true });
    }
    return response({ error: "Not found." }, 404);
  } catch (error) { return safeError(error); }
}

export async function POST(request, { params }) {
  const session = requireRole(request, ["student"]);
  if (!session) return response({ error: "Unauthorized." }, 401);
  const { resource } = await params;
  if (resource !== "feedback") return response({ error: "Not found." }, 404);
  let body;
  try { body = await request.json(); } catch { return response({ error: "Invalid request." }, 400); }
  const content = clean(body.content, 5000);
  if (!content) return response({ error: "Feedback cannot be empty." }, 400);
  try {
    const db = getDatabase();
    const [rows] = await db.execute("SELECT stu_id FROM student WHERE stu_email = ? LIMIT 1", [session.email]);
    if (!rows.length) return response({ error: "Account not found." }, 404);
    await db.execute("INSERT INTO feedback (f_content, stu_id) VALUES (?, ?)", [content, rows[0].stu_id]);
    return response({ success: true }, 201);
  } catch (error) { return safeError(error); }
}
