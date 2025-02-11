import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  if (path.startsWith("/admin")) {
    return NextResponse.rewrite(new URL(req.nextUrl.pathname, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/:path*"],
};
