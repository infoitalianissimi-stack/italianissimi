import { Container } from "../components/Container";
import { GuidedContact } from "../components/GuidedContact";
import { MethodStep } from "../components/MethodStep";
import { NeedCard } from "../components/NeedCard";
import { CtaBand } from "../components/PageHero";
import { PhotoHero } from "../components/PhotoHero";
import { ProblemCard } from "../components/ProblemCard";
import { Prose } from "../components/Prose";
import { Reveal } from "../components/Reveal";
import { Section } from "../components/Section";
import { SectionHeading } from "../components/SectionHeading";
import { ServiceBlock } from "../components/ServiceBlock";
import { helpWhen, methodSteps, partnerNeeds, problems, services } from "../data/content";
import { usePageMeta } from "../hooks/usePageMeta";

export function Home() {
  usePageMeta({ path: "/" });

  return (
    <>
      <PhotoHero />

      <Section id="ti-aiutiamo" ariaLabelledby="help-title" className="bg-white">
        <Container>
          <Reveal>
            <SectionHeading
              title="Ti aiutiamo quando devi…"
              titleId="help-title"
            />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {helpWhen.map((item, index) => (
              <Reveal key={item.id} delay={index * 70}>
                <NeedCard item={item} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="partiamo" ariaLabelledby="situazioni-title" className="bg-paper">
        <Container>
          <Reveal>
            <SectionHeading
              kicker="Da dove partiamo?"
              title="Ti riconosci in una di queste situazioni?"
              titleId="situazioni-title"
            />
          </Reveal>
          <Reveal delay={80}>
            <Prose className="mt-6">
              <p>Il digitale dovrebbe semplificare il lavoro.</p>
              <p>
                Troppo spesso, invece, significa nuovi strumenti da imparare, fornitori diversi da
                coordinare, abbonamenti, password, piattaforme e decisioni da prendere.
              </p>
              <p>Per questo non partiamo dicendoti cosa devi comprare.</p>
            </Prose>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {problems.map((text, index) => (
              <Reveal key={text} delay={index * 90}>
                <ProblemCard text={text} index={index} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={80}>
            <p className="mt-10 max-w-xl text-xl font-semibold leading-snug text-navy sm:text-2xl">
              Se il problema è questo, il primo passo non è acquistare un software.
              <span className="mt-2 block font-medium text-ink-soft">È capire cosa va migliorato.</span>
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section
        id="partner-digitale"
        ariaLabelledby="partner-title"
        className="relative overflow-hidden bg-navy-deep text-white"
      >
        <div className="command-orb command-orb-c" aria-hidden="true" />
        <Container>
          <Reveal>
            <SectionHeading
              inverted
              title="Un solo partner per il digitale della tua attività."
              titleId="partner-title"
            />
          </Reveal>
          <ul className="mt-10 grid list-none gap-3 sm:grid-cols-2">
            {partnerNeeds.map((item, index) => (
              <Reveal key={item} delay={index * 40} as="li">
                <div className="rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3.5 text-white/80">
                  {item}
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={80}>
            <Prose inverted className="mt-10">
              <p>
                Italianissimi ascolta il problema, valuta la soluzione e ti aiuta a realizzarla.
              </p>
              <p>Quando possiamo occuparcene direttamente, lo facciamo.</p>
              <p>
                Quando servono altre competenze, ti aiutiamo a coordinare la soluzione.
              </p>
            </Prose>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-10 max-w-xl text-xl font-semibold leading-snug text-white">
              Tu conosci il tuo lavoro.
              <span className="mt-2 block font-medium text-white/70">
                Italianissimi ti aiuta a far lavorare meglio il digitale.
              </span>
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section id="servizi" ariaLabelledby="servizi-title" className="bg-white">
        <Container>
          <Reveal>
            <SectionHeading
              title="Cosa possiamo fare per la tua attività"
              titleId="servizi-title"
            />
          </Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.id} delay={index * 70}>
                <ServiceBlock service={service} compact />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="metodo" ariaLabelledby="metodo-title" className="bg-paper">
        <Container>
          <Reveal>
            <SectionHeading title="Come lavoriamo" titleId="metodo-title" />
          </Reveal>
          <div className="relative mt-12">
            <div
              className="absolute left-[4.5rem] right-[4.5rem] top-[1.1rem] hidden h-px bg-navy/10 lg:block"
              aria-hidden="true"
            />
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {methodSteps.map((step, index) => (
                <Reveal key={step.number} delay={index * 80}>
                  <MethodStep step={step} />
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section id="italianissimi" ariaLabelledby="storia-title" className="bg-white">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <SectionHeading
              kicker="Italianissimi"
              title="Italianissimi nasce dal lavoro vero."
              titleId="storia-title"
            />
          </Reveal>
          <Reveal delay={90} className="lg:col-span-7 lg:col-start-6">
            <Prose>
              <p>La nostra visione non nasce da una scrivania di un’agenzia.</p>
              <p>
                Nasce dall’esperienza concreta del lavoro quotidiano, dal rapporto con aziende,
                imprenditori, colleghi, clienti, scadenze e problemi da risolvere.
              </p>
              <p>
                Anni trascorsi a contatto con il mondo delle imprese hanno mostrato una realtà molto
                semplice: chi gestisce un’attività ha già abbastanza cose a cui pensare.
              </p>
              <p>Il digitale dovrebbe aiutare. Invece spesso aggiunge complessità.</p>
              <p>
                Siti, social, email, software, password, fornitori, automazioni, intelligenza
                artificiale.
              </p>
              <p>Italianissimi nasce con l’obiettivo di semplificare questo rapporto.</p>
            </Prose>
            <p className="mt-10 max-w-md border-l-[3px] border-accent pl-5 text-lg font-medium leading-snug text-navy">
              Non proponiamo una tecnologia perché esiste.
              <span className="mt-2 block font-normal text-ink-soft">Cerchiamo di capire se può essere utile.</span>
            </p>
            <p className="mt-6 max-w-md text-ink-soft">
              Non partiamo dal prodotto da vendere. Partiamo dal problema da risolvere.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section id="contatto-guidato" className="bg-paper">
        <Container>
          <Reveal>
            <GuidedContact />
          </Reveal>
        </Container>
      </Section>

      <CtaBand
        title="Non devi diventare un esperto di tecnologia."
        subtitle={
          <>
            Devi poter fare bene il tuo lavoro.
            <br />
            Al digitale possiamo pensarci insieme.
          </>
        }
        text="Che tu abbia già le idee chiare oppure un problema da risolvere, il primo passo è capire cosa va migliorato."
        actionLabel="Dimmi cosa vuoi migliorare"
        secondaryTo="/servizi"
      />
    </>
  );
}
