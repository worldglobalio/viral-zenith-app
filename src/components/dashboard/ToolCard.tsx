import type { ToolCard as ToolCardType } from "@/lib/mock-dashboard";
import { ArrowUpRight } from "lucide-react";

const accentMap: Record<ToolCardType["accent"], string> = {
  magenta: "from-rose-500/30 via-fuchsia-500/10 to-transparent",
  cyan: "from-cyan-400/30 via-sky-500/10 to-transparent",
  yellow: "from-amber-300/30 via-yellow-500/10 to-transparent",
  violet: "from-violet-500/30 via-fuchsia-400/10 to-transparent",
};

const iconBgMap: Record<ToolCardType["accent"], string> = {
  magenta: "bg-magenta text-primary-foreground",
  cyan: "bg-cyan-accent text-black",
  yellow: "bg-yellow-accent text-black",
  violet: "bg-violet-500 text-white",
};

export function ToolCardItem({ tool }: { tool: ToolCardType }) {
  return (
    <a
      href={`/tools/${tool.slug}`}
      className="group relative block overflow-hidden rounded-3xl bg-surface border border-border p-5 hover:border-magenta/40 hover:-translate-y-0.5 transition-all duration-200"
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      <div className={`absolute inset-0 opacity-60 bg-gradient-to-br ${accentMap[tool.accent]} pointer-events-none`} />
      <div className="relative">
        <div className="flex items-start justify-between mb-10">
          <div className={`size-12 rounded-2xl grid place-items-center ${iconBgMap[tool.accent]}`}>
            <tool.Icon className="size-5" />
          </div>
          {tool.badge && (
            <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur text-[10px] font-bold tracking-wide text-white">
              {tool.badge}
            </span>
          )}
        </div>
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
          {tool.category}
        </p>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold tracking-tight">{tool.title}</h3>
          <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-magenta group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
          {tool.description}
        </p>
      </div>
    </a>
  );
}