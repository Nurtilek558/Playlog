import type { Metadata } from "next";
import { Exo_2, Russo_One } from "next/font/google";
import type { ReactNode } from "react";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { BookmarksProvider } from "@/context/BookmarksProvider";
import "./globals.css";

const bodyFont = Exo_2({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  display: "swap"
});

const displayFont = Russo_One({
  subsets: ["latin", "cyrillic"],
  weight: "400",
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Playlog — обзоры игр и история индустрии",
    template: "%s | Playlog"
  },
  description: "Обзоры игр с оценками, плюсами и минусами и интерактивная история видеоигр с 1970-х годов."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body className="min-h-screen font-body antialiased">
        <BookmarksProvider>
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent-sage focus:px-4 focus:py-2 focus:text-ink-950"
          >
            Перейти к содержимому
          </a>
          <Header />
          <main id="content">{children}</main>
          <Footer />
        </BookmarksProvider>
      </body>
    </html>
  );
}
