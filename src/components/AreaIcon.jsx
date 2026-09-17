export function AreaIcon({ id, className = "h-5 w-5" }) {
  const common = `${className} stroke-[1.6]`;

  if (id === "web") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="1.5" stroke="currentColor" />
        <path d="M3 9h18" stroke="currentColor" />
        <circle cx="6.5" cy="7" r="0.7" fill="currentColor" />
        <circle cx="8.7" cy="7" r="0.7" fill="currentColor" />
      </svg>
    );
  }

  if (id === "comunicazione" || id === "immagine") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <path
          d="M5 7h10a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H10l-4 3v-3H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"
          stroke="currentColor"
        />
      </svg>
    );
  }

  if (id === "tecnologia") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <rect x="7" y="7" width="10" height="10" rx="1.5" stroke="currentColor" />
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4" stroke="currentColor" />
      </svg>
    );
  }

  if (id === "automazioni") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <path d="M5 8h6l2 3h6" stroke="currentColor" />
        <circle cx="7" cy="16" r="2.2" stroke="currentColor" />
        <circle cx="17" cy="16" r="2.2" stroke="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
      <path
        d="M12 4c1 4.2 2.2 5.4 6.4 6.4C14.2 11.4 13 12.6 12 16.8 11 12.6 9.8 11.4 5.6 10.4 9.8 9.4 11 8.2 12 4Z"
        stroke="currentColor"
      />
    </svg>
  );
}
