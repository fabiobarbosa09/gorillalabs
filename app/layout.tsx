import type { Metadata, Viewport } from "next";

import localFont from "next/font/local";
import { JetBrains_Mono, Manrope } from "next/font/google";

import "@/app/globals.css";
import { siteConfig } from "@/lib/site-config";
import { getSiteUrl } from "@/lib/utils";

const displayFont = localFont({
  src: [
    { path: "../font helvena/Helvena-Regular.ttf", weight: "400", style: "normal" },
    { path: "../font helvena/Helvena-Medium.ttf", weight: "500", style: "normal" },
    { path: "../font helvena/Helvena-Semibold.ttf", weight: "600", style: "normal" },
    { path: "../font helvena/Helvena-Bold.ttf", weight: "700", style: "normal" },
    { path: "../font helvena/Helvena-Extrabold.ttf", weight: "800", style: "normal" },
    { path: "../font helvena/Helvena-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["500", "700"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gorilla Labs | Ag\u00eancia de automa\u00e7\u00e3o de IA, branding e performance",
    template: "%s | Gorilla Labs",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "ag\u00eancia de automa\u00e7\u00e3o de IA",
    "branding",
    "tr\u00e1fego pago",
    "social media",
    "design",
    "edi\u00e7\u00e3o de v\u00eddeo",
    "v\u00eddeos virais com IA",
    "an\u00e1lise de mercado",
    "ag\u00eancia de marketing com IA",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gorilla Labs | Ag\u00eancia de automa\u00e7\u00e3o de IA, branding e performance",
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Gorilla Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gorilla Labs | Ag\u00eancia de automa\u00e7\u00e3o de IA, branding e performance",
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
    apple: [{ url: "/icon.svg" }],
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#09020f",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} font-body bg-[#06010d] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}