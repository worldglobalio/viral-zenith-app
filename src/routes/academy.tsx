import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { Play, Clock, BookOpen, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/academy")({
  component: AcademyPage,
});

const courses = [
  { title: "Hooks que retienen", level: "Intermedio", mins: 42, progress: 100, lessons: 8, accent: "from-magenta to-rose-600" },
  { title: "Anatomía de un video viral", level: "Avanzado", mins: 65, progress: 60, lessons: 12, accent: "from-cyan-accent to-sky-600" },
  { title: "Monetización para Latam", level: "Inicial", mins: 28, progress: 30, lessons: 6, accent: "from-yellow-accent to-orange-500" },
  { title: "Storytelling en 30s", level: "Intermedio", mins: 50, progress: 0, lessons: 10, accent: "from-violet-500 to-fuchsia-600" },
  { title: "TikTok Shop desde cero", level: "Avanzado", mins: 90, progress: 0, lessons: 15, accent: "from-emerald-400 to-cyan-500" },
  { title: "Análisis de competencia", level: "Inicial", mins: 35, progress: 0, lessons: 7, accent: "from-rose-500 to-red-700" },
];

function AcademyPage() {
  return (
    <DashboardShell eyebrow="Aprendizaje" title="TikToLive Academy" rightPanel={false}>
      <div className="rounded-3xl p-6 md:p-8 bg-gradient-to-br from-magenta via-fuchsia-700 to-violet-700 mb-6 relative overflow-hidden">
        <BookOpen className="size-8 mb-3" />
        <h2 className="text-2xl md:text-3xl font-black max-w-2xl">Cursos cortos de creadores top, gratis con tu plan.</h2>
        <p className="text-sm opacity-90 mt-2">Aprendé hooks, retención, monetización y storytelling. Ganá AP por cada curso completado.</p>
        <button className="mt-6 h-11 px-5 rounded-xl bg-white text-black text-sm font-bold inline-flex items-center gap-2">
          <Play className="size-4" /> Continuar mi curso
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((c) => (
          <div key={c.title} className="rounded-3xl bg-surface overflow-hidden group cursor-pointer">
            <div className={`h-40 bg-gradient-to-br ${c.accent} relative grid place-items-center`}>
              <Play className="size-12 opacity-90 group-hover:scale-110 transition" />
              {c.progress === 100 && (
                <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-online text-black text-[10px] font-bold inline-flex items-center gap-1">
                  <CheckCircle2 className="size-3" /> COMPLETADO
                </div>
              )}
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span>{c.level}</span><span>·</span>
                <span className="inline-flex items-center gap-1"><Clock className="size-3" /> {c.mins}m</span>
                <span>·</span><span>{c.lessons} lecciones</span>
              </div>
              <h3 className="font-black mt-2">{c.title}</h3>
              <div className="mt-4 h-1.5 rounded-full bg-surface-elevated overflow-hidden">
                <div className="h-full bg-magenta" style={{ width: `${c.progress}%` }} />
              </div>
              <p className="text-[11px] text-muted-foreground mt-1.5 tabular">{c.progress}% completado</p>
            </div>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}