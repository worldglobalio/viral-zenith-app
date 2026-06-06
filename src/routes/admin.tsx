import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { Users, Wrench, AlertTriangle, DollarSign, TrendingUp, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
});

const kpis = [
  { label: "Usuarios activos", value: "12.480", delta: "+8.4%", Icon: Users, accent: "text-cyan-accent" },
  { label: "MRR", value: "$24.6k", delta: "+12%", Icon: DollarSign, accent: "text-online" },
  { label: "Análisis 24h", value: "3.214", delta: "+5%", Icon: TrendingUp, accent: "text-magenta" },
  { label: "Reportes abiertos", value: "7", delta: "-2", Icon: AlertTriangle, accent: "text-yellow-accent" },
];

const recentUsers = [
  { name: "maria_creates", plan: "Academy", country: "🇲🇽", joined: "Hace 2h" },
  { name: "joaquin.fx", plan: "FREE", country: "🇦🇷", joined: "Hace 5h" },
  { name: "lara.studio", plan: "Academy", country: "🇨🇴", joined: "Ayer" },
  { name: "_pepito", plan: "FREE", country: "🇨🇱", joined: "Ayer" },
  { name: "rocco_dj", plan: "Enterprise", country: "🇪🇸", joined: "Hace 2d" },
];

function AdminPage() {
  return (
    <DashboardShell eyebrow="Panel interno" title={<span className="inline-flex items-center gap-3">Admin <ShieldCheck className="size-6 text-magenta" /></span>} rightPanel={false}>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {kpis.map((k) => (
          <div key={k.label} className="rounded-3xl bg-surface p-5">
            <k.Icon className={`size-5 ${k.accent}`} />
            <p className="text-2xl md:text-3xl font-black tabular mt-3">{k.value}</p>
            <div className="flex items-center justify-between mt-1">
              <p className="text-[11px] uppercase tracking-widest text-muted-foreground">{k.label}</p>
              <span className={`text-xs font-bold ${k.delta.startsWith("-") ? "text-online" : "text-magenta"}`}>{k.delta}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 rounded-3xl bg-surface p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-black">Últimos registros</h3>
            <button className="text-xs text-muted-foreground hover:text-foreground">Ver todos</button>
          </div>
          <div className="divide-y divide-border">
            {recentUsers.map((u) => (
              <div key={u.name} className="py-3 flex items-center gap-3">
                <div className="size-9 rounded-full bg-gradient-to-br from-fuchsia-500 to-rose-600 grid place-items-center text-xs font-bold">
                  {u.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold">@{u.name} <span className="text-base ml-1">{u.country}</span></p>
                  <p className="text-xs text-muted-foreground">{u.joined}</p>
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                  u.plan === "Enterprise" ? "bg-yellow-accent/20 text-yellow-accent" :
                  u.plan === "Academy" ? "bg-magenta/20 text-magenta" :
                  "bg-surface-elevated text-muted-foreground"
                }`}>{u.plan}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-surface p-6">
          <h3 className="font-black mb-4 inline-flex items-center gap-2"><Wrench className="size-4 text-cyan-accent" /> Salud de sistema</h3>
          <div className="space-y-4">
            {[
              { label: "API Viral Score", value: 99.8, ok: true },
              { label: "AI Gateway", value: 99.1, ok: true },
              { label: "TikTok OAuth", value: 96.2, ok: false },
              { label: "Postgres", value: 99.9, ok: true },
            ].map((s) => (
              <div key={s.label}>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span>{s.label}</span>
                  <span className={`tabular font-bold ${s.ok ? "text-online" : "text-yellow-accent"}`}>{s.value}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-surface-elevated overflow-hidden">
                  <div className={`h-full ${s.ok ? "bg-online" : "bg-yellow-accent"}`} style={{ width: `${s.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}