"use client";

import Link from "next/link";
import { games } from "@/data/games";
import { useBookmarks } from "@/context/BookmarksProvider";
import GameGrid from "./GameGrid";

export default function BookmarkedGames() {
  const { ids, isReady } = useBookmarks();
  const savedGames = games.filter((game) => ids.includes(game.id));

  if (!isReady) {
    return <p className="text-slate-400" role="status">Загружаем избранное…</p>;
  }

  if (savedGames.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-ink-600 p-10 text-center">
        <p className="font-display text-xl text-white">В избранном пока пусто</p>
        <p className="mt-2 text-slate-300">Нажмите на закладку в карточке игры, чтобы сохранить обзор.</p>
        <Link
          href="/reviews"
          className="mt-6 inline-block rounded bg-accent-iris px-6 py-3 font-bold text-ink-950 hover:bg-accent-sage"
        >
          Перейти к обзорам
        </Link>
      </div>
    );
  }

  return <GameGrid games={savedGames} />;
}
