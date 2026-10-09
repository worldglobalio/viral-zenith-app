import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { Sparkles, ShoppingBag, Gift, Crown, Zap, BookOpen, Headphones, Palette } from "lucide-react";
import { mockUser } from "@/lib/mock-dashboard";
import { useState } from "react";

export const Route = createFileRoute("/store")({
  component: StorePage,
});

const items = [
  { name: "Plan Pro 1 mes", desc: "Acceso a todas las herramientas Pro", cost: 500, Icon: Crown, accent: "magenta", category: "Planes" },
  { name: "Sticker pack TikToLive", desc: "10 stickers físicos enviados a tu casa", cost: 200, Icon: Gift, accent: "yellow", category: "Merch" },
  { name: "Curso 'Hooks que retienen'", desc: "Por Pathum + acceso de por vida", cost: 350, Icon: BookOpen, accent: "cyan", category: "Cursos" },
  { name: "Mentoría 30 min", desc: "1:1 con un coach del equipo", cost: 1200, Icon: Headphones, accent: "magenta", category: "Coaching" },
  { name: "Theme 'Crimson'", desc: "Skin exclusivo para tu dashboard", cost: 150, Icon: Palette, accent: "violet", category: "Cosmético" },
  { name: "Boost Forecaster x10", desc: "Análisis de proyección extra", cost: 250, Icon: Zap, accent: "yellow", category: "Herramientas" },
];

const accentMap = {
  magenta: "from-magenta/30 to-magenta/0 text-magenta",
  cyan: "from-cyan-accent/30 to-cyan-accent/0 text-cyan-accent",
  yellow: "from-yellow-accent/30 to-yellow-accent/0 text-yellow-accent",
  violet: "from-violet-500/30 to-violet-500/0 text-violet-300",
} as const;

function StorePage() {
  const [filter, setFilter] = useState<string>("Todos");
  const cats = ["Todos", ...Array.from(new Set(items.map((i) => i.category)))];
  const list = filter === "Todos" ? items : items.filter((i) => i.category === filter);
  return (
    <DashboardShell eyebrow="Tienda" title="Catálogo de ejemplo" rightPanel={false}>
      <p className="text-sm text-muted-foreground mb-6">Demostración: todos los artículos, servicios y costos son ejemplos. No hay canjes, compras ni suscripciones disponibles.</p>
      <div className="rounded-3xl bg-surface p-5 mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="size-12 rounded-2xl bg-magenta/20 grid place-items-center text-magenta"><Sparkles className="size-5" /></div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Saldo simulado</p>
            <p className="text-2xl font-black tabular">{mockUser.points.toLocaleString()} AP</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`h-9 px-4 rounded-full text-xs font-semibold transition ${
                filter === c ? "bg-magenta text-primary-foreground" : "bg-surface-elevated text-muted-foreground hover:text-foreground"
              }`}
            >{c}</button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map((it) => {
          const a = accentMap[it.accent as keyof typeof accentMap];
          return (
            <div key={it.name} className="rounded-3xl bg-surface p-5 relative overflow-hidden">
              <div className={`absolute -top-10 -right-10 size-32 rounded-full blur-3xl bg-gradient-to-br ${a} opacity-50`} />
              <div className="relative">
                <div className={`size-12 rounded-2xl bg-surface-elevated grid place-items-center ${a.split(" ").pop()}`}>
                  <it.Icon className="size-5" />
                </div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-4">{it.category} · Ejemplo</p>
                <h3 className="font-black text-lg mt-1">{it.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{it.desc}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="tabular font-black text-magenta">{it.cost} AP</span>
                  <button
                    type="button"
                    disabled
                    className="h-9 px-4 rounded-xl text-xs font-semibold inline-flex items-center gap-2 bg-surface-elevated text-muted-foreground cursor-not-allowed"
                  >
                    <ShoppingBag className="size-3.5" /> No disponible
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </DashboardShell>
  );
}