import "./css/style.css";

import { Inter } from "next/font/google";
import type { Metadata } from 'next';

import Header from "@/components/ui/header";
import Banner from "@/components/banner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: '%s | Paving Beton Lestari Lampung',
    default: 'Paving Beton Lestari Lampung - Kualitas Terjamin',
  },
  description: "Solusi material konstruksi berkualitas tinggi di Lampung — dari paving beton, panel beton elegan, hingga pagar precast kokoh yang dirancang untuk keandalan jangka panjang.",
  keywords: ["Paving Beton Lampung", "Panel Beton Lampung", "Pagar Precast", "Fiberglass", "Material Konstruksi"],
  openGraph: {
    title: 'Paving Beton Lestari Lampung',
    description: 'Solusi material konstruksi berkualitas tinggi di Lampung.',
    url: 'https://pavingbetonlestari.com',
    siteName: 'Paving Beton Lestari',
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <meta
          name="google-site-verification"
          content="wY0RJe4nK4UYICMD1Vs63FK3awqcOnMxxXvo0HXi4hI"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${inter.variable} font-inter antialiased bg-slate-50 text-slate-900 tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-x-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          <main className="grow">
            {children}
          </main>
          <SpeedInsights />
          <Analytics />
          <Banner />
        </div>
      </body>
    </html>
  );
}
