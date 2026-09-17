import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ContactProvider, useContact } from "../context/ContactContext";
import { Footer } from "./Footer";
import { GuidedContactDrawer } from "./GuidedContact";
import { Navbar } from "./Navbar";
import { SkipLink } from "./SkipLink";

function RouteEffects() {
  const { pathname } = useLocation();
  const { closeContact } = useContact();

  useEffect(() => {
    closeContact();
  }, [pathname, closeContact]);

  return null;
}

export function Layout() {
  const { pathname } = useLocation();
  const photoHero =
    pathname === "/" ||
    pathname === "/italianissimi" ||
    pathname === "/servizi" ||
    pathname === "/metodo" ||
    pathname === "/contatti";

  return (
    <ContactProvider>
      <RouteEffects />
      <div className="min-h-screen">
        <SkipLink />
        <Navbar overlayHero={photoHero} />
        <main id="contenuto" className={photoHero ? "" : "pt-[4.85rem]"}>
          <Outlet />
        </main>
        <Footer />
        <GuidedContactDrawer />
      </div>
    </ContactProvider>
  );
}
