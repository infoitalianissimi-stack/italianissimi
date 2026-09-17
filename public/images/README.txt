Cartella per foto reali, mockup, progetti e Open Graph.

HERO HOME
---------
Slide 1: public/images/hero-italianissimi.jpg
Slide 2: public/images/hero-slide-02-professionista-donna.jpg
Slide 3: public/images/hero-slide-03-workspace-emozionale.jpg

Percorsi e autoplay: src/data/heroSlides.js
Inquadratura (object-position): campo imagePosition in ciascuna slide.

Consigli:
- formato JPG, 1920×1080 o 2400×1350
- peso 200–400 KB se possibile (compressione 70–80%)
- soggetto un po’ a destra, zona sinistra più libera per il testo
- object-position è in src/components/PhotoHero.jsx
  desktop: object-[38%_center]
  mobile:  object-[28%_center]
  regola questi valori se il volto o il soggetto escono dal taglio

Open Graph (consigliata): og.jpg 1200×630
