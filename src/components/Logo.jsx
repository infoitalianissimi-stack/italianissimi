import { Link, useLocation } from "react-router-dom";
import { company } from "../data/company";

export function Logo({ compact = false, className = "" }) {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  function goHomeOrTop(event) {
    if (!isHome) return;
    event.preventDefault();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  }

  return (
    <Link
      to="/"
      onClick={goHomeOrTop}
      className={`inline-flex items-center ${className}`}
      aria-label={isHome ? "Italianissimi, vai all’inizio della pagina" : "Italianissimi, vai alla home"}
    >
      <img
        src={company.logoSrc}
        alt="Italianissimi"
        width="2048"
        height="2048"
        className={`object-contain ${compact ? "h-12 w-12 sm:h-14 sm:w-14" : "h-16 w-16"}`}
      />
    </Link>
  );
}
