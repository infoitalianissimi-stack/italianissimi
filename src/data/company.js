import { media } from "./media";

/**
 * Anagrafica e recapiti.
 * Modifica qui i dati societari: si aggiornano footer, contatti e GuidedContact.
 */
export const company = {
  legalName: "Italianissimi SRLS a socio unico",
  brandName: "ITALIANISSIMI",
  tagline: "Partner digitale per imprese e professionisti",
  servicesLine: "Web · Comunicazione · Tecnologia · Automazioni · AI",
  logoSrc: `${import.meta.env.BASE_URL}logo-italianissimi.svg`,
  siteUrl: "https://www.italianissimi.it",
  whatsapp: "+39 329 848 0112",
  whatsappUrl: "https://wa.me/393298480112",
  email: "info.italianissimi@gmail.com",
  pec: "italianissimi@pec.it",
  vatNumber: "02711560025",
  taxCode: "02711560025",
  rea: "BI-207631",
  privacyUrl: "/privacy",
  cookieUrl: "/cookie",
  heroImageSrc: media("hero-slide-01-lavoro-reale.jpg"),
};
