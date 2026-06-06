import { Play, Sparkles } from "lucide-react";
import { featuredTool } from "@/lib/mock-dashboard";

export function HeroBanner() {
  return (
    <div className="relative overflow-hidden rounded-[28px] bg-surface border border-border h-[360px] md:h-[420px]">
      {/* Background art */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,oklch(0.65_0.27_12_/_0.55),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_95%_20%,oklch(0.86_0.17_195_/_0.25),transparent_55%)]" />
        <div className="absolute right-0 top-0 h-full w-3/5">
          <div className="absolute inset-0 bg-[conic-gradient(from_140deg_at_60%_50%,transparent,oklch(0.65_0.27_12_/_0.4),transparent_40%)]" />
        </div>
        {/* glyph */}
        <div className="absolute right-8 md:right-20 top-1/2 -translate-y-1/2 text-[160px] md:text-[220px] font-black tracking-tighter leading-none select-none">
          <span className="bg-gradient-to-br from-white/90 to-white/10 bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(254,44,85,0.6)]">
            VIRAL
          </span>
        </div>
        <div className="absolute right-12 md:right-32 bottom-10 text-2xl md:text-4xl font-black tracking-tight text-magenta">
          SCORE
        </div>
      </div>

      {/* Foreground content */}
      <div className="relative h-full flex flex-col justify-end p-8 md:p-12 max-w-xl">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-accent text-black text-[11px] font-bold tracking-wide">
            <Sparkles className="size-3" /> {featuredTool.badge}
          </span>
          <span className="text-[11px] uppercase tracking-widest text-muted-foreground">
            {featuredTool.category}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05] mb-2">
          Hacé crecer tu <span className="text-magenta">contenido</span>
        </h1>
        <p className="text-sm md:text-base text-muted-foreground mb-6 max-w-md">
          {featuredTool.description}
        </p>
        <div className="flex items-center gap-3">
          <button className="group inline-flex items-center gap-2 h-12 px-7 rounded-full bg-magenta text-primary-foreground font-semibold text-sm hover:shadow-glow-magenta transition-all">
            <Play className="size-4 fill-current" />
            Analizar video
          </button>
          <button className="h-12 px-6 rounded-full border border-border bg-surface/60 backdrop-blur text-sm font-medium text-foreground hover:border-magenta/40 transition-colors">
            Ver demo
          </button>
        </div>
      </div>
    </div>
  );
}