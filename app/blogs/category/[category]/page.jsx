import { notFound } from "next/navigation";
import PublicNavbar from "../../../../components/PublicNavbar.jsx";
import { getBlogDatabase } from "../../../../lib/db.js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { category } = await params;
  const label = category.replace(/-/g, " ");
  return { title: `${label} Blogs | Dizital Adda`, description: `Latest ${label} articles from Dizital Adda.` };
}

export default async function BlogCategoryPage({ params, searchParams }) {
  const { category } = await params;
  const query = await searchParams;
  const page = Math.max(1, Number.parseInt(query?.page || "1", 10) || 1);
  const label = category.replace(/-/g, " ");
  try {
    const db = getBlogDatabase();
    const [posts] = await db.execute("SELECT id, title, meta_title, alt_tag, image, created_at, slug, category, author FROM posts WHERE category LIKE ? ORDER BY created_at DESC LIMIT ? OFFSET ?", [`%${label}%`, 12, (page - 1) * 12]);
    return <><PublicNavbar /><style>{"body{margin:0;background:#faf8fc;color:#231333;font-family:Jost,Arial,sans-serif}.blog-head{padding:55px 20px;text-align:center;color:white;background:linear-gradient(120deg,#560090,#9900ff)}.blog-wrap{max-width:1200px;margin:auto;padding:40px 22px}.blog-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(265px,1fr));gap:24px}.blog-card{overflow:hidden;border-radius:16px;background:white;box-shadow:0 8px 28px #3d006615}.blog-card a{color:inherit;text-decoration:none}.blog-card img{width:100%;height:200px;object-fit:cover}.blog-card-body{padding:18px}"}</style><header className="blog-head"><h1>{label} Blogs</h1><p>Guides and updates from Dizital Adda</p></header><main className="blog-wrap"><div className="blog-grid">{posts.map((post) => <article className="blog-card" key={post.id}><a href={`/blogs/${encodeURIComponent(post.slug)}`}>{post.image && <img src={post.image} alt={post.alt_tag || post.title} loading="lazy" />}<div className="blog-card-body"><h2>{post.title}</h2><p>{post.meta_title || "Read the latest insights from Dizital Adda."}</p><small>{post.author || "Dizital Adda"}</small></div></a></article>)}</div><p style={{ marginTop: 30 }}><a href="/blogs">All blogs</a></p></main></>;
  } catch { notFound(); }
}
