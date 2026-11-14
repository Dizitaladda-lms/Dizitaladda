import { getDatabase, safeError } from "../../../../lib/db.js";
import { requireRole } from "../../../../lib/session.js";

export const runtime = "nodejs";

export async function GET(request) {
  if (!requireRole(request, ["admin"])) return Response.json({ error: "Unauthorized." }, { status: 401 });
  try {
    const db = getDatabase();
    const [courses] = await db.execute("SELECT COUNT(*) AS total FROM course");
    const [students] = await db.execute("SELECT COUNT(*) AS total FROM student");
    const [orders] = await db.execute("SELECT COUNT(*) AS total, COALESCE(SUM(CASE WHEN status = 'Success' THEN amount ELSE 0 END),0) AS revenue FROM courseorder");
    const [lessons] = await db.execute("SELECT COUNT(*) AS total FROM lesson");
    return Response.json({ courses: courses[0].total, students: students[0].total, orders: orders[0].total, revenue: orders[0].revenue, lessons: lessons[0].total });
  } catch (error) { return safeError(error); }
}
