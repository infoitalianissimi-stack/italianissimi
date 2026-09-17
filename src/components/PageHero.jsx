import { OpenContactButton } from "./GuidedContact";
import { Button } from "./Button";
import { Container } from "./Container";

export function PageHero({ kicker, title, children, titleId, image, imageAlt = "" }) {
  const photo = Boolean(image);

  return (
    <header
      className={
        photo
          ? "relative isolate overflow-hidden bg-navy-deep text-white"
          : "hero-stage relative border-b border-navy/[0.06]"
      }
    >
      {photo ? (
        <>
          <img
            src={image}
            alt={imageAlt}
            width="1920"
            height="1080"
            className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-deep/68 to-navy-deep/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/72 via-transparent to-navy-deep/28" />
        </>
      ) : null}
      <Container className={`relative max-w-4xl ${photo ? "py-24 sm:py-32" : "py-14 sm:py-20"}`}>
        {kicker ? (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            {kicker}
          </p>
        ) : null}
        <h1
          id={titleId}
          className={`display max-w-3xl text-4xl sm:text-5xl ${photo ? "text-white" : "text-navy"}`}
        >
          {title}
        </h1>
        {children ? (
          <div
            className={`mt-6 max-w-xl text-lg leading-relaxed ${
              photo ? "text-white/84" : "text-ink-soft"
            }`}
          >
            {children}
          </div>
        ) : null}
      </Container>
    </header>
  );
}

export function CtaBand({
  title,
  subtitle,
  text,
  actionLabel = "Dimmi cosa vuoi migliorare",
  secondaryTo,
  secondaryLabel = "Scopri cosa possiamo fare",
}) {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-white" aria-labelledby="cta-finale-title">
      <div className="command-orb command-orb-c" aria-hidden="true" />
      <Container className="section-pad max-w-4xl">
        <div className="mb-6 h-0.5 w-10 bg-accent" />
        <h2 id="cta-finale-title" className="display max-w-3xl text-3xl sm:text-[2.6rem]">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-5 max-w-xl text-xl font-medium leading-snug text-white/85">{subtitle}</p>
        ) : null}
        {text ? <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">{text}</p> : null}
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <OpenContactButton variant="light">{actionLabel}</OpenContactButton>
          {secondaryTo ? (
            <Button to={secondaryTo} variant="onDark" arrow={false}>
              {secondaryLabel}
            </Button>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
