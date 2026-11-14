import { readFile } from "node:fs/promises";
import path from "node:path";
import { getBlogDatabase, safeError } from "../../../../lib/db.js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const escape = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);

export async function GET(request, { params }) {
  const { category } = await params;
  const url = new URL(request.url);
  const page = Math.max(1, Number.parseInt(url.searchParams.get("page") || "1", 10) || 1);
  const limit = 12;
  const label = category.replace(/-/g, " ");
  try {
    const db = getBlogDatabase();
    const [posts] = await db.execute("SELECT id, title, meta_title, alt_tag, image, created_at, slug, category, author FROM posts WHERE category LIKE ? ORDER BY created_at DESC LIMIT ? OFFSET ?", [`%${label}%`, limit, (page - 1) * limit]);
    const cards = posts.map((post) => `<article style="border-radius:16px;overflow:hidden;background:white;box-shadow:0 8px 28px #3d006615"><a style="color:inherit;text-decoration:none" href="/blogs/${encodeURIComponent(post.slug)}"><img style="width:100%;height:200px;object-fit:cover" src="${escape(post.image)}" alt="${escape(post.alt_tag || post.title)}"><div style="padding:18px"><h2>${escape(post.title)}</h2><p>${escape(post.meta_title || "Read the latest insights from Dizital Adda.")}</p><small>${escape(post.author || "Dizital Adda")}</small></div></a></article>`).join("");
    const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escape(label)} Blogs | Dizital Adda</title><link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&display=swap" rel="stylesheet"></head><body style="margin:0;background:#faf8fc;color:#231333;font-family:Jost,Arial,sans-serif"><header style="padding:55px 20px;text-align:center;color:white;background:linear-gradient(120deg,#560090,#9900ff)"><h1>${escape(label)} Blogs</h1><p>Guides and updates from Dizital Adda</p></header><main style="max-width:1200px;margin:auto;padding:40px 22px"><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(265px,1fr));gap:24px">${cards || "<p>No articles found.</p>"}</div><p style="margin-top:30px"><a href="/blogs">All blogs</a></p></main></body></html>`;
    return new Response(html, { headers: { "content-type": "text/html; charset=utf-8" } });
  } catch (error) {
    try {
      const snapshot = await readFile(path.join(process.cwd(), "legacy-export", "blogs", "category", `${category}.html`));
      return new Response(snapshot, { headers: { "content-type": "text/html; charset=utf-8", "x-legacy-snapshot": "true" } });
    } catch { return safeError(error); }
  }
}
