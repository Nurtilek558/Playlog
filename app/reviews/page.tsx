import type { Metadata } from "next";
import ReviewBrowser from "@/components/reviews/ReviewBrowser";
import Container from "@/components/ui/Container";
import PageHeading from "@/components/ui/PageHeading";

export const metadata: Metadata = {
  title: "Обзоры игр",
  description: "Обзоры игр с оценками, плюсами и минусами. Фильтры по жанрам и сортировка по рейтингу."
};

export default function ReviewsPage() {
  return (
    <>
      <PageHeading
        title="Обзоры игр"
        description="Выбирайте жанр, сортируйте по рейтингу или дате и открывайте подробный разбор."
      />
      <Container className="pt-12">
        <ReviewBrowser />
      </Container>
    </>
  );
}
