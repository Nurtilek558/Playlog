import type { Accent } from "./types";

interface AccentStyle {
  text: string;
  border: string;
  hoverGlow: string;
  cover: string;
  chip: string;
  fill: string;
  stroke: string;
  dot: string;
}

export const accentStyles: Record<Accent, AccentStyle> = {
  iris: {
    text: "text-accent-iris",
    border: "border-accent-iris/40",
    hoverGlow: "hover:shadow-soft-iris",
    cover: "from-accent-iris/25 via-ink-800 to-ink-900",
    chip: "border-accent-iris/50 bg-accent-iris/10 text-accent-iris",
    fill: "bg-accent-iris",
    stroke: "stroke-accent-iris",
    dot: "bg-accent-iris"
  },
  sage: {
    text: "text-accent-sage",
    border: "border-accent-sage/40",
    hoverGlow: "hover:shadow-soft-sage",
    cover: "from-accent-sage/25 via-ink-800 to-ink-900",
    chip: "border-accent-sage/50 bg-accent-sage/10 text-accent-sage",
    fill: "bg-accent-sage",
    stroke: "stroke-accent-sage",
    dot: "bg-accent-sage"
  },
  sky: {
    text: "text-accent-sky",
    border: "border-accent-sky/40",
    hoverGlow: "hover:shadow-soft-sky",
    cover: "from-accent-sky/25 via-ink-800 to-ink-900",
    chip: "border-accent-sky/50 bg-accent-sky/10 text-accent-sky",
    fill: "bg-accent-sky",
    stroke: "stroke-accent-sky",
    dot: "bg-accent-sky"
  }
};
