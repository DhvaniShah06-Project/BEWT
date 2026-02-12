import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname === "/Lab22/pagination") {
    return NextResponse.redirect(new URL("/Lab22/pagination/0", request.url));
  }
  if (pathname === "/Lab22/pagination/0") {
    return NextResponse.next();
  }

  if (pathname.startsWith("/Lab22/pagination/")) {
    const tokenCookie = request.cookies.get("token");

    if (!tokenCookie) {
      return NextResponse.redirect(new URL("/Lab22/login", request.url));
    }

    const tokenData = JSON.parse(tokenCookie.value);
    const now = Date.now();

    if (tokenData.expiry < now) {
      const response = NextResponse.next();

      response.cookies.set(
        "token",
        JSON.stringify({
          value: "newTokenValue",
          expiry: now + 60 * 60 * 1000, // 1 hour
        }),
      );

      return response;
    }
  }

  return NextResponse.next();
}
export const config = {
  matcher: [
    "/Lab22/pagination",
    "/Lab22/pagination/:path*",
  ],
};