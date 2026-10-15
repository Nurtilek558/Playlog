import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GameGrid from "@/components/reviews/GameGrid";
import Container from "@/components/ui/Container";
import { games } from "@/data/games";

const trendingGames = [...games].sort((first, second) => second.rating - first.rating).slice(0, 3);

export default function FeaturedReviews() {
  return (
    <section aria-labelledby="featured-title" className="pt-20">
      <Container>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="featured-title" className="font-display text-2xl text-white sm:text-4xl">
              Сейчас в тренде
            </h2>
            <p className="mt-2 text-slate-300">Три игры с самыми высокими оценками редакции.</p>
          </div>
          <Link href="/reviews" className="inline-flex items-center gap-2 font-semibold text-accent-sky hover:text-accent-sage">
            Все обзоры
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <GameGrid games={trendingGames} />
      </Container>
    </section>
  );
}
