import { getLeadDatabase, safeError } from "../../../../lib/db.js";
import { requireRole } from "../../../../lib/session.js";

export const runtime = "nodejs";

export async function GET(request) {
  if (!requireRole(request, ["admin", "hr-admin"])) return Response.json({ error: "Unauthorized." }, { status: 401 });
  try {
    const [rows] = await (await getLeadDatabase()).execute("SELECT id, name, phone, email, course, submission_time FROM form_submissions ORDER BY submission_time DESC LIMIT 1000");
    return Response.json(rows);
  } catch (error) { return safeError(error); }
}
