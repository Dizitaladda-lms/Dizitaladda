import { getManagementDatabase, safeError } from "../../../../lib/db.js";
import { requireRole } from "../../../../lib/session.js";

export const runtime = "nodejs";

export async function GET(request) {
  const session = requireRole(request, ["mgmt-student"]);
  if (!session) return Response.json({ error: "Unauthorized." }, { status: 401 });
  try {
    const db = getManagementDatabase();
    const [rows] = await db.execute("SELECT id, username, role FROM users WHERE id = ? AND role <> 'admin' LIMIT 1", [session.userId]);
    return rows.length ? Response.json(rows[0]) : Response.json({ error: "Account not found." }, { status: 404 });
  } catch (error) { return safeError(error); }
}
