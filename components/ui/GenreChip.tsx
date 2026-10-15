import { accentStyles } from "@/lib/accents";
import type { Accent, Genre } from "@/lib/types";

interface GenreChipProps {
  genre: Genre;
  accent: Accent;
}

export default function GenreChip({ genre, accent }: GenreChipProps) {
  return (
    <span className={`inline-block rounded border px-2 py-0.5 text-xs font-semibold ${accentStyles[accent].chip}`}>
      {genre}
    </span>
  );
}
