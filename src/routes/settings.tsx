import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { useState } from "react";
import { User, Bell, Shield, CreditCard, Globe, Palette } from "lucide-react";

export const Route = createFileRoute("/settings")({
  component: SettingsPage,
});

const tabs = [
  { key: "account", label: "Cuenta", Icon: User },
  { key: "notifs", label: "Notificaciones", Icon: Bell },
  { key: "security", label: "Seguridad", Icon: Shield },
  { key: "billing", label: "Plan & Pagos", Icon: CreditCard },
  { key: "lang", label: "Idioma & región", Icon: Globe },
  { key: "appearance", label: "Apariencia", Icon: Palette },
] as const;

function Field({ label, value, type = "text" }: { label: string; value?: string; type?: string }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      <input
        type={type}
        defaultValue={value}
        className="mt-2 w-full h-11 rounded-xl bg-surface-elevated px-4 text-sm outline-none focus:ring-2 focus:ring-magenta"
      />
    </label>
  );
}

function Toggle({ label, desc, defaultChecked = false }: { label: string; desc?: string; defaultChecked?: boolean }) {
  const [on, setOn] = useState(defaultChecked);
  return (
    <div className="flex items-start justify-between gap-4 py-4 border-b border-border last:border-0">
      <div>
        <p className="text-sm font-semibold">{label}</p>
        {desc && <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>}
      </div>
      <button
        onClick={() => setOn(!on)}
        className={`relative w-11 h-6 rounded-full transition-colors ${on ? "bg-magenta" : "bg-surface-elevated"}`}
      >
        <span className={`absolute top-0.5 size-5 rounded-full bg-white transition-transform ${on ? "translate-x-5" : "translate-x-0.5"}`} />
      </button>
    </div>
  );
}

function SettingsPage() {
  const [tab, setTab] = useState<(typeof tabs)[number]["key"]>("account");
  return (
    <DashboardShell eyebrow="Configuración" title="Ajustes" rightPanel={false}>
      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-6">
        <nav className="rounded-3xl bg-surface p-3 h-fit">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl text-sm transition ${
                tab === t.key ? "bg-surface-elevated text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <t.Icon className="size-[18px]" /> {t.label}
            </button>
          ))}
        </nav>

        <div className="rounded-3xl bg-surface p-6 md:p-8">
          {tab === "account" && (
            <div className="space-y-5">
              <h3 className="font-black text-lg">Información de cuenta</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Nombre completo" value="Pathum Tzoo" />
                <Field label="Usuario" value="@pathum" />
                <Field label="Email" value="pathum@tiktolive.com" type="email" />
                <Field label="País" value="Argentina" />
              </div>
              <Field label="Bio" value="Creador de contenido enfocado en entretenimiento y educación digital." />
              <button className="h-11 px-5 rounded-xl bg-magenta text-primary-foreground text-sm font-semibold">Guardar cambios</button>
            </div>
          )}
          {tab === "notifs" && (
            <div>
              <h3 className="font-black text-lg mb-3">Notificaciones</h3>
              <Toggle label="Reporte semanal por email" desc="Cada lunes 9am" defaultChecked />
              <Toggle label="Logros desbloqueados" defaultChecked />
              <Toggle label="Nuevos retos" defaultChecked />
              <Toggle label="Push del navegador" />
              <Toggle label="Newsletter de TikToLive" />
            </div>
          )}
          {tab === "security" && (
            <div className="space-y-5">
              <h3 className="font-black text-lg">Seguridad</h3>
              <Field label="Contraseña actual" type="password" />
              <Field label="Nueva contraseña" type="password" />
              <Toggle label="Autenticación de dos factores" desc="Protegé tu cuenta con un código adicional" />
              <button className="h-11 px-5 rounded-xl bg-magenta text-primary-foreground text-sm font-semibold">Actualizar</button>
            </div>
          )}
          {tab === "billing" && (
            <div className="space-y-5">
              <h3 className="font-black text-lg">Plan actual</h3>
              <div className="rounded-2xl bg-gradient-to-br from-magenta to-fuchsia-700 p-6">
                <p className="text-xs uppercase tracking-widest opacity-80">Plan</p>
                <p className="text-3xl font-black mt-1">Academy</p>
                <p className="text-sm opacity-90 mt-2">Renueva el 15 de Julio · USD 19/mes</p>
              </div>
              <button className="h-11 px-5 rounded-xl bg-surface-elevated text-sm font-semibold">Cambiar plan</button>
            </div>
          )}
          {tab === "lang" && (
            <div className="space-y-5">
              <h3 className="font-black text-lg">Idioma y región</h3>
              <Field label="Idioma" value="Español (Latam)" />
              <Field label="Zona horaria" value="GMT-3 Buenos Aires" />
              <Field label="Moneda" value="USD" />
            </div>
          )}
          {tab === "appearance" && (
            <div>
              <h3 className="font-black text-lg mb-4">Apariencia</h3>
              <div className="grid grid-cols-2 gap-3">
                {["Dark", "Midnight", "Crimson", "Cyber"].map((t) => (
                  <button key={t} className="h-24 rounded-2xl bg-surface-elevated grid place-items-center text-sm font-semibold hover:ring-2 hover:ring-magenta transition">
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardShell>
  );
}