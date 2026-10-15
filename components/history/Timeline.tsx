"use client";

import { useState } from "react";
import { Cpu, Gamepad } from "lucide-react";
import { decades, milestones } from "@/data/timeline";
import { accentStyles } from "@/lib/accents";

export default function Timeline() {
  const [activeDecade, setActiveDecade] = useState(decades[0]);
  const visibleMilestones = milestones.filter((milestone) => milestone.decade === activeDecade);

  return (
    <div className="space-y-10">
      <div role="group" aria-label="Выбор десятилетия" className="flex flex-wrap gap-2">
        {decades.map((decade) => (
          <button
            key={decade}
            type="button"
            aria-pressed={activeDecade === decade}
            onClick={() => setActiveDecade(decade)}
            className={`rounded border px-4 py-2 font-display text-sm transition-colors ${
              activeDecade === decade
                ? "border-accent-sage bg-accent-sage text-ink-950"
                : "border-ink-600 text-slate-300 hover:border-accent-sage hover:text-accent-sage"
            }`}
          >
            {decade}
          </button>
        ))}
      </div>

      <ol key={activeDecade} className="relative space-y-8 border-l-2 border-ink-600 pl-6 sm:pl-10" aria-label={`Вехи ${activeDecade}`}>
        {visibleMilestones.map((milestone) => {
          const styles = accentStyles[milestone.accent];
          return (
            <li key={milestone.id} className="relative animate-phrase">
              <span
                aria-hidden="true"
                className={`absolute -left-[2.1rem] top-2 h-4 w-4 rounded-full border-2 border-ink-950 sm:-left-[3.1rem] ${styles.dot}`}
              />
              <article className={`rounded-lg border bg-ink-800 p-6 ${styles.border}`}>
                <p className={`font-display text-3xl ${styles.text}`}>
                  <time dateTime={String(milestone.year)}>{milestone.year}</time>
                </p>
                <h3 className="mt-2 font-display text-xl text-white">{milestone.title}</h3>
                <p className="mt-3 max-w-prose leading-relaxed text-slate-300">{milestone.description}</p>
                <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="flex items-center gap-2 text-sm font-semibold text-accent-sky">
                      <Cpu size={16} aria-hidden="true" />
                      Технологический прорыв
                    </dt>
                    <dd className="mt-1 text-sm text-slate-200">{milestone.breakthrough}</dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-2 text-sm font-semibold text-accent-iris">
                      <Gamepad size={16} aria-hidden="true" />
                      Знаковые игры
                    </dt>
                    <dd className="mt-1 text-sm text-slate-200">{milestone.landmarkGames.join(", ")}</dd>
                  </div>
                </dl>
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
