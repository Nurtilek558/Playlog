import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { milestones } from "@/data/timeline";

export default function HistoryTeaser() {
  const first = milestones[0];
  const last = milestones[milestones.length - 1];

  return (
    <section aria-labelledby="teaser-title" className="pt-20">
      <Container>
        <div className="clip-corner flex flex-col gap-6 border border-accent-sky/40 bg-ink-800 p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 id="teaser-title" className="font-display text-2xl text-white sm:text-3xl">
              От {first.year} до {last.year}: пятьдесят лет игр
            </h2>
            <p className="mt-3 max-w-xl text-slate-300">
              Интерактивная лента с ключевыми технологиями и играми, которые меняли индустрию.
            </p>
          </div>
          <Link
            href="/history"
            className="inline-flex items-center gap-2 self-start rounded bg-accent-sky px-6 py-3 font-bold text-ink-950 transition-colors hover:bg-accent-sage"
          >
            Открыть таймлайн
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
