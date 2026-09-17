import { useEffect } from "react";
import { defaultMeta } from "../data/content";
import { company } from "../data/company";

export function usePageMeta({
  title = defaultMeta.title,
  description = defaultMeta.description,
  path = "/",
} = {}) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector, attr, value) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);

    const url = `${company.siteUrl}${path === "/" ? "/" : path}`;
    setMeta('meta[property="og:url"]', "content", url);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [title, description, path]);
}
