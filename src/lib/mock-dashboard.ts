import type { LucideIcon } from "lucide-react";
import {
  Flame,
  Sparkles,
  Calculator,
  TrendingUp,
  Users,
  Megaphone,
  Target,
  LineChart,
  Layers,
  FileText,
} from "lucide-react";

export interface MockUser {
  name: string;
  username: string;
  avatar: string;
  plan: "FREE" | "ACADEMY" | "ENTERPRISE" | "BECA";
  level: string;
  points: number;
  nextLevelAt: number;
  rank: number;
}

export interface ToolCard {
  slug: string;
  title: string;
  category: string;
  description: string;
  badge?: "NUEVO" | "PRO" | "BETA";
  accent: "magenta" | "cyan" | "yellow" | "violet";
  Icon: LucideIcon;
}

export interface FriendChip {
  name: string;
  avatarBg: string;
  status: "online" | "offline";
  activity?: string;
}

export const mockUser: MockUser = {
  name: "Pathum Tzoo",
  username: "@pathum",
  avatar: "PT",
  plan: "ACADEMY",
  level: "AVANZADO",
  points: 1840,
  nextLevelAt: 3000,
  rank: 47,
};

export const kpis = [
  { label: "Análisis totales", value: "248", delta: "+12 esta semana", accent: "cyan" as const },
  { label: "Academy Points", value: "1.840", delta: "+320 este mes", accent: "magenta" as const },
  { label: "Ranking global", value: "#47", delta: "▲ 8 posiciones", accent: "yellow" as const },
  { label: "Análisis del mes", value: "34", delta: "Meta: 50", accent: "cyan" as const },
];

export const featuredTool: ToolCard = {
  slug: "viral-score",
  title: "Viral Score",
  category: "ANÁLISIS PRINCIPAL",
  description:
    "Analizá cualquier video de TikTok y obtené un score viral con desglose por hook, sonido, retención y engagement.",
  badge: "NUEVO",
  accent: "magenta",
  Icon: Flame,
};

export const spotlightTools: ToolCard[] = [
  {
    slug: "content-ideas",
    title: "Content Ideas",
    category: "IA GENERATIVA",
    description: "Genera ideas por nicho con hook y CTA listos.",
    accent: "magenta",
    Icon: Sparkles,
  },
  {
    slug: "calculadora",
    title: "Calculadora",
    category: "MONETIZACIÓN",
    description: "Estima ingresos por views, regalos y Creator Fund.",
    accent: "cyan",
    Icon: Calculator,
  },
  {
    slug: "forecaster",
    title: "Forecaster",
    category: "PROYECCIONES",
    description: "Proyección de crecimiento a 30/60/90 días.",
    badge: "PRO",
    accent: "violet",
    Icon: TrendingUp,
  },
  {
    slug: "competitor",
    title: "Competitor",
    category: "INTELIGENCIA",
    description: "Auditá la estrategia de cualquier creador.",
    badge: "PRO",
    accent: "yellow",
    Icon: Target,
  },
  {
    slug: "audience",
    title: "Audience",
    category: "DEMOGRAFÍA",
    description: "Edad, género, país y horas pico de tu audiencia.",
    accent: "cyan",
    Icon: Users,
  },
];

export const secondaryTools: ToolCard[] = [
  {
    slug: "trends",
    title: "Trends",
    category: "TENDENCIAS",
    description: "Lo que está explotando en tu nicho ahora.",
    accent: "magenta",
    Icon: LineChart,
  },
  {
    slug: "spark-ads",
    title: "Spark Ads",
    category: "PUBLICIDAD",
    description: "Simulador de campañas con CPM e impresiones.",
    accent: "yellow",
    Icon: Megaphone,
  },
  {
    slug: "multi-account",
    title: "Multi Account",
    category: "GESTIÓN",
    description: "Conectá y administrá varias cuentas TikTok.",
    accent: "violet",
    Icon: Layers,
  },
  {
    slug: "weekly-report",
    title: "Weekly Report",
    category: "REPORTES",
    description: "Tu resumen semanal con insights accionables.",
    badge: "BETA",
    accent: "cyan",
    Icon: FileText,
  },
];

export const onlineFriends: FriendChip[] = [
  { name: "ShadowBlaze", avatarBg: "from-fuchsia-500 to-rose-500", status: "online", activity: "Analizando · Viral Score" },
  { name: "PhoenixStrike", avatarBg: "from-amber-400 to-rose-500", status: "online", activity: "En Forecaster" },
  { name: "VoidVertex", avatarBg: "from-cyan-400 to-sky-600", status: "online" },
  { name: "FrostFang", avatarBg: "from-sky-300 to-indigo-500", status: "online" },
  { name: "ThunderPulse", avatarBg: "from-violet-500 to-fuchsia-600", status: "online", activity: "Subió de nivel" },
  { name: "NovaRift", avatarBg: "from-emerald-400 to-cyan-500", status: "online" },
  { name: "CrimsonReaper", avatarBg: "from-rose-500 to-red-700", status: "online" },
];

export const offlineFriends: FriendChip[] = [
  { name: "DarkSpecter", avatarBg: "from-zinc-600 to-zinc-800", status: "offline" },
  { name: "EchoStorm", avatarBg: "from-zinc-600 to-zinc-800", status: "offline" },
  { name: "MysticWraith", avatarBg: "from-zinc-600 to-zinc-800", status: "offline" },
];

export const recentTools = [
  { name: "Viral Score", slug: "viral-score", Icon: Flame },
  { name: "Forecaster", slug: "forecaster", Icon: TrendingUp },
  { name: "Competitor", slug: "competitor", Icon: Target },
  { name: "Trends", slug: "trends", Icon: LineChart },
  { name: "Weekly Report", slug: "weekly-report", Icon: FileText },
];