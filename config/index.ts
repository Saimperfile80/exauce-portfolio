import type { Metadata } from "next";
import { PERSONAL_INFO } from "@/constants/portfolio";

export const siteConfig: Metadata = {
  title: `${PERSONAL_INFO.shortName} — ${PERSONAL_INFO.primaryTitle}`,
  description: `Portfolio of ${PERSONAL_INFO.shortName}, a software developer building web, desktop and AI-powered applications designed to solve real-world problems.`,
  keywords: [
    "Exaucé Kass",
    "Kasongo Exaucé",
    "BuildinCode",
    "Saimperfile80",
    "Software Developer",
    "Full-Stack Developer",
    "AI Enthusiast",
    "Product Builder",
    "243MLM Academy",
    "FastAPI",
    "Laravel",
    "Symfony",
    "Ruby on Rails",
    "React 19",
    "Next.js",
    "TypeScript",
    "Python",
    "PyQt6",
    "C# .NET",
    "WPF",
    "Flutter",
    "Dart",
    "Supabase",
    "Local AI",
    "AI Agents",
    "FastMCP",
    "Whisper",
    "Qwen",
    "Tauri",
    "Electron",
    "African Tech Solutions",
    "Kolwezi",
    "DR Congo",
    "Space Portfolio"
  ],
  authors: [
    {
      name: `${PERSONAL_INFO.name} (${PERSONAL_INFO.digitalIdentity})`,
      url: PERSONAL_INFO.contact.github,
    }
  ],
  creator: PERSONAL_INFO.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://buildincode.dev",
    title: `${PERSONAL_INFO.shortName} — Software Developer | AI Enthusiast | Product Builder`,
    description: PERSONAL_INFO.positioning,
    siteName: `${PERSONAL_INFO.shortName} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_INFO.shortName} — Software Developer | AI Enthusiast`,
    description: PERSONAL_INFO.positioning,
    creator: "@BuildinCode",
  },
  robots: {
    index: true,
    follow: true,
  },
};
