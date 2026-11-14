import { getLegacyContentDatabase, safeError } from "../../../../../lib/db.js";
import { legacyContentFields } from "../../../../../lib/legacy-content.js";
import { requireRole } from "../../../../../lib/session.js";

export const runtime = "nodejs";
const reply = (data, status = 200) => Response.json(data, { status });
const clean = (value, max) => typeof value === "string" ? value.trim().slice(0, max) : "";
const validId = (value) => /^\d{1,12}$/.test(value);

export async function GET(request, { params }) {
  if (!requireRole(request, ["admin", "legacy-content-admin"])) return reply({ error: "Unauthorized." }, 401);
  const { id } = await params;
  if (!validId(id)) return reply({ error: "Not found." }, 404);
  try {
    const db = getLegacyContentDatabase();
    const [rows] = await db.execute("SELECT * FROM my_table WHERE id = ? LIMIT 1", [id]);
    return rows.length ? reply(rows[0]) : reply({ error: "Not found." }, 404);
  } catch (error) { return safeError(error); }
}

export async function PATCH(request, { params }) {
  if (!requireRole(request, ["admin", "legacy-content-admin"])) return reply({ error: "Unauthorized." }, 401);
  const { id } = await params;
  if (!validId(id)) return reply({ error: "Not found." }, 404);
  let data;
  try { data = await request.json(); } catch { return reply({ error: "Invalid request." }, 400); }
  const values = {};
  for (const field of legacyContentFields) values[field] = clean(data?.[field], field.startsWith("p") ? 200000 : 4000);
  const rawSlug = clean(data?.slug || data?.url || "", 300).toLowerCase();
  values.url = clean(data?.url || rawSlug, 300);
  values.slug = rawSlug.normalize("NFKD").replace(/[^a-z0-9-]+/g, "-").replace(/^-|-$/g, "").slice(0, 300);
  if (!values.slug || !values.meta_title || !values.p1) return reply({ error: "URL slug, meta title and the page heading are required." }, 400);
  try {
    const db = getLegacyContentDatabase();
    const [result] = await db.execute(`UPDATE my_table SET ${[...legacyContentFields, "slug"].map((field) => `\`${field}\` = ?`).join(", ")} WHERE id = ?`, [...legacyContentFields.map((field) => values[field]), values.slug, id]);
    return result.affectedRows ? reply({ success: true }) : reply({ error: "Not found." }, 404);
  } catch (error) { return safeError(error); }
}

export async function DELETE(request, { params }) {
  if (!requireRole(request, ["admin", "legacy-content-admin"])) return reply({ error: "Unauthorized." }, 401);
  const { id } = await params;
  if (!validId(id)) return reply({ error: "Not found." }, 404);
  try {
    const db = getLegacyContentDatabase();
    const [result] = await db.execute("DELETE FROM my_table WHERE id = ?", [id]);
    return result.affectedRows ? reply({ success: true }) : reply({ error: "Not found." }, 404);
  } catch (error) { return safeError(error); }
}
