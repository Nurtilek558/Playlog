import Container from "./Container";

interface PageHeadingProps {
  title: string;
  description: string;
}

export default function PageHeading({ title, description }: PageHeadingProps) {
  return (
    <section className="grid-backdrop border-b border-ink-700">
      <Container className="py-12 sm:py-16">
        <h1 className="font-display text-3xl text-white sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-300">{description}</p>
      </Container>
    </section>
  );
}
