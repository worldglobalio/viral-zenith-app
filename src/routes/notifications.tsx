import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { notifications as initialNotifs, type NotifType } from "@/lib/mock-pages";
import { TrendingUp, Sparkles, Users, FileText, Trophy, Gift, Target, BellOff, type LucideIcon } from "lucide-react";

export const Route = createFileRoute("/notifications")({
  head: () => ({ meta: [{ title: "Notificaciones — TikToLive" }] }),
  component: NotificationsPage,
});

const typeMap: Record<NotifType, { Icon: LucideIcon; bg: string; text: string }> = {
  level_up: { Icon: TrendingUp, bg: "bg-cyan-accent/15", text: "text-cyan-accent" },
  points: { Icon: Sparkles, bg: "bg-magenta/15", text: "text-magenta" },
  referral: { Icon: Users, bg: "bg-yellow-accent/15", text: "text-yellow-accent" },
  report: { Icon: FileText, bg: "bg-cyan-accent/15", text: "text-cyan-accent" },
  milestone: { Icon: Trophy, bg: "bg-yellow-accent/15", text: "text-yellow-accent" },
  redemption: { Icon: Gift, bg: "bg-magenta/15", text: "text-magenta" },
  challenge: { Icon: Target, bg: "bg-cyan-accent/15", text: "text-cyan-accent" },
};

function NotificationsPage() {
  const [list, setList] = useState(initialNotifs);
  const [filter, setFilter] = useState<"todas" | "no-leidas">("todas");
  const filtered = filter === "no-leidas" ? list.filter((n) => !n.isRead) : list;
  const unreadCount = list.filter((n) => !n.isRead).length;

  return (
    <DashboardShell
      eyebrow="Centro de actividad"
      title={<>Tus <span className="text-magenta">notificaciones</span></>}
      rightPanel={false}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex gap-2">
          {(["todas", "no-leidas"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`h-9 px-4 rounded-full text-xs font-semibold transition ${
                filter === f
                  ? "bg-magenta text-primary-foreground"
                  : "bg-surface border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {f === "todas" ? "Todas" : `No leídas · ${unreadCount}`}
            </button>
          ))}
        </div>
        <button
          onClick={() => setList((l) => l.map((n) => ({ ...n, isRead: true })))}
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          Marcar todas como leídas
        </button>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-3xl bg-surface border border-border p-16 text-center">
          <div className="size-16 rounded-3xl bg-surface-elevated grid place-items-center mx-auto mb-4">
            <BellOff className="size-7 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-bold mb-1">Todo al día</h3>
          <p className="text-sm text-muted-foreground">No tenés notificaciones sin leer.</p>
        </div>
      ) : (
        <div className="rounded-3xl bg-surface border border-border overflow-hidden">
          {filtered.map((n) => {
            const { Icon, bg, text } = typeMap[n.type];
            return (
              <button
                key={n.id}
                onClick={() => setList((l) => l.map((x) => x.id === n.id ? { ...x, isRead: true } : x))}
                className={`w-full flex items-start gap-4 px-6 py-4 border-b border-border last:border-0 text-left transition hover:bg-surface-elevated ${
                  !n.isRead ? "bg-magenta/[0.03]" : ""
                }`}
              >
                <div className={`size-11 shrink-0 rounded-2xl grid place-items-center ${bg} ${text}`}>
                  <Icon className="size-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-sm font-bold">{n.title}</h4>
                    {!n.isRead && <span className="size-2 rounded-full bg-magenta" />}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{n.body}</p>
                </div>
                <span className="text-[11px] text-muted-foreground shrink-0 whitespace-nowrap">
                  {n.createdAt}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </DashboardShell>
  );
}
