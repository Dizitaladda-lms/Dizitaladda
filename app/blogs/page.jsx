import { readFile } from "node:fs/promises";
import path from "node:path";
import PublicNavbar from "../../components/PublicNavbar.jsx";
import { getBlogDatabase } from "../../lib/db.js";
import { publicPageLoaders } from "../../public-pages/registry.js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const metadata = {
  title: "Digital Marketing, AI, Cyber Security & Tech Blogs | Dizital Adda",
  description: "Latest blogs on Digital Marketing, AI, Cyber Security and Data Analytics from Dizital Adda.",
  alternates: {
    canonical: "https://dizitaladda.com/blogs",
  },
  openGraph: {
    title: "Digital Marketing, AI, Cyber Security & Tech Blogs | Dizital Adda",
    description: "Latest blogs on Digital Marketing, AI, Cyber Security and Data Analytics from Dizital Adda.",
    url: "https://dizitaladda.com/blogs",
    siteName: "Dizital Adda",
  },
};

export default async function BlogsPage({ searchParams }) {
  const query = await searchParams;
  const search = String(query?.search || "").trim().slice(0, 120);
  const category = String(query?.category || "").trim().slice(0, 80);
  const page = Math.max(1, Number.parseInt(query?.page || "1", 10) || 1);
  let posts = [];
  let totalPages = 1;
  try {
    const db = getBlogDatabase();
    const filters = [];
    const values = [];
    if (search) { filters.push("(title LIKE ? OR meta_title LIKE ?)"); values.push(`%${search}%`, `%${search}%`); }
    if (category) { filters.push("category LIKE ?"); values.push(`%${category}%`); }
    const where = filters.length ? `WHERE ${filters.join(" AND ")}` : "";
    const [rows] = await db.execute(`SELECT id, title, meta_title, alt_tag, image, created_at, slug, category, author FROM posts ${where} ORDER BY created_at DESC LIMIT ? OFFSET ?`, [...values, 12, (page - 1) * 12]);
    const [counts] = await db.execute(`SELECT COUNT(*) AS total FROM posts ${where}`, values);
    posts = rows;
    totalPages = Math.max(1, Math.ceil(Number(counts[0]?.total || 0) / 12));
  } catch {
    try {
      const cached = JSON.parse(await readFile(path.join(process.cwd(), "public", "blogs", ".home_cache.json"), "utf8"));
      posts = cached.map((post, index) => ({ id: post.id || index, title: post.title, meta_title: post.description, image: "", slug: String(post.url || "").split("/").filter(Boolean).at(-1), category: "Dizital Adda", author: "Dizital Adda", created_at: post.date }));
    } catch {
      const loader = publicPageLoaders["blogs/index"];
      if (loader) { const { default: Snapshot } = await loader(); return <Snapshot />; }
    }
  }

  const pageHref = (nextPage) => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (category) params.set("category", category);
    params.set("page", String(nextPage));
    return `/blogs?${params.toString()}`;
  };
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Dizital Adda Blog",
    "url": "https://dizitaladda.com/blogs",
    "description": "Latest blogs on Digital Marketing, AI, Cyber Security and Data Analytics from Dizital Adda.",
    "publisher": {
      "@type": "Organization",
      "name": "Dizital Adda",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dizitaladda.com/assets/img/favicon-96x96.png"
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://dizitaladda.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blogs",
        "item": "https://dizitaladda.com/blogs"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PublicNavbar /><style>{"body{margin:0;color:#231333;font-family:Jost,Arial,sans-serif;background:#faf8fc}.blogs-head{padding:56px 22px;text-align:center;color:white;background:linear-gradient(120deg,#560090,#9900ff)}.blogs-head h1{font-size:clamp(30px,5vw,52px);margin:0 0 12px}.blogs-wrap{max-width:1200px;margin:auto;padding:42px 22px}.blog-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(265px,1fr));gap:24px}.blog-card{overflow:hidden;border-radius:16px;background:white;box-shadow:0 8px 28px #3d006615}.blog-card a{color:inherit;text-decoration:none}.blog-card img{width:100%;height:200px;object-fit:cover;background:#eee}.blog-copy{padding:18px}.blog-copy span{color:#7c27b4;font-size:13px;font-weight:700}.blog-copy h2{font-size:21px;line-height:1.3;margin:9px 0}.blog-copy p{color:#63566a;line-height:1.55}.blog-copy small{color:#82778a}.pager{display:flex;justify-content:space-between;margin-top:30px}.pager a{padding:10px 18px;border-radius:8px;background:#6f16a5;color:white;text-decoration:none}.empty{text-align:center;padding:50px;color:#66586e}"}</style><header className="blogs-head"><h1>{category || "Digital Marketing, AI & Technology Blogs"}</h1><p>Ideas, guides and updates from Dizital Adda</p></header><main className="blogs-wrap"><form method="get" style={{ display: "flex", gap: 8, maxWidth: 560, margin: "0 auto 30px" }}><input name="search" defaultValue={search} placeholder="Search articles" style={{ flex: 1, padding: 12, border: "1px solid #ddd", borderRadius: 8 }} /><button style={{ padding: "0 20px", border: 0, borderRadius: 8, background: "#6f16a5", color: "white" }}>Search</button></form>{posts.length ? <div className="blog-grid">{posts.map((post) => <article className="blog-card" key={post.id}><a href={`/blogs/${encodeURIComponent(post.slug || "")}`}>{post.image && <img src={post.image} alt={post.alt_tag || post.title} loading="lazy" />}<div className="blog-copy"><span>{post.category || "Dizital Adda"}</span><h2>{post.title}</h2><p>{post.meta_title || "Read the latest insights from Dizital Adda."}</p><small>{post.author || "Dizital Adda"} · {String(post.created_at || "")}</small></div></a></article>)}</div> : <p className="empty">No articles found.</p>}<nav className="pager">{page > 1 && <a href={pageHref(page - 1)}>Previous</a>}<span>Page {page} of {totalPages}</span>{page < totalPages && <a href={pageHref(page + 1)}>Next</a>}</nav></main></>);
}
