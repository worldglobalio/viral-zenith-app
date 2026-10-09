import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { Copy, Gift, Users, Sparkles, Check } from "lucide-react";

export const Route = createFileRoute("/referrals")({
  component: ReferralsPage,
});

const referidos = [
  { name: "maria_creates", status: "Convertido", points: 200, when: "Hace 5 días" },
  { name: "joaquin.fx", status: "Registrado", points: 0, when: "Hace 1 semana" },
  { name: "lara.studio", status: "Convertido", points: 200, when: "Hace 2 semanas" },
  { name: "_pepito", status: "Pendiente", points: 0, when: "Hace 3 semanas" },
];

function ReferralsPage() {
  return (
    <DashboardShell eyebrow="Programa · Demo" title="Referidos" rightPanel={false}>
      <p className="text-sm text-muted-foreground mb-6">Demostración: las estadísticas, conversiones y recompensas mostradas son datos simulados. No hay invitaciones, puntos ni acceso Pro por referidos disponibles.</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {[
          { label: "Referidos totales", value: "12", Icon: Users, accent: "text-cyan-accent" },
          { label: "Convertidos", value: "8", Icon: Check, accent: "text-online" },
          { label: "AP simulados", value: "1.600", Icon: Sparkles, accent: "text-magenta" },
        ].map((s) => (
          <div key={s.label} className="rounded-3xl bg-surface p-5">
            <s.Icon className={`size-5 ${s.accent}`} />
            <p className="text-3xl font-black tabular mt-3">{s.value}</p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="rounded-3xl p-6 md:p-8 bg-gradient-to-br from-magenta via-fuchsia-700 to-violet-700 mb-6">
        <Gift className="size-8 mb-3" />
        <h2 className="text-2xl md:text-3xl font-black">Vista de ejemplo del programa de referidos.</h2>
        <p className="text-sm opacity-90 mt-2 max-w-xl">Este programa es ilustrativo. Las invitaciones y recompensas no están habilitadas en esta demo.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-2 max-w-xl">
          <div className="flex-1 h-12 rounded-xl bg-black/30 px-4 grid items-center tabular text-sm">Enlace de invitación no disponible</div>
          <button
            type="button"
            disabled
            className="h-12 px-5 rounded-xl bg-white text-black text-sm font-bold inline-flex items-center justify-center gap-2 opacity-60 cursor-not-allowed"
          >
            <Copy className="size-4" /> Invitaciones no disponibles
          </button>
        </div>
      </div>

      <div className="rounded-3xl bg-surface p-6">
        <h3 className="font-black mb-4">Referidos simulados</h3>
        <div className="divide-y divide-border">
          {referidos.map((r) => (
            <div key={r.name} className="py-3 flex items-center gap-3">
              <div className="size-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-rose-600 grid place-items-center text-xs font-bold">
                {r.name.slice(0, 2).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold">@{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.when}</p>
              </div>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                r.status === "Convertido" ? "bg-online/20 text-online" :
                r.status === "Registrado" ? "bg-cyan-accent/20 text-cyan-accent" :
                "bg-yellow-accent/20 text-yellow-accent"
              }`}>{r.status}</span>
              <span className="tabular text-sm font-bold w-20 text-right">{r.points ? `+${r.points}` : "—"}</span>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}