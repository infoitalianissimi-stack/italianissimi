export function Section({
  id,
  children,
  className = "",
  as: Tag = "section",
  ariaLabelledby,
}) {
  return (
    <Tag
      id={id}
      aria-labelledby={ariaLabelledby}
      className={`section-pad ${className}`}
    >
      {children}
    </Tag>
  );
}
