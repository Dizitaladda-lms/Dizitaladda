import { readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
export const dynamic = "force-static";

export async function GET() {
  const file = path.join(root, "legacy-export", "index.html");
  try {
    const html = await readFile(file, "utf8");
    return new Response(html, { headers: { "content-type": "text/html; charset=utf-8" } });
  } catch {
    return new Response("Homepage snapshot is unavailable.", { status: 503 });
  }
}
