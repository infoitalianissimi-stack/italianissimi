import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Button } from "./Button";
import { Container } from "./Container";
import { OpenContactButton } from "./GuidedContact";
import { HERO_AUTOPLAY_MS, heroSlides } from "../data/heroSlides";

const SWIPE = 48;

export function PhotoHero() {
  const labelId = useId();
  const touchX = useRef(null);
  const [index, setIndex] = useState(0);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const onVis = () => setHidden(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const goTo = useCallback((next, fromUser = false) => {
    setIndex((current) => ((next % heroSlides.length) + heroSlides.length) % heroSlides.length);
    if (fromUser) setUserPaused(true);
  }, []);

  useEffect(() => {
    if (!userPaused) return undefined;
    const resume = window.setTimeout(() => setUserPaused(false), HERO_AUTOPLAY_MS);
    return () => window.clearTimeout(resume);
  }, [userPaused, index]);

  useEffect(() => {
    if (reduceMotion || hoverPaused || userPaused || hidden) return undefined;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, HERO_AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [reduceMotion, hoverPaused, userPaused, hidden]);

  function onKeyDown(event) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(index + 1, true);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(index - 1, true);
    }
    if (event.key === "Home") {
      event.preventDefault();
      goTo(0, true);
    }
    if (event.key === "End") {
      event.preventDefault();
      goTo(heroSlides.length - 1, true);
    }
  }

  function onTouchStart(event) {
    touchX.current = event.changedTouches[0].clientX;
  }

  function onTouchEnd(event) {
    if (touchX.current == null) return;
    const delta = event.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(delta) > SWIPE) goTo(delta < 0 ? index + 1 : index - 1, true);
  }

  const slide = heroSlides[index];

  return (
    <section
      className="relative isolate min-h-[100svh] overflow-hidden bg-navy-deep text-white"
      aria-roledescription="carousel"
      aria-labelledby={labelId}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
      onFocus={() => setHoverPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setHoverPaused(false);
      }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <p id={labelId} className="sr-only">
        Presentazione Italianissimi, tre messaggi
      </p>
      <div className="sr-only" aria-live="polite">
        {String(index + 1).padStart(2, "0")}. {slide.headline.join(" ")}
      </div>

      {heroSlides.map((item, itemIndex) => (
        <SlidePhoto key={item.id} slide={item} active={itemIndex === index} priority={itemIndex === 0} />
      ))}

      <Container className="relative flex min-h-[100svh] flex-col justify-end pb-28 pt-28 sm:pb-32 lg:justify-center lg:pb-28 lg:pt-28">
        <div key={slide.id} className="hero-copy max-w-2xl">
          <p className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-accent">
            {slide.kicker}
          </p>
          <h1
            id="hero-title"
            className={
              index === 0
                ? "display text-[2.2rem] leading-[1.08] sm:text-5xl lg:text-[3.35rem]"
                : "sr-only"
            }
          >
            {index === 0
              ? heroSlides[0].headline.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))
              : `${heroSlides[0].headline[0]} ${heroSlides[0].headline[1]}`}
          </h1>
          {index === 0 ? null : (
            <p className="display text-[2.2rem] leading-[1.08] sm:text-5xl lg:text-[3.35rem]">
              {slide.headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          )}
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/86 sm:text-xl">{slide.text}</p>
          <div className="mt-9">
            {slide.cta.action === "metodo" ? (
              <Button to="/metodo" variant="light">
                {slide.cta.label}
              </Button>
            ) : (
              <OpenContactButton variant="light">{slide.cta.label}</OpenContactButton>
            )}
          </div>
        </div>
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10">
        <Container className="flex items-end justify-between gap-4 pb-7 sm:pb-8">
          <div className="pointer-events-auto flex w-full items-end justify-between gap-4">
            <ol className="flex items-center gap-5" aria-label="Slide">
              {heroSlides.map((item, itemIndex) => {
                const current = itemIndex === index;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => goTo(itemIndex, true)}
                      className={`text-[0.72rem] font-semibold tracking-[0.16em] transition-colors duration-300 ${
                        current ? "text-white" : "text-white/40 hover:text-white/75"
                      }`}
                      aria-label={`Vai alla slide ${String(itemIndex + 1).padStart(2, "0")}`}
                      aria-current={current ? "true" : undefined}
                    >
                      {String(itemIndex + 1).padStart(2, "0")}
                      <span
                        className={`mt-1.5 block h-px w-full ${current ? "bg-accent" : "bg-transparent"}`}
                        aria-hidden="true"
                      />
                    </button>
                  </li>
                );
              })}
            </ol>
            <div className="flex gap-2">
              <button
                type="button"
                className="hero-arrow"
                aria-label="Slide precedente"
                onClick={() => goTo(index - 1, true)}
              >
                ←
              </button>
              <button
                type="button"
                className="hero-arrow"
                aria-label="Slide successiva"
                onClick={() => goTo(index + 1, true)}
              >
                →
              </button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

function SlidePhoto({ slide, active, priority }) {
  return (
    <div className={`hero-layer ${active ? "is-active" : ""}`} aria-hidden={!active}>
      <img
        src={slide.image}
        alt={active ? slide.alt : ""}
        width="1920"
        height="1080"
        fetchPriority={priority ? "high" : "low"}
        decoding="async"
        className={`absolute inset-0 h-full w-full object-cover ${slide.imagePosition}`}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-deep/68 to-navy-deep/28" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/78 via-transparent to-navy-deep/30" />
    </div>
  );
}
