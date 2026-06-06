import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { Flame, Play, Music, Eye, Type, Heart, Clock, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/tools/viral-score")({
  head: () => ({ meta: [{ title: "Viral Score — TikToLive" }] }),
  component: ViralScorePage,
});

function ScoreRing({ value }: { value: number }) {
  const r = 70;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;
  const color = value < 40 ? "var(--magenta)" : value < 70 ? "var(--yellow-accent)" : "var(--cyan-accent)";
  return (
    <div className="relative size-44">
      <svg viewBox="0 0 160 160" className="size-full -rotate-90">
        <circle cx="80" cy="80" r={r} stroke="oklch(1 0 0 / 0.08)" strokeWidth="10" fill="none" />
        <circle
          cx="80" cy="80" r={r} stroke={color} strokeWidth="10" fill="none"
          strokeDasharray={c} strokeDashoffset={offset} strokeLinecap="round"
          style={{ filter: `drop-shadow(0 0 12px ${color})`, transition: "stroke-dashoffset 600ms cubic-bezier(0.16,1,0.3,1)" }}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center">
          <div className="tabular text-5xl font-black tracking-tight" style={{ color }}>{value}</div>
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Viral Score</div>
        </div>
      </div>
    </div>
  );
}

const breakdown = [
  { key: "hook", label: "Hook", value: 92, Icon: Flame },
  { key: "sound", label: "Sonido", value: 84, Icon: Music },
  { key: "retention", label: "Retención", value: 78, Icon: Eye },
  { key: "text", label: "Texto", value: 71, Icon: Type },
  { key: "engagement", label: "Engagement", value: 88, Icon: Heart },
  { key: "duration", label: "Duración", value: 65, Icon: Clock },
];

function colorFor(v: number) {
  if (v < 40) return { text: "text-magenta", bg: "bg-magenta" };
  if (v < 70) return { text: "text-yellow-accent", bg: "bg-yellow-accent" };
  return { text: "text-cyan-accent", bg: "bg-cyan-accent" };
}

function ViralScorePage() {
  const [url, setUrl] = useState("");
  const [analyzed, setAnalyzed] = useState(false);
  const overall = 87;

  return (
    <DashboardShell
      eyebrow="Herramienta"
      title={<>Viral <span className="text-magenta">Score</span></>}
      rightPanel={false}
    >
      <div className="grid lg:grid-cols-[1fr_400px] gap-6">
        <div className="space-y-6">
          <div className="rounded-3xl bg-surface border border-border p-6">
            <label className="text-xs uppercase tracking-widest text-muted-foreground mb-3 block">
              Pegá la URL de un video de TikTok
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://www.tiktok.com/@usuario/video/..."
                className="flex-1 h-12 rounded-full bg-background border border-border px-5 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-magenta focus:ring-2 focus:ring-magenta/30 transition"
              />
              <button
                onClick={() => setAnalyzed(true)}
                className="h-12 px-7 rounded-full bg-magenta text-primary-foreground text-sm font-semibold hover:shadow-glow-magenta transition-all inline-flex items-center gap-2 justify-center"
              >
                <Play className="size-4 fill-current" /> Analizar
              </button>
            </div>
            <p className="mt-3 text-[11px] text-muted-foreground">
              Solo con fines educativos. TikToLive no garantiza resultados.
            </p>
          </div>

          <div className="rounded-3xl bg-surface border border-border p-6 lg:p-8">
            {analyzed ? (
              <>
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <ScoreRing value={overall} />
                  <div className="flex-1">
                    <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-1">
                      Resultado del análisis
                    </p>
                    <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-2">
                      Tiene <span className="text-cyan-accent">potencial viral</span>
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Hook excelente, sonido en tendencia. La retención cae al segundo 8 — probá
                      cortar la intro 2s y agregar texto sobre la acción principal.
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-accent/10 border border-cyan-accent/30 text-cyan-accent text-xs font-semibold">
                      <TrendingUp className="size-3.5" />
                      Ingresos estimados: $18 – $42 USD
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {breakdown.map((b) => {
                    const c = colorFor(b.value);
                    return (
                      <div key={b.key} className="rounded-2xl bg-background border border-border p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <b.Icon className={`size-4 ${c.text}`} />
                            <span className="text-sm font-medium">{b.label}</span>
                          </div>
                          <span className={`tabular text-sm font-bold ${c.text}`}>{b.value}</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                          <div className={`h-full ${c.bg}`} style={{ width: `${b.value}%` }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className="py-16 text-center">
                <div className="size-20 rounded-3xl bg-surface-elevated grid place-items-center mx-auto mb-5">
                  <Flame className="size-9 text-magenta" />
                </div>
                <h3 className="text-xl font-bold mb-2">Listo para analizar</h3>
                <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                  Pegá una URL arriba y conseguí un desglose por hook, sonido, retención y más en
                  segundos.
                </p>
              </div>
            )}
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-3xl bg-surface border border-border p-6">
            <h3 className="text-sm font-bold mb-4">Recomendaciones IA</h3>
            <ul className="space-y-3 text-sm">
              {[
                "Acortá la intro a 1.5s para mejorar la retención",
                "Agregá un text overlay con la promesa principal",
                "Probá un sonido del top 20 de tu nicho",
                "Publicá entre 19h y 22h para tu audiencia",
              ].map((tip, i) => (
                <li key={i} className="flex gap-3">
                  <span className="size-6 shrink-0 rounded-full bg-magenta/15 text-magenta grid place-items-center text-xs font-bold tabular">
                    {i + 1}
                  </span>
                  <span className="text-muted-foreground leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-magenta to-rose-700 p-6 text-primary-foreground">
            <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2">PRO</p>
            <h3 className="text-xl font-black tracking-tight mb-2">Desbloqueá análisis ilimitados</h3>
            <p className="text-sm opacity-90 mb-4">Plan Academy incluye los 10 tools sin límite.</p>
            <button className="h-10 px-5 rounded-full bg-white text-magenta text-sm font-bold hover:bg-white/90 transition">
              Ver plan
            </button>
          </div>
        </aside>
      </div>
    </DashboardShell>
  );
}
