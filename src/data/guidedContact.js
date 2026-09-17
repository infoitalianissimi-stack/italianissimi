import { company } from "./company";

/**
 * Categorie e messaggi del contatto guidato.
 * Modifica qui testi WhatsApp, oggetti email e elenco problemi.
 */
export const contactTopics = [
  {
    id: "sito",
    title: "Sito web",
    description: "Vorrei creare, rifare o migliorare il mio sito.",
    whatsapp:
      "Ciao Italianissimi, vorrei parlare del mio sito web. Vorrei capire come crearlo, rifarlo o migliorarlo.",
  },
  {
    id: "social",
    title: "Social & immagine",
    description: "Vorrei comunicare meglio e avere un’immagine più professionale.",
    whatsapp:
      "Ciao Italianissimi, vorrei migliorare la comunicazione e l’immagine digitale della mia attività.",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    description: "Vorrei migliorare la mia presenza professionale su LinkedIn.",
    whatsapp:
      "Ciao Italianissimi, vorrei capire come migliorare la mia presenza professionale su LinkedIn.",
  },
  {
    id: "automazioni",
    title: "Automazioni",
    description: "Vorrei perdere meno tempo nelle attività ripetitive.",
    whatsapp:
      "Ciao Italianissimi, vorrei capire se posso automatizzare alcune attività ripetitive della mia attività.",
  },
  {
    id: "ai",
    title: "Intelligenza Artificiale",
    description: "Vorrei capire come usare l’AI concretamente nella mia attività.",
    whatsapp:
      "Ciao Italianissimi, vorrei capire come utilizzare concretamente l’intelligenza artificiale nella mia attività.",
  },
  {
    id: "organizzazione",
    title: "Organizzazione digitale",
    description: "Vorrei mettere ordine tra strumenti, email, moduli, documenti o processi.",
    whatsapp:
      "Ciao Italianissimi, vorrei migliorare l’organizzazione digitale della mia attività.",
  },
  {
    id: "non-so",
    title: "Non so cosa mi serve",
    description: "Ho un problema digitale e vorrei capire da dove partire.",
    whatsapp:
      "Ciao Italianissimi, ho un problema o un’esigenza digitale ma non so quale soluzione mi serve. Vorrei capire da dove partire.",
  },
];

export function buildWhatsAppUrl(message) {
  return `${company.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export function buildMailtoUrl(topicTitle) {
  const subject = `Richiesta informazioni – ${topicTitle}`;
  const body = `Buongiorno Italianissimi,\nvorrei ricevere informazioni riguardo: ${topicTitle}.\n\nVorrei capire quali soluzioni potrebbero essere utili alla mia attività.`;
  return `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
