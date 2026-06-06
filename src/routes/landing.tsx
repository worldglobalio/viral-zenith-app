import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, Sparkles, TrendingUp, ArrowRight, CheckCircle2, Star } from "lucide-react";

export const Route = createFileRoute("/landing")({
  component: Landing,
});

function Landing() {
  const features = [
    { Icon: Flame, title: "Viral Score con IA", desc: "Analizá cualquier video y entendé por qué funciona o no." },
    { Icon: TrendingUp, title: "Forecaster 30/60/90", desc: "Proyecciones de crecimiento basadas en tu data real." },
    { Icon: Sparkles, title: "Academy Points", desc: "Ganá puntos por aprender. Canjealos por planes y merch." },
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
          <a href="#pricing" className="hover:text-foreground">Precios</a>
          <a href="#testimonios" className="hover:text-foreground">Testimonios</a>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/auth" className="text-sm font-semibold text-muted-foreground hover:text-foreground px-3">Login</Link>
          <Link to="/dashboard" className="h-10 px-4 rounded-xl bg-magenta text-primary-foreground text-sm font-bold inline-flex items-center">
            Empezar gratis
          </Link>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 pt-12 pb-24 text-center relative">
        <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_50%_0%,var(--magenta),transparent_60%)]" />
        <span className="inline-block px-3 py-1.5 rounded-full bg-surface text-xs font-semibold text-magenta border border-magenta/30">
          Para creadores de TikTok en LATAM
        </span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mt-5 max-w-4xl mx-auto leading-[1.05]">
          Monetizá tu contenido con <span className="text-magenta">datos reales</span>, no con corazonadas.
        </h1>
        <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
          La suite que usan +12.000 creadores latinos para analizar, proyectar y multiplicar sus ingresos en TikTok.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          <Link to="/dashboard" className="h-12 px-6 rounded-xl bg-magenta text-primary-foreground font-bold inline-flex items-center justify-center gap-2">
            Probar gratis <ArrowRight className="size-4" />
          </Link>
          <a href="#features" className="h-12 px-6 rounded-xl bg-surface font-semibold inline-flex items-center justify-center">Ver demo</a>
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

      <section id="pricing" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12">Precios simples</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "Free", price: "$0", feats: ["10 análisis/mes", "Viral Score básico", "Academy free"] },
            { name: "Academy", price: "$19", feats: ["Análisis ilimitados", "Forecaster", "Competitor", "Soporte prioritario"], featured: true },
            { name: "Enterprise", price: "Custom", feats: ["Multi cuenta", "API access", "Onboarding 1:1", "SLA"] },
          ].map((p) => (
            <div key={p.name} className={`rounded-3xl p-6 ${p.featured ? "bg-gradient-to-br from-magenta to-fuchsia-700" : "bg-surface"}`}>
              <p className="text-xs uppercase tracking-widest opacity-80">{p.name}</p>
              <p className="text-4xl font-black mt-2">{p.price}<span className="text-sm opacity-70 font-normal">/mes</span></p>
              <ul className="mt-6 space-y-2 text-sm">
                {p.feats.map((f) => (
                  <li key={f} className="flex items-center gap-2"><CheckCircle2 className="size-4 shrink-0" /> {f}</li>
                ))}
              </ul>
              <Link to="/dashboard" className={`mt-6 h-11 rounded-xl grid place-items-center text-sm font-bold ${p.featured ? "bg-white text-black" : "bg-surface-elevated"}`}>
                Empezar
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section id="testimonios" className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { name: "@pathum", text: "Pasé de 12k a 200k seguidores en 9 meses. TikToLive me mostró qué hooks funcionaban." },
            { name: "@maria_creates", text: "El Forecaster me dejó planear los lanzamientos con datos reales. Ya no es prueba y error." },
          ].map((t) => (
            <div key={t.name} className="rounded-3xl bg-surface p-6">
              <div className="flex gap-1 text-yellow-accent">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}
              </div>
              <p className="text-lg mt-3">"{t.text}"</p>
              <p className="text-sm text-muted-foreground mt-3">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border mt-12">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 TikToLive. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#">Términos</a><a href="#">Privacidad</a><a href="#">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
}