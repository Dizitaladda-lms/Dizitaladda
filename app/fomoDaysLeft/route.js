export const dynamic = "force-dynamic";

export async function GET() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata", year: "numeric", month: "2-digit", day: "2-digit",
  }).formatToParts(new Date());
  const datePart = (type) => parts.find((part) => part.type === type)?.value;
  const today = Date.UTC(Number(datePart("year")), Number(datePart("month")) - 1, Number(datePart("day")));
  const anchor = Date.UTC(2026, 10, 1);
  const days = Math.max(0, Math.floor((today - anchor) / 86400000));
  return new Response(String(9 - (days % 9)), { headers: { "content-type": "text/plain; charset=utf-8" } });
}
