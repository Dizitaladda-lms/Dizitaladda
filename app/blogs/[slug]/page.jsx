import sanitizeHtml from "sanitize-html";
import { notFound } from "next/navigation";
import PublicNavbar from "../../../components/PublicNavbar.jsx";
import { getBlogDatabase } from "../../../lib/db.js";
import { publicPageLoaders, publicPageMetadata } from "../../../public-pages/registry.js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  return Object.keys(publicPageLoaders)
    .filter((route) => route.startsWith("blogs/") && route.split("/").length === 2)
    .map((route) => ({ slug: route.slice("blogs/".length) }));
}

async function getPostData(slug) {
  const cleanSlug = String(slug).trim().toLowerCase();
  let title = "";
  let description = "";
  let image = "";
  let author = "Dizital Adda";
  let publishedTime = "";
  let modifiedTime = "";
  let customSchema = null;
  let dbPost = null;

  // 1. Check static metadata registry
  const meta = publicPageMetadata[`blogs/${cleanSlug}`] || publicPageMetadata[`blogs/${slug}`];
  if (meta?.title) {
    title = meta.title;
    description = meta.description || "";
  }

  // 2. Query database for full post details
  try {
    const db = getBlogDatabase();
    const [rows] = await db.execute("SELECT * FROM posts WHERE slug = ? LIMIT 1", [cleanSlug]);
    if (rows && rows.length > 0) {
      dbPost = rows[0];
      title = dbPost.meta_title || dbPost.title || title;
      description = dbPost.meta_description || dbPost.description || description;
      image = dbPost.image || image;
      author = dbPost.author || author;
      if (dbPost.created_at) {
        publishedTime = new Date(dbPost.created_at).toISOString();
      }
      if (dbPost.updated_at) {
        modifiedTime = new Date(dbPost.updated_at).toISOString();
      }
      customSchema = dbPost.schema || dbPost.schema_markup || dbPost.faq_schema || null;
    }
  } catch {
    // Database query failed or DB not configured; graceful fallback to registry/slug
  }

  if (!title) {
    title = cleanSlug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  }

  return {
    slug: cleanSlug,
    title,
    description,
    image,
    author,
    publishedTime,
    modifiedTime,
    customSchema,
    dbPost,
  };
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  if (!slug) return {};

  const post = await getPostData(slug);
  const canonicalUrl = `https://dizitaladda.com/blogs/${post.slug}`;
  const fullImageUrl = post.image
    ? post.image.startsWith("http")
      ? post.image
      : `https://dizitaladda.com${post.image.startsWith("/") ? "" : "/"}${post.image}`
    : "https://dizitaladda.com/assets/img/favicon-96x96.png";

  return {
    title: { absolute: `${post.title} | Dizital Adda` },
    description: post.description || `Read ${post.title} on Dizital Adda.`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${post.title} | Dizital Adda`,
      description: post.description || `Read ${post.title} on Dizital Adda.`,
      url: canonicalUrl,
      siteName: "Dizital Adda",
      type: "article",
      publishedTime: post.publishedTime || undefined,
      modifiedTime: post.modifiedTime || post.publishedTime || undefined,
      authors: [post.author],
      images: [
        {
          url: fullImageUrl,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Dizital Adda`,
      description: post.description || `Read ${post.title} on Dizital Adda.`,
      images: [fullImageUrl],
    },
  };
}

export default async function BlogPage({ params }) {
  const { slug } = await params;
  if (!/^[a-z0-9-]+$/i.test(slug)) notFound();

  const postData = await getPostData(slug);
  const canonicalUrl = `https://dizitaladda.com/blogs/${postData.slug}`;
  const fullImageUrl = postData.image
    ? postData.image.startsWith("http")
      ? postData.image
      : `https://dizitaladda.com${postData.image.startsWith("/") ? "" : "/"}${postData.image}`
    : "https://dizitaladda.com/assets/img/favicon-96x96.png";

  // Build JSON-LD structured data
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    headline: postData.title,
    description: postData.description || `Read ${postData.title} on Dizital Adda.`,
    image: [fullImageUrl],
    author: {
      "@type": "Person",
      name: postData.author || "Dizital Adda",
      url: "https://dizitaladda.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Dizital Adda",
      logo: {
        "@type": "ImageObject",
        url: "https://dizitaladda.com/assets/img/favicon-96x96.png",
      },
    },
    datePublished: postData.publishedTime || "2026-01-01T00:00:00+05:30",
    dateModified: postData.modifiedTime || postData.publishedTime || "2026-01-01T00:00:00+05:30",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://dizitaladda.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blogs",
        item: "https://dizitaladda.com/blogs",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: postData.title,
        item: canonicalUrl,
      },
    ],
  };

  let parsedCustomSchema = null;
  if (postData.customSchema) {
    if (typeof postData.customSchema === "object") {
      parsedCustomSchema = JSON.stringify(postData.customSchema);
    } else if (typeof postData.customSchema === "string") {
      const trimmed = postData.customSchema.trim();
      if (trimmed.startsWith("<script")) {
        parsedCustomSchema = trimmed.replace(/<script[^>]*>/gi, "").replace(/<\/script>/gi, "").trim();
      } else {
        parsedCustomSchema = trimmed;
      }
    }
  }

  const structuredDataElements = (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {parsedCustomSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: parsedCustomSchema }}
        />
      )}
    </>
  );

  // If there's a pre-rendered static page loader, render it with schema injected
  const loader = publicPageLoaders[`blogs/${postData.slug}`] || publicPageLoaders[`blogs/${slug}`];
  if (loader) {
    const { default: Page } = await loader();
    return (
      <>
        {structuredDataElements}
        <Page />
      </>
    );
  }

  // Otherwise render from database
  const post = postData.dbPost;
  if (!post) {
    notFound();
  }

  const body = sanitizeHtml(post.content || post.description || post.body || "", {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img", "h1", "h2", "h3", "figure", "figcaption", "iframe"]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      "*": ["class", "id"],
      img: ["src", "alt", "width", "height", "loading"],
      iframe: ["src", "width", "height", "title", "allowfullscreen"],
    },
  });

  return (
    <>
      {structuredDataElements}
      <PublicNavbar />
      <style>
        {
          "body{margin:0;color:#27222b;background:#fff;font:17px/1.8 Jost,Arial,sans-serif}.article{max-width:850px;margin:50px auto;padding:0 22px}.article h1{font-size:clamp(32px,5vw,48px);line-height:1.2}.article img{max-width:100%;height:auto}.article a{color:#6d18a2}"
        }
      </style>
      <main className="article">
        <p>{post.category || "Dizital Adda"}</p>
        <h1>{post.title || post.meta_title}</h1>
        {post.image && (
          <img
            src={post.image}
            alt={post.alt_tag || post.title || ""}
          />
        )}
        {body ? (
          <article dangerouslySetInnerHTML={{ __html: body }} />
        ) : (
          <p>{post.description}</p>
        )}
      </main>
    </>
  );
}
