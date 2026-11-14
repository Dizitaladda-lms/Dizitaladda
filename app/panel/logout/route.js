import { clearSessionCookie } from "../../../lib/session.js";

export function GET(request) {
  const response = Response.redirect(new URL("/panel/student/login", request.url), 303);
  response.headers.set("set-cookie", clearSessionCookie());
  return response;
}
