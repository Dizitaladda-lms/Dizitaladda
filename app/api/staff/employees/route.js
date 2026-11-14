import { getStaffDatabase, safeError } from "../../../../lib/db.js";
import { requireRole } from "../../../../lib/session.js";
import { hashPassword } from "../../../../lib/passwords.js";

export const runtime = "nodejs";

export async function GET(request) {
  const session = requireRole(request, ["hr-admin", "employee"]);
  if (!session) return Response.json({ error: "Unauthorized." }, { status: 401 });
  try {
    const db = getStaffDatabase();
    if (session.role === "employee") {
      const [rows] = await db.execute("SELECT id, employee_id, name, designation, description, photo FROM employees WHERE employee_id = ? LIMIT 1", [session.email]);
      return rows.length ? Response.json(rows[0]) : Response.json({ error: "Employee not found." }, { status: 404 });
    }
    const [rows] = await db.execute("SELECT id, employee_id, name, designation, description, photo FROM employees ORDER BY id DESC");
    return Response.json(rows);
  } catch (error) { return safeError(error); }
}

export async function POST(request) {
  if (!requireRole(request, ["hr-admin"])) return Response.json({ error: "Unauthorized." }, { status: 401 });
  let data;
  try { data = await request.json(); } catch { return Response.json({ error: "Invalid request." }, { status: 400 }); }
  const employeeId = String(data.employee_id || "").trim().slice(0, 100);
  const name = String(data.name || "").trim().slice(0, 200);
  const password = String(data.password || "");
  if (!employeeId || !name || password.length < 10) return Response.json({ error: "Employee ID, name and a password of at least 10 characters are required." }, { status: 400 });
  try {
    const db = getStaffDatabase();
    const [result] = await db.execute("INSERT INTO employees (employee_id, name, designation, description, photo, password) VALUES (?, ?, ?, ?, ?, ?)", [employeeId, name, String(data.designation || "").slice(0, 200), String(data.description || "").slice(0, 5000), String(data.photo || "").slice(0, 500), await hashPassword(password)]);
    return Response.json({ success: true, id: result.insertId }, { status: 201 });
  } catch (error) { return safeError(error); }
}
