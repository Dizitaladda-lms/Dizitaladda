import { NextResponse } from "next/server";

export function proxy(request) {
  if (request.method !== "POST" || request.nextUrl.pathname.startsWith("/api/")) {
    return NextResponse.next();
  }
  const endpoint = request.nextUrl.pathname === "/enroll-upay"
    ? "/api/enroll-upay"
    : `/api/legacy${request.nextUrl.pathname}`;
  const target = new URL(endpoint, request.url);
  target.search = request.nextUrl.search;
  return NextResponse.rewrite(target);
}

export const config = {
  matcher: ["/((?!_next|favicon\\.ico).*)"],
};
