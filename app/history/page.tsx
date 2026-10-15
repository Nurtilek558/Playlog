import type { Metadata } from "next";
import Timeline from "@/components/history/Timeline";
import Container from "@/components/ui/Container";
import PageHeading from "@/components/ui/PageHeading";

export const metadata: Metadata = {
  title: "История индустрии",
  description: "Интерактивный таймлайн видеоигр: от аркадных автоматов 1970-х до современных релизов."
};

export default function HistoryPage() {
  return (
    <>
      <PageHeading
        title="История видеоигр"
        description="Выберите десятилетие и узнайте, какие технологии и игры изменили индустрию."
      />
      <Container className="pt-12">
        <Timeline />
      </Container>
    </>
  );
}
