"use client";

import { useId, useMemo, useState } from "react";
import { games } from "@/data/games";
import type { GenreFilter, SortKey } from "@/lib/types";
import GameGrid from "./GameGrid";

const genreFilters: GenreFilter[] = ["Все", "Экшен", "RPG", "Стратегия", "Инди"];

const sortOptions: { value: SortKey; label: string }[] = [
  { value: "rating", label: "По рейтингу" },
  { value: "date", label: "По дате выхода" }
];

export default function ReviewBrowser() {
  const sortId = useId();
  const [genre, setGenre] = useState<GenreFilter>("Все");
  const [sortKey, setSortKey] = useState<SortKey>("rating");

  const visibleGames = useMemo(() => {
    const filtered = genre === "Все" ? games : games.filter((game) => game.genre === genre);
    return [...filtered].sort((first, second) =>
      sortKey === "rating"
        ? second.rating - first.rating
        : second.releaseDate.localeCompare(first.releaseDate)
    );
  }, [genre, sortKey]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div role="group" aria-label="Фильтр по жанру" className="flex flex-wrap gap-2">
          {genreFilters.map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={genre === option}
              onClick={() => setGenre(option)}
              className={`rounded border px-4 py-2 text-sm font-semibold transition-colors ${
                genre === option
                  ? "border-accent-iris bg-accent-iris text-ink-950"
                  : "border-ink-600 text-slate-300 hover:border-accent-iris hover:text-white"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <label htmlFor={sortId} className="text-sm text-slate-300">
            Сортировка
          </label>
          <select
            id={sortId}
            value={sortKey}
            onChange={(event) => setSortKey(event.target.value as SortKey)}
            className="rounded border border-ink-600 bg-ink-800 px-3 py-2 text-sm text-white"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="text-sm text-slate-400" role="status">
        Найдено обзоров: {visibleGames.length}
      </p>

      <GameGrid games={visibleGames} />
    </div>
  );
}
