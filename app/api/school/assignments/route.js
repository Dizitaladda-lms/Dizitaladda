import { randomUUID } from "node:crypto";
import { mkdir, writeFile, unlink } from "node:fs/promises";
import path from "node:path";
import { getSchoolDatabase, safeError } from "../../../../lib/db.js";
import { requireRole } from "../../../../lib/session.js";

export const runtime = "nodejs";
const allowed = new Set([".pdf", ".doc", ".docx", ".ppt", ".pptx", ".xls", ".xlsx", ".txt", ".zip"]);

export async function POST(request) {
  const session = requireRole(request, ["school-student"]);
  if (!session) return Response.json({ error: "Unauthorized." }, { status: 401 });
  const form = await request.formData();
  const courseId = Number(form.get("course_id"));
  const file = form.get("file");
  if (!Number.isSafeInteger(courseId) || courseId < 1 || !file || typeof file.arrayBuffer !== "function") return Response.json({ error: "Choose a course and an assignment file." }, { status: 400 });
  const extension = path.extname(file.name || "").toLowerCase();
  if (!allowed.has(extension) || file.size < 1 || file.size > 20 * 1024 * 1024) return Response.json({ error: "Use a PDF, Office, text or ZIP file no larger than 20 MB." }, { status: 400 });
  const filename = `${randomUUID()}${extension}`;
  const uploadRoot = path.join(process.cwd(), "private-uploads", "assignments");
  const destination = path.join(uploadRoot, filename);
  try {
    const db = getSchoolDatabase();
    const [students] = await db.execute("SELECT stu_id FROM student WHERE stu_email = ? LIMIT 1", [session.email]);
    if (!students.length) return Response.json({ error: "Student profile not found." }, { status: 404 });
    const [enrolled] = await db.execute("SELECT 1 FROM enrollments WHERE stu_id = ? AND course_id = ? LIMIT 1", [students[0].stu_id, courseId]);
    if (!enrolled.length) return Response.json({ error: "Enroll in this course before submitting an assignment." }, { status: 403 });
    await mkdir(uploadRoot, { recursive: true });
    await writeFile(destination, Buffer.from(await file.arrayBuffer()), { flag: "wx" });
    try {
      const [result] = await db.execute("INSERT INTO assignments (stu_id, course_id, assignment_file) VALUES (?, ?, ?)", [students[0].stu_id, courseId, filename]);
      return Response.json({ success: true, id: result.insertId }, { status: 201 });
    } catch (error) { await unlink(destination).catch(() => {}); throw error; }
  } catch (error) { return safeError(error); }
}
