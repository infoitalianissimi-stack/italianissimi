import { Link } from "react-router-dom";
import { company } from "../data/company";
import { footerItems } from "../data/content";
import { Container } from "./Container";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <Container className="section-pad grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Logo variant="emblem" inverted />
          <p className="mt-6 max-w-md text-lg font-medium leading-snug text-white">
            La tecnologia aiuta. Le persone fanno la differenza.
          </p>
          <p className="mt-4 max-w-md text-white/70">{company.tagline}</p>
          <p className="mt-6 text-sm text-white/50">{company.servicesLine}</p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
              Navigazione
            </h2>
            <ul className="mt-5 space-y-3 text-white/80">
              {footerItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to={company.privacyUrl} className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to={company.cookieUrl} className="hover:text-white">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
              Società
            </h2>
            <div className="mt-5 space-y-2 text-sm leading-relaxed text-white/80">
              <p>{company.legalName}</p>
              <p>C.F./P.IVA {company.vatNumber}</p>
              <p>REA {company.rea}</p>
              <p>
                PEC{" "}
                <a href={`mailto:${company.pec}`} className="hover:text-white">
                  {company.pec}
                </a>
              </p>
            </div>
            <h2 className="mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
              Contatti
            </h2>
            <div className="mt-4 space-y-2 text-sm text-white/80">
              <p>
                <a href={company.whatsappUrl} className="hover:text-white" target="_blank" rel="noreferrer">
                  {company.whatsapp}
                </a>
              </p>
              <p>
                <a href={`mailto:${company.email}`} className="hover:text-white">
                  {company.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
