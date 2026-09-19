import { Container } from "../components/Container";
import { OpenContactButton } from "../components/GuidedContact";
import { CtaBand, PageHero } from "../components/PageHero";
import { Section } from "../components/Section";
import { ServiceBlock } from "../components/ServiceBlock";
import { media } from "../data/media";
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
      <PageHero
        kicker="Servizi"
        title="Cosa possiamo fare per la tua attività"
        image={media("servizi-organizzazione.jpg")}
        imageAlt="Scrivania di lavoro con computer, telefono e strumenti digitali organizzati."
        imagePosition="object-[38%_center] sm:object-[46%_center] lg:object-[52%_center]"
      >
        <p>
          Non devi sapere in anticipo se ti serve un sito, un CRM, un’automazione o una gestione
          social. Indica il problema. Partiamo da lì.
        </p>
      </PageHero>
      <Section className="bg-paper">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
          {services.map((service) => (
            <div key={service.id} id={service.id} className="grid scroll-mt-28 gap-5">
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
