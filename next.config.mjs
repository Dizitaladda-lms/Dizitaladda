/** @type {import('next').NextConfig} */
import { readFile } from "node:fs/promises";

const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    const legacy = JSON.parse(await readFile(new URL("./legacy-redirects.json", import.meta.url), "utf8"));
    const blogRedirects = [
      ["after-12-all-courses-list", "after-12-courses-list"],
      ["top-10-digital-marketing-institute-in-greater-kailash", "best-digital-marketing-institutes-in-delhi-2026"],
      ["top-10-best-coumputer-courses-in-demand-for-2025", "top-10-best-computer-courses-in-demand-for-2025"],
      ["richest-youtubers-in-india", "top-10-richest-youtubers-in-india"],
      ["is-blogging-still-profitable-in-2025", "is-blogging-profitable-in-2026"],
      ["email-marketing-essentials-tips-for-successful-campaigns", "email-marketing-campaign-tips"],
      ["best-digital-marketing-institutes-delhi-2025", "best-digital-marketing-institutes-in-delhi-2026"],
      ["how-aI-is-transforming-digital-marketing-the-future", "ai-in-digital-marketing"],
      ["are-you-a-beginner-on-reddit-explore-with-us", "how-to-use-reddit-as-a-beginner"],
      ["after-12-which-course-is-best-for-arts-students", "how-to-choose-course-after-12th-arts"],
      ["unlocking-success-top-9-digital-marketing-benefits-for-small-business", "top-9-digital-marketing-benefits-for-small-business"],
      ["unlocking-the-power-of-google-search-videos-a-comprehensive-guide", "the-power-of-google-search-videos"],
      ["youtubes-algorithm-in-2025", "youtube-algorithm-in-2025"],
      ["what-is-the-best-course-after-12th-Arts", "best-course-after-12-arts"],
      ["digital-marketing-course-vs-mba", "digital-marketing-course-vs-mba-in-marketing"],
      ["best-course-after-12-arts", "digital-marketing-vs-ba-after-12th-arts"],
    ].flatMap(([from, to]) => [from, `${from}.php`].map((source) => ({ source: `/blogs/${source}`, destination: `/blogs/${to}`, permanent: true })));
    return [
      { source: "/:path*", destination: "https://dizitaladda.com/:path*", permanent: true, has: [{ type: "host", value: "www.dizitaladda.com" }] },
      { source: "/:path*", destination: "https://dizitaladda.com/:path*", permanent: true, has: [{ type: "header", key: "x-forwarded-proto", value: "http" }] },
      ...blogRedirects,
      { source: "/blogs/20-Digital-Marketing-Case-Studies-to-Understand-the-Power-of-Digital-Marketing", destination: "/blogs/20-digital-marketing-case-studies-to-understand-the-power-of-digital-marketing", permanent: true },
      { source: "/blogs/20-Digital-Marketing-Case-Studies-to-Understand-the-Power-of-Digital-Marketing.php", destination: "/blogs/20-digital-marketing-case-studies-to-understand-the-power-of-digital-marketing", permanent: true },
      { source: "/blogs/5-Key-Elements-of-a-Successful-SEO-Infographic", destination: "/blogs/5-key-elements-of-a-successful-seo-infographic", permanent: true },
      { source: "/blogs/5-Key-Elements-of-a-Successful-SEO-Infographic.php", destination: "/blogs/5-key-elements-of-a-successful-seo-infographic", permanent: true },
      { source: "/blogs/blog-category/Video-Marketing", destination: "/blogs/blog-category/video-marketing", permanent: true },
      { source: "/blogs/blog-category/Video-Marketing.php", destination: "/blogs/blog-category/video-marketing", permanent: true },
      { source: "/blogs/blog-category/seo", destination: "/blogs/blog-category/search-engine-optimization", permanent: true },
      { source: "/blogs/blog-category/seo.php", destination: "/blogs/blog-category/search-engine-optimization", permanent: true },
      { source: "/blogs/blog/backend_api/:path*", destination: "https://gamevoyant.com/backend_api/:path*", permanent: false },
      { source: "/blogs/blog-cms/backend_api/:path*", destination: "https://gamevoyant.com/backend_api/:path*", permanent: false },
      { source: "/blogs/blog-cms/:path*", destination: "/blogs/blog/:path*", permanent: true },
      ...legacy,
    ];
  },
  async headers() {
    return [{
      source: "/:path*",
      headers: [
        { key: "Content-Security-Policy", value: "frame-ancestors 'self'" },
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ...(process.env.NODE_ENV === "production" ? [{ key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" }] : []),
      ],
    }, {
      source: "/panel/admin/:path*",
      headers: [
        { key: "X-Frame-Options", value: "DENY" },
        { key: "Cache-Control", value: "no-store, no-cache, must-revalidate, private" },
        { key: "Pragma", value: "no-cache" },
        { key: "Referrer-Policy", value: "no-referrer" },
      ],
    }];
  },
};

export default nextConfig;
