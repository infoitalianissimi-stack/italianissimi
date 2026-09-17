import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { buildMailtoUrl, buildWhatsAppUrl, contactTopics } from "../data/guidedContact";
import { useContact } from "../context/ContactContext";
import { Button } from "./Button";
import { EmailAction } from "./EmailAction";
import { WhatsAppAction } from "./WhatsAppAction";

export function GuidedContact({ variant = "inline" }) {
  const [topicId, setTopicId] = useState(null);
  const headingId = useId();
  const topic = contactTopics.find((item) => item.id === topicId) ?? null;

  return (
    <div className={variant === "panel" ? "" : "rounded-2xl border border-navy/[0.07] bg-white p-6 shadow-[0_20px_50px_-32px_rgba(15,47,104,0.35)] sm:p-8"}>
      {!topic ? (
        <StepTopics headingId={headingId} onSelect={setTopicId} selectedId={topicId} />
      ) : (
        <StepChannel topic={topic} onBack={() => setTopicId(null)} />
      )}
    </div>
  );
}

function StepTopics({ headingId, onSelect, selectedId }) {
  return (
    <div>
      <h2 id={headingId} className="display text-2xl text-navy sm:text-3xl">
        Cosa vuoi migliorare?
      </h2>
      <p className="mt-3 max-w-xl text-ink-soft">
        Non devi sapere quale servizio ti serve. Scegli semplicemente il problema.
      </p>
      <ul className="mt-7 grid gap-3 sm:grid-cols-2">
        {contactTopics.map((topic) => {
          const selected = selectedId === topic.id;
          return (
            <li key={topic.id}>
              <button
                type="button"
                onClick={() => onSelect(topic.id)}
                aria-pressed={selected}
                className={`card-lift flex min-h-[5.5rem] w-full flex-col items-start border px-4 py-4 text-left transition-[border-color,background-color,box-shadow] duration-200 focus-visible:outline-offset-2 ${
                  selected
                    ? "border-navy bg-white shadow-[inset_3px_0_0_0_#F47A1F]"
                    : "border-line bg-paper hover:border-navy/30"
                }`}
              >
                <span className="font-semibold text-navy">{topic.title}</span>
                <span className="mt-1 text-sm leading-snug text-ink-soft">{topic.description}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function StepChannel({ topic, onBack }) {
  return (
    <div>
      <button
        type="button"
        onClick={onBack}
        className="text-sm font-medium text-muted transition-colors duration-200 hover:text-navy"
      >
        ← Indietro, cambia scelta
      </button>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
        {topic.title}
      </p>
      <h2 className="display mt-2 text-2xl text-navy sm:text-3xl">Come preferisci contattarci?</h2>
      <p className="mt-3 max-w-lg text-ink-soft">{topic.description}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <WhatsAppAction href={buildWhatsAppUrl(topic.whatsapp)}>WhatsApp</WhatsAppAction>
        <EmailAction href={buildMailtoUrl(topic.title)}>Email</EmailAction>
      </div>
    </div>
  );
}

export function GuidedContactDrawer() {
  const { open, closeContact } = useContact();
  const titleId = useId();
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") closeContact();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, closeContact]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[70] flex justify-end">
      <button
        type="button"
        className="absolute inset-0 bg-navy/25"
        aria-label="Chiudi il contatto guidato"
        onClick={closeContact}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 flex h-full w-full max-w-xl flex-col overflow-y-auto border-l border-line bg-white shadow-[-24px_0_50px_-28px_rgba(8,38,89,0.35)]"
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <p id={titleId} className="text-sm font-semibold text-navy">
            Cosa vuoi migliorare?
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={closeContact}
            className="inline-flex h-10 w-10 items-center justify-center border border-line text-navy"
            aria-label="Chiudi"
          >
            ×
          </button>
        </div>
        <div className="p-5 sm:p-7">
          <GuidedContact variant="panel" />
        </div>
      </aside>
    </div>,
    document.body,
  );
}

export function OpenContactButton({ children, variant = "primary", className = "", ...props }) {
  const { openContact } = useContact();
  return (
    <Button type="button" variant={variant} className={className} onClick={openContact} {...props}>
      {children}
    </Button>
  );
}
