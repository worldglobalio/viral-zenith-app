import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Sparkles,
  Wrench,
  Trophy,
  Award,
  Bell,
  Settings,
  User,
  Gift,
  ShoppingBag,
  GraduationCap,
  Flag,
  Calendar,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { recentTools } from "@/lib/mock-dashboard";

interface NavItem {
  label: string;
  to: string;
  Icon: LucideIcon;
}

const menu: NavItem[] = [
  { label: "Dashboard", to: "/dashboard", Icon: LayoutDashboard },
  { label: "Herramientas", to: "/tools", Icon: Wrench },
  { label: "Ranking", to: "/ranking", Icon: Trophy },
  { label: "Logros", to: "/achievements", Icon: Award },
  { label: "Academy Points", to: "/points", Icon: Sparkles },
  { label: "Academy", to: "/academy", Icon: GraduationCap },
  { label: "Retos", to: "/challenges", Icon: Flag },
  { label: "Calendario", to: "/calendar", Icon: Calendar },
  { label: "Store", to: "/store", Icon: ShoppingBag },
  { label: "Referidos", to: "/referrals", Icon: Gift },
  { label: "Notificaciones", to: "/notifications", Icon: Bell },
  { label: "Perfil", to: "/profile", Icon: User },
  { label: "Ajustes", to: "/settings", Icon: Settings },
  { label: "Admin", to: "/admin", Icon: ShieldCheck },
];

export function DashboardSidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <aside className="hidden lg:flex w-64 shrink-0 flex-col bg-sidebar text-sidebar-foreground rounded-[28px] p-5 h-[calc(100vh-2rem)] sticky top-4">
      <Link to="/dashboard" className="flex items-center gap-2 px-2 mb-8">
        <div className="size-10 rounded-2xl bg-magenta grid place-items-center font-black text-primary-foreground">
          T
        </div>
        <div className="leading-tight">
          <div className="font-black text-base">TikTo<span className="text-magenta">Live</span></div>
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">creator suite</div>
        </div>
      </Link>

      <p className="px-3 text-[11px] uppercase tracking-widest text-muted-foreground mb-2">Menú</p>
      <nav className="flex flex-col gap-1">
        {menu.map((item) => {
          const active = pathname === item.to || (item.to === "/dashboard" && pathname === "/");
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`relative flex items-center gap-3 px-3 py-2.5 rounded-2xl text-sm transition-colors ${
                active
                  ? "bg-sidebar-accent text-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/50"
              }`}
            >
              {active && (
                <span className="absolute -left-5 top-1/2 -translate-y-1/2 h-6 w-1 rounded-full bg-magenta" />
              )}
              <item.Icon className="size-[18px]" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <p className="px-3 text-[11px] uppercase tracking-widest text-muted-foreground mt-8 mb-2">
        Usadas recientemente
      </p>
      <div className="flex flex-col gap-1">
        {recentTools.map((t) => (
          <Link
            key={t.slug}
            to={`/tools/${t.slug}` as never}
            className="flex items-center gap-3 px-3 py-2 rounded-2xl text-sm text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/50 transition-colors"
          >
            <div className="size-7 rounded-lg bg-surface-elevated grid place-items-center">
              <t.Icon className="size-3.5" />
            </div>
            <span className="truncate">{t.name}</span>
          </Link>
        ))}
      </div>

      <div className="mt-auto pt-6">
        <div className="flex items-center gap-3 p-2 rounded-2xl bg-sidebar-accent/50">
          <div className="relative">
            <div className="size-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-rose-600 grid place-items-center text-sm font-bold">
              PT
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full bg-online ring-2 ring-sidebar" />
          </div>
          <div className="leading-tight min-w-0">
            <div className="text-sm font-semibold truncate">Pathum Tzoo</div>
            <div className="text-[11px] text-muted-foreground">Nivel Avanzado</div>
          </div>
        </div>
      </div>
    </aside>
  );
}