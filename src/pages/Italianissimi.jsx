import { Container } from "../components/Container";
import { CtaBand, PageHero } from "../components/PageHero";
import { Button } from "../components/Button";
import { OpenContactButton } from "../components/GuidedContact";
import { Prose } from "../components/Prose";
import { Section } from "../components/Section";
import { SectionHeading } from "../components/SectionHeading";
import { media } from "../data/media";
import { usePageMeta } from "../hooks/usePageMeta";

export function Italianissimi() {
  usePageMeta({
    title: "Italianissimi | Partner Digitale",
    description:
      "Italianissimi nasce dal lavoro vero: partner digitale per imprese e professionisti, partendo dal problema e non dal prodotto.",
    path: "/italianissimi",
  });

  return (
    <>
      <PageHero
        kicker="Italianissimi"
        title="Italianissimi nasce dal lavoro vero."
        image={media("italianissimi-hero.jpg")}
        imageAlt="Ambiente di lavoro reale, da cui nasce Italianissimi."
      >
        <p>
          Non proponiamo una tecnologia perché esiste. Cerchiamo di capire se può essere utile.
        </p>
      </PageHero>
      <Section className="bg-white">
        <Container className="grid gap-12 lg:grid-cols-12">
          <SectionHeading
            className="lg:col-span-5"
            kicker="Perché nasce"
            title="Dal lavoro quotidiano, non da un catalogo servizi."
          />
          <Prose className="lg:col-span-7">
            <img
              src={media("italianissimi-lavoro-vero.jpg")}
              alt="Lavoro quotidiano in azienda, tra documenti, scadenze e attività reali."
              width="1200"
              height="800"
              className="mb-10 aspect-[16/10] w-full object-cover"
            />
            <p>La nostra visione non nasce da una scrivania di un’agenzia.</p>
            <p>
              Nasce dall’esperienza concreta del lavoro quotidiano, dal rapporto con aziende,
              imprenditori, colleghi, clienti, scadenze e problemi da risolvere.
            </p>
            <p>
              Anni trascorsi a contatto con il mondo delle imprese hanno mostrato una realtà molto
              semplice:
            </p>
            <p>chi gestisce un’attività ha già abbastanza cose a cui pensare.</p>
            <p>Il digitale dovrebbe aiutare. Invece spesso aggiunge complessità.</p>
          </Prose>
        </Container>
      </Section>
      <Section className="bg-paper">
        <Container className="grid gap-12 lg:grid-cols-12">
          <SectionHeading
            className="lg:col-span-5"
            kicker="Partner Digitale"
            title="Una persona di fiducia, non dieci fornitori."
          />
          <Prose className="lg:col-span-7">
            <p>Siti, social, email, software, password, fornitori, automazioni, intelligenza artificiale.</p>
            <p>Italianissimi nasce con l’obiettivo di semplificare questo rapporto.</p>
            <p>
              Puoi indicare il problema a una persona sola. Ascoltiamo, capiamo e proponiamo una
              soluzione concreta.
            </p>
            <p>Quando possiamo occuparcene, lo facciamo. Quando servono altre competenze, le coordiniamo.</p>
          </Prose>
        </Container>
      </Section>
      <Section className="bg-white">
        <Container className="grid gap-12 lg:grid-cols-12">
          <SectionHeading
            className="lg:col-span-5"
            kicker="Approccio"
            title="Partiamo dal problema, non dal prodotto."
          />
          <Prose className="lg:col-span-7">
            <p>Non proponiamo una tecnologia perché esiste.</p>
            <p>Cerchiamo di capire se può essere utile.</p>
            <p>Non partiamo dal prodotto da vendere.</p>
            <p>Partiamo dal problema da risolvere.</p>
            <div className="flex flex-wrap gap-3 pt-4">
              <OpenContactButton>Dimmi cosa vuoi migliorare</OpenContactButton>
              <Button to="/servizi" variant="secondary" arrow={false}>
                Scopri cosa possiamo fare
              </Button>
            </div>
          </Prose>
        </Container>
      </Section>
      <CtaBand
        title="Un punto di riferimento per il digitale."
        text="Indica cosa oggi non funziona, o cosa vuoi migliorare."
        actionLabel="Dimmi cosa vuoi migliorare"
        secondaryTo="/servizi"
      />
    </>
  );
}
