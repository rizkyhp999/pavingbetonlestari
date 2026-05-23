import "./css/style.css";

import { Inter } from "next/font/google";

import Header from "@/components/ui/header";
import WhatsAppCTA from "@/components/ui/whatsapp-cta";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Paving Beton Lestari Lampung - Paving Block & Panel Beton Berkualitas",
  description: "Produsen paving block, pagar panel beton, dan kanstin berkualitas premium standar SNI di Lampung. Terpercaya lebih dari 20 tahun.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} scroll-smooth`}>
      <head>
        <meta
          name="google-site-verification"
          content="wY0RJe4nK4UYICMD1Vs63FK3awqcOnMxxXvo0HXi4hI"
        />
      </head>
      <body
        className="font-inter antialiased bg-stone-50 text-stone-900 text-lg leading-relaxed selection:bg-stone-200 selection:text-stone-900"
      >
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          <main className="grow">
            {children}
          </main>
          <WhatsAppCTA />
          <SpeedInsights />
          <Analytics />
        </div>
      </body>
    </html>
  );
}

