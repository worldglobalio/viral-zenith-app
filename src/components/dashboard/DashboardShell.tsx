import type { ReactNode } from "react";
import { DashboardSidebar } from "./DashboardSidebar";
import { Topbar } from "./Topbar";
import { FriendsPanel } from "./FriendsPanel";

interface DashboardShellProps {
  children: ReactNode;
  eyebrow?: string;
  title?: ReactNode;
  rightPanel?: ReactNode | false;
}

export function DashboardShell({
  children,
  eyebrow,
  title,
  rightPanel,
}: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-[1600px] flex gap-6 p-4 md:p-6">
        <DashboardSidebar />
        <main className="flex-1 min-w-0">
          <Topbar />
          {(eyebrow || title) && (
            <header className="mb-6">
              {eyebrow && (
                <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
                  {eyebrow}
                </p>
              )}
              {title && (
                <h1 className="text-2xl md:text-3xl font-black tracking-tight">{title}</h1>
              )}
            </header>
          )}
          {children}
        </main>
        {rightPanel === false ? null : rightPanel ?? <FriendsPanel />}
      </div>
    </div>
  );
}