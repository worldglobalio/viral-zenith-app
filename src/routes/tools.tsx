import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { ToolCardItem } from "@/components/dashboard/ToolCard";
import { spotlightTools, secondaryTools, featuredTool } from "@/lib/mock-dashboard";

export const Route = createFileRoute("/tools")({
  head: () => ({ meta: [{ title: "Herramientas — TikToLive" }] }),
  component: ToolsPage,
});

function ToolsPage() {
  const all = [featuredTool, ...spotlightTools, ...secondaryTools];
  return (
    <DashboardShell
      eyebrow="Suite completa"
      title={<>10 <span className="text-magenta">herramientas</span> para creadores</>}
    >
      <p className="text-sm text-muted-foreground max-w-2xl mb-8">
        Analizá videos, proyectá ingresos, espiá competencia y generá ideas — todo con IA entrenada
        en miles de virales de Latam.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {all.map((t) => (
          <ToolCardItem key={t.slug} tool={t} />
        ))}
      </div>
    </DashboardShell>
  );
}
