export function MethodStep({ step, showImage = true }) {
  return (
    <article className="relative overflow-hidden">
      {showImage && step.image ? (
        <img
          src={step.image}
          alt={step.imageAlt || ""}
          width="960"
          height="640"
          className="mb-6 aspect-[16/10] w-full object-cover"
        />
      ) : null}
      <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full border border-navy/12 bg-white text-[0.7rem] font-semibold tracking-wide text-accent shadow-[0_8px_20px_-12px_rgba(15,47,104,0.35)]">
        {step.number}
      </span>
      <h3 className="text-xl font-semibold tracking-[-0.02em] text-navy">{step.title}</h3>
      <div className="mt-3 max-w-sm space-y-3 text-[0.98rem] leading-relaxed text-ink-soft">
        {step.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
