import sanitizeHtml from "sanitize-html";
import { notFound } from "next/navigation";
import PublicNavbar from "../../../components/PublicNavbar.jsx";
import { getBlogDatabase } from "../../../lib/db.js";
import { publicPageLoaders, publicPageMetadata } from "../../../content/public-pages/registry.js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  return Object.keys(publicPageLoaders)
    .filter((route) => route.startsWith("blogs/") && route.split("/").length === 2)
    .map((route) => ({ slug: route.slice("blogs/".length) }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const meta = publicPageMetadata[`blogs/${slug}`];
  return meta ? { ...(meta.title ? { title: { absolute: meta.title } } : {}), ...(meta.description ? { description: meta.description } : {}) } : {};
}

export default async function BlogPage({ params }) {
  const { slug } = await params;
  if (!/^[a-z0-9-]+$/i.test(slug)) notFound();
  const loader = publicPageLoaders[`blogs/${slug}`];
  if (loader) {
    const { default: Page } = await loader();
    return <Page />;
  }

  try {
    const db = getBlogDatabase();
    const [rows] = await db.execute("SELECT * FROM posts WHERE slug = ? LIMIT 1", [slug]);
    if (!rows.length) notFound();
    const post = rows[0];
    const body = sanitizeHtml(post.content || post.description || post.body || "", {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img", "h1", "h2", "h3", "figure", "figcaption", "iframe"]),
      allowedAttributes: { ...sanitizeHtml.defaults.allowedAttributes, "*": ["class", "id"], img: ["src", "alt", "width", "height", "loading"], iframe: ["src", "width", "height", "title", "allowfullscreen"] },
    });
    return <><PublicNavbar /><style>{"body{margin:0;color:#27222b;background:#fff;font:17px/1.8 Jost,Arial,sans-serif}.article{max-width:850px;margin:50px auto;padding:0 22px}.article h1{font-size:clamp(32px,5vw,48px);line-height:1.2}.article img{max-width:100%;height:auto}.article a{color:#6d18a2}"}</style><main className="article"><p>{post.category || "Dizital Adda"}</p><h1>{post.title || post.meta_title}</h1>{post.image && <img src={post.image} alt={post.alt_tag || post.title || ""} />}{body ? <article dangerouslySetInnerHTML={{ __html: body }} /> : <p>{post.description}</p>}</main></>;
  } catch (error) {
    if (error?.digest?.startsWith("NEXT_NOT_FOUND")) throw error;
    notFound();
  }
}
