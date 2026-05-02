import Link from "next/link"
import { CLIENTS } from "@/lib/config"

export const dynamic = "force-dynamic"

export default function DashboardPage() {
  return (
    <div style={{ minHeight: "100vh", padding: "2rem 1.5rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "22px", fontWeight: 600, marginBottom: "4px" }}>Overview</h1>
        <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginBottom: "2rem" }}>Seleccioná un cliente</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "12px" }}>
          {CLIENTS.map((client) => (
            <Link key={client.slug} href={"/dashboard/client/" + client.slug}>
              <div style={{ padding: "1.25rem", border: "1px solid var(--border)", borderRadius: "12px", cursor: "pointer" }}>
                <p style={{ fontWeight: 600, marginBottom: "4px" }}>{client.name}</p>
                <p style={{ fontSize: "12px", color: "var(--text-tertiary)" }}>{client.state}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
