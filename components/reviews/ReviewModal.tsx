"use client";

import { useEffect, useRef } from "react";
import { ThumbsDown, ThumbsUp, X } from "lucide-react";
import BookmarkButton from "@/components/ui/BookmarkButton";
import GameCover from "@/components/ui/GameCover";
import GenreChip from "@/components/ui/GenreChip";
import RatingBadge from "@/components/ui/RatingBadge";
import { formatReleaseDate } from "@/lib/format";
import type { Game } from "@/lib/types";

interface ReviewModalProps {
  game: Game | null;
  onClose: () => void;
}

export default function ReviewModal({ game, onClose }: ReviewModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (game && !dialog.open) dialog.showModal();
    if (!game && dialog.open) dialog.close();
  }, [game]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
      aria-labelledby="review-title"
      className="m-auto w-[min(92vw,44rem)] max-h-[90vh] overflow-y-auto rounded-lg border border-accent-iris/50 bg-ink-900 p-0 text-slate-200 shadow-soft-iris backdrop:bg-black/80 backdrop:backdrop-blur-sm open:animate-dialog"
    >
      {game ? (
        <div>
          <div className="relative">
            <GameCover game={game} className="h-48" />
            <button
              type="button"
              onClick={onClose}
              aria-label="Закрыть обзор"
              className="absolute right-3 top-3 rounded border border-ink-600 bg-ink-950/80 p-2 text-white hover:border-accent-sage hover:text-accent-sage"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>

          <div className="space-y-6 p-6">
            <header className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <GenreChip genre={game.genre} accent={game.accent} />
                <RatingBadge rating={game.rating} accent={game.accent} />
              </div>
              <h2 id="review-title" className="font-display text-2xl text-white sm:text-3xl">
                {game.title}
              </h2>
              <p className="text-sm text-slate-400">
                {game.studio}, <time dateTime={game.releaseDate}>{formatReleaseDate(game.releaseDate)}</time>.
                Платформы: {game.platforms.join(", ")}
              </p>
            </header>

            <p className="max-w-prose leading-relaxed">{game.description}</p>

            <div className="grid gap-4 sm:grid-cols-2">
              <section aria-labelledby="pros-title" className="rounded border border-accent-sage/30 p-4">
                <h3 id="pros-title" className="flex items-center gap-2 font-display text-accent-sage">
                  <ThumbsUp size={16} aria-hidden="true" />
                  Плюсы
                </h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {game.pros.map((pro) => (
                    <li key={pro}>{pro}</li>
                  ))}
                </ul>
              </section>
              <section aria-labelledby="cons-title" className="rounded border border-accent-iris/30 p-4">
                <h3 id="cons-title" className="flex items-center gap-2 font-display text-accent-iris">
                  <ThumbsDown size={16} aria-hidden="true" />
                  Минусы
                </h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {game.cons.map((con) => (
                    <li key={con}>{con}</li>
                  ))}
                </ul>
              </section>
            </div>

            <BookmarkButton gameId={game.id} gameTitle={game.title} withLabel />
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
