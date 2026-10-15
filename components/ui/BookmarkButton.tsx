"use client";

import { Bookmark } from "lucide-react";
import { useBookmarks } from "@/context/BookmarksProvider";

interface BookmarkButtonProps {
  gameId: string;
  gameTitle: string;
  withLabel?: boolean;
}

export default function BookmarkButton({ gameId, gameTitle, withLabel = false }: BookmarkButtonProps) {
  const { has, toggle } = useBookmarks();
  const isSaved = has(gameId);

  return (
    <button
      type="button"
      onClick={() => toggle(gameId)}
      aria-pressed={isSaved}
      aria-label={isSaved ? `Убрать «${gameTitle}» из избранного` : `Добавить «${gameTitle}» в избранное`}
      className={`inline-flex items-center gap-2 rounded border px-3 py-2 text-sm font-semibold transition-colors ${
        isSaved
          ? "border-accent-sage bg-accent-sage/15 text-accent-sage"
          : "border-ink-600 text-slate-300 hover:border-accent-sage hover:text-accent-sage"
      }`}
    >
      <Bookmark size={16} aria-hidden="true" fill={isSaved ? "currentColor" : "none"} />
      {withLabel ? (isSaved ? "В избранном" : "В избранное") : null}
    </button>
  );
}
