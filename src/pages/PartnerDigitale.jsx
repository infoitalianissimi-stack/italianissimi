import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { OpenContactButton } from "../components/GuidedContact";
import { CtaBand, PageHero } from "../components/PageHero";
import { Prose } from "../components/Prose";
import { Section } from "../components/Section";
import { SectionHeading } from "../components/SectionHeading";
import { partnerNeeds } from "../data/content";
import { usePageMeta } from "../hooks/usePageMeta";

const benefits = [
  "Un solo interlocutore.",
  "Meno fornitori da coordinare.",
  "Una persona a cui spiegare il problema.",
  "Una valutazione della soluzione.",
  "Supporto nell’esecuzione.",
  "Coordinamento di eventuali altre competenze.",
];

export function PartnerDigitale() {
  usePageMeta({
    title: "Partner Digitale | Italianissimi",
    description:
      "Con Italianissimi hai un unico punto di riferimento per le esigenze digitali della tua attività.",
    path: "/partner-digitale",
  });

  return (
    <>
      <PageHero
        kicker="Partner Digitale"
        title="Un solo partner per il digitale della tua attività."
      >
        <p>
          Tu conosci il tuo lavoro. Italianissimi ti aiuta a far lavorare meglio il digitale.
        </p>
      </PageHero>
      <Section className="bg-white">
        <Container>
          <ul className="grid gap-3 sm:grid-cols-2">
            {partnerNeeds.map((item) => (
              <li key={item} className="card-lift border border-line bg-paper px-4 py-3.5 text-ink-soft">
                {item}
              </li>
            ))}
          </ul>
          <Prose className="mt-12">
            <p>
              Con Italianissimi hai un partner di fiducia a cui spiegare ciò che ti serve.
            </p>
            <p>
              Analizziamo insieme il problema, valutiamo le possibili soluzioni e decidiamo cosa ha
              davvero senso fare.
            </p>
            <p>Quando possiamo occuparcene direttamente, lo facciamo.</p>
            <p>
              Quando servono altre competenze, ti aiutiamo a individuare e coordinare la soluzione.
            </p>
          </Prose>
        </Container>
      </Section>
      <Section className="bg-paper">
        <Container>
          <SectionHeading title="Cosa significa, in pratica" />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {benefits.map((item) => (
              <li key={item} className="border-l-2 border-accent bg-white px-4 py-4 font-medium text-navy">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <OpenContactButton>Dimmi cosa vuoi migliorare</OpenContactButton>
            <Button to="/servizi" variant="secondary" arrow={false}>
              Scopri cosa possiamo fare
            </Button>
          </div>
        </Container>
      </Section>
      <CtaBand
        title="Quando hai un problema digitale, sai chi chiamare."
        actionLabel="Dimmi cosa vuoi migliorare"
        secondaryTo="/servizi"
      />
    </>
  );
}
