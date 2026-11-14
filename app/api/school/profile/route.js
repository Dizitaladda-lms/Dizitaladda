import { getSchoolDatabase, safeError } from "../../../../lib/db.js";
import { requireRole } from "../../../../lib/session.js";

export const runtime = "nodejs";

export async function GET(request) {
  const session = requireRole(request, ["school-student"]);
  if (!session) return Response.json({ error: "Unauthorized." }, { status: 401 });
  try {
    const db = getSchoolDatabase();
    const [students] = await db.execute("SELECT stu_id, stu_name, stu_email, stu_occ, stu_img FROM student WHERE stu_email = ? LIMIT 1", [session.email]);
    if (!students.length) return Response.json({ error: "Student profile not found." }, { status: 404 });
    const student = students[0];
    const [enrollments] = await db.execute("SELECT c.course_id, c.course_name, c.course_code FROM courses c JOIN enrollments e ON e.course_id = c.course_id WHERE e.stu_id = ? ORDER BY c.course_name", [student.stu_id]);
    const [available] = await db.execute("SELECT c.course_id, c.course_name, c.course_code FROM courses c WHERE NOT EXISTS (SELECT 1 FROM enrollments e WHERE e.course_id = c.course_id AND e.stu_id = ?) ORDER BY c.course_name", [student.stu_id]);
    const [assignments] = await db.execute("SELECT assignment_id, course_id, submitted_at FROM assignments WHERE stu_id = ? ORDER BY submitted_at DESC", [student.stu_id]);
    return Response.json({ student, enrollments, available, assignments });
  } catch (error) { return safeError(error); }
}

export async function PATCH(request) {
  const session = requireRole(request, ["school-student"]);
  if (!session) return Response.json({ error: "Unauthorized." }, { status: 401 });
  let body;
  try { body = await request.json(); } catch { return Response.json({ error: "Invalid request." }, { status: 400 }); }
  const name = String(body.name || "").trim().slice(0, 200);
  const occupation = String(body.occupation || "").trim().slice(0, 200);
  if (!name) return Response.json({ error: "Name is required." }, { status: 400 });
  try {
    const db = getSchoolDatabase();
    await db.execute("UPDATE student SET stu_name = ?, stu_occ = ? WHERE stu_email = ?", [name, occupation, session.email]);
    return Response.json({ success: true });
  } catch (error) { return safeError(error); }
}
