import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { rankingEntries } from "@/lib/mock-pages";
import { Crown, Trophy, Medal, ArrowUp, ArrowDown, Minus } from "lucide-react";

export const Route = createFileRoute("/ranking")({
  head: () => ({ meta: [{ title: "Ranking — TikToLive" }] }),
  component: RankingPage,
});

function RankingPage() {
  const top3 = rankingEntries.slice(0, 3);
  const rest = rankingEntries.slice(3);
  const podiumIcons = [Crown, Trophy, Medal];
  const podiumColors = ["text-yellow-accent", "text-zinc-300", "text-amber-600"];

  return (
    <DashboardShell
      eyebrow="Ranking mensual"
      title={<>Top <span className="text-magenta">creadores</span> de Latam</>}
      rightPanel={false}
    >
      <div className="flex gap-2 mb-6 flex-wrap">
        {["Este mes", "Todos", "Argentina", "México", "Colombia", "Chile"].map((t, i) => (
          <button
            key={t}
            className={`h-9 px-4 rounded-full text-xs font-semibold transition ${
              i === 0
                ? "bg-magenta text-primary-foreground"
                : "bg-surface border border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-3 mb-6">
        {[top3[1], top3[0], top3[2]].map((e) => {
          const Icon = podiumIcons[e.rank - 1];
          return (
            <div
              key={e.username}
              className={`relative rounded-3xl bg-surface border border-border p-5 text-center ${
                e.rank === 1 ? "md:-mt-4 border-yellow-accent/40" : ""
              }`}
            >
              <Icon className={`size-6 mx-auto mb-3 ${podiumColors[e.rank - 1]}`} />
              <div className={`size-16 rounded-full bg-gradient-to-br ${e.avatar} mx-auto mb-3`} />
              <div className="text-sm font-bold truncate">{e.name}</div>
              <div className="text-[11px] text-muted-foreground">{e.country} · {e.niche}</div>
              <div className="mt-3 tabular text-2xl font-black tracking-tight text-cyan-accent">
                {e.score}
              </div>
            </div>
          );
        })}
      </div>

      <div className="rounded-3xl bg-surface border border-border overflow-hidden">
        <div className="grid grid-cols-[60px_1fr_120px_100px_80px] items-center px-6 py-3 text-[10px] uppercase tracking-widest text-muted-foreground border-b border-border">
          <span>#</span>
          <span>Creador</span>
          <span className="hidden md:block">Nicho</span>
          <span className="text-right">Score</span>
          <span className="text-right">Δ</span>
        </div>
        {rest.map((e) => (
          <div
            key={e.username}
            className="grid grid-cols-[60px_1fr_120px_100px_80px] items-center px-6 py-3 hover:bg-surface-elevated transition-colors"
          >
            <span className="tabular text-sm text-muted-foreground">{e.rank}</span>
            <div className="flex items-center gap-3 min-w-0">
              <div className={`size-9 rounded-full bg-gradient-to-br ${e.avatar} shrink-0`} />
              <div className="min-w-0">
                <div className="text-sm font-medium truncate">{e.name}</div>
                <div className="text-[11px] text-muted-foreground">{e.country} {e.username}</div>
              </div>
            </div>
            <span className="hidden md:block text-xs text-muted-foreground">{e.niche}</span>
            <span className="tabular text-sm font-bold text-right text-cyan-accent">{e.score}</span>
            <span
              className={`tabular text-xs text-right inline-flex items-center justify-end gap-1 ${
                e.delta > 0 ? "text-online" : e.delta < 0 ? "text-magenta" : "text-muted-foreground"
              }`}
            >
              {e.delta > 0 ? <ArrowUp className="size-3" /> : e.delta < 0 ? <ArrowDown className="size-3" /> : <Minus className="size-3" />}
              {Math.abs(e.delta)}
            </span>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
