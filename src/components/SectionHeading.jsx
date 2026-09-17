export function SectionHeading({
  kicker,
  title,
  titleId,
  as: Tag = "h2",
  className = "",
  inverted = false,
}) {
  return (
    <header className={`max-w-3xl ${className}`}>
      {kicker ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          {kicker}
        </p>
      ) : null}
      <Tag
        id={titleId}
        className={`display text-[1.95rem] sm:text-4xl lg:text-[2.75rem] ${
          inverted ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </Tag>
    </header>
  );
}
