import { areas } from "../data/areas";
import { company } from "../data/company";
import { AreaIcon } from "./AreaIcon";

function GlassChip({ id, label, className = "" }) {
  return (
    <article
      className={`flex min-w-[8.4rem] items-center gap-2.5 rounded-lg border border-white/12 bg-white/[0.07] px-3 py-2.5 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.7)] backdrop-blur-md ${className}`}
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/10 text-white">
        <AreaIcon id={id} className="h-4 w-4" />
      </span>
      <p className="text-[0.82rem] font-medium text-white">{label}</p>
    </article>
  );
}

export function HeroGraph() {
  return (
    <>
      <div className="lg:hidden">
        <MobileGraph />
      </div>
      <aside
        className="command-stage relative hidden min-h-[30.5rem] overflow-hidden rounded-2xl lg:block"
        aria-label="Italianissimi coordina web, comunicazione, tecnologia, automazioni e AI"
      >
        <div className="command-orb command-orb-a" aria-hidden="true" />
        <div className="command-orb command-orb-b" aria-hidden="true" />

        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path className="eco-line" d="M50 46 C 32 36, 22 24, 18 16" fill="none" stroke="#F47A1F" strokeWidth="0.16" />
          <path className="eco-line eco-line-b" d="M50 46 C 68 34, 80 24, 84 18" fill="none" stroke="#ffffff" strokeWidth="0.14" />
          <path className="eco-line eco-line-c" d="M50 46 C 28 56, 18 66, 14 74" fill="none" stroke="#ffffff" strokeWidth="0.14" />
          <path className="eco-line eco-line-d" d="M50 46 C 74 58, 84 68, 88 76" fill="none" stroke="#F47A1F" strokeWidth="0.14" />
          <path className="eco-line eco-line-e" d="M50 46 C 51 64, 50 78, 50 90" fill="none" stroke="#ffffff" strokeWidth="0.14" />
          <circle cx="18" cy="16" r="0.5" fill="#F47A1F" className="eco-node" />
          <circle cx="84" cy="18" r="0.5" fill="#F47A1F" className="eco-node" />
          <circle cx="14" cy="74" r="0.5" fill="#F47A1F" className="eco-node" />
          <circle cx="88" cy="76" r="0.5" fill="#F47A1F" className="eco-node" />
          <circle cx="50" cy="90" r="0.5" fill="#F47A1F" className="eco-node" />
        </svg>

        <div className="absolute left-[6%] top-[11%] z-10 lg:left-[8%] lg:top-[13%]">
          <GlassChip id="web" label="Web" className="eco-leaf-a" />
        </div>
        <div className="absolute right-[5%] top-[9%] z-10 lg:right-[7%] lg:top-[17%]">
          <GlassChip id="comunicazione" label="Comunicazione" className="eco-leaf-b" />
        </div>
        <div className="absolute left-[4%] top-[58%] z-10 lg:left-[6%]">
          <GlassChip id="tecnologia" label="Tecnologia" className="eco-leaf-c" />
        </div>
        <div className="absolute right-[4%] top-[54%] z-10 lg:right-[5%]">
          <GlassChip id="automazioni" label="Automazioni" className="eco-leaf-d" />
        </div>
        <div className="absolute bottom-[6%] left-1/2 z-10 -translate-x-1/2">
          <GlassChip id="ai" label="AI" className="eco-leaf-e" />
        </div>

        <div className="absolute left-1/2 top-[46%] z-20 -translate-x-1/2 -translate-y-1/2">
          <div className="eco-hub command-hub px-5 py-5">
            <img
              src={company.logoSrc}
              alt=""
              width="56"
              height="56"
              className="mx-auto h-14 w-14 rounded-[10px] object-cover shadow-[0_8px_24px_-12px_rgba(0,0,0,0.55)]"
            />
            <p className="mt-3 text-[0.68rem] font-semibold tracking-[0.22em] text-white/90">
              {company.brandName}
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

function MobileGraph() {
  return (
    <div className="command-stage overflow-hidden rounded-2xl px-4 py-5">
      <div className="flex items-center gap-3 border-b border-white/10 pb-4">
        <img
          src={company.logoSrc}
          alt=""
          width="40"
          height="40"
          className="h-10 w-10 rounded-[8px] object-cover"
        />
        <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-white">{company.brandName}</p>
      </div>
      <ul className="mt-2">
        {areas.map((area) => (
          <li key={area.id} className="flex items-center gap-3 border-b border-white/8 py-3 last:border-b-0">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white/10 text-white">
              <AreaIcon id={area.id} className="h-4 w-4" />
            </span>
            <span className="text-sm font-medium text-white">{area.label}</span>
            <span className="ml-auto h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          </li>
        ))}
      </ul>
    </div>
  );
}
