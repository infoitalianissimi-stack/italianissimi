function ProblemIcon({ id }) {
  const cls = "h-5 w-5 stroke-[1.6] text-navy";

  if (id === "sito") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden="true">
        <rect x="3.5" y="5" width="17" height="14" rx="1.5" stroke="currentColor" />
        <path d="M3.5 9h17M8 17h8" stroke="currentColor" />
      </svg>
    );
  }
  if (id === "social") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden="true">
        <path
          d="M5 7h10a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H10l-4 3v-3H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"
          stroke="currentColor"
        />
      </svg>
    );
  }
  if (id === "immagine") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden="true">
        <rect x="4" y="5" width="16" height="14" rx="1.5" stroke="currentColor" />
        <circle cx="9" cy="10" r="1.4" stroke="currentColor" />
        <path d="M4 16.5 9 13l4 3 3-2.5 4 3" stroke="currentColor" />
      </svg>
    );
  }
  if (id === "tempo") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden="true">
        <circle cx="12" cy="13" r="7" stroke="currentColor" />
        <path d="M12 13V9.5M12 13l3 2M9 4h6" stroke="currentColor" strokeLinecap="round" />
      </svg>
    );
  }
  if (id === "strumenti") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden="true">
        <circle cx="7" cy="8" r="2" stroke="currentColor" />
        <circle cx="17" cy="8" r="2" stroke="currentColor" />
        <circle cx="12" cy="16.5" r="2" stroke="currentColor" />
        <path d="M8.7 9.4 10.4 14.6M15.3 9.4 13.6 14.6" stroke="currentColor" />
      </svg>
    );
  }
  if (id === "ai") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden="true">
        <path
          d="M12 4c1 4.2 2.2 5.4 6.4 6.4C14.2 11.4 13 12.6 12 16.8 11 12.6 9.8 11.4 5.6 10.4 9.8 9.4 11 8.2 12 4Z"
          stroke="currentColor"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden="true">
      <circle cx="12" cy="8" r="2.4" stroke="currentColor" />
      <path d="M6.5 18.5c1.2-3 3.1-4.5 5.5-4.5s4.3 1.5 5.5 4.5" stroke="currentColor" strokeLinecap="round" />
      <path d="M18.5 8.5h2.5M19.75 7.25v2.5" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}

const icons = ["sito", "social", "immagine", "tempo", "strumenti", "ai", "chiamare"];

export function ProblemCard({ text, index }) {
  const quote = text.replace(/^“|”$/g, "");

  return (
    <blockquote className="problem-card relative overflow-hidden rounded-md bg-white px-6 py-7 sm:px-7 sm:py-8">
      <span className="absolute left-0 top-6 h-8 w-[3px] bg-accent" aria-hidden="true" />
      <span className="icon-nudge mb-4 inline-flex h-9 w-9 items-center justify-center rounded-md bg-paper">
        <ProblemIcon id={icons[index] ?? "chiamare"} />
      </span>
      <p className="max-w-md text-[1.05rem] font-medium leading-snug text-ink">“{quote}”</p>
    </blockquote>
  );
}
