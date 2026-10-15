export type Genre = "Экшен" | "RPG" | "Стратегия" | "Инди";

export type Accent = "iris" | "sage" | "sky";

export type GenreFilter = "Все" | Genre;

export type SortKey = "rating" | "date";

export interface Game {
  id: string;
  title: string;
  studio: string;
  releaseDate: string;
  genre: Genre;
  accent: Accent;
  rating: number;
  platforms: string[];
  summary: string;
  description: string;
  pros: string[];
  cons: string[];
}

export interface Milestone {
  id: string;
  year: number;
  decade: string;
  title: string;
  description: string;
  breakthrough: string;
  landmarkGames: string[];
  accent: Accent;
}

export interface NavigationLink {
  href: string;
  label: string;
}
