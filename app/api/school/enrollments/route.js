import { getSchoolDatabase, safeError } from "../../../../lib/db.js";
import { requireRole } from "../../../../lib/session.js";

export const runtime = "nodejs";

export async function POST(request) {
  const session = requireRole(request, ["school-student"]);
  if (!session) return Response.json({ error: "Unauthorized." }, { status: 401 });
  let body;
  try { body = await request.json(); } catch { return Response.json({ error: "Invalid request." }, { status: 400 }); }
  const courseId = Number(body.course_id);
  if (!Number.isSafeInteger(courseId) || courseId < 1) return Response.json({ error: "Choose a course." }, { status: 400 });
  try {
    const db = getSchoolDatabase();
    const [students] = await db.execute("SELECT stu_id FROM student WHERE stu_email = ? LIMIT 1", [session.email]);
    if (!students.length) return Response.json({ error: "Student profile not found." }, { status: 404 });
    const [courses] = await db.execute("SELECT course_id FROM courses WHERE course_id = ? LIMIT 1", [courseId]);
    if (!courses.length) return Response.json({ error: "Course not found." }, { status: 404 });
    await db.execute("INSERT IGNORE INTO enrollments (stu_id, course_id) VALUES (?, ?)", [students[0].stu_id, courseId]);
    return Response.json({ success: true });
  } catch (error) { return safeError(error); }
}
