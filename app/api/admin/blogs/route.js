import { getBlogDatabase, safeError } from "../../../../lib/db.js";
import { requireRole } from "../../../../lib/session.js";

export const runtime = "nodejs";

export async function GET(request) {
  if (!requireRole(request, ["admin"])) return Response.json({ error: "Unauthorized." }, { status: 401 });
  try {
    const db = getBlogDatabase();
    const [rows] = await db.execute("SELECT id, title, meta_title, meta_description, alt_tag, image, created_at, slug, category, author, description, content FROM posts ORDER BY created_at DESC LIMIT 500");
    return Response.json(rows);
  } catch (error) { return safeError(error); }
}

export async function POST(request) {
  if (!requireRole(request, ["admin"])) return Response.json({ error: "Unauthorized." }, { status: 401 });
  let data;
  try { data = await request.json(); } catch { return Response.json({ error: "Invalid request." }, { status: 400 }); }
  const title = typeof data.title === "string" ? data.title.trim().slice(0, 300) : "";
  const slug = typeof data.slug === "string" ? data.slug.toLowerCase().trim().replace(/[^a-z0-9-]+/g, "-").replace(/^-|-$/g, "").slice(0, 300) : "";
  const category = typeof data.category === "string" ? data.category.trim().slice(0, 120) : "";
  if (!title || !slug || !category) return Response.json({ error: "Title, URL slug and category are required." }, { status: 400 });
  try {
    const db = getBlogDatabase();
    const [result] = await db.execute("INSERT INTO posts (title, meta_title, meta_description, alt_tag, image, slug, category, author, description, content) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [title, String(data.meta_title || title).slice(0, 300), String(data.meta_description || "").slice(0, 500), String(data.alt_tag || "").slice(0, 300), String(data.image || "").slice(0, 1000), slug, category, String(data.author || "Dizital Adda").slice(0, 200), String(data.description || "").slice(0, 10000), String(data.content || "").slice(0, 1000000)]);
    return Response.json({ success: true, id: result.insertId }, { status: 201 });
  } catch (error) { return safeError(error); }
}
