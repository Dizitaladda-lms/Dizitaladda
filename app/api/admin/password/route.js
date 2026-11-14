import bcrypt from "bcryptjs";
import { getDatabase, safeError } from "../../../../lib/db.js";
import { requireRole } from "../../../../lib/session.js";

export const runtime = "nodejs";

export async function POST(request) {
  const session = requireRole(request, ["admin"]);
  if (!session) return Response.json({ error: "Unauthorized." }, { status: 401 });
  let body;
  try { body = await request.json(); } catch { return Response.json({ error: "Invalid request." }, { status: 400 }); }
  const currentPassword = typeof body.currentPassword === "string" ? body.currentPassword : "";
  const nextPassword = typeof body.newPassword === "string" ? body.newPassword : "";
  if (!currentPassword || nextPassword.length < 10 || nextPassword.length > 256) return Response.json({ error: "Enter your current password and a new password of at least 10 characters." }, { status: 400 });
  try {
    const db = getDatabase();
    const [rows] = await db.execute("SELECT admin_pass FROM admin WHERE admin_email = ? LIMIT 1", [session.email]);
    if (!rows.length) return Response.json({ error: "Account not found." }, { status: 404 });
    const stored = String(rows[0].admin_pass);
    const valid = /^\$2[aby]\$/.test(stored) ? await bcrypt.compare(currentPassword, stored) : stored === currentPassword;
    if (!valid) return Response.json({ error: "Current password is incorrect." }, { status: 400 });
    await db.execute("UPDATE admin SET admin_pass = ? WHERE admin_email = ?", [await bcrypt.hash(nextPassword, 12), session.email]);
    return Response.json({ success: true });
  } catch (error) { return safeError(error); }
}
