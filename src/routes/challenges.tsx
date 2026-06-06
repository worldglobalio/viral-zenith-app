import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { Flag, Clock, Sparkles, Users } from "lucide-react";

export const Route = createFileRoute("/challenges")({
  component: ChallengesPage,
});

const challenges = [
  { title: "Subí 5 análisis esta semana", reward: 150, progress: 3, total: 5, ends: "3 días", joined: 1240, status: "active" },
  { title: "Conseguí score >85 en 3 videos", reward: 300, progress: 1, total: 3, ends: "5 días", joined: 870, status: "active" },
  { title: "Invitá 3 amigos", reward: 600, progress: 0, total: 3, ends: "Sin fecha", joined: 2100, status: "active" },
  { title: "Completá un curso", reward: 200, progress: 1, total: 1, ends: "Completado", joined: 5400, status: "done" },
];

function ChallengesPage() {
  return (
    <DashboardShell eyebrow="Comunidad" title="Retos activos" rightPanel={false}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {challenges.map((c) => {
          const pct = Math.min(100, (c.progress / c.total) * 100);
          const done = c.status === "done";
          return (
            <div key={c.title} className={`rounded-3xl p-6 relative overflow-hidden ${done ? "bg-surface" : "bg-gradient-to-br from-surface to-surface-elevated"}`}>
              <div className="flex items-start justify-between gap-4">
                <div className="size-12 rounded-2xl bg-magenta/20 grid place-items-center text-magenta">
                  <Flag className="size-5" />
                </div>
                <div className="px-2.5 py-1 rounded-full bg-magenta/20 text-magenta text-xs font-bold inline-flex items-center gap-1">
                  <Sparkles className="size-3" /> +{c.reward} AP
                </div>
              </div>
              <h3 className="font-black text-lg mt-4">{c.title}</h3>
              <div className="mt-4">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5">
                  <span className="tabular">{c.progress} / {c.total}</span>
                  <span>{Math.round(pct)}%</span>
                </div>
                <div className="h-2 rounded-full bg-surface-elevated overflow-hidden">
                  <div className={`h-full ${done ? "bg-online" : "bg-magenta"}`} style={{ width: `${pct}%` }} />
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground mt-4">
                <span className="inline-flex items-center gap-1"><Clock className="size-3" /> {c.ends}</span>
                <span className="inline-flex items-center gap-1"><Users className="size-3" /> {c.joined.toLocaleString()} unidos</span>
              </div>
              <button className={`mt-5 w-full h-10 rounded-xl text-sm font-bold ${done ? "bg-online/20 text-online" : "bg-magenta text-primary-foreground hover:opacity-90"}`}>
                {done ? "Recompensa reclamada" : "Reclamar progreso"}
              </button>
            </div>
          );
        })}
      </div>
    </DashboardShell>
  );
}