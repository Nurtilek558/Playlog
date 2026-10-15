const monthYearFormatter = new Intl.DateTimeFormat("ru-RU", {
  month: "long",
  year: "numeric",
  timeZone: "UTC"
});

export function formatReleaseDate(isoDate: string): string {
  return monthYearFormatter.format(new Date(isoDate));
}

export function getInitials(title: string): string {
  return title
    .split(" ")
    .filter((word) => /^[\p{L}\d]/u.test(word))
    .slice(0, 3)
    .map((word) => word[0].toUpperCase())
    .join("");
}
