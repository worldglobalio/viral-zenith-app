import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { achievements } from "@/lib/mock-pages";
import { Lock } from "lucide-react";

export const Route = createFileRoute("/achievements")({
  head: () => ({ meta: [{ title: "Logros — TikToLive" }] }),
  component: AchievementsPage,
});

const rarityColor: Record<string, string> = {
  común: "from-zinc-500 to-zinc-700",
  raro: "from-cyan-400 to-sky-600",
  épico: "from-fuchsia-500 to-violet-700",
  legendario: "from-amber-400 to-rose-600",
};

function AchievementsPage() {
  const [filter, setFilter] = useState<"todos" | "desbloqueados" | "bloqueados">("todos");
  const unlocked = achievements.filter((a) => a.unlocked);
  const list =
    filter === "desbloqueados" ? unlocked
    : filter === "bloqueados" ? achievements.filter((a) => !a.unlocked)
    : achievements;
  const pct = Math.round((unlocked.length / achievements.length) * 100);

  return (
    <DashboardShell
      eyebrow="Tu progreso"
      title={<>Galería de <span className="text-magenta">logros</span></>}
      rightPanel={false}
    >
      <div className="rounded-3xl bg-surface border border-border p-6 mb-6">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-4">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-1">
              Desbloqueados
            </p>
            <p className="tabular text-5xl font-black tracking-tight">
              {unlocked.length}<span className="text-muted-foreground text-2xl">/{achievements.length}</span>
            </p>
          </div>
          <div className="text-right">
            <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-1">Completado</p>
            <p className="tabular text-3xl font-bold text-cyan-accent">{pct}%</p>
          </div>
        </div>
        <div className="h-2 rounded-full bg-secondary overflow-hidden">
          <div className="h-full rounded-full bg-gradient-to-r from-magenta to-cyan-accent" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <div className="flex gap-2 mb-6">
        {(["todos", "desbloqueados", "bloqueados"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`h-9 px-4 rounded-full text-xs font-semibold capitalize transition ${
              filter === f
                ? "bg-magenta text-primary-foreground"
                : "bg-surface border border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {list.map((a) => (
          <div
            key={a.key}
            className={`relative rounded-3xl bg-surface border border-border p-5 transition ${
              a.unlocked ? "hover:-translate-y-0.5 hover:border-magenta/30" : "opacity-60"
            }`}
          >
            {!a.unlocked && (
              <div className="absolute top-4 right-4 size-7 rounded-full bg-background/80 backdrop-blur grid place-items-center">
                <Lock className="size-3.5 text-muted-foreground" />
              </div>
            )}
            <div className={`size-14 rounded-2xl bg-gradient-to-br ${rarityColor[a.rarity]} grid place-items-center mb-4 ${a.unlocked ? "" : "grayscale"}`}>
              <a.Icon className="size-7 text-white" />
            </div>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
              {a.category} · {a.rarity}
            </p>
            <h3 className="text-base font-bold mb-1">{a.name}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">{a.description}</p>
            <div className="flex items-center justify-between text-[11px]">
              <span className="tabular font-bold text-magenta">+{a.points} AP</span>
              {a.unlocked && a.unlockedAt && (
                <span className="text-muted-foreground">{a.unlockedAt}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
