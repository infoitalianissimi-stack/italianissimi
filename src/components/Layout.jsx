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
  const isHome = pathname === "/";

  return (
    <ContactProvider>
      <RouteEffects />
      <div className="min-h-screen">
        <SkipLink />
        <Navbar overlayHero={isHome} />
        <main id="contenuto" className={isHome ? "" : "pt-[4.85rem]"}>
          <Outlet />
        </main>
        <Footer />
        <GuidedContactDrawer />
      </div>
    </ContactProvider>
  );
}
