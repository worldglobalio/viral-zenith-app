import { kpis, mockUser } from "@/lib/mock-dashboard";

const accentText: Record<string, string> = {
  magenta: "text-magenta",
  cyan: "text-cyan-accent",
  yellow: "text-yellow-accent",
};

export function KpiRow() {
  const pct = Math.round((mockUser.points / mockUser.nextLevelAt) * 100);
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {kpis.map((k) => (
        <div
          key={k.label}
          className="rounded-3xl bg-surface border border-border p-5 hover:border-magenta/30 transition-colors"
        >
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-2">{k.label}</p>
          <p className="tabular text-3xl md:text-4xl font-extrabold tracking-tight leading-none">{k.value}</p>
          <p className={`mt-2 text-[11px] font-medium ${accentText[k.accent] ?? "text-muted-foreground"}`}>
            {k.delta}
          </p>
          {k.label === "Academy Points" && (
            <div className="mt-3 h-1.5 rounded-full bg-secondary overflow-hidden">
              <div
                className="h-full rounded-full bg-magenta"
                style={{ width: `${pct}%` }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}