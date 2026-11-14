import { getLegacyContentDatabase, safeError } from "../../../../lib/db.js";
import { legacyContentFields } from "../../../../lib/legacy-content.js";
import { requireRole } from "../../../../lib/session.js";

export const runtime = "nodejs";
const reply = (data, status = 200) => Response.json(data, { status });
const clean = (value, max) => typeof value === "string" ? value.trim().slice(0, max) : "";

function readFields(data) {
  const values = {};
  for (const field of legacyContentFields) values[field] = clean(data?.[field], field.startsWith("p") ? 200000 : 4000);
  const requestedSlug = clean(data?.slug || data?.url || values.meta_title, 300).toLowerCase();
  values.url = clean(data?.url || requestedSlug, 300);
  values.slug = requestedSlug.normalize("NFKD").replace(/[^a-z0-9-]+/g, "-").replace(/^-|-$/g, "").slice(0, 300);
  return values;
}

export async function GET(request) {
  if (!requireRole(request, ["admin", "legacy-content-admin"])) return reply({ error: "Unauthorized." }, 401);
  try {
    const db = getLegacyContentDatabase();
    const [rows] = await db.execute("SELECT id, slug, meta_title, category, author, created_at FROM my_table ORDER BY created_at DESC LIMIT 500");
    return reply(rows);
  } catch (error) { return safeError(error); }
}

export async function POST(request) {
  if (!requireRole(request, ["admin", "legacy-content-admin"])) return reply({ error: "Unauthorized." }, 401);
  let data;
  try { data = await request.json(); } catch { return reply({ error: "Invalid request." }, 400); }
  const values = readFields(data);
  if (!values.slug || !values.meta_title || !values.p1) return reply({ error: "URL slug, meta title and the page heading are required." }, 400);
  try {
    const db = getLegacyContentDatabase();
    const columns = [...legacyContentFields, "slug"];
    const [result] = await db.execute(`INSERT INTO my_table (${columns.map((field) => `\`${field}\``).join(", ")}) VALUES (${columns.map(() => "?").join(", ")})`, columns.map((field) => values[field]));
    return reply({ success: true, id: result.insertId, slug: values.slug }, 201);
  } catch (error) { return safeError(error); }
}
