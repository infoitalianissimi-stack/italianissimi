import { OpenContactButton } from "./GuidedContact";
import { Button } from "./Button";
import { Container } from "./Container";

export function PageHero({
  kicker,
  title,
  children,
  titleId,
  image,
  imageAlt = "",
  imagePosition = "object-center",
}) {
  const photo = Boolean(image);

  return (
    <header
      className={
        photo
          ? "relative isolate flex min-h-[32rem] items-end overflow-hidden bg-navy-deep text-white sm:min-h-[36rem] lg:min-h-[42rem]"
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
            className={`absolute inset-0 h-full w-full object-cover ${imagePosition}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/94 via-navy-deep/72 to-navy-deep/28" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/78 via-navy-deep/20 to-navy-deep/40" />
        </>
      ) : null}
      <Container
        className={`relative ${photo ? "w-full pb-16 pt-28 sm:pb-20 lg:pb-24 lg:pt-32" : "max-w-4xl py-14 sm:py-20"}`}
      >
        {kicker ? (
          <p className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-accent">
            {kicker}
          </p>
        ) : null}
        <h1
          id={titleId}
          className={`display max-w-3xl ${
            photo
              ? "text-[2.15rem] leading-[1.08] text-white sm:text-5xl lg:text-[3.2rem]"
              : "text-4xl text-navy sm:text-5xl"
          }`}
        >
          {title}
        </h1>
        {children ? (
          <div
            className={`mt-6 max-w-xl text-lg leading-relaxed ${
              photo ? "text-white/86" : "text-ink-soft"
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
  secondaryLabel = "Scopri come possiamo aiutarti",
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
