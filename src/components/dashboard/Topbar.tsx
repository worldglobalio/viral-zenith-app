import { Search, Gamepad2, Bell, ShoppingBag } from "lucide-react";

export function Topbar() {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="relative flex-1 max-w-2xl">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <input
          type="search"
          placeholder="Buscar herramientas, análisis, creadores…"
          className="w-full h-12 rounded-full bg-surface border border-border pl-12 pr-5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-magenta/40 focus:border-magenta transition"
        />
      </div>

      <div className="ml-auto flex items-center gap-2">
        <button className="size-11 rounded-full bg-surface border border-border grid place-items-center text-muted-foreground hover:text-foreground hover:border-magenta/40 transition-colors">
          <Gamepad2 className="size-[18px]" />
        </button>
        <button className="relative size-11 rounded-full bg-surface border border-border grid place-items-center text-muted-foreground hover:text-foreground hover:border-magenta/40 transition-colors">
          <Bell className="size-[18px]" />
          <span className="absolute top-2 right-2 size-2 rounded-full bg-magenta" />
        </button>
        <button className="size-11 rounded-full bg-surface border border-border grid place-items-center text-muted-foreground hover:text-foreground hover:border-magenta/40 transition-colors">
          <ShoppingBag className="size-[18px]" />
        </button>
      </div>
    </div>
  );
}