import type { LucideIcon } from "lucide-react";
import {
  Trophy, Flame, Zap, Star, Crown, Target, Sparkles,
  Award, Users, TrendingUp, Calendar, BookOpen, Rocket,
} from "lucide-react";

/* RANKING */
export interface RankingEntry {
  rank: number;
  name: string;
  username: string;
  country: string;
  niche: string;
  score: number;
  delta: number;
  avatar: string;
}

const flags = ["🇦🇷", "🇲🇽", "🇨🇴", "🇨🇱", "🇵🇪", "🇻🇪", "🇪🇸", "🇺🇾"];
const niches = ["Entretenimiento", "Educación", "Tecnología", "Lifestyle", "Gaming", "Comedia"];
const grad = [
  "from-fuchsia-500 to-rose-600",
  "from-cyan-400 to-sky-600",
  "from-amber-400 to-rose-500",
  "from-violet-500 to-fuchsia-600",
  "from-emerald-400 to-cyan-500",
  "from-rose-500 to-red-700",
];

export const rankingEntries: RankingEntry[] = Array.from({ length: 20 }).map((_, i) => ({
  rank: i + 1,
  name: ["NovaRift", "ShadowBlaze", "PhoenixStrike", "VoidVertex", "FrostFang", "ThunderPulse",
    "CrimsonReaper", "EchoStorm", "MysticWraith", "DarkSpecter", "Pathum Tzoo", "LunaWolf",
    "SolarFlare", "NightHawk", "EmberSong", "StormChaser", "RaveDancer", "PixelQueen",
    "TidalWave", "CosmicByte"][i],
  username: `@user${i + 1}`,
  country: flags[i % flags.length],
  niche: niches[i % niches.length],
  score: Math.round(98 - i * 2.1 + Math.random() * 1.5),
  delta: Math.round((Math.random() - 0.4) * 10),
  avatar: grad[i % grad.length],
}));

/* ACHIEVEMENTS */
export interface Achievement {
  key: string;
  name: string;
  description: string;
  category: "ANÁLISIS" | "SOCIAL" | "APRENDIZAJE" | "HITOS";
  points: number;
  unlocked: boolean;
  unlockedAt?: string;
  Icon: LucideIcon;
  rarity: "común" | "raro" | "épico" | "legendario";
}

export const achievements: Achievement[] = [
  { key: "first_analysis", name: "Primer análisis", description: "Analizá tu primer video.", category: "ANÁLISIS", points: 50, unlocked: true, unlockedAt: "Hace 2 meses", Icon: Sparkles, rarity: "común" },
  { key: "viral_100", name: "Score viral 100", description: "Conseguí un Viral Score perfecto.", category: "ANÁLISIS", points: 500, unlocked: false, Icon: Flame, rarity: "legendario" },
  { key: "streak_7", name: "Racha 7 días", description: "Analizá videos 7 días seguidos.", category: "HITOS", points: 200, unlocked: true, unlockedAt: "La semana pasada", Icon: Zap, rarity: "raro" },
  { key: "top_100", name: "Top 100", description: "Entrá al top 100 del ranking mensual.", category: "HITOS", points: 300, unlocked: true, unlockedAt: "Hace 5 días", Icon: Trophy, rarity: "épico" },
  { key: "top_10", name: "Top 10", description: "Entrá al top 10 del ranking mensual.", category: "HITOS", points: 750, unlocked: false, Icon: Crown, rarity: "legendario" },
  { key: "referrer", name: "Embajador", description: "Invitá a 10 creadores.", category: "SOCIAL", points: 400, unlocked: false, Icon: Users, rarity: "épico" },
  { key: "first_course", name: "Aprendiz", description: "Completá tu primer curso.", category: "APRENDIZAJE", points: 150, unlocked: true, unlockedAt: "Hace 1 mes", Icon: BookOpen, rarity: "común" },
  { key: "all_tools", name: "Explorador", description: "Probá las 10 herramientas.", category: "ANÁLISIS", points: 250, unlocked: false, Icon: Target, rarity: "raro" },
  { key: "first_payout", name: "Primer cobro", description: "Canjeá tu primer payout.", category: "HITOS", points: 100, unlocked: false, Icon: Award, rarity: "raro" },
  { key: "growth_master", name: "Maestro del crecimiento", description: "Creció +50% en 30 días.", category: "ANÁLISIS", points: 600, unlocked: false, Icon: TrendingUp, rarity: "épico" },
  { key: "early_bird", name: "Madrugador", description: "Subiste a las 6am.", category: "HITOS", points: 75, unlocked: true, unlockedAt: "Hace 3 días", Icon: Calendar, rarity: "común" },
  { key: "launch", name: "Beta tester", description: "Te uniste en la beta.", category: "HITOS", points: 1000, unlocked: true, unlockedAt: "Hace 6 meses", Icon: Rocket, rarity: "legendario" },
  { key: "rising_star", name: "Estrella en ascenso", description: "Análisis con score >85.", category: "ANÁLISIS", points: 350, unlocked: true, unlockedAt: "Hace 1 semana", Icon: Star, rarity: "épico" },
];

/* POINTS LEDGER */
export interface PointsTx {
  id: string;
  action: string;
  description: string;
  amount: number;
  createdAt: string;
}

export const pointsHistory: PointsTx[] = [
  { id: "1", action: "Viral Score", description: "Análisis #248 — score 87", amount: 25, createdAt: "Hace 2 horas" },
  { id: "2", action: "Logro desbloqueado", description: "Madrugador", amount: 75, createdAt: "Hace 3 días" },
  { id: "3", action: "Reporte semanal", description: "Resumen enviado", amount: 50, createdAt: "Hace 4 días" },
  { id: "4", action: "Referido convertido", description: "@maria_creates se unió", amount: 200, createdAt: "Hace 5 días" },
  { id: "5", action: "Logro desbloqueado", description: "Top 100", amount: 300, createdAt: "Hace 5 días" },
  { id: "6", action: "Curso completado", description: "Hooks que retienen", amount: 100, createdAt: "Hace 1 semana" },
  { id: "7", action: "Canje", description: "Plan Pro 1 mes — descuento 20%", amount: -500, createdAt: "Hace 2 semanas" },
  { id: "8", action: "Viral Score", description: "Análisis #240 — score 72", amount: 15, createdAt: "Hace 2 semanas" },
  { id: "9", action: "Logro desbloqueado", description: "Racha 7 días", amount: 200, createdAt: "Hace 2 semanas" },
];

/* NOTIFICATIONS */
export type NotifType = "level_up" | "points" | "referral" | "report" | "milestone" | "redemption" | "challenge";
export interface Notification {
  id: string;
  type: NotifType;
  title: string;
  body: string;
  isRead: boolean;
  createdAt: string;
}

export const notifications: Notification[] = [
  { id: "1", type: "level_up", title: "¡Subiste a Avanzado!", body: "Ahora desbloqueás Forecaster y Competitor.", isRead: false, createdAt: "Hace 1 hora" },
  { id: "2", type: "points", title: "+200 AP", body: "Por convertir un referido.", isRead: false, createdAt: "Hace 2 horas" },
  { id: "3", type: "report", title: "Tu reporte semanal está listo", body: "Score promedio 78. Tendencia ▲ 12%.", isRead: false, createdAt: "Hace 4 horas" },
  { id: "4", type: "challenge", title: "Nuevo reto activo", body: "Analizá 5 videos esta semana para +150 AP.", isRead: true, createdAt: "Ayer" },
  { id: "5", type: "milestone", title: "Top 100", body: "Llegaste al puesto 47 del ranking global.", isRead: true, createdAt: "Hace 2 días" },
  { id: "6", type: "redemption", title: "Canje aprobado", body: "Plan Pro 1 mes — descuento 20%.", isRead: true, createdAt: "Hace 4 días" },
  { id: "7", type: "referral", title: "Nuevo referido", body: "@maria_creates se registró con tu link.", isRead: true, createdAt: "Hace 5 días" },
];