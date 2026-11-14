import { getStaffDatabase, safeError } from "../../../../../lib/db.js";
import { requireRole } from "../../../../../lib/session.js";

export const runtime = "nodejs";

export async function PATCH(request, { params }) {
  const session = requireRole(request, ["hr-admin", "employee"]);
  if (!session) return Response.json({ error: "Unauthorized." }, { status: 401 });
  const { id } = await params;
  if (!/^\d+$/.test(id)) return Response.json({ error: "Not found." }, { status: 404 });
  if (session.role === "employee" && Number(id) !== Number(session.userId)) return Response.json({ error: "Forbidden." }, { status: 403 });
  let data;
  try { data = await request.json(); } catch { return Response.json({ error: "Invalid request." }, { status: 400 }); }
  const fields = session.role === "hr-admin" ? ["employee_id", "name", "designation", "description", "photo"] : ["name", "designation", "description", "photo"];
  const entries = fields.filter((key) => Object.hasOwn(data, key)).map((key) => [key, String(data[key] || "").slice(0, key === "description" ? 5000 : 500)]);
  if (!entries.length) return Response.json({ error: "No fields to update." }, { status: 400 });
  try {
    const db = getStaffDatabase();
    const [result] = await db.execute(`UPDATE employees SET ${entries.map(([key]) => `\`${key}\` = ?`).join(", ")} WHERE id = ?`, [...entries.map(([, value]) => value), Number(id)]);
    if (!result.affectedRows) return Response.json({ error: "Employee not found." }, { status: 404 });
    return Response.json({ success: true });
  } catch (error) { return safeError(error); }
}

export async function DELETE(request, { params }) {
  if (!requireRole(request, ["hr-admin"])) return Response.json({ error: "Unauthorized." }, { status: 401 });
  const { id } = await params;
  if (!/^\d+$/.test(id)) return Response.json({ error: "Not found." }, { status: 404 });
  try {
    const db = getStaffDatabase();
    const [result] = await db.execute("DELETE FROM employees WHERE id = ?", [Number(id)]);
    if (!result.affectedRows) return Response.json({ error: "Employee not found." }, { status: 404 });
    return Response.json({ success: true });
  } catch (error) { return safeError(error); }
}
