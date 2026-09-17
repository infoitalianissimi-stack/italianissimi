import { company } from "../data/company";
import { Button } from "./Button";

export function EmailAction({ href, children = "Invia un’email", className = "", variant = "secondary" }) {
  return (
    <Button href={href || `mailto:${company.email}`} variant={variant} arrow={false} className={className}>
      {children}
    </Button>
  );
}
