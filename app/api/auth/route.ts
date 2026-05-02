import { NextRequest, NextResponse } from "next/server"
import { validateCredentials, createSession } from "@/lib/auth"

export async function POST(req: NextRequest) {
  const { username, password } = await req.json()

  if (!validateCredentials(username, password)) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
  }

  const token = await createSession(username)

  const res = NextResponse.json({ ok: true })
  res.cookies.set("dashboard_session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  })

  return res
}