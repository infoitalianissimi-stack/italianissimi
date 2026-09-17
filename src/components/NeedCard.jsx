import { AreaIcon } from "./AreaIcon";

export function NeedCard({ item }) {
  return (
    <article className="need-card group flex h-full items-center gap-4 rounded-2xl bg-paper px-5 py-5">
      <span className="icon-nudge flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-navy shadow-[0_8px_18px_-12px_rgba(15,47,104,0.45)]">
        <AreaIcon id={item.icon} />
      </span>
      <p className="text-[0.98rem] font-medium leading-snug text-navy">{item.label}</p>
    </article>
  );
}
