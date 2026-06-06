import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { HeroBanner } from "@/components/dashboard/HeroBanner";
import { KpiRow } from "@/components/dashboard/KpiRow";
import { ToolCardItem } from "@/components/dashboard/ToolCard";
import { spotlightTools, secondaryTools } from "@/lib/mock-dashboard";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — TikToLive" },
      { name: "description", content: "Tu centro de control de creador en TikToLive." },
    ],
  }),
  component: DashboardPage,
});

function DashboardPage() {
  return (
    <DashboardShell
      eyebrow="Hola, Pathum"
      title={<>Tu <span className="text-magenta">creator suite</span></>}
    >
      <section className="mb-8">
        <HeroBanner />
      </section>

      <section className="mb-8">
        <KpiRow />
      </section>

      <section className="mb-8">
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">
            MEGA <span className="text-magenta">Spotlight</span>
          </h2>
          <a href="/tools" className="text-xs text-muted-foreground hover:text-foreground">
            Ver todas →
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {spotlightTools.map((t) => (
            <ToolCardItem key={t.slug} tool={t} />
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-4">
          Más <span className="text-cyan-accent">herramientas</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {secondaryTools.map((t) => (
            <ToolCardItem key={t.slug} tool={t} />
          ))}
        </div>
      </section>
    </DashboardShell>
  );
}
