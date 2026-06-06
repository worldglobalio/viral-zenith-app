import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/calendar")({
  component: CalendarPage,
});

const events: Record<number, { title: string; tag: string; accent: string }[]> = {
  3: [{ title: "Reto: 5 videos", tag: "Reto", accent: "bg-magenta/30 text-magenta" }],
  8: [{ title: "Live: Q&A creadores", tag: "Live", accent: "bg-cyan-accent/30 text-cyan-accent" }],
  12: [{ title: "Drop: 'Hook que retienen'", tag: "Curso", accent: "bg-yellow-accent/30 text-yellow-accent" }],
  15: [
    { title: "Renueva plan Academy", tag: "Pago", accent: "bg-rose-500/30 text-rose-300" },
    { title: "Reporte semanal", tag: "Reporte", accent: "bg-violet-500/30 text-violet-300" },
  ],
  22: [{ title: "Cierre ranking mensual", tag: "Ranking", accent: "bg-magenta/30 text-magenta" }],
  27: [{ title: "Lanzamiento Forecaster v2", tag: "Producto", accent: "bg-cyan-accent/30 text-cyan-accent" }],
};

function CalendarPage() {
  const days = Array.from({ length: 35 }, (_, i) => i - 2);
  const today = 11;
  return (
    <DashboardShell eyebrow="Planeación" title="Calendario de contenido" rightPanel={false}>
      <div className="rounded-3xl bg-surface p-5 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="size-9 rounded-xl bg-surface-elevated grid place-items-center"><ChevronLeft className="size-4" /></button>
          <h2 className="font-black text-lg">Junio 2026</h2>
          <button className="size-9 rounded-xl bg-surface-elevated grid place-items-center"><ChevronRight className="size-4" /></button>
        </div>
        <button className="h-10 px-4 rounded-xl bg-magenta text-primary-foreground text-sm font-bold inline-flex items-center gap-2">
          <Plus className="size-4" /> Nuevo evento
        </button>
      </div>

      <div className="rounded-3xl bg-surface p-5">
        <div className="grid grid-cols-7 gap-2 text-[10px] uppercase tracking-widest text-muted-foreground text-center mb-2">
          {["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"].map((d) => <div key={d}>{d}</div>)}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {days.map((d, idx) => {
            const valid = d >= 1 && d <= 30;
            const evs = valid ? events[d] || [] : [];
            const isToday = d === today;
            return (
              <div
                key={idx}
                className={`min-h-[100px] rounded-2xl p-2 text-xs ${valid ? "bg-surface-elevated" : "bg-transparent"} ${isToday ? "ring-2 ring-magenta" : ""}`}
              >
                {valid && (
                  <>
                    <div className={`font-bold mb-1 ${isToday ? "text-magenta" : ""}`}>{d}</div>
                    <div className="space-y-1">
                      {evs.map((e) => (
                        <div key={e.title} className={`px-1.5 py-1 rounded-md text-[10px] truncate ${e.accent}`}>{e.title}</div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </DashboardShell>
  );
}