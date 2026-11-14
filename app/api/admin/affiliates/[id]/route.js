import { getAffiliateDatabase, safeError } from "../../../../../lib/db.js";
import { requireRole } from "../../../../../lib/session.js";

export const runtime = "nodejs";

export async function PATCH(request, { params }) {
  if (!requireRole(request, ["admin", "hr-admin"])) return Response.json({ error: "Unauthorized." }, { status: 401 });
  const { id } = await params;
  if (!/^\d+$/.test(id)) return Response.json({ error: "Not found." }, { status: 404 });
  let body;
  try { body = await request.json(); } catch { return Response.json({ error: "Invalid request." }, { status: 400 }); }
  const name = String(body.name || "").trim().slice(0, 200), email = String(body.email || "").trim().toLowerCase().slice(0, 254);
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return Response.json({ error: "Name and valid email are required." }, { status: 400 });
  try { const [result] = await (await getAffiliateDatabase()).execute("UPDATE affiliates SET name = ?, email = ? WHERE id = ?", [name, email, Number(id)]); if (!result.affectedRows) return Response.json({ error: "Affiliate not found." }, { status: 404 }); return Response.json({ success: true }); }
  catch (error) { return safeError(error); }
}

export async function DELETE(request, { params }) {
  if (!requireRole(request, ["admin", "hr-admin"])) return Response.json({ error: "Unauthorized." }, { status: 401 });
  const { id } = await params;
  if (!/^\d+$/.test(id)) return Response.json({ error: "Not found." }, { status: 404 });
  try { const [result] = await (await getAffiliateDatabase()).execute("DELETE FROM affiliates WHERE id = ?", [Number(id)]); if (!result.affectedRows) return Response.json({ error: "Affiliate not found." }, { status: 404 }); return Response.json({ success: true }); }
  catch (error) { return safeError(error); }
}
