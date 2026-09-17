export function Prose({ children, className = "", inverted = false }) {
  return (
    <div
      className={`measure space-y-5 text-[1.05rem] leading-[1.75] sm:text-[1.08rem] ${
        inverted ? "text-white/75" : "text-ink-soft"
      } ${className}`}
    >
      {children}
    </div>
  );
}
