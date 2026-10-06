import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Flame, Mail, Lock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/auth")({
  component: AuthPage,
});

function AuthPage() {
  const [mode, setMode] = useState<"login" | "register">("login");
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background text-foreground">
      <div className="hidden lg:flex relative bg-gradient-to-br from-magenta via-fuchsia-700 to-violet-700 p-12 flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_70%,white,transparent_50%)]" />
        <Link to="/landing" className="relative flex items-center gap-2 font-black text-xl">
          <div className="size-10 rounded-2xl bg-white/15 grid place-items-center"><Flame className="size-5" /></div>
          TikToLive
        </Link>
        <div className="relative">
          <p className="text-3xl md:text-4xl font-black leading-tight max-w-md">
            "Subí mi engagement 4x en 3 meses analizando cada video con Viral Score."
          </p>
          <p className="text-sm opacity-80 mt-4">— Pathum Tzoo, 200k seguidores</p>
        </div>
      </div>

      <div className="flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-sm">
          <div className="flex gap-2 p-1 rounded-2xl bg-surface mb-8">
            {(["login", "register"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`flex-1 h-10 rounded-xl text-sm font-bold transition ${
                  mode === m ? "bg-magenta text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                {m === "login" ? "Login (demo)" : "Registro (demo)"}
              </button>
            ))}
          </div>

          <h1 className="text-3xl font-black mb-2">
            {mode === "login" ? "Explorá la demo" : "Probá la experiencia"}
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            Esta es una demostración. No se validan credenciales, no se crean cuentas ni se inicia una sesión.
          </p>

          <div className="space-y-3">
            <button type="button" disabled aria-describedby="demo-social-note" className="w-full h-11 rounded-xl bg-surface-elevated text-sm font-semibold inline-flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-50">
              <span className="size-4 rounded-full bg-white grid place-items-center text-[10px] text-black font-black">G</span> Google (no disponible)
            </button>
            <button type="button" disabled aria-describedby="demo-social-note" className="w-full h-11 rounded-xl bg-surface-elevated text-sm font-semibold inline-flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-50">
              <span className="size-4 rounded-full bg-white text-black grid place-items-center text-[10px] font-black">t</span> TikTok (no disponible)
            </button>
          </div>

          <p id="demo-social-note" className="text-xs text-muted-foreground mt-3">
            El acceso con Google y TikTok no está disponible en esta demo.
          </p>

          <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex-1 h-px bg-border" /> VISTA PREVIA DEL FORMULARIO <div className="flex-1 h-px bg-border" />
          </div>

          <div className="space-y-3">
            <label className="block relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input type="email" disabled aria-label="Email (no disponible en la demo)" placeholder="Email deshabilitado en la demo" className="w-full h-11 pl-10 pr-4 rounded-xl bg-surface-elevated text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50" />
            </label>
            <label className="block relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input type="password" disabled aria-label="Contraseña (no disponible en la demo)" placeholder="Contraseña deshabilitada" className="w-full h-11 pl-10 pr-4 rounded-xl bg-surface-elevated text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50" />
            </label>
            <Link to="/dashboard" className="w-full h-11 rounded-xl bg-magenta text-primary-foreground text-sm font-bold inline-flex items-center justify-center gap-2">
              Explorar demo <ArrowRight className="size-4" />
            </Link>
          </div>

          <p className="text-xs text-muted-foreground text-center mt-6">
            {mode === "login" ? "Vista previa de registro: " : "Vista previa de login: "}
            <button onClick={() => setMode(mode === "login" ? "register" : "login")} className="text-magenta font-semibold">
              {mode === "login" ? "Ver registro" : "Ver login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}