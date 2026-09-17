import { createContext, useCallback, useContext, useMemo, useState } from "react";

const ContactContext = createContext(null);

export function ContactProvider({ children }) {
  const [open, setOpen] = useState(false);

  const openContact = useCallback(() => setOpen(true), []);
  const closeContact = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ open, openContact, closeContact }),
    [open, openContact, closeContact],
  );

  return <ContactContext.Provider value={value}>{children}</ContactContext.Provider>;
}

export function useContact() {
  const ctx = useContext(ContactContext);
  if (!ctx) {
    throw new Error("useContact deve essere usato dentro ContactProvider");
  }
  return ctx;
}
