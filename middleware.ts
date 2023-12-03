import { NextRequest, NextResponse } from "next/server";

console.log("middleware here we go");


export async function middleware(request: NextRequest) {
  try {
    return NextResponse.next();
  } catch (error) {
    console.log(error);
    throw new Error(`Exception occured. Expection was ${error}`)
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
