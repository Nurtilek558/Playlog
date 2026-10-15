import { accentStyles } from "@/lib/accents";
import { getInitials } from "@/lib/format";
import type { Game } from "@/lib/types";

interface GameCoverProps {
  game: Game;
  className?: string;
}

export default function GameCover({ game, className = "h-40" }: GameCoverProps) {
  const styles = accentStyles[game.accent];

  return (
    <div
      aria-hidden="true"
      className={`scanlines relative flex items-end overflow-hidden bg-gradient-to-br ${styles.cover} ${className}`}
    >
      <span className={`absolute -right-2 -top-4 font-display text-8xl opacity-25 ${styles.text}`}>
        {getInitials(game.title)}
      </span>
      <span className="relative p-4 font-display text-lg text-white">{game.title}</span>
    </div>
  );
}
