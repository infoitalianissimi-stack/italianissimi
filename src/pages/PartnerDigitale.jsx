import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { OpenContactButton } from "../components/GuidedContact";
import { CtaBand, PageHero } from "../components/PageHero";
import { Prose } from "../components/Prose";
import { Section } from "../components/Section";
import { SectionHeading } from "../components/SectionHeading";
import { media } from "../data/media";
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

const needLinks = [
  { label: partnerNeeds[0], to: "/servizi#web" },
  { label: partnerNeeds[1], to: "/servizi#immagine" },
  { label: partnerNeeds[2], to: "/servizi#immagine" },
  { label: partnerNeeds[3], to: "/servizi#web" },
  { label: partnerNeeds[4], to: "/servizi#automazioni" },
  { label: partnerNeeds[5], to: "/servizi#tecnologia" },
  { label: partnerNeeds[6], to: "/servizi#automazioni" },
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
        kicker="Come ti aiutiamo"
        title="Un solo partner per il digitale della tua attività."
        image={media("contatti-hero.jpg")}
        imageAlt="Confronto di lavoro al telefono, per ascoltare e capire cosa migliorare."
        imagePosition="object-[70%_18%] sm:object-[62%_22%] lg:object-[56%_26%]"
      >
        <p>
          Tu conosci il tuo lavoro. Italianissimi ti aiuta a far lavorare meglio il digitale.
        </p>
      </PageHero>
      <Section className="bg-white">
        <Container>
          <SectionHeading
            kicker="Nel quotidiano"
            title="Quando nasce un’esigenza digitale, puoi partire da qui."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {needLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="card-lift flex h-full items-start gap-4 border border-navy/[0.08] bg-paper px-5 py-5 text-ink-soft transition-colors duration-200 hover:border-navy/20 hover:text-navy"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Prose className="mt-14">
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
              <li key={item} className="border-l-2 border-accent bg-white px-5 py-4 font-medium text-navy">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <OpenContactButton>Dimmi cosa vuoi migliorare</OpenContactButton>
            <Button to="/servizi" variant="secondary" arrow={false}>
              Scopri come possiamo aiutarti
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
