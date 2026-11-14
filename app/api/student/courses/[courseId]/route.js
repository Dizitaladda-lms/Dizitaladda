import { getDatabase, safeError } from "../../../../../lib/db.js";
import { requireRole } from "../../../../../lib/session.js";

export const runtime = "nodejs";

export async function GET(request, { params }) {
  const session = requireRole(request, ["student"]);
  if (!session) return Response.json({ error: "Unauthorized." }, { status: 401 });
  const { courseId } = await params;
  if (!/^\d+$/.test(courseId)) return Response.json({ error: "Course not found." }, { status: 404 });
  try {
    const db = getDatabase();
    const [enrolled] = await db.execute("SELECT 1 FROM courseorder WHERE course_id = ? AND stu_email = ? AND status = 'Success' LIMIT 1", [Number(courseId), session.email]);
    if (!enrolled.length) return Response.json({ error: "You are not enrolled in this course." }, { status: 403 });
    const [lessons] = await db.execute("SELECT lesson_id, lesson_name, lesson_desc, lesson_link FROM lesson WHERE course_id = ? ORDER BY lesson_id", [Number(courseId)]);
    return Response.json(lessons);
  } catch (error) { return safeError(error); }
}
