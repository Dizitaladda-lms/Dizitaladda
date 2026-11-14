import { readFile } from "node:fs/promises";
import path from "node:path";
import sanitizeHtml from "sanitize-html";
import { getBlogDatabase, safeError } from "../../../lib/db.js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const escape = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);

export async function GET(_request, { params }) {
  const { slug } = await params;
  if (!/^[a-z0-9-]+$/i.test(slug)) return new Response("Not found", { status: 404 });
  const staticFile = path.join(process.cwd(), "legacy-export", "blogs", `${slug}.html`);
  try {
    const markup = await readFile(staticFile, "utf8");
    return new Response(markup, { headers: { "content-type": "text/html; charset=utf-8" } });
  } catch {}
  try {
    const db = getBlogDatabase();
    const [rows] = await db.execute("SELECT * FROM posts WHERE slug = ? LIMIT 1", [slug]);
    if (!rows.length) return new Response("Not found", { status: 404 });
    const post = rows[0];
    const body = sanitizeHtml(post.content || post.description || post.body || "", {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img", "h1", "h2", "h3", "figure", "figcaption", "iframe"]),
      allowedAttributes: { ...sanitizeHtml.defaults.allowedAttributes, "*": ["class", "id"], img: ["src", "alt", "width", "height", "loading"], iframe: ["src", "width", "height", "title", "allowfullscreen"] },
    });
    const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escape(post.meta_title || post.title)} | Dizital Adda</title><meta name="description" content="${escape(post.meta_description || post.description || "Dizital Adda blog")}"><link rel="canonical" href="https://dizitaladda.com/blogs/${encodeURIComponent(slug)}"><link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&display=swap" rel="stylesheet"><style>body{margin:0;color:#27222b;background:#fff;font:17px/1.8 Jost,Arial,sans-serif}.article{max-width:850px;margin:50px auto;padding:0 22px}.article h1{font-size:clamp(32px,5vw,48px);line-height:1.2}.article img{max-width:100%;height:auto}.article a{color:#6d18a2}</style></head><body><main class="article"><p>${escape(post.category || "Dizital Adda")}</p><h1>${escape(post.title || post.meta_title)}</h1>${post.image ? `<img src="${escape(post.image)}" alt="${escape(post.alt_tag || post.title)}">` : ""}<article>${body || `<p>${escape(post.description || "")}</p>`}</article></main></body></html>`;
    return new Response(html, { headers: { "content-type": "text/html; charset=utf-8" } });
  } catch (error) { return safeError(error); }
}
