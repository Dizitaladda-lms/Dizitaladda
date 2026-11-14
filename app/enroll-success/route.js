export const dynamic = "force-dynamic";

export async function GET(request) {
  if (new URL(request.url).searchParams.get("payment") !== "success") {
    return new Response("Not found", { status: 404 });
  }
  return new Response("<!doctype html><html lang=\"en\"><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>Payment successful | Dizital Adda</title><body style=\"font:16px/1.6 Arial,sans-serif;max-width:680px;margin:12vh auto;padding:24px;color:#172033\"><h1>Payment successful</h1><p>Thank you. Your course enrollment has been received.</p><a href=\"/\">Return to home</a></body></html>", {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}
