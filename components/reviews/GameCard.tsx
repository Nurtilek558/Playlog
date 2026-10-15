import BookmarkButton from "@/components/ui/BookmarkButton";
import GameCover from "@/components/ui/GameCover";
import GenreChip from "@/components/ui/GenreChip";
import RatingBadge from "@/components/ui/RatingBadge";
import { accentStyles } from "@/lib/accents";
import { formatReleaseDate } from "@/lib/format";
import type { Game } from "@/lib/types";

interface GameCardProps {
  game: Game;
  onOpen: (game: Game) => void;
}

export default function GameCard({ game, onOpen }: GameCardProps) {
  const styles = accentStyles[game.accent];

  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-lg border bg-ink-800 transition-shadow duration-300 ${styles.border} ${styles.hoverGlow}`}
    >
      <GameCover game={game} />
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-center justify-between gap-3">
          <GenreChip genre={game.genre} accent={game.accent} />
          <RatingBadge rating={game.rating} accent={game.accent} />
        </div>
        <h3 className="font-display text-lg text-white">{game.title}</h3>
        <p className="text-xs text-slate-400">
          {game.studio}, <time dateTime={game.releaseDate}>{formatReleaseDate(game.releaseDate)}</time>
        </p>
        <p className="flex-1 text-sm leading-relaxed text-slate-300">{game.summary}</p>
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => onOpen(game)}
            aria-label={`Читать обзор «${game.title}»`}
            className="rounded bg-accent-iris px-4 py-2 text-sm font-bold text-ink-950 transition-colors hover:bg-accent-sage"
          >
            Читать обзор
          </button>
          <BookmarkButton gameId={game.id} gameTitle={game.title} />
        </div>
      </div>
    </article>
  );
}
