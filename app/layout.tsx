import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import { CursorOrb } from "@/components/cursor-orb";
import "./globals.css";

const sans = Space_Grotesk({
  variable: "--font-brand-sans",
  subsets: ["latin"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-brand-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Kotaro Hachiro | Portfolio",
  description:
    "Kotaro Hachiro のポートフォリオサイト。Next.js を軸に、学習支援プロダクトや Web アプリ、拡張機能の制作実績を掲載。",
  keywords: [
    "Kotaro Hachiro",
    "Portfolio",
    "Next.js",
    "Frontend",
    "Backend",
    "Boostudy",
  ],
  authors: [{ name: "Kotaro Hachiro" }],
  openGraph: {
    title: "Kotaro Hachiro | Portfolio",
    description:
      "学習支援プロダクトや Web アプリ、拡張機能の制作実績を掲載したポートフォリオ。",
    type: "website",
    locale: "ja_JP",
    siteName: "Kotaro Hachiro Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kotaro Hachiro | Portfolio",
    description:
      "Next.js を軸にした制作実績とスキルセットをまとめたポートフォリオサイト。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${sans.variable} ${mono.variable} h-full snap-y snap-mandatory scroll-pt-24 scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <CursorOrb />
        {children}
      </body>
    </html>
  );
}
