import { accentStyles } from "@/lib/accents";
import type { Accent } from "@/lib/types";

interface RatingBadgeProps {
  rating: number;
  accent: Accent;
}

export default function RatingBadge({ rating, accent }: RatingBadgeProps) {
  const styles = accentStyles[accent];

  return (
    <div className="flex items-center gap-2" role="img" aria-label={`Оценка ${rating} из 10`}>
      <span className={`font-display text-xl ${styles.text}`}>{rating.toFixed(1)}</span>
      <span className="h-1.5 w-16 overflow-hidden rounded-full bg-ink-600" aria-hidden="true">
        <span className={`block h-full ${styles.fill}`} style={{ width: `${rating * 10}%` }} />
      </span>
    </div>
  );
}
