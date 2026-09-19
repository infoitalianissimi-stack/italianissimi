import { Link, useLocation } from "react-router-dom";
import { company } from "../data/company";

export function Logo({ variant = "wordmark", inverted = false, className = "" }) {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const isEmblem = variant === "emblem";

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
      className={`brand-block group inline-flex shrink-0 items-center ${isEmblem ? "gap-3" : ""} ${className}`}
      aria-label={isHome ? "Italianissimi, vai all’inizio della pagina" : "Italianissimi, vai alla home"}
    >
      {isEmblem ? (
        <img
          src={company.logoSrc}
          alt=""
          width="2048"
          height="2048"
          className="brand-mark h-14 w-14 shrink-0 object-contain object-center sm:h-16 sm:w-16"
        />
      ) : null}
      <span
        className={`brand-wordmark ${isEmblem ? "" : "brand-wordmark--nav"} ${
          inverted ? "text-white" : "text-navy"
        }`}
      >
        {company.brandName}
      </span>
    </Link>
  );
}
