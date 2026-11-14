import { getManagementDatabase, safeError } from "../../../../lib/db.js";
import { requireRole } from "../../../../lib/session.js";

export const runtime = "nodejs";

export async function GET(request) {
  const session = requireRole(request, ["mgmt-admin"]);
  if (!session) return Response.json({ error: "Unauthorized." }, { status: 401 });
  try {
    const db = getManagementDatabase();
    const [students] = await db.execute("SELECT COUNT(*) AS total FROM students");
    const [courses] = await db.execute("SELECT COUNT(*) AS total FROM courses");
    const [enrollments] = await db.execute("SELECT COUNT(*) AS total FROM enrollments");
    return Response.json({ students: students[0].total, courses: courses[0].total, enrollments: enrollments[0].total });
  } catch (error) { return safeError(error); }
}
