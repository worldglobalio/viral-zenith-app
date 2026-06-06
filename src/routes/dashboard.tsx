import { createFileRoute } from "@tanstack/react-router";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { Topbar } from "@/components/dashboard/Topbar";
import { HeroBanner } from "@/components/dashboard/HeroBanner";
import { KpiRow } from "@/components/dashboard/KpiRow";
import { ToolCardItem } from "@/components/dashboard/ToolCard";
import { FriendsPanel } from "@/components/dashboard/FriendsPanel";
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
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-[1600px] flex gap-6 p-4 md:p-6">
        <DashboardSidebar />

        <main className="flex-1 min-w-0">
          <Topbar />

          <section className="mb-8">
            <div className="flex items-end justify-between mb-4">
              <div>
                <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
                  Hola, Pathum
                </p>
                <h1 className="text-2xl md:text-3xl font-black tracking-tight">
                  Tu <span className="text-magenta">creator suite</span>
                </h1>
              </div>
            </div>
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
            <div className="flex items-end justify-between mb-4">
              <h2 className="text-xl md:text-2xl font-bold tracking-tight">
                Más <span className="text-cyan-accent">herramientas</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {secondaryTools.map((t) => (
                <ToolCardItem key={t.slug} tool={t} />
              ))}
            </div>
          </section>
        </main>

        <FriendsPanel />
      </div>
    </div>
  );
}