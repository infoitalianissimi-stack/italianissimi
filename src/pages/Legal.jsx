import { Container } from "../components/Container";
import { PageHero } from "../components/PageHero";
import { Section } from "../components/Section";
import { company } from "../data/company";
import { usePageMeta } from "../hooks/usePageMeta";

export function Privacy() {
  usePageMeta({
    title: "Privacy Policy | Italianissimi",
    description: "Informativa sulla privacy di Italianissimi SRLS a socio unico.",
    path: "/privacy",
  });

  return (
    <>
      <PageHero kicker="Documenti" title="Privacy Policy" />
      <Section>
        <Container className="max-w-3xl text-ink-soft">
          <p className="font-medium text-navy">Informativa in fase di completamento.</p>
          <p className="mt-6">
            Questa pagina conterrà l’informativa sul trattamento dei dati personali di{" "}
            {company.legalName}.
          </p>
          <p className="mt-4">
            Per richieste nel frattempo:{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a> — PEC{" "}
            <a href={`mailto:${company.pec}`}>{company.pec}</a>.
          </p>
        </Container>
      </Section>
    </>
  );
}

export function Cookie() {
  usePageMeta({
    title: "Cookie Policy | Italianissimi",
    description: "Informativa cookie di Italianissimi SRLS a socio unico.",
    path: "/cookie",
  });

  return (
    <>
      <PageHero kicker="Documenti" title="Cookie Policy" />
      <Section>
        <Container className="max-w-3xl text-ink-soft">
          <p className="font-medium text-navy">Informativa in fase di completamento.</p>
          <p className="mt-6">
            Questa pagina conterrà l’informativa sui cookie utilizzati dal sito di{" "}
            {company.legalName}.
          </p>
          <p className="mt-4">
            Al momento il sito non imposta cookie di profilazione. Il testo definitivo sarà
            pubblicato insieme alle modalità effettive di raccolta dei dati.
          </p>
        </Container>
      </Section>
    </>
  );
}
