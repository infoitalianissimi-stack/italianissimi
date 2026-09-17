import { Container } from "../components/Container";
import { OpenContactButton } from "../components/GuidedContact";
import { CtaBand, PageHero } from "../components/PageHero";
import { Section } from "../components/Section";
import { ServiceBlock } from "../components/ServiceBlock";
import { services } from "../data/content";
import { usePageMeta } from "../hooks/usePageMeta";

export function Servizi() {
  usePageMeta({
    title: "Servizi | Italianissimi",
    description:
      "Immagine e comunicazione, web, tecnologia, automazioni e intelligenza artificiale: partiamo dal problema della tua attività.",
    path: "/servizi",
  });

  return (
    <>
      <PageHero kicker="Servizi" title="Cosa possiamo fare per la tua attività">
        <p>
          Non devi sapere in anticipo se ti serve un sito, un CRM, un’automazione o una gestione
          social. Indica il problema. Partiamo da lì.
        </p>
      </PageHero>
      <Section className="bg-paper">
        <Container className="grid gap-8">
          {services.map((service) => (
    <div key={service.id} id={service.id} className="grid scroll-mt-28 gap-4">
              <ServiceBlock service={service} showExamples />
              <OpenContactButton className="w-fit">Inizia da qui</OpenContactButton>
            </div>
          ))}
        </Container>
      </Section>
      <CtaBand
        title="Partiamo dal problema, non dal prodotto."
        actionLabel="Dimmi cosa vuoi migliorare"
      />
    </>
  );
}
