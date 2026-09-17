import { Container } from "../components/Container";
import { MethodStep } from "../components/MethodStep";
import { CtaBand, PageHero } from "../components/PageHero";
import { Section } from "../components/Section";
import { media } from "../data/media";
import { methodSteps } from "../data/content";
import { usePageMeta } from "../hooks/usePageMeta";

export function Metodo() {
  usePageMeta({
    title: "Come lavoriamo | Italianissimi",
    description:
      "Ascoltiamo, semplifichiamo, realizziamo e restiamo un punto di riferimento per il digitale della tua attività.",
    path: "/metodo",
  });

  return (
    <>
      <PageHero
        kicker="Metodo"
        title="Come lavoriamo"
        image={media("metodo-hero.jpg")}
        imageAlt="Lavoro di analisi e confronto, partendo dall’attività reale."
      >
        <p>Partiamo dalla tua attività, non dal nostro catalogo servizi.</p>
      </PageHero>
      <Section className="bg-paper">
        <Container className="grid gap-4 md:grid-cols-2">
          {methodSteps.map((step) => (
            <MethodStep key={step.number} step={step} />
          ))}
        </Container>
      </Section>
      <CtaBand
        title="Il primo passo è capire cosa va migliorato."
        actionLabel="Dimmi cosa vuoi migliorare"
        secondaryTo="/servizi"
      />
    </>
  );
}
