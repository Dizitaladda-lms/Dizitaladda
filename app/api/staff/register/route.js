import { timingSafeEqual } from "node:crypto";
import { getStaffDatabase, safeError } from "../../../../lib/db.js";
import { hashPassword } from "../../../../lib/passwords.js";

export const runtime = "nodejs";

function matches(left, right) {
  const a = Buffer.from(String(left || "")), b = Buffer.from(String(right || ""));
  return a.length > 0 && a.length === b.length && timingSafeEqual(a, b);
}

export async function POST(request) {
  if (!matches(request.headers.get("x-staff-setup-token"), process.env.STAFF_SETUP_TOKEN)) return Response.json({ error: "Admin setup is not authorized." }, { status: 403 });
  let body;
  try { body = await request.json(); } catch { return Response.json({ error: "Invalid request." }, { status: 400 }); }
  const username = String(body.username || "").trim().slice(0, 190), password = String(body.password || "");
  if (!username || password.length < 12 || password.length > 256) return Response.json({ error: "Enter a username and a password of at least 12 characters." }, { status: 400 });
  try {
    const db = getStaffDatabase();
    const [result] = await db.execute("INSERT INTO admins (username, password) VALUES (?, ?)", [username, await hashPassword(password)]);
    return Response.json({ success: true, id: result.insertId }, { status: 201 });
  } catch (error) { return safeError(error); }
}
