import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, Sparkles, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/landing")({
  component: Landing,
});

function Landing() {
  const features = [
    { Icon: Flame, title: "Viral Score (demo)", desc: "Explorá una vista previa del análisis de videos con datos de ejemplo." },
    { Icon: TrendingUp, title: "Forecaster 30/60/90", desc: "Visualizá escenarios de crecimiento con datos de ejemplo." },
    { Icon: Sparkles, title: "Academy Points", desc: "Conocé la interfaz de aprendizaje y puntos. Los canjes no están disponibles en la demo." },
  ];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link to="/landing" className="flex items-center gap-2">
          <div className="size-9 rounded-2xl bg-magenta grid place-items-center font-black text-primary-foreground">T</div>
          <span className="font-black text-lg">TikTo<span className="text-magenta">Live</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground">Features</a>
          <a href="#demo" className="hover:text-foreground">La demo</a>
          <a href="#ejemplos" className="hover:text-foreground">Ejemplos de uso</a>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/auth" className="text-sm font-semibold text-muted-foreground hover:text-foreground px-3">Acceso demo</Link>
          <Link to="/auth" className="h-10 px-4 rounded-xl bg-magenta text-primary-foreground text-sm font-bold inline-flex items-center">
            Explorar demo
          </Link>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 pt-12 pb-24 text-center relative">
        <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_50%_0%,var(--magenta),transparent_60%)]" />
        <span className="inline-block px-3 py-1.5 rounded-full bg-surface text-xs font-semibold text-magenta border border-magenta/30">
          Demo para creadores de TikTok en LATAM
        </span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mt-5 max-w-4xl mx-auto leading-[1.05]">
          Explorá tu contenido con <span className="text-magenta">datos de ejemplo</span>.
        </h1>
        <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
          Esta es una demostración de TikToLive. Explorá las herramientas con datos de ejemplo; no se crean cuentas ni se ofrecen suscripciones o resultados garantizados.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          <Link to="/auth" className="h-12 px-6 rounded-xl bg-magenta text-primary-foreground font-bold inline-flex items-center justify-center gap-2">
            Explorar demo <ArrowRight className="size-4" />
          </Link>
          <a href="#features" className="h-12 px-6 rounded-xl bg-surface font-semibold inline-flex items-center justify-center">Ver funciones</a>
        </div>
      </section>

      <section id="features" className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-4">
        {features.map((f) => (
          <div key={f.title} className="rounded-3xl bg-surface p-6">
            <div className="size-12 rounded-2xl bg-magenta/20 grid place-items-center text-magenta"><f.Icon className="size-5" /></div>
            <h3 className="font-black text-lg mt-4">{f.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
          </div>
        ))}
      </section>

      <section id="demo" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12">Qué podés explorar</h2>
        <p className="text-sm text-muted-foreground text-center mb-6">Estas vistas son ilustrativas. No representan planes comerciales ni servicios contratables.</p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "Análisis", label: "Vista previa", feats: ["Datos de ejemplo", "Viral Score de muestra", "Interfaz de análisis"] },
            { name: "Academy", label: "Demo", feats: ["Interfaz de aprendizaje", "Puntos de ejemplo", "Forecaster de muestra", "Sin canjes reales"], featured: true },
            { name: "Planificación", label: "Ejemplo", feats: ["Escenarios ilustrativos", "Interfaz del calendario", "Sin conexión a TikTok", "Sin contratación"] },
          ].map((p) => (
            <div key={p.name} className={`rounded-3xl p-6 ${p.featured ? "bg-gradient-to-br from-magenta to-fuchsia-700" : "bg-surface"}`}>
              <p className="text-xs uppercase tracking-widest opacity-80">{p.name}</p>
              <p className="text-4xl font-black mt-2">{p.label}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {p.feats.map((f) => (
                  <li key={f} className="flex items-center gap-2"><CheckCircle2 className="size-4 shrink-0" /> {f}</li>
                ))}
              </ul>
              <Link to="/auth" className={`mt-6 h-11 rounded-xl grid place-items-center text-sm font-bold ${p.featured ? "bg-white text-black" : "bg-surface-elevated"}`}>
                Explorar demo
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section id="ejemplos" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-6">Ejemplos de uso</h2>
        <p className="text-sm text-muted-foreground text-center mb-6">Recorridos ilustrativos de la demo; no son testimonios de clientes.</p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { name: "Explorar un análisis", text: "Revisá cómo se presenta un Viral Score con datos de ejemplo." },
            { name: "Visualizar escenarios", text: "Conocé la vista del Forecaster y sus proyecciones ilustrativas." },
          ].map((t) => (
            <div key={t.name} className="rounded-3xl bg-surface p-6">
              <p className="text-lg mt-3">{t.text}</p>
              <p className="text-sm text-muted-foreground mt-3">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border mt-12">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 TikToLive · Demostración.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <span>Términos: no disponibles</span><span>Privacidad: no disponible</span><span>Contacto: no disponible</span>
          </div>
        </div>
      </footer>
    </div>
  );
}