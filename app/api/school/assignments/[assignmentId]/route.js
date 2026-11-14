import { readFile } from "node:fs/promises";
import path from "node:path";
import { getSchoolDatabase, safeError } from "../../../../../lib/db.js";
import { requireRole } from "../../../../../lib/session.js";

export const runtime = "nodejs";

export async function GET(request, { params }) {
  const session = requireRole(request, ["school-student"]);
  if (!session) return Response.json({ error: "Unauthorized." }, { status: 401 });
  const { assignmentId } = await params;
  if (!/^\d+$/.test(assignmentId)) return Response.json({ error: "Not found." }, { status: 404 });
  try {
    const db = getSchoolDatabase();
    const [rows] = await db.execute("SELECT a.assignment_file FROM assignments a JOIN student s ON s.stu_id = a.stu_id WHERE a.assignment_id = ? AND s.stu_email = ? LIMIT 1", [Number(assignmentId), session.email]);
    if (!rows.length || !/^[a-f0-9-]+\.(pdf|docx?|pptx?|xlsx?|txt|zip)$/i.test(rows[0].assignment_file)) return Response.json({ error: "File not found." }, { status: 404 });
    const file = path.join(process.cwd(), "private-uploads", "assignments", path.basename(rows[0].assignment_file));
    const content = await readFile(file);
    return new Response(content, { headers: { "content-type": "application/octet-stream", "content-disposition": `attachment; filename=\"assignment-${assignmentId}${path.extname(file)}\"` } });
  } catch (error) { return safeError(error); }
}
