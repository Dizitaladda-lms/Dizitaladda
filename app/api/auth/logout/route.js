import { clearSessionCookie } from "../../../../lib/session.js";

export async function POST() {
  return new Response(JSON.stringify({ success: true }), {
    headers: { "content-type": "application/json; charset=utf-8", "set-cookie": clearSessionCookie() },
  });
}
