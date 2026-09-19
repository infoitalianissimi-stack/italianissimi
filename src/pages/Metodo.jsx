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
      <PageHero kicker="Metodo" title="Come lavoriamo">
        <p>Partiamo dalla tua attività, non dal nostro catalogo servizi.</p>
      </PageHero>
      <figure className="bg-white">
        <img
          src={media("metodo-ascolto.jpg")}
          alt="Confronto di lavoro intorno a un tavolo, per capire il problema reale."
          width="1600"
          height="900"
          className="h-auto w-full"
        />
      </figure>
      <Section className="bg-paper">
        <Container className="grid gap-10 md:grid-cols-2 lg:gap-x-14 lg:gap-y-16">
          {methodSteps.map((step) => (
            <MethodStep key={step.number} step={step} showImage={false} />
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
