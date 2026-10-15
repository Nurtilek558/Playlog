import type { Metadata } from "next";
import BookmarkedGames from "@/components/reviews/BookmarkedGames";
import Container from "@/components/ui/Container";
import PageHeading from "@/components/ui/PageHeading";

export const metadata: Metadata = {
  title: "Избранное",
  description: "Сохранённые обзоры игр."
};

export default function BookmarksPage() {
  return (
    <>
      <PageHeading title="Избранное" description="Обзоры, которые вы сохранили. Они хранятся в вашем браузере." />
      <Container className="pt-12">
        <BookmarkedGames />
      </Container>
    </>
  );
}
