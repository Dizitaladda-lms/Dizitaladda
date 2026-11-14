import { readFile } from "node:fs/promises";
import path from "node:path";
import { getBlogDatabase } from "../../lib/db.js";
import { safeError } from "../../lib/db.js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const escape = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);

export async function GET(request) {
  const url = new URL(request.url);
  const search = (url.searchParams.get("search") || "").trim().slice(0, 120);
  const category = (url.searchParams.get("category") || "").trim().slice(0, 80);
  const page = Math.max(1, Number.parseInt(url.searchParams.get("page") || "1", 10) || 1);
  const limit = 12;
  try {
    const db = getBlogDatabase();
    const filters = [], values = [];
    if (search) { filters.push("(title LIKE ? OR meta_title LIKE ?)"); values.push(`%${search}%`, `%${search}%`); }
    if (category) { filters.push("category LIKE ?"); values.push(`%${category}%`); }
    const where = filters.length ? `WHERE ${filters.join(" AND ")}` : "";
    const [posts] = await db.execute(`SELECT id, title, meta_title, alt_tag, image, created_at, slug, category, author FROM posts ${where} ORDER BY created_at DESC LIMIT ? OFFSET ?`, [...values, limit, (page - 1) * limit]);
    const [counts] = await db.execute(`SELECT COUNT(*) AS total FROM posts ${where}`, values);
    const cards = posts.map((post) => `<article class="blog-card"><a href="/blogs/${encodeURIComponent(post.slug)}"><img src="${escape(post.image)}" alt="${escape(post.alt_tag || post.title)}" loading="lazy"><div class="blog-copy"><span>${escape(post.category || "Dizital Adda")}</span><h2>${escape(post.title)}</h2><p>${escape(post.meta_title || "Read the latest insights from Dizital Adda.")}</p><small>${escape(post.author || "Dizital Adda")} · ${escape(post.created_at || "")}</small></div></a></article>`).join("");
    const totalPages = Math.ceil(Number(counts[0].total) / limit);
    const prev = page > 1 ? `<a href="?page=${page - 1}${category ? `&category=${encodeURIComponent(category)}` : ""}">Previous</a>` : "";
    const next = page < totalPages ? `<a href="?page=${page + 1}${category ? `&category=${encodeURIComponent(category)}` : ""}">Next</a>` : "";
    const title = category ? `${category} Blogs | Dizital Adda` : "Digital Marketing, AI, Cyber Security & Tech Blogs | Dizital Adda";
    const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escape(title)}</title><meta name="description" content="Latest blogs on Digital Marketing, AI, Cyber Security and Data Analytics from Dizital Adda."><link rel="canonical" href="https://dizitaladda.com/blogs/"><link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700;800&display=swap" rel="stylesheet"><style>*{box-sizing:border-box}body{margin:0;color:#231333;font-family:Jost,Arial,sans-serif;background:#faf8fc}.blogs-head{padding:56px 22px;text-align:center;color:white;background:linear-gradient(120deg,#560090,#9900ff)}.blogs-head h1{font-size:clamp(30px,5vw,52px);margin:0 0 12px}.blogs-head p{margin:0;font-size:17px}.blogs-wrap{max-width:1200px;margin:auto;padding:42px 22px}.blog-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(265px,1fr));gap:24px}.blog-card{overflow:hidden;border-radius:16px;background:white;box-shadow:0 8px 28px #3d006615}.blog-card a{color:inherit;text-decoration:none}.blog-card img{width:100%;height:200px;object-fit:cover;background:#eee}.blog-copy{padding:18px}.blog-copy span{color:#7c27b4;font-size:13px;font-weight:700}.blog-copy h2{font-size:21px;line-height:1.3;margin:9px 0}.blog-copy p{color:#63566a;line-height:1.55}.blog-copy small{color:#82778a}.pager{display:flex;justify-content:space-between;margin-top:30px}.pager a{padding:10px 18px;border-radius:8px;background:#6f16a5;color:white;text-decoration:none}.empty{text-align:center;padding:50px;color:#66586e}</style></head><body><header class="blogs-head"><h1>${escape(category || "Digital Marketing, AI & Technology Blogs")}</h1><p>Ideas, guides and updates from Dizital Adda</p></header><main class="blogs-wrap"><form method="get" style="display:flex;gap:8px;max-width:560px;margin:0 auto 30px"><input name="search" value="${escape(search)}" placeholder="Search articles" style="flex:1;padding:12px;border:1px solid #ddd;border-radius:8px"><button style="padding:0 20px;border:0;border-radius:8px;background:#6f16a5;color:white">Search</button></form>${cards ? `<div class="blog-grid">${cards}</div>` : `<p class="empty">No articles found.</p>`}<nav class="pager">${prev}<span>Page ${page} of ${Math.max(totalPages, 1)}</span>${next}</nav></main></body></html>`;
    return new Response(html, { headers: { "content-type": "text/html; charset=utf-8" } });
  } catch (error) {
    try {
      const snapshot = await readFile(path.join(process.cwd(), "legacy-export", "blogs", "index.html"));
      return new Response(snapshot, { headers: { "content-type": "text/html; charset=utf-8", "x-legacy-snapshot": "true" } });
    } catch {}
    try {
      const cached = JSON.parse(await readFile(path.join(process.cwd(), "public", "blogs", ".home_cache.json"), "utf8"));
      const cards = cached.map((post) => `<article class="blog-card"><a href="${escape(post.url)}"><div class="blog-copy"><h2>${escape(post.title)}</h2><p>${escape(post.description)}</p><small>${escape(post.date)}</small></div></a></article>`).join("");
      const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Digital Marketing, AI, Cyber Security &amp; Tech Blogs | Dizital Adda</title><style>*{box-sizing:border-box}body{margin:0;color:#231333;font-family:Arial,sans-serif;background:#faf8fc}.blogs-head{padding:56px 22px;text-align:center;color:white;background:linear-gradient(120deg,#560090,#9900ff)}.blogs-head h1{font-size:clamp(30px,5vw,52px);margin:0 0 12px}.blogs-wrap{max-width:1200px;margin:auto;padding:42px 22px}.blog-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(265px,1fr));gap:24px}.blog-card{overflow:hidden;border-radius:16px;background:white;box-shadow:0 8px 28px #3d006615}.blog-card a{color:inherit;text-decoration:none}.blog-copy{padding:18px}.blog-copy h2{font-size:21px;line-height:1.3;margin:9px 0}.blog-copy p{color:#63566a;line-height:1.55}.blog-copy small{color:#82778a}</style></head><body><header class="blogs-head"><h1>Digital Marketing, AI &amp; Technology Blogs</h1><p>Ideas, guides and updates from Dizital Adda</p></header><main class="blogs-wrap"><div class="blog-grid">${cards}</div></main></body></html>`;
      return new Response(html, { headers: { "content-type": "text/html; charset=utf-8", "x-legacy-cache": "true" } });
    } catch { return safeError(error); }
  }
}
