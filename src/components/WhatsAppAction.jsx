import { company } from "../data/company";
import { Button } from "./Button";

export function WhatsAppAction({ href, children = "Scrivici su WhatsApp", className = "" }) {
  return (
    <Button href={href || company.whatsappUrl} className={className} rel="noreferrer" target="_blank">
      {children}
    </Button>
  );
}
