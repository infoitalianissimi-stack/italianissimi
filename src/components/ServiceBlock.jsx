import { Link } from "react-router-dom";
import { AreaIcon } from "./AreaIcon";

export function ServiceBlock({ service, showExamples = false, compact = false }) {
  if (compact) {
    return (
      <article className="card-lift group relative flex h-full flex-col overflow-hidden rounded-xl border border-navy/[0.06] bg-white p-7 shadow-[0_16px_40px_-28px_rgba(15,47,104,0.35)]">
        <span className="absolute left-0 top-0 h-full w-[3px] bg-accent/80" aria-hidden="true" />
        <span className="icon-nudge flex h-11 w-11 items-center justify-center rounded-lg bg-paper text-navy">
          <AreaIcon id={service.icon || service.id} />
        </span>
        <h3 className="mt-6 text-[1.12rem] font-semibold tracking-[-0.02em] text-navy">
          {service.title}
        </h3>
        <p className="mt-3 max-w-sm flex-1 text-[0.98rem] leading-relaxed text-ink-soft">
          {service.summary}
        </p>
        <Link
          to={`/servizi#${service.id}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-transform duration-300 group-hover:gap-3"
        >
          Scopri di più
          <span aria-hidden="true">→</span>
        </Link>
      </article>
    );
  }

  return (
    <article
      className="card-lift flex h-full scroll-mt-28 flex-col rounded-xl border border-navy/[0.07] bg-white p-6 shadow-[0_16px_40px_-28px_rgba(15,47,104,0.3)] sm:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="icon-nudge flex h-10 w-10 items-center justify-center rounded-lg bg-paper text-navy">
          <AreaIcon id={service.icon || service.id} />
        </span>
      </div>
      <h3 className="mt-5 text-[1.15rem] font-semibold tracking-[-0.02em] text-navy sm:text-[1.28rem]">
        {service.title}
      </h3>
      <div className="mt-4 max-w-md space-y-3 text-[0.98rem] leading-relaxed text-ink-soft">
        {service.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {service.bullets ? (
        <ul className="mt-4 max-w-md list-disc space-y-1 pl-5 text-[0.98rem] text-ink-soft">
          {service.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {showExamples && service.examples ? (
        <ul className="mt-5 max-w-md space-y-2 text-sm text-ink-soft">
          {service.examples.map((item) => (
            <li key={item} className="border-l border-accent/70 pl-3">
              {item}
            </li>
          ))}
        </ul>
      ) : null}
      {service.highlight ? (
        <p className="mt-6 border-l-2 border-accent pl-4 font-semibold text-navy">
          {service.highlight}
        </p>
      ) : null}
      {service.closing ? (
        <p className="mt-6 text-sm font-semibold text-navy">{service.closing}</p>
      ) : null}
    </article>
  );
}
