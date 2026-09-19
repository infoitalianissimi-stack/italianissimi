import { brandMission } from "../data/content";
import { Container } from "./Container";

export function MissionBand({ titleId = "mission-title" }) {
  return (
    <section
      className="relative overflow-hidden bg-navy-deep text-white"
      aria-labelledby={titleId}
    >
      <div className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-accent" aria-hidden="true" />
      <div className="command-orb command-orb-c" aria-hidden="true" />
      <Container className="relative py-16 sm:py-20 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {brandMission.eyebrow}
        </p>
        <h2
          id={titleId}
          className="display mt-5 max-w-4xl text-[2.05rem] leading-[1.08] sm:text-5xl lg:text-[3.35rem]"
        >
          <span className="block">{brandMission.lineOne}</span>
          <span className="mt-1 block">{brandMission.lineTwo}</span>
        </h2>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/86 sm:text-xl">
          {brandMission.support}
        </p>
        <p className="mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-white/68">
          {brandMission.follow}
        </p>
      </Container>
    </section>
  );
}
