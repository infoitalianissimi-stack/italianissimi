import { useState } from "react";
import { Link } from "react-router-dom";
import { company } from "../data/company";
import { Button } from "./Button";

/**
 * TODO: collegare a un backend o a un servizio form (es. Formspree)
 * quando sarà disponibile. Oggi apre una email precompilata, senza fingere un invio.
 */
export function ContactForm() {
  const [privacy, setPrivacy] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!privacy) return;

    const nome = String(data.get("nome") || "").trim();
    const azienda = String(data.get("azienda") || "").trim();
    const email = String(data.get("email") || "").trim();
    const telefono = String(data.get("telefono") || "").trim();
    const messaggio = String(data.get("messaggio") || "").trim();

    const body = [
      `Nome: ${nome}`,
      azienda ? `Azienda: ${azienda}` : null,
      `Email: ${email}`,
      telefono ? `Telefono: ${telefono}` : null,
      "",
      messaggio,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      "Richiesta informazioni – modulo sito",
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit}>
      <label className="grid gap-2">
        <span className="text-sm text-muted">Nome *</span>
        <input name="nome" required autoComplete="name" className="border border-line bg-white px-4 py-3" />
      </label>
      <label className="grid gap-2">
        <span className="text-sm text-muted">Azienda</span>
        <input name="azienda" autoComplete="organization" className="border border-line bg-white px-4 py-3" />
      </label>
      <label className="grid gap-2">
        <span className="text-sm text-muted">Email *</span>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          className="border border-line bg-white px-4 py-3"
        />
      </label>
      <label className="grid gap-2">
        <span className="text-sm text-muted">Telefono</span>
        <input name="telefono" autoComplete="tel" className="border border-line bg-white px-4 py-3" />
      </label>
      <label className="grid gap-2">
        <span className="text-sm text-muted">Messaggio *</span>
        <textarea name="messaggio" required rows="5" className="border border-line bg-white px-4 py-3" />
      </label>
      <label className="flex items-start gap-3 text-sm text-ink-soft">
        <input
          type="checkbox"
          checked={privacy}
          onChange={(event) => setPrivacy(event.target.checked)}
          required
          className="mt-1"
        />
        <span>
          Ho letto l’
          <Link to={company.privacyUrl} className="underline decoration-accent underline-offset-2">
            informativa privacy
          </Link>
          .
        </span>
      </label>
      <Button type="submit">Invia richiesta</Button>
      <p className="text-xs text-muted">
        Il modulo apre il programma di posta con un messaggio già compilato. Non viene inviato da
        questo sito.
      </p>
    </form>
  );
}
