import { NextRequest, NextResponse } from "next/server"

export function middleware(req: NextRequest) {
  const token = req.cookies.get("dashboard_session")?.value
  const isLoginPage = req.nextUrl.pathname === "/login"
  const isApiAuth = req.nextUrl.pathname.startsWith("/api/auth")

  if (!token && !isLoginPage && !isApiAuth) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  if (token && isLoginPage) {
    return NextResponse.redirect(new URL("/dashboard", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}