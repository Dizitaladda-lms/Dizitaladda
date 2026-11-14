import { getBlogDatabase, safeError } from "../../../lib/db.js";

export const runtime = "nodejs";

export async function GET(request) {
  const url = new URL(request.url);
  const page = Math.max(1, Math.min(10000, Number.parseInt(url.searchParams.get("page") || "1", 10) || 1));
  const limit = Math.max(1, Math.min(48, Number.parseInt(url.searchParams.get("limit") || "12", 10) || 12));
  const search = (url.searchParams.get("search") || "").trim().slice(0, 120);
  const category = (url.searchParams.get("category") || "").trim().slice(0, 80);
  try {
    const db = getBlogDatabase();
    const filters = [];
    const values = [];
    if (search) { filters.push("(title LIKE ? OR meta_title LIKE ?)"); values.push(`%${search}%`, `%${search}%`); }
    if (category) { filters.push("category LIKE ?"); values.push(`%${category}%`); }
    const where = filters.length ? `WHERE ${filters.join(" AND ")}` : "";
    const [rows] = await db.execute(`SELECT id, title, meta_title, alt_tag, image, created_at, slug, category, author FROM posts ${where} ORDER BY created_at DESC LIMIT ? OFFSET ?`, [...values, limit, (page - 1) * limit]);
    const [countRows] = await db.execute(`SELECT COUNT(*) AS total FROM posts ${where}`, values);
    return Response.json({ posts: rows, total: Number(countRows[0].total), page, limit });
  } catch (error) { return safeError(error); }
}
