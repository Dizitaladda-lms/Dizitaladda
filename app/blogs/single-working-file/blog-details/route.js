export function GET(request) {
  const url = new URL(request.url);
  const slug = (url.searchParams.get("slug") || "").trim().toLowerCase().replace(/[^a-z0-9-]/g, "");
  if (!slug) return new Response("Not found", { status: 404 });
  return Response.redirect(new URL(`/blogs/${encodeURIComponent(slug)}${url.search}`, request.url), 308);
}
