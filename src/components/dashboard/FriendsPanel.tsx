import { UserPlus } from "lucide-react";
import { onlineFriends, offlineFriends } from "@/lib/mock-dashboard";

export function FriendsPanel() {
  return (
    <aside className="hidden xl:flex w-64 shrink-0 flex-col gap-5">
      <div>
        <div className="flex items-center justify-between mb-3 px-1">
          <h3 className="text-sm font-semibold">
            Conectados <span className="text-muted-foreground font-normal">· {onlineFriends.length}</span>
          </h3>
          <span className="size-2 rounded-full bg-online animate-pulse" />
        </div>
        <ul className="space-y-1">
          {onlineFriends.map((f) => (
            <li
              key={f.name}
              className="flex items-center gap-3 p-2 rounded-2xl hover:bg-surface transition-colors cursor-pointer"
            >
              <div className="relative shrink-0">
                <div className={`size-9 rounded-full bg-gradient-to-br ${f.avatarBg}`} />
                <span className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full bg-online ring-2 ring-background" />
              </div>
              <div className="min-w-0 leading-tight">
                <div className="text-sm font-medium truncate">{f.name}</div>
                {f.activity && (
                  <div className="text-[11px] text-muted-foreground truncate">{f.activity}</div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3 px-1">
          Desconectados <span className="text-muted-foreground font-normal">· {offlineFriends.length}</span>
        </h3>
        <ul className="space-y-1">
          {offlineFriends.map((f) => (
            <li
              key={f.name}
              className="flex items-center gap-3 p-2 rounded-2xl hover:bg-surface transition-colors cursor-pointer opacity-60"
            >
              <div className={`size-9 rounded-full bg-gradient-to-br ${f.avatarBg} grayscale`} />
              <div className="text-sm font-medium truncate">{f.name}</div>
            </li>
          ))}
        </ul>
      </div>

      <button className="mt-2 inline-flex items-center justify-center gap-2 h-11 w-full rounded-full bg-surface border border-border text-sm font-medium hover:border-magenta/40 hover:text-magenta transition-colors">
        <UserPlus className="size-4" />
        Invitar creadores
      </button>
    </aside>
  );
}