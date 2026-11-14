import { notFound, redirect } from "next/navigation";

export default async function LegacyBlogDetailsRedirect({ searchParams }) {
  const query = await searchParams;
  const slug = String(query?.slug || "").trim().toLowerCase().replace(/[^a-z0-9-]/g, "");
  if (!slug) notFound();
  redirect(`/blogs/${encodeURIComponent(slug)}`);
}
