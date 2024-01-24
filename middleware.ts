import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // const token = request.cookies.get(process.env.TOKEN_NAME as string);
  // console.log(token);
  // return NextResponse.next();
  console.log(request.nextUrl.pathname);
  try {
    const token = request.cookies.get(process.env.TOKEN_NAME as string);
    console.log(token);
    if (token) return NextResponse.next();
    else return NextResponse.redirect(new URL("/login", request.url));
  } catch (err) {
    return NextResponse.redirect(new URL("/login", request.url));
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
     */
    "/((?!api|_next/static|_next/image|favicon.ico|login|register).*)",
  ],
};
