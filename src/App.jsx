import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ScrollToTop } from "./components/ScrollToTop";
import { Contatti } from "./pages/Contatti";
import { Home } from "./pages/Home";
import { Italianissimi } from "./pages/Italianissimi";
import { Cookie, Privacy } from "./pages/Legal";
import { Metodo } from "./pages/Metodo";
import { PartnerDigitale } from "./pages/PartnerDigitale";
import { Servizi } from "./pages/Servizi";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/italianissimi" element={<Italianissimi />} />
          <Route path="/servizi" element={<Servizi />} />
          <Route path="/partner-digitale" element={<PartnerDigitale />} />
          <Route path="/metodo" element={<Metodo />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/cookie-policy" element={<Cookie />} />
          <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
          <Route path="/cookie" element={<Navigate to="/cookie-policy" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
