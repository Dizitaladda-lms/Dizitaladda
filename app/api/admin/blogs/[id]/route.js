import { getBlogDatabase, safeError } from "../../../../../lib/db.js";
import { requireRole } from "../../../../../lib/session.js";

export const runtime = "nodejs";
const fields = ["title", "meta_title", "meta_description", "alt_tag", "image", "slug", "category", "author", "description", "content"];

export async function PATCH(request, { params }) {
  if (!requireRole(request, ["admin"])) return Response.json({ error: "Unauthorized." }, { status: 401 });
  const { id } = await params;
  if (!/^\d+$/.test(id)) return Response.json({ error: "Not found." }, { status: 404 });
  let data;
  try { data = await request.json(); } catch { return Response.json({ error: "Invalid request." }, { status: 400 }); }
  const values = fields.filter((field) => Object.hasOwn(data, field)).map((field) => [field, String(data[field] ?? "")]);
  if (!values.length) return Response.json({ error: "No supported fields supplied." }, { status: 400 });
  if (Object.hasOwn(data, "slug")) data.slug = String(data.slug).toLowerCase().trim().replace(/[^a-z0-9-]+/g, "-").replace(/^-|-$/g, "");
  try {
    const db = getBlogDatabase();
    const [result] = await db.execute(`UPDATE posts SET ${values.map(([field]) => `\`${field}\` = ?`).join(", ")} WHERE id = ?`, [...values.map(([field, value]) => field === "slug" ? String(data.slug) : value), Number(id)]);
    if (!result.affectedRows) return Response.json({ error: "Post not found." }, { status: 404 });
    return Response.json({ success: true });
  } catch (error) { return safeError(error); }
}

export async function DELETE(request, { params }) {
  if (!requireRole(request, ["admin"])) return Response.json({ error: "Unauthorized." }, { status: 401 });
  const { id } = await params;
  if (!/^\d+$/.test(id)) return Response.json({ error: "Not found." }, { status: 404 });
  try {
    const db = getBlogDatabase();
    const [result] = await db.execute("DELETE FROM posts WHERE id = ?", [Number(id)]);
    if (!result.affectedRows) return Response.json({ error: "Post not found." }, { status: 404 });
    return Response.json({ success: true });
  } catch (error) { return safeError(error); }
}
