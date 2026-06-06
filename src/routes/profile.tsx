import { createFileRoute, Link } from "@tanstack/react-router";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { mockUser } from "@/lib/mock-dashboard";
import { Flame, Trophy, Sparkles, Edit3, Share2, MapPin, Calendar, Link as LinkIcon } from "lucide-react";

export const Route = createFileRoute("/profile")({
  component: ProfilePage,
});

function ProfilePage() {
  const stats = [
    { label: "Análisis", value: "248", Icon: Flame, accent: "text-magenta" },
    { label: "Ranking", value: "#47", Icon: Trophy, accent: "text-yellow-accent" },
    { label: "Academy Points", value: "1.840", Icon: Sparkles, accent: "text-cyan-accent" },
  ];
  const badges = ["Top 100", "Racha 7d", "Beta tester", "Madrugador", "Aprendiz", "Rising star"];
  return (
    <DashboardShell eyebrow="Mi perfil" title="Perfil público" rightPanel={false}>
      <div className="rounded-3xl overflow-hidden bg-surface mb-6">
        <div className="h-40 bg-gradient-to-br from-magenta via-fuchsia-600 to-violet-600 relative">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_50%,white,transparent_50%)]" />
        </div>
        <div className="px-6 pb-6 -mt-12 flex flex-col md:flex-row md:items-end gap-5">
          <div className="size-28 rounded-3xl bg-gradient-to-br from-fuchsia-500 to-rose-600 grid place-items-center text-3xl font-black ring-4 ring-surface">
            {mockUser.avatar}
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-black tracking-tight">{mockUser.name}</h2>
            <p className="text-sm text-muted-foreground">{mockUser.username} · Nivel {mockUser.level}</p>
            <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mt-3">
              <span className="flex items-center gap-1"><MapPin className="size-3.5" /> Buenos Aires, AR</span>
              <span className="flex items-center gap-1"><Calendar className="size-3.5" /> Se unió en marzo 2024</span>
              <span className="flex items-center gap-1"><LinkIcon className="size-3.5" /> tiktolive.com/@pathum</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="h-10 px-4 rounded-xl bg-surface-elevated text-sm font-semibold inline-flex items-center gap-2 hover:bg-accent transition"><Share2 className="size-4" /> Compartir</button>
            <button className="h-10 px-4 rounded-xl bg-magenta text-primary-foreground text-sm font-semibold inline-flex items-center gap-2 hover:opacity-90 transition"><Edit3 className="size-4" /> Editar</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {stats.map((s) => (
          <div key={s.label} className="rounded-3xl bg-surface p-5">
            <s.Icon className={`size-5 ${s.accent}`} />
            <p className="text-3xl font-black tabular mt-3">{s.value}</p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 rounded-3xl bg-surface p-6">
          <h3 className="font-black mb-4">Bio</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Creador de contenido enfocado en entretenimiento y educación digital.
            Crecí de 0 a 200k seguidores en 9 meses usando TikToLive.
            Hablo de hooks, retención y monetización para creadores en español.
          </p>
          <h3 className="font-black mt-8 mb-4">Insignias</h3>
          <div className="flex flex-wrap gap-2">
            {badges.map((b) => (
              <span key={b} className="px-3 py-1.5 rounded-full bg-surface-elevated text-xs font-semibold">{b}</span>
            ))}
          </div>
        </div>
        <div className="rounded-3xl bg-surface p-6">
          <h3 className="font-black mb-4">Próximo nivel</h3>
          <div className="text-sm text-muted-foreground mb-2">Avanzado → Experto</div>
          <div className="h-3 rounded-full bg-surface-elevated overflow-hidden">
            <div className="h-full bg-gradient-to-r from-magenta to-cyan-accent" style={{ width: "61%" }} />
          </div>
          <p className="text-xs text-muted-foreground mt-2 tabular">1.840 / 3.000 AP</p>
          <Link to="/points" className="block mt-5 h-10 rounded-xl bg-magenta text-primary-foreground text-sm font-semibold grid place-items-center">Ver progreso</Link>
        </div>
      </div>
    </DashboardShell>
  );
}