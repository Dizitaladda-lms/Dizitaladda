export { POST } from "../api/payments/payu/callback/route.js";

export async function GET(request) {
  return Response.redirect(new URL("/enroll-upay", request.url), 307);
}
