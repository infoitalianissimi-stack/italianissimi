import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { navItems } from "../data/content";
import { OpenContactButton } from "./GuidedContact";
import { Container } from "./Container";
import { Logo } from "./Logo";

export function Navbar({ overlayHero = false }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const onPhoto = overlayHero && !scrolled && !open;

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-navy/[0.08] bg-white/82 shadow-[0_10px_40px_-24px_rgba(15,47,104,0.35)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-[4.35rem] items-center justify-between gap-6 lg:h-[4.85rem]">
        <Logo compact className={onPhoto ? "rounded-md shadow-[0_10px_24px_-12px_rgba(0,0,0,0.45)]" : ""} />

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Principale">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-md px-3.5 py-2 text-[0.9rem] font-medium tracking-[-0.01em] transition-colors duration-200 ${
                  onPhoto
                    ? isActive
                      ? "text-white"
                      : "text-white/75 hover:text-white"
                    : isActive
                      ? "text-navy"
                      : "text-muted hover:text-navy"
                }`
              }
              end={item.to === "/"}
            >
              {({ isActive }) => (
                <span className="relative">
                  {item.label}
                  {isActive ? (
                    <span className="absolute -bottom-1.5 left-0 h-px w-full bg-accent" aria-hidden="true" />
                  ) : null}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <OpenContactButton
            variant={onPhoto ? "light" : "primary"}
            className="min-h-10 px-4 py-2 text-sm"
          >
            <span className="hidden 2xl:inline">Dimmi cosa vuoi migliorare</span>
            <span className="2xl:hidden">Cosa vuoi migliorare?</span>
          </OpenContactButton>
          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-md border xl:hidden ${
              onPhoto ? "border-white/30 text-white" : "border-navy/12 text-navy"
            }`}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 h-px w-full transition duration-300 ${onPhoto ? "bg-white" : "bg-navy"} ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 top-1.5 h-px w-full transition duration-300 ${onPhoto ? "bg-white" : "bg-navy"} ${open ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 h-px w-full transition duration-300 ${onPhoto ? "bg-white" : "bg-navy"} ${open ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>
        </div>
      </Container>

      <div id="menu-mobile" hidden={!open} className="border-t border-navy/[0.08] bg-white xl:hidden">
        <Container className="flex flex-col py-3 pb-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `border-b border-navy/[0.06] py-3.5 text-base font-medium ${
                  isActive ? "text-navy" : "text-ink-soft"
                }`
              }
              end={item.to === "/"}
            >
              {item.label}
            </NavLink>
          ))}
          <OpenContactButton className="mt-5 w-full">Dimmi cosa vuoi migliorare</OpenContactButton>
        </Container>
      </div>
    </header>
  );
}
