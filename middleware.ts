import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  try {
    // if (pathName === "/") return NextResponse.next(); //allow root path

    //middleware protect backoffice
    if (pathName.includes("/backoffice")) {
      const token = request.cookies.get(process.env.TOKEN_NAME as string);
      if (token) return NextResponse.next();
      else
        return NextResponse.redirect(
          new URL(process.env.REDIRECT_TO_LOGIN as string, request.url)
        );
    }
  } catch (err) {
    if (pathName.includes("/backoffice")) {
      return NextResponse.redirect(
        new URL(process.env.REDIRECT_TO_LOGIN as string, request.url)
      );
    } else {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - backoffice/regiser page
     * - backoffice/login page
     */
    "/((?!api|_next/static|_next/image|favicon.ico|darkmode|backoffice/login|backoffice/register).*)",
  ],
};
