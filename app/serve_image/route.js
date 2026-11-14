import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const signatures = [
  { type: "image/jpeg", check: (b) => b.length >= 3 && b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff },
  { type: "image/png", check: (b) => b.length >= 8 && b.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])) },
  { type: "image/gif", check: (b) => b.length >= 6 && ["GIF87a", "GIF89a"].includes(b.subarray(0, 6).toString("ascii")) },
];

export async function GET(request) {
  const name = path.basename(new URL(request.url).searchParams.get("file") || "");
  if (!/^img_[0-9a-f]+\.[0-9]+\.(?:jpg|jpeg|png|gif)$/i.test(name)) return new Response(null, { status: 404 });
  const uploadRoot = process.env.IMAGE_UPLOAD_DIR || path.join(process.cwd(), "private-uploads", "images");
  try {
    const bytes = await readFile(/*turbopackIgnore: true*/ path.join(/*turbopackIgnore: true*/ uploadRoot, name));
    const signature = signatures.find((entry) => entry.check(bytes));
    if (!signature) return new Response(null, { status: 403 });
    const etag = `"${createHash("md5").update(bytes).digest("hex")}"`;
    if (request.headers.get("if-none-match") === etag) return new Response(null, { status: 304, headers: { etag } });
    return new Response(bytes, { headers: { "content-type": signature.type, "content-length": String(bytes.length), "cache-control": "public, max-age=31536000, immutable", etag, "x-content-type-options": "nosniff" } });
  } catch { return new Response(null, { status: 404 }); }
}
