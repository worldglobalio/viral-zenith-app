import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { pointsHistory } from "@/lib/mock-pages";
import { mockUser } from "@/lib/mock-dashboard";
import { ArrowUpRight, ArrowDownRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/points")({
  head: () => ({ meta: [{ title: "Academy Points — TikToLive" }] }),
  component: PointsPage,
});

const levels = [
  { name: "PRINCIPIANTE", min: 0 },
  { name: "APRENDIZ", min: 400 },
  { name: "AVANZADO", min: 1200 },
  { name: "EXPERTO", min: 3000 },
  { name: "EMBAJADOR", min: 7000 },
];

function PointsPage() {
  const currentIdx = levels.findIndex((l) => l.name === mockUser.level);
  const next = levels[currentIdx + 1];
  const pct = next ? Math.round(((mockUser.points - levels[currentIdx].min) / (next.min - levels[currentIdx].min)) * 100) : 100;

  return (
    <DashboardShell
      eyebrow="Academy Points"
      title={<>Tu <span className="text-magenta">balance</span> y nivel</>}
      rightPanel={false}
    >
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6 mb-6">
        <div className="rounded-3xl bg-gradient-to-br from-magenta via-rose-700 to-zinc-900 p-8 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 size-72 rounded-full bg-yellow-accent/20 blur-3xl" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="size-4 text-yellow-accent" />
              <span className="text-xs uppercase tracking-widest text-white/80">Balance actual</span>
            </div>
            <p className="tabular text-7xl font-black tracking-tight text-white leading-none">
              {mockUser.points.toLocaleString("es-AR")}
            </p>
            <p className="text-sm text-white/80 mt-2">Academy Points disponibles</p>
            <div className="mt-6 flex gap-3">
              <a href="/redeem" className="h-11 px-5 rounded-full bg-white text-magenta text-sm font-bold hover:bg-white/90 transition inline-flex items-center">
                Canjear AP
              </a>
              <a href="/achievements" className="h-11 px-5 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition inline-flex items-center">
                Ganar más
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-surface border border-border p-6">
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-1">Nivel actual</p>
          <h3 className="text-2xl font-black tracking-tight text-cyan-accent mb-4">{mockUser.level}</h3>
          {next && (
            <>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-muted-foreground">Hacia {next.name}</span>
                <span className="tabular font-bold">{mockUser.points} / {next.min}</span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden mb-6">
                <div className="h-full rounded-full bg-cyan-accent" style={{ width: `${pct}%` }} />
              </div>
            </>
          )}
          <div className="space-y-2">
            {levels.map((l, i) => (
              <div
                key={l.name}
                className={`flex items-center justify-between text-xs px-3 py-2 rounded-xl ${
                  i === currentIdx ? "bg-magenta/15 text-magenta font-bold" : "text-muted-foreground"
                }`}
              >
                <span>{l.name}</span>
                <span className="tabular">{l.min.toLocaleString("es-AR")} AP</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl bg-surface border border-border overflow-hidden">
        <div className="px-6 py-4 border-b border-border flex items-center justify-between">
          <h3 className="font-bold">Historial de transacciones</h3>
          <span className="text-xs text-muted-foreground">Últimos 30 días</span>
        </div>
        <ul>
          {pointsHistory.map((tx) => {
            const positive = tx.amount > 0;
            return (
              <li key={tx.id} className="flex items-center gap-4 px-6 py-4 border-b border-border last:border-0">
                <div className={`size-10 rounded-2xl grid place-items-center ${positive ? "bg-online/15 text-online" : "bg-magenta/15 text-magenta"}`}>
                  {positive ? <ArrowUpRight className="size-5" /> : <ArrowDownRight className="size-5" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium">{tx.action}</div>
                  <div className="text-xs text-muted-foreground truncate">{tx.description}</div>
                </div>
                <div className="text-right">
                  <div className={`tabular text-sm font-bold ${positive ? "text-online" : "text-magenta"}`}>
                    {positive ? "+" : ""}{tx.amount} AP
                  </div>
                  <div className="text-[11px] text-muted-foreground">{tx.createdAt}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </DashboardShell>
  );
}
