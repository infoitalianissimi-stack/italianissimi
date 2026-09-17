import { Link } from "react-router-dom";

const variants = {
  primary:
    "btn-primary bg-navy text-white hover:bg-navy-deep",
  secondary:
    "border border-navy/20 bg-transparent text-navy hover:border-navy/40 hover:bg-navy/[0.03]",
  ghost:
    "bg-transparent text-navy underline decoration-accent underline-offset-4 hover:decoration-navy",
  light:
    "bg-white text-navy hover:bg-paper",
  onDark:
    "border border-white/40 bg-transparent text-white hover:border-white/70 hover:bg-white/10",
};

export function Button({
  to,
  href,
  children,
  variant = "primary",
  className = "",
  type = "button",
  arrow = variant === "primary",
  ...props
}) {
  const classes = `group inline-flex min-h-12 items-center justify-center gap-2 rounded-[3px] px-6 py-3 text-[0.95rem] font-semibold tracking-[-0.01em] transition-[background-color,border-color,transform,box-shadow] duration-300 ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {arrow ? (
        <span className="btn-arrow inline-block translate-x-0 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
          →
        </span>
      ) : null}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {content}
    </button>
  );
}
