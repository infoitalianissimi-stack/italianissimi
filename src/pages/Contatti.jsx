import { company } from "../data/company";
import { ContactForm } from "../components/ContactForm";
import { Container } from "../components/Container";
import { EmailAction } from "../components/EmailAction";
import { GuidedContact } from "../components/GuidedContact";
import { PageHero } from "../components/PageHero";
import { Section } from "../components/Section";
import { WhatsAppAction } from "../components/WhatsAppAction";
import { usePageMeta } from "../hooks/usePageMeta";

export function Contatti() {
  usePageMeta({
    title: "Contatti | Italianissimi",
    description:
      "WhatsApp o email. Non serve sapere già quale soluzione ti serve: indica cosa vuoi migliorare.",
    path: "/contatti",
  });

  return (
    <>
      <PageHero kicker="Contatti" title="Dimmi cosa vuoi migliorare">
        <p>Non serve sapere già quale soluzione ti serve. Indica cosa vuoi migliorare: WhatsApp o email.</p>
      </PageHero>
      <Section className="bg-paper">
        <Container>
          <GuidedContact />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppAction />
            <EmailAction />
          </div>
        </Container>
      </Section>
      <Section className="bg-white">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="display text-2xl text-navy">Recapiti</h2>
            <dl className="mt-6 space-y-5">
              <div>
                <dt className="text-sm text-muted">WhatsApp</dt>
                <dd className="mt-1 text-lg">
                  <a href={company.whatsappUrl} target="_blank" rel="noreferrer">
                    {company.whatsapp}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-muted">Email</dt>
                <dd className="mt-1 text-lg">
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-muted">PEC</dt>
                <dd className="mt-1">
                  <a href={`mailto:${company.pec}`}>{company.pec}</a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="lg:col-span-7">
            <h2 className="display text-2xl text-navy">Preferisci scrivere?</h2>
            <p className="mt-3 max-w-xl text-ink-soft">
              Il contatto guidato resta il modo più rapido. Se vuoi, puoi anche inviare una
              richiesta da questo modulo.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
