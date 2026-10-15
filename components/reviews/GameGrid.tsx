"use client";

import { useState } from "react";
import type { Game } from "@/lib/types";
import GameCard from "./GameCard";
import ReviewModal from "./ReviewModal";

interface GameGridProps {
  games: Game[];
}

export default function GameGrid({ games }: GameGridProps) {
  const [activeGame, setActiveGame] = useState<Game | null>(null);

  return (
    <>
      <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {games.map((game) => (
          <li key={game.id}>
            <GameCard game={game} onOpen={setActiveGame} />
          </li>
        ))}
      </ul>
      <ReviewModal game={activeGame} onClose={() => setActiveGame(null)} />
    </>
  );
}
