"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [form, setForm] = useState({ username: "", password: "" })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError("")
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    if (res.ok) {
      router.push("/dashboard")
    } else {
      setError("Usuario o contraseña incorrectos.")
      setLoading(false)
    }
  }

  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      justifyContent: "center", background: "var(--bg)", padding: "1.5rem",
    }}>
      <div style={{ width: "100%", maxWidth: "360px" }}>
        <div style={{ marginBottom: "2rem", textAlign: "center" }}>
          <h1 style={{ fontSize: "20px", fontWeight: 600 }}>Agency Dashboard</h1>
          <p style={{ fontSize: "13px", color: "var(--text-secondary)", marginTop: "4px" }}>Ingresá tus credenciales</p>
        </div>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <input
            type="text" placeholder="Usuario" required
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            style={{
              height: "40px", padding: "0 12px", border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)", background: "var(--bg)",
              color: "var(--text)", fontSize: "14px", outline: "none",
            }}
          />
          <input
            type="password" placeholder="Contraseña" required
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            style={{
              height: "40px", padding: "0 12px", border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)", background: "var(--bg)",
              color: "var(--text)", fontSize: "14px", outline: "none",
            }}
          />
          {error && (
            <p style={{ fontSize: "13px", color: "var(--danger)", background: "var(--danger-bg)", padding: "10px 12px", borderRadius: "var(--radius-sm)" }}>
              {error}
            </p>
          )}
          <button type="submit" disabled={loading} style={{
            height: "40px", background: "var(--accent)", color: "var(--accent-fg)",
            border: "none", borderRadius: "var(--radius-md)", fontSize: "14px",
            fontWeight: 500, opacity: loading ? 0.6 : 1,
          }}>
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  )
}