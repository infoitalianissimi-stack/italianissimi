import { Container } from "../components/Container";
import { PageHero } from "../components/PageHero";
import { Section } from "../components/Section";
import { company } from "../data/company";
import { usePageMeta } from "../hooks/usePageMeta";

const UPDATED = "settembre 2026";

const LINKS = {
  githubPrivacy:
    "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement",
  githubCookies: "https://docs.github.com/en/site-policy/privacy-policies/github-cookies",
  garante: "https://www.garanteprivacy.it/",
  whatsapp: "https://www.whatsapp.com/legal/privacy-policy-eea",
  meta: "https://www.facebook.com/privacy/policy/",
  google: "https://policies.google.com/privacy",
};

function Ext({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-accent/70 underline-offset-2 transition-colors hover:text-navy hover:decoration-navy"
    >
      {children}
    </a>
  );
}

function Mail({ address }) {
  return (
    <a href={`mailto:${address}`} className="underline decoration-accent/70 underline-offset-2 hover:text-navy">
      {address}
    </a>
  );
}

function LegalLayout({ title, subtitle, toc, children, path, description }) {
  usePageMeta({
    title: `${title} | Italianissimi`,
    description,
    path,
  });

  return (
    <>
      <PageHero kicker="Documenti" title={title}>
        <p>{subtitle}</p>
      </PageHero>
      <Section className="bg-white">
        <Container className="max-w-[52rem]">
          <nav aria-label="Indice della pagina" className="border-b border-navy/[0.08] pb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Indice</p>
            <ol className="mt-4 grid gap-2 text-[0.98rem] text-ink-soft sm:grid-cols-2">
              {toc.map((item, index) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="hover:text-navy">
                    <span className="mr-2 text-xs font-semibold text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <article className="legal-copy mt-12">{children}</article>
          <p className="mt-14 text-sm text-muted">Ultimo aggiornamento: {UPDATED}.</p>
        </Container>
      </Section>
    </>
  );
}

function Block({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-navy/[0.06] py-10 first:border-t-0 first:pt-0">
      <h2 className="display text-[1.45rem] text-navy sm:text-[1.7rem]">{title}</h2>
      <div className="mt-5 space-y-4 text-[1.02rem] leading-[1.8] text-ink-soft">{children}</div>
    </section>
  );
}

const privacyToc = [
  { id: "titolare", label: "Titolare del trattamento" },
  { id: "dati", label: "Dati trattati" },
  { id: "finalita", label: "Finalità del trattamento" },
  { id: "base", label: "Base giuridica" },
  { id: "conferimento", label: "Conferimento dei dati" },
  { id: "modalita", label: "Modalità del trattamento" },
  { id: "destinatari", label: "Destinatari e fornitori" },
  { id: "trasferimenti", label: "Trasferimenti extra SEE" },
  { id: "conservazione", label: "Conservazione" },
  { id: "diritti", label: "Diritti dell’interessato" },
  { id: "reclamo", label: "Reclamo" },
  { id: "modifiche", label: "Modifiche all’informativa" },
];

export function Privacy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="Informativa sul trattamento dei dati personali ai sensi del Regolamento (UE) 2016/679."
      description="Informativa sul trattamento dei dati personali di Italianissimi SRLS."
      path="/privacy-policy"
      toc={privacyToc}
    >
      <Block id="titolare" title="1. Titolare del trattamento">
        <p>Il Titolare del trattamento è:</p>
        <p className="font-medium text-navy">
          ITALIANISSIMI S.R.L.S.
          <br />
          {company.address}
          <br />
          {company.city}
          <br />
          {company.country}
          <br />
          C.F./P.IVA {company.vatNumber}
          <br />
          REA {company.rea}
        </p>
        <p>
          Email: <Mail address={company.email} />
          <br />
          PEC: <Mail address={company.pec} />
        </p>
      </Block>

      <Block id="dati" title="2. Dati trattati">
        <p>Attraverso il sito possono essere trattate le seguenti categorie di dati.</p>
        <h3 className="pt-2 text-base font-semibold text-navy">A) Dati di navigazione</h3>
        <p>
          Durante il normale funzionamento del sito, i sistemi informatici e i servizi utilizzati
          per l’hosting possono acquisire dati tecnici necessari alla comunicazione su Internet e
          alla sicurezza del servizio. Possono rientrare, ad esempio, l’indirizzo IP, la data e
          l’ora della richiesta, informazioni su browser e dispositivo e dati tecnici relativi alla
          richiesta.
        </p>
        <p>Il sito è attualmente ospitato tramite GitHub Pages.</p>
        <p>
          GitHub dichiara di registrare l’indirizzo IP dei visitatori dei siti GitHub Pages per
          finalità di sicurezza. Per i dettagli sul trattamento effettuato da GitHub si rinvia alla{" "}
          <Ext href={LINKS.githubPrivacy}>Privacy Statement ufficiale di GitHub</Ext>.
        </p>
        <h3 className="pt-2 text-base font-semibold text-navy">B) Dati forniti volontariamente</h3>
        <p>
          Quando l’utente contatta Italianissimi tramite email, PEC o WhatsApp, possono essere
          trattati i dati comunicati spontaneamente, come nome, recapiti, azienda, contenuto del
          messaggio e altre informazioni che l’utente decide di fornire.
        </p>
        <p>
          Lo stesso vale se l’utente utilizza il modulo presente nella pagina Contatti: il sito non
          invia i dati a un database o a un server di Italianissimi. Il modulo apre il programma di
          posta dell’utente con un messaggio precompilato.
        </p>
        <h3 className="pt-2 text-base font-semibold text-navy">C) Selettore “Cosa vuoi migliorare?”</h3>
        <p>
          Il selettore “Cosa vuoi migliorare?” serve solo a guidare l’utente verso WhatsApp o email.
          Le scelte vengono elaborate esclusivamente nel browser, per predisporre il messaggio di
          contatto. Non sono archiviate dal sito su un server o su un database di Italianissimi.
        </p>
      </Block>

      <Block id="finalita" title="3. Finalità del trattamento">
        <p>I dati sono trattati per:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>permettere il funzionamento e la sicurezza del sito;</li>
          <li>rispondere alle richieste di informazioni;</li>
          <li>ricontattare l’utente quando richiesto;</li>
          <li>
            predisporre preventivi o informazioni commerciali richieste spontaneamente
            dall’interessato;
          </li>
          <li>adottare misure precontrattuali richieste dall’utente;</li>
          <li>adempiere eventuali obblighi di legge.</li>
        </ul>
        <p>
          Al momento il sito non è utilizzato per newsletter, marketing automatico, profilazione o
          pubblicità comportamentale.
        </p>
      </Block>

      <Block id="base" title="4. Base giuridica">
        <p>Il trattamento si fonda, a seconda dei casi, su:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            esecuzione di misure precontrattuali adottate su richiesta dell’interessato, per le
            richieste di informazioni o preventivi;
          </li>
          <li>esecuzione di un eventuale contratto, se il contatto dà seguito a un incarico;</li>
          <li>adempimento di obblighi legali;</li>
          <li>
            legittimo interesse del Titolare, limitatamente alla sicurezza e al corretto
            funzionamento del sito, ove applicabile.
          </li>
        </ul>
      </Block>

      <Block id="conferimento" title="5. Conferimento dei dati">
        <p>
          La navigazione del sito comporta il trattamento dei dati tecnici necessari al
          funzionamento e, per quanto riguarda l’hosting, alla sicurezza del servizio.
        </p>
        <p>
          Fornire dati tramite email, PEC, WhatsApp o modulo di contatto è facoltativo. Senza i
          dati necessari a comprendere e ricontattare l’utente, potrebbe non essere possibile
          rispondere alla richiesta.
        </p>
      </Block>

      <Block id="modalita" title="6. Modalità del trattamento">
        <p>
          I dati sono trattati con strumenti informatici e organizzativi adeguati, secondo i
          principi di liceità, correttezza, trasparenza e minimizzazione. Italianissimi adotta
          misure ragionevoli per proteggere i dati, ferma restando la natura intrinsecamente
          esposta delle comunicazioni via Internet, email e messaggistica.
        </p>
      </Block>

      <Block id="destinatari" title="7. Destinatari e fornitori">
        <p>
          I dati possono essere trattati, nei limiti necessari, da fornitori di servizi utilizzati
          dal Titolare. Attualmente possono rientrare:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            GitHub / GitHub Pages, per hosting e pubblicazione del sito (
            <Ext href={LINKS.githubPrivacy}>informativa GitHub</Ext>);
          </li>
          <li>
            il fornitore della casella email utilizzata per {company.email} (servizio Gmail di
            Google; <Ext href={LINKS.google}>informativa Google</Ext>);
          </li>
          <li>il gestore della casella PEC, per le comunicazioni inviate a {company.pec};</li>
          <li>
            WhatsApp / Meta, quando l’utente sceglie autonomamente questo canale (
            <Ext href={LINKS.whatsapp}>informativa WhatsApp</Ext>,{" "}
            <Ext href={LINKS.meta}>informativa Meta</Ext>);
          </li>
          <li>
            consulenti o professionisti, quando necessario per obblighi amministrativi, fiscali o
            legali.
          </li>
        </ul>
        <p>
          Il sito carica il carattere IBM Plex Sans da Google Fonts, un servizio di Google
          utilizzato per la visualizzazione del sito, non per profilazione pubblicitaria. Google può
          trattare dati tecnici della richiesta, come l’indirizzo IP, secondo la propria{" "}
          <Ext href={LINKS.google}>informativa</Ext>.
        </p>
      </Block>

      <Block id="trasferimenti" title="8. Trasferimenti extra SEE">
        <p>
          Alcuni fornitori tecnologici utilizzati, tra cui GitHub, Google e WhatsApp/Meta, possono
          comportare trattamenti di dati anche al di fuori dello Spazio Economico Europeo.
        </p>
        <p>
          Tali trattamenti avvengono secondo i meccanismi e le garanzie indicate dai rispettivi
          fornitori e dalla normativa applicabile. Per i dettagli si rinvia alle informative
          ufficiali di <Ext href={LINKS.githubPrivacy}>GitHub</Ext>,{" "}
          <Ext href={LINKS.google}>Google</Ext>, <Ext href={LINKS.whatsapp}>WhatsApp</Ext> e{" "}
          <Ext href={LINKS.meta}>Meta</Ext>.
        </p>
      </Block>

      <Block id="conservazione" title="9. Conservazione">
        <p>
          Per le richieste di contatto, i dati sono conservati per il tempo necessario a gestire la
          richiesta e, se nasce un rapporto contrattuale, per gli ulteriori periodi previsti dagli
          obblighi di legge.
        </p>
        <p>
          Per i dati tecnici trattati da GitHub in qualità di fornitore di hosting, i tempi di
          conservazione dipendono dalle politiche del fornitore, non direttamente controllabili da
          Italianissimi. Si rinvia alla{" "}
          <Ext href={LINKS.githubPrivacy}>Privacy Statement di GitHub</Ext>.
        </p>
      </Block>

      <Block id="diritti" title="10. Diritti dell’interessato">
        <p>Ove applicabili, l’interessato può esercitare i diritti previsti dal GDPR, tra cui:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>accesso;</li>
          <li>rettifica;</li>
          <li>cancellazione;</li>
          <li>limitazione del trattamento;</li>
          <li>opposizione;</li>
          <li>portabilità dei dati.</li>
        </ul>
        <p>
          Le richieste possono essere inviate a <Mail address={company.email} /> oppure a{" "}
          <Mail address={company.pec} />.
        </p>
      </Block>

      <Block id="reclamo" title="11. Reclamo">
        <p>
          L’interessato ha diritto di proporre reclamo all’Autorità Garante per la protezione dei
          dati personali. Informazioni e contatti sono disponibili sul sito{" "}
          <Ext href={LINKS.garante}>www.garanteprivacy.it</Ext>.
        </p>
      </Block>

      <Block id="modifiche" title="12. Modifiche all’informativa">
        <p>
          Questa informativa può essere aggiornata in caso di variazione del sito, dei servizi
          utilizzati o della normativa. La data di ultimo aggiornamento è indicata in fondo alla
          pagina.
        </p>
      </Block>
    </LegalLayout>
  );
}

const cookieToc = [
  { id: "cosa-sono", label: "Cosa sono i cookie" },
  { id: "utilizzo", label: "Cookie utilizzati dal sito" },
  { id: "github", label: "GitHub Pages" },
  { id: "esterni", label: "Servizi esterni" },
  { id: "browser", label: "Gestione dal browser" },
  { id: "cambiamenti", label: "Futuri cambiamenti" },
];

export function Cookie() {
  return (
    <LegalLayout
      title="Cookie Policy"
      subtitle="Informazioni sull’utilizzo di cookie e tecnologie analoghe."
      description="Informativa sui cookie e sulle tecnologie analoghe utilizzate dal sito Italianissimi."
      path="/cookie-policy"
      toc={cookieToc}
    >
      <Block id="cosa-sono" title="1. Cosa sono i cookie">
        <p>
          I cookie sono piccoli file di testo che un sito può salvare sul dispositivo dell’utente
          quando viene visitato. Servono, a seconda dei casi, a far funzionare il sito, a
          ricordare preferenze o a raccogliere informazioni sulla navigazione.
        </p>
        <p>
          Tecnologie analoghe (ad esempio archiviazione locale del browser) possono avere effetti
          simili. Questa pagina descrive cosa avviene sul sito Italianissimi.
        </p>
      </Block>

      <Block id="utilizzo" title="2. Cookie utilizzati dal sito">
        <p>
          Il sito Italianissimi non utilizza direttamente cookie di profilazione, cookie
          pubblicitari o strumenti destinati a tracciare il comportamento dell’utente per finalità
          di marketing.
        </p>
        <p>
          Non sono presenti Google Analytics, Meta Pixel, LinkedIn Insight Tag, Hotjar, Microsoft
          Clarity o altri strumenti di analytics o pubblicità.
        </p>
        <p>
          Eventuali tecnologie strettamente necessarie al funzionamento o alla sicurezza del
          servizio di hosting non richiedono un consenso preventivo, fermo l’obbligo di informativa.
        </p>
        <p>
          Il selettore “Cosa vuoi migliorare?” e il modulo di contatto usano solo lo stato della
          pagina nel browser. Non impostano cookie di profilazione e non salvano le scelte su un
          server di Italianissimi.
        </p>
      </Block>

      <Block id="github" title="3. GitHub Pages">
        <p>Il sito è ospitato tramite GitHub Pages.</p>
        <p>
          GitHub può trattare dati tecnici relativi alla visita, incluso l’indirizzo IP, secondo le
          proprie condizioni e informative, in particolare per finalità di sicurezza del servizio.
        </p>
        <p>
          Per i dettagli si rinvia a:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <Ext href={LINKS.githubPrivacy}>GitHub Privacy Statement</Ext>
          </li>
          <li>
            <Ext href={LINKS.githubCookies}>GitHub Cookies</Ext>
          </li>
        </ul>
      </Block>

      <Block id="esterni" title="4. Servizi esterni">
        <p>
          WhatsApp ed email vengono utilizzati solo quando l’utente sceglie di aprire tali servizi.
          Un semplice link non installa cookie di profilazione da parte del sito Italianissimi.
        </p>
        <p>
          Se l’utente apre WhatsApp, il trattamento successivo è regolato da WhatsApp/Meta (
          <Ext href={LINKS.whatsapp}>informativa WhatsApp</Ext>).
        </p>
        <p>
          Il sito non incorpora mappe, video YouTube o Vimeo, chatbot o SDK di social network.
        </p>
        <p>
          Per mostrare i testi, il sito carica i font IBM Plex Sans da Google Fonts. Si tratta di
          una risorsa tecnica di visualizzazione, non di uno strumento di marketing. Google può
          trattare dati tecnici della richiesta secondo la propria{" "}
          <Ext href={LINKS.google}>informativa</Ext>.
        </p>
      </Block>

      <Block id="browser" title="5. Gestione cookie dal browser">
        <p>
          L’utente può controllare, bloccare o eliminare i cookie dalle impostazioni del proprio
          browser. Le modalità dipendono dal browser utilizzato.
        </p>
      </Block>

      <Block id="cambiamenti" title="6. Futuri cambiamenti">
        <p>
          Se in futuro verranno aggiunti servizi di analytics, pubblicità, profilazione o altre
          tecnologie che richiedono consenso, questa Cookie Policy e il sistema di gestione del
          consenso verranno aggiornati prima dell’attivazione di tali strumenti.
        </p>
      </Block>
    </LegalLayout>
  );
}
