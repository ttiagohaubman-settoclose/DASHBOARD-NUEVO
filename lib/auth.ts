import { cookies } from "next/headers"
import crypto from "crypto"

const SESSIONS: Record<string, string> = {}

export async function createSession(username: string): Promise<string> {
  const token = crypto.randomBytes(32).toString("hex")
  SESSIONS[token] = username
  return token
}

export async function getSession() {
  const cookieStore = await cookies()
  const token = cookieStore.get("dashboard_session")?.value
  if (!token || !SESSIONS[token]) return null
  return { username: SESSIONS[token] }
}

export function validateCredentials(username: string, password: string): boolean {
  return (
    username === process.env.DASHBOARD_USER &&
    password === process.env.DASHBOARD_PASSWORD
  )
}