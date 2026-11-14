import { getDatabase, safeError } from "../../../../../lib/db.js";
import { requireRole } from "../../../../../lib/session.js";

export const runtime = "nodejs";
const response = (data, status = 200) => new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json; charset=utf-8" } });
const map = {
  courses: { table: "course", id: "course_id" },
  students: { table: "student", id: "stu_id" },
  lessons: { table: "lesson", id: "lesson_id" },
  feedback: { table: "feedback", id: "f_id" },
  orders: { table: "courseorder", id: "co_id" },
};

export async function PATCH(request, { params }) {
  if (!requireRole(request, ["admin"])) return response({ error: "Unauthorized." }, 401);
  const { resource, id } = await params;
  const config = map[resource];
  if (!config || !/^\d+$/.test(id)) return response({ error: "Not found." }, 404);
  let data;
  try { data = await request.json(); } catch { return response({ error: "Invalid request." }, 400); }
  const fields = {
    courses: ["course_name", "course_desc", "course_author", "course_img", "course_duration", "course_price", "course_original_price"],
    students: ["stu_name", "stu_occ", "stu_img"],
    lessons: ["lesson_name", "lesson_desc", "lesson_link", "course_id", "course_name"],
    feedback: ["f_content"],
    orders: ["status", "respmsg"],
  }[resource];
  const entries = fields.filter((field) => Object.hasOwn(data, field)).map((field) => [field, data[field]]);
  if (!entries.length) return response({ error: "No supported fields supplied." }, 400);
  const assignments = entries.map(([field]) => `\`${field}\` = ?`).join(", ");
  try {
    const db = getDatabase();
    const [result] = await db.execute(`UPDATE \`${config.table}\` SET ${assignments} WHERE \`${config.id}\` = ?`, [...entries.map(([, value]) => value), Number(id)]);
    if (!result.affectedRows) return response({ error: "Record not found." }, 404);
    return response({ success: true });
  } catch (error) { return safeError(error); }
}

export async function DELETE(request, { params }) {
  if (!requireRole(request, ["admin"])) return response({ error: "Unauthorized." }, 401);
  const { resource, id } = await params;
  const config = map[resource];
  if (!config || !/^\d+$/.test(id)) return response({ error: "Not found." }, 404);
  try {
    const db = getDatabase();
    const [result] = await db.execute(`DELETE FROM \`${config.table}\` WHERE \`${config.id}\` = ?`, [Number(id)]);
    if (!result.affectedRows) return response({ error: "Record not found." }, 404);
    return response({ success: true });
  } catch (error) { return safeError(error); }
}
