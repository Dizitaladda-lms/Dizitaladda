import sanitizeHtml from "sanitize-html";

const htmlOptions = {
  allowedTags: [...sanitizeHtml.defaults.allowedTags, "img", "iframe", "video", "source", "table", "thead", "tbody", "tr", "td", "th"],
  allowedAttributes: {
    a: ["href", "name", "target", "rel"],
    img: ["src", "alt", "width", "height", "loading"],
    iframe: ["src", "width", "height", "allow", "allowfullscreen", "loading", "title"],
    video: ["src", "controls", "width", "height", "poster"],
    source: ["src", "type"],
    "*": ["class", "id", "title", "dir"],
  },
  allowedSchemes: ["http", "https", "mailto", "tel"],
  allowedIframeHostnames: ["www.youtube.com", "youtube.com", "www.youtube-nocookie.com", "player.vimeo.com"],
};

const safeText = (value) => String(value ?? "").replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
const safeContent = (value) => sanitizeHtml(String(value ?? ""), htmlOptions);

export function renderLegacyContent(row, slug) {
  const title = safeText(row.meta_title || row.p1 || slug.replaceAll("-", " "));
  const description = safeText(row.meta_description || "");
  const categories = String(row.category || "").split(",").map((part) => part.trim()).filter(Boolean);
  const tags = categories.map((category) => `<span>${safeText(category)}</span>`).join(" ");
  const content = Array.from({ length: 71 }, (_, index) => row[`p${index + 2}`])
    .filter((part) => String(part ?? "").trim())
    .map((part) => `<section>${safeContent(part)}</section>`)
    .join("");
  let schema = "";
  try {
    const parsed = JSON.parse(row.Schema_Data || "null");
    if (parsed && typeof parsed === "object") schema = `<script type="application/ld+json">${JSON.stringify(parsed).replace(/</g, "\\u003c")}</script>`;
  } catch {}
  const canonical = `https://dizitaladda.com/${encodeURIComponent(slug)}`;
  const hero = `/assets/img/location/${encodeURIComponent(slug)}.webp`;
  const author = safeText(row.author || "Dizital Adda");
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><meta name="description" content="${description}"><meta name="keywords" content="${safeText(row.keywords || "")}"><link rel="canonical" href="${canonical}"><link rel="stylesheet" href="/assets/css/course.css">${schema}<style>.legacy-story{max-width:1120px;margin:0 auto;padding:32px 24px 72px;color:#25212b;font:17px/1.75 Arial,sans-serif}.legacy-hero{width:100%;max-height:420px;object-fit:cover;border-radius:14px}.legacy-story h1{text-align:center;color:#392568;font-size:clamp(30px,4vw,48px);line-height:1.2;margin:36px 0 14px}.legacy-tags,.legacy-byline{text-align:center;margin:10px 0 22px}.legacy-tags span{display:inline-block;background:#6d28d9;color:#fff;padding:3px 12px;margin:3px;border-radius:30px;font-size:13px}.legacy-story section{margin:20px 0}.legacy-story img{max-width:100%;height:auto}.legacy-story a{color:#56239a}.legacy-footer{padding:32px;text-align:center;background:#221c2e;color:#fff}</style></head><body><main class="legacy-story"><a href="/" aria-label="Dizital Adda home">Dizital Adda</a><img class="legacy-hero" src="${hero}" alt="${safeText(row.alt_tag || row.p1 || title)}"><h1>${safeContent(row.p1 || title)}</h1><div class="legacy-tags">${tags}</div><div class="legacy-byline">By <strong>${author}</strong>${row.created_at ? ` · ${safeText(row.created_at)}` : ""}</div>${content}</main><footer class="legacy-footer"><a href="/blogs">Dizital Adda Blogs</a> · <a href="/contact-us">Contact us</a></footer></body></html>`;
}

export const legacyContentFields = ["meta_title", "meta_description", "canonical_tag", "url", "keywords", "alt_tag", "Schema_Data", "category", "author", ...Array.from({ length: 72 }, (_, index) => `p${index + 1}`)];
