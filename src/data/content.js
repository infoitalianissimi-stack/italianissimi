import { media } from "./media";

export const navItems = [
  { label: "Home", to: "/" },
  { label: "Italianissimi", to: "/italianissimi" },
  { label: "Servizi", to: "/servizi" },
  { label: "Partner Digitale", to: "/partner-digitale" },
  { label: "Metodo", to: "/metodo" },
  { label: "Contatti", to: "/contatti" },
];

export const defaultMeta = {
  title: "Italianissimi | Partner digitale per imprese e professionisti",
  description:
    "Italianissimi aiuta imprese e professionisti a gestire web, comunicazione, tecnologia, automazioni e intelligenza artificiale partendo dai problemi reali della loro attività.",
};

export const footerItems = [
  { label: "Home", to: "/" },
  { label: "Italianissimi", to: "/italianissimi" },
  { label: "Servizi", to: "/servizi" },
  { label: "Metodo", to: "/metodo" },
  { label: "Contatti", to: "/contatti" },
];

export const helpWhen = [
  { id: "sito", icon: "web", label: "migliorare o rifare il sito" },
  { id: "immagine", icon: "immagine", label: "avere un’immagine più professionale" },
  { id: "social", icon: "comunicazione", label: "gestire meglio social e LinkedIn" },
  { id: "organizzazione", icon: "tecnologia", label: "organizzare strumenti e processi digitali" },
  { id: "ai", icon: "automazioni", label: "capire come usare automazioni e AI" },
];

export const problems = [
  "Il mio sito è vecchio e nessuno lo segue.",
  "Non riesco a gestire bene i social.",
  "Vorrei avere un’immagine più professionale.",
  "Perdo troppo tempo facendo sempre le stesse operazioni.",
  "Ho tanti strumenti digitali, ma nessuno che li coordini.",
  "Sento parlare continuamente di AI, ma non so cosa potrebbe servire davvero alla mia attività.",
  "Quando ho un problema digitale non so chi chiamare.",
];

export const services = [
  {
    id: "immagine",
    icon: "immagine",
    kicker: "01",
    title: "IMMAGINE & COMUNICAZIONE",
    summary:
      "Social, LinkedIn, contenuti e materiali aziendali: l’immagine che gli altri vedono della tua attività.",
    image: media("servizi-comunicazione.jpg"),
    imageAlt: "Tavolo di lavoro con materiali di comunicazione e immagine aziendale.",
    paragraphs: [
      "Social media, LinkedIn, contenuti, materiali aziendali, brochure, presentazioni, documenti digitali e comunicazione.",
      "Non si tratta semplicemente di pubblicare post.",
      "Si tratta di costruire e mantenere nel tempo l’immagine che clienti, fornitori e collaboratori vedono della tua azienda.",
    ],
    examples: [
      "Pagine social e LinkedIn da seguire con costanza.",
      "Brochure, presentazioni e documenti che parlano come l’azienda.",
      "Un’immagine coerente verso clienti, fornitori e collaboratori.",
    ],
  },
  {
    id: "web",
    icon: "web",
    kicker: "02",
    title: "WEB & PRESENZA DIGITALE",
    summary:
      "Siti, aggiornamenti, domini ed email aziendali: una presenza online che si può davvero usare.",
    image: media("servizi-web.jpg"),
    imageAlt: "Professionista al lavoro sul sito e sulla presenza digitale.",
    paragraphs: [
      "Siti internet, aggiornamenti, domini, email aziendali e strumenti necessari alla presenza online.",
      "Il sito dovrebbe essere uno strumento vivo, non qualcosa che viene realizzato una volta e poi dimenticato.",
    ],
    examples: [
      "Un sito da creare, rifare o tenere aggiornato.",
      "Dominio e email aziendali da mettere in ordine.",
      "Una presenza online che si possa davvero usare.",
    ],
  },
  {
    id: "tecnologia",
    icon: "tecnologia",
    kicker: "03",
    title: "TECNOLOGIA & ORGANIZZAZIONE",
    summary:
      "Moduli, documenti, CRM e processi interni: ordine dove oggi si perde tempo.",
    image: media("servizi-organizzazione.jpg"),
    imageAlt: "Documenti, schermo e strumenti per l’organizzazione del lavoro.",
    paragraphs: [
      "Moduli online, gestione documenti, raccolta dati, CRM, processi interni, strumenti di collaborazione e organizzazione digitale.",
    ],
    highlight: "Dove stai perdendo tempo oggi?",
    examples: [
      "Moduli per raccogliere richieste senza fogli sparsi.",
      "Documenti e dati in un unico posto consultabile.",
      "Strumenti di lavoro che parlano tra loro, invece di moltiplicarsi.",
    ],
  },
  {
    id: "automazioni",
    icon: "automazioni",
    kicker: "04",
    title: "AUTOMAZIONI & INTELLIGENZA ARTIFICIALE",
    summary:
      "Automazioni e AI solo dove aiutano concretamente il lavoro. Niente tecnologia fine a se stessa.",
    image: media("servizi-automazioni-ai.jpg"),
    imageAlt: "Spazio di lavoro con schermi e strumenti digitali da semplificare.",
    paragraphs: [
      "Studiamo dove automazioni e strumenti di intelligenza artificiale possono aiutare concretamente l’attività.",
    ],
    bullets: [
      "ridurre attività ripetitive",
      "organizzare informazioni",
      "velocizzare risposte",
      "creare documenti",
      "supportare la comunicazione",
      "migliorare processi aziendali",
    ],
    closing: "Niente tecnologia fine a se stessa.",
    examples: [
      "Attività ripetitive che oggi richiedono tempo ogni settimana.",
      "Informazioni da riordinare per rispondere prima e meglio.",
      "Usi concreti dell’AI, solo se servono davvero.",
    ],
  },
];

export const methodSteps = [
  {
    number: "01",
    title: "Ascoltiamo",
    image: media("metodo-ascolto.jpg"),
    imageAlt: "Confronto di lavoro intorno a un tavolo, per capire il problema.",
    paragraphs: [
      "Partiamo dalla tua attività, non dal nostro catalogo servizi.",
      "Ci indichi cosa fai, come lavori, dove incontri difficoltà e cosa vuoi migliorare.",
    ],
  },
  {
    number: "02",
    title: "Semplifichiamo",
    image: media("metodo-chiarezza.jpg"),
    imageAlt: "Appunti e documenti per tradurre l’esigenza in una soluzione chiara.",
    paragraphs: [
      "Traduciamo l’esigenza in una soluzione comprensibile.",
      "Niente tecnicismi inutili e niente strumenti scelti solo perché sono nuovi.",
    ],
  },
  {
    number: "03",
    title: "Realizziamo",
    image: media("metodo-realizzazione.jpg"),
    imageAlt: "Lavoro operativo su computer e documenti, per mettere in pratica la soluzione.",
    paragraphs: [
      "Mettiamo in pratica ciò che serve, direttamente oppure coordinando eventuali competenze specifiche.",
    ],
  },
  {
    number: "04",
    title: "Restiamo un punto di riferimento",
    image: media("metodo-continuita.jpg"),
    imageAlt: "Attività quotidiana: un punto di riferimento nel tempo, non solo in consegna.",
    paragraphs: [
      "Il valore non finisce con la consegna di un sito o con la pubblicazione di un contenuto.",
      "L’obiettivo è costruire un rapporto nel tempo.",
      "Quando nasce una nuova esigenza digitale, sai a chi rivolgerti.",
    ],
  },
];

export const partnerNeeds = [
  "Un sito da aggiornare.",
  "Una pagina social da gestire.",
  "Una brochure da preparare.",
  "Un’email aziendale da configurare.",
  "Un processo che potrebbe essere automatizzato.",
  "Un nuovo strumento digitale da valutare.",
  "Un utilizzo concreto dell’AI da introdurre in azienda.",
];
