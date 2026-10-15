"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, History } from "lucide-react";
import Container from "@/components/ui/Container";
import { games } from "@/data/games";
import { heroPhrases } from "@/data/navigation";

const RING_CIRCUMFERENCE = 339.29;
const topGame = [...games].sort((first, second) => second.rating - first.rating)[0];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setPhraseIndex((current) => (current + 1) % heroPhrases.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, []);

  const ringOffset = RING_CIRCUMFERENCE * (1 - topGame.rating / 10);

  return (
    <section className="grid-backdrop border-b border-ink-700">
      <Container className="grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <h1 className="font-display text-4xl leading-tight text-white sm:text-6xl">
            Игры, которые стоят вашего времени
          </h1>
          <p key={phraseIndex} className="mt-6 min-h-[3.5rem] animate-phrase text-xl text-accent-sage sm:text-2xl">
            {heroPhrases[phraseIndex]}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 rounded bg-accent-iris px-6 py-3 font-bold text-ink-950 transition-colors hover:bg-accent-sage"
            >
              Смотреть обзоры
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              href="/history"
              className="inline-flex items-center gap-2 rounded border border-accent-sky px-6 py-3 font-bold text-accent-sky transition-colors hover:bg-accent-sky hover:text-ink-950"
            >
              <History size={18} aria-hidden="true" />
              История индустрии
            </Link>
          </div>
        </div>

        <aside
          aria-label="Лучшая игра по оценке редакции"
          className="clip-corner scanlines mx-auto w-full max-w-sm border border-accent-iris/40 bg-ink-800 p-6 text-center shadow-soft-iris"
        >
          <svg viewBox="0 0 120 120" className="mx-auto h-40 w-40 -rotate-90" role="img" aria-label={`Оценка ${topGame.rating} из 10`}>
            <circle cx="60" cy="60" r="54" fill="none" strokeWidth="8" className="stroke-ink-600" />
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={RING_CIRCUMFERENCE}
              strokeDashoffset={ringOffset}
              className="animate-ring stroke-accent-sage"
            />
          </svg>
          <p className="-mt-28 mb-14 font-display text-4xl text-white">{topGame.rating.toFixed(1)}</p>
          <p className="text-sm text-slate-400">Лучшая оценка редакции</p>
          <p className="mt-1 font-display text-xl text-white">{topGame.title}</p>
          <p className="text-sm text-slate-300">{topGame.studio}</p>
        </aside>
      </Container>
    </section>
  );
}
