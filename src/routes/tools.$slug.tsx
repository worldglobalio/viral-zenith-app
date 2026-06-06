import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { spotlightTools, secondaryTools, featuredTool } from "@/lib/mock-dashboard";
import { ArrowLeft, Sparkles, Play } from "lucide-react";

export const Route = createFileRoute("/tools/$slug")({
  component: ToolDetailPage,
});

function ToolDetailPage() {
  const { slug } = useParams({ from: "/tools/$slug" });
  const all = [featuredTool, ...spotlightTools, ...secondaryTools];
  const tool = all.find((t) => t.slug === slug);

  if (!tool) {
    return (
      <DashboardShell eyebrow="Herramienta" title="No encontrada" rightPanel={false}>
        <div className="rounded-3xl bg-surface p-12 text-center">
          <p className="text-muted-foreground mb-4">La herramienta "{slug}" no existe.</p>
          <Link to="/tools" className="inline-flex items-center gap-2 text-magenta font-semibold">
            <ArrowLeft className="size-4" /> Volver a herramientas
          </Link>
        </div>
      </DashboardShell>
    );
  }

  const Icon = tool.Icon;
  return (
    <DashboardShell eyebrow={tool.category} title={tool.title} rightPanel={false}>
      <Link to="/tools" className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1 mb-4">
        <ArrowLeft className="size-3" /> Todas las herramientas
      </Link>

      <div className="rounded-3xl p-8 bg-gradient-to-br from-magenta via-fuchsia-700 to-violet-700 relative overflow-hidden mb-6">
        <div className="size-16 rounded-2xl bg-white/15 grid place-items-center mb-5">
          <Icon className="size-7" />
        </div>
        <h2 className="text-3xl md:text-4xl font-black max-w-2xl">{tool.title}</h2>
        <p className="text-sm opacity-90 mt-2 max-w-xl">{tool.description}</p>
        <button className="mt-6 h-12 px-6 rounded-xl bg-white text-black font-bold inline-flex items-center gap-2">
          <Play className="size-4" /> Iniciar análisis
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 rounded-3xl bg-surface p-6">
          <h3 className="font-black mb-4">Cómo funciona</h3>
          <ol className="space-y-4">
            {["Pegá la URL del video o conectá tu cuenta TikTok.", "Nuestra IA analiza hooks, retención y engagement.", "Recibí recomendaciones accionables y ganá Academy Points."].map((s, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="size-7 rounded-full bg-magenta text-primary-foreground text-xs font-bold grid place-items-center shrink-0">{i + 1}</div>
                <p className="text-sm text-muted-foreground pt-1">{s}</p>
              </li>
            ))}
          </ol>

          <h3 className="font-black mt-8 mb-4">Inputs</h3>
          <div className="space-y-3">
            <input placeholder="https://tiktok.com/@usuario/video/..." className="w-full h-12 rounded-xl bg-surface-elevated px-4 text-sm outline-none focus:ring-2 focus:ring-magenta" />
            <button className="w-full h-12 rounded-xl bg-magenta text-primary-foreground font-bold inline-flex items-center justify-center gap-2">
              <Sparkles className="size-4" /> Analizar ahora
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-3xl bg-surface p-5">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Costo</p>
            <p className="text-2xl font-black mt-1">10 AP <span className="text-xs text-muted-foreground font-normal">/ análisis</span></p>
          </div>
          <div className="rounded-3xl bg-surface p-5">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Ganás</p>
            <p className="text-2xl font-black tabular text-magenta mt-1">+25 AP</p>
            <p className="text-xs text-muted-foreground">por cada análisis completado</p>
          </div>
          <div className="rounded-3xl bg-surface p-5">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Análisis previos</p>
            <p className="tabular text-3xl font-black">12</p>
            <Link to="/dashboard" className="text-xs text-magenta font-semibold mt-2 inline-block">Ver historial →</Link>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}