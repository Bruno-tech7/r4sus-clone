# r4sus — Clone

Pixel-perfect klon stránky [r4sus.lovable.app](https://r4sus.lovable.app/) — projekt o repurposingu vyřazených lopatek větrných turbín do udržitelného městského nábytku. Zakladatel: **Samuel E. Arpas**.

## Stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** (vlastní design tokeny)
- **Framer Motion** (scroll animace, fade-up efekty)
- **React Router v6** (SPA routing `/` a `/products/:slug`)

## Spuštění

```bash
# Přejdi do složky projektu
cd r4sus-clone

# Nainstaluj závislosti (pokud ještě nejsou)
npm install

# Spusť dev server
npm run dev
```

Otevři [http://localhost:5173](http://localhost:5173) v prohlížeči.

## Build pro produkci

```bash
npm run build
npm run preview
```

## Struktura projektu

```
r4sus-clone/
├── public/
│   └── assets/
│       └── hero-bg.jpg          # Hero background (originál ze stránky)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx            # Fixed navigace s hamburger menu
│   │   ├── Hero.tsx              # Hero sekce s bg obrazkem + CTA
│   │   ├── ProblemSection.tsx    # "85% turbine blades..." – 3 glass cards
│   │   ├── SolutionSection.tsx   # "We give turbine blades a second life"
│   │   ├── ProductsSection.tsx   # Grid produktů
│   │   ├── ProductCard.tsx       # Jednotlivá karta produktu
│   │   ├── BenefitsSection.tsx   # Emoji sekce udržitelnosti
│   │   └── ContactSection.tsx    # Kontaktní formulář
│   ├── pages/
│   │   ├── HomePage.tsx          # Hlavní landing page
│   │   └── ProductPage.tsx       # Detail produktu (/products/:slug)
│   ├── data/
│   │   └── products.ts           # Data všech 5 produktů
│   ├── hooks/
│   │   └── useInView.ts          # IntersectionObserver hook
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                 # Tailwind + CSS custom properties
├── tailwind.config.ts
├── vite.config.ts
└── package.json
```

## Design tokeny (barevná paleta)

| Token | Hodnota | Popis |
|-------|---------|-------|
| `--primary` | `hsl(89 100% 42%)` | Limetková zelená |
| `--foreground` | `hsl(222 47% 11%)` | Tmavá navy |
| `--section-dark` | `hsl(222 47% 11%)` | Tmavé sekce |
| `--muted` | `hsl(210 40% 96%)` | Světle šedá |

## Fonty

- **Display (nadpisy):** Schibsted Grotesk (Google Fonts)
- **Body:** Inter (Google Fonts)

## Sekce stránky

1. **Navbar** – Fixed, průhledná, backdrop blur, hamburger pro mobil
2. **Hero** – Originální foto větrných turbín, gradient overlay, CTA tlačítka
3. **Problem** – Dark sekce, 3 glass karty s SVG ikonami
4. **Solution** – "We give turbine blades a second life" + Samuel E. Arpas
5. **Products** – Grid 5 produktů (Bus Stop, Bench, Garden Shed Roof, Bookshelf, Plant Pot)
6. **Benefits** – "Sustainability without compromise" – 3 emoji karty
7. **Contact** – Formulář se success stavem, `www.r4sus.com`

## Routing

- `/` — Hlavní landing page
- `/products/:slug` — Detail produktu s inquiry formulářem

Dostupné slug hodnoty: `bus-stop`, `outdoor-park-bench`, `garden-shed-roof`, `bookshelf`, `plant-pot`
