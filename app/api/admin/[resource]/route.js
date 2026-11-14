import { getDatabase, safeError } from "../../../../lib/db.js";
import { requireRole } from "../../../../lib/session.js";

export const runtime = "nodejs";
const response = (data, status = 200) => new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json; charset=utf-8" } });
const resources = new Set(["courses", "students", "lessons", "feedback", "orders"]);
const bounded = (value, max = 5000) => typeof value === "string" ? value.trim().slice(0, max) : "";
const numeric = (value) => Number.isSafeInteger(Number(value)) && Number(value) > 0 ? Number(value) : null;

export async function GET(request, { params }) {
  if (!requireRole(request, ["admin"])) return response({ error: "Unauthorized." }, 401);
  const { resource } = await params;
  if (!resources.has(resource)) return response({ error: "Not found." }, 404);
  try {
    const db = getDatabase();
    const statements = {
      courses: "SELECT course_id, course_name, course_desc, course_author, course_img, course_duration, course_price, course_original_price FROM course ORDER BY course_id DESC",
      students: "SELECT stu_id, stu_name, stu_email, stu_occ, stu_img FROM student ORDER BY stu_id DESC",
      lessons: "SELECT lesson_id, lesson_name, lesson_desc, lesson_link, course_id, course_name FROM lesson ORDER BY lesson_id DESC",
      feedback: "SELECT f.f_id, f.f_content, f.stu_id, s.stu_name, s.stu_email FROM feedback f LEFT JOIN student s ON s.stu_id = f.stu_id ORDER BY f.f_id DESC",
      orders: "SELECT co_id, order_id, stu_email, course_id, status, respmsg, amount, order_date FROM courseorder ORDER BY co_id DESC",
    };
    const [rows] = await db.execute(statements[resource]);
    return response(rows);
  } catch (error) { return safeError(error); }
}

export async function POST(request, { params }) {
  if (!requireRole(request, ["admin"])) return response({ error: "Unauthorized." }, 401);
  const { resource } = await params;
  if (!resources.has(resource) || resource === "orders" || resource === "feedback") return response({ error: "Unsupported operation." }, 405);
  let data;
  try { data = await request.json(); } catch { return response({ error: "Invalid request." }, 400); }
  try {
    const db = getDatabase();
    let result;
    if (resource === "courses") {
      const name = bounded(data.course_name, 255);
      if (!name) return response({ error: "Course name is required." }, 400);
      [result] = await db.execute("INSERT INTO course (course_name, course_desc, course_author, course_img, course_duration, course_price, course_original_price) VALUES (?, ?, ?, ?, ?, ?, ?)", [name, bounded(data.course_desc), bounded(data.course_author, 200), bounded(data.course_img, 500), bounded(data.course_duration, 100), Number(data.course_price) || 0, Number(data.course_original_price) || 0]);
    } else if (resource === "students") {
      const name = bounded(data.stu_name, 200), email = bounded(data.stu_email, 254).toLowerCase(), password = bounded(data.stu_pass, 256);
      if (!name || !email || !password) return response({ error: "Name, email and initial password are required." }, 400);
      const hash = await (await import("bcryptjs")).default.hash(password, 12);
      [result] = await db.execute("INSERT INTO student (stu_name, stu_email, stu_pass, stu_occ) VALUES (?, ?, ?, ?)", [name, email, hash, bounded(data.stu_occ, 200)]);
    } else {
      const courseId = numeric(data.course_id);
      const name = bounded(data.lesson_name, 255);
      if (!courseId || !name) return response({ error: "A course and lesson name are required." }, 400);
      const [courses] = await db.execute("SELECT course_name FROM course WHERE course_id = ? LIMIT 1", [courseId]);
      if (!courses.length) return response({ error: "Course not found." }, 404);
      [result] = await db.execute("INSERT INTO lesson (lesson_name, lesson_desc, lesson_link, course_id, course_name) VALUES (?, ?, ?, ?, ?)", [name, bounded(data.lesson_desc), bounded(data.lesson_link, 1000), courseId, courses[0].course_name]);
    }
    return response({ success: true, id: result.insertId }, 201);
  } catch (error) { return safeError(error); }
}
