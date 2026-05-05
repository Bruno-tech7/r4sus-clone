export interface ProductLocale {
  name: string
  description: string
  details: string
}

export interface Product {
  slug: string
  price: string
  tag: string
  isComingSoon: boolean
  en: ProductLocale
  de: ProductLocale
}

export const products: Product[] = [
  {
    slug: 'bus-stop',
    price: '3,500–10,000 €',
    tag: 'B2G',
    isComingSoon: false,
    en: {
      name: 'Bus Stop',
      description:
        'Elegant upcycled blade shelters for public transport. Aerodynamic curves provide natural rain protection.',
      details:
        'Our bus stop shelters are crafted from decommissioned wind turbine blades, preserving their aerodynamic profile to create naturally rain-resistant structures. Each shelter is unique, shaped by the original blade geometry. Built to withstand decades of weather exposure without maintenance. Available in custom lengths from 3m to 12m.',
    },
    de: {
      name: 'Bushaltestelle',
      description:
        'Elegante Unterstände aus recycelten Rotorblättern für den öffentlichen Nahverkehr. Aerodynamische Kurven bieten natürlichen Regenschutz.',
      details:
        'Unsere Bushaltestellendächer werden aus stillgelegten Windkraftanlagen-Rotorblättern gefertigt und bewahren deren aerodynamisches Profil für natürlich regenbeständige Strukturen. Jeder Unterstand ist einzigartig und wird durch die ursprüngliche Blattgeometrie geformt. Gebaut, um jahrzehntelanger Witterung standzuhalten. Erhältlich in individuellen Längen von 3 m bis 12 m.',
    },
  },
  {
    slug: 'outdoor-park-bench',
    price: '350–1,000 €',
    tag: 'B2G / B2C',
    isComingSoon: false,
    en: {
      name: 'Outdoor Park Bench',
      description:
        'Durable seating made from blade cross-sections. Weather-resistant and maintenance-free for decades.',
      details:
        "Each bench is cut from the cross-section of a turbine blade, retaining the composite material's incredible strength-to-weight ratio. UV-resistant, waterproof, and graffiti-resistant surface. No painting or sealing required — ever. Available in single-seat and multi-seat configurations.",
    },
    de: {
      name: 'Outdoor-Parkbank',
      description:
        'Robuste Sitzgelegenheiten aus Rotorblatt-Querschnitten. Wetterfest und wartungsfrei für Jahrzehnte.',
      details:
        "Jede Bank wird aus dem Querschnitt eines Turbinenblatts geschnitten und behält das unglaubliche Festigkeit-Gewicht-Verhältnis des Verbundmaterials bei. UV-beständige, wasserdichte und graffiti-resistente Oberfläche. Kein Streichen oder Versiegeln erforderlich — niemals. Erhältlich in Einzel- und Mehrplatzkonfigurationen.",
    },
  },
  {
    slug: 'charging-station',
    price: 'Price on request',
    tag: 'B2G / B2B',
    isComingSoon: false,
    en: {
      name: 'EV Charging Station',
      description:
        'A full blade-made charging hub — canopy, columns and signage all repurposed from turbine blades. Solar-ready.',
      details:
        'The R4Sus EV Charging Station transforms decommissioned turbine blades into a complete urban charging infrastructure. The aerodynamic blade canopy shelters up to two vehicles while the vertical blade column serves as weather-resistant signage. Charging columns are integrated into blade-shaped housings. The entire structure is engineered to last 50+ years with zero maintenance. Available with integrated solar panel mounting and smart-charging management.',
    },
    de: {
      name: 'E-Ladestation',
      description:
        'Ein kompletter Ladepark aus Rotorblättern — Überdachung, Säulen und Beschilderung aus aufbereiteten Turbinenmaterialien. Solar-ready.',
      details:
        'Die R4Sus E-Ladestation verwandelt stillgelegte Turbinenblätter in eine vollständige städtische Ladeinfrastruktur. Die aerodynamische Blattkuppel schützt bis zu zwei Fahrzeuge, während die vertikale Blattsäule als wetterfeste Beschilderung dient. Ladesäulen sind in blattförmige Gehäuse integriert. Die gesamte Konstruktion ist für eine wartungsfreie Lebensdauer von 50+ Jahren ausgelegt. Erhältlich mit integrierter Solarpanelmontage und intelligentem Lademanagement.',
    },
  },
  {
    slug: 'garden-shed-roof',
    price: 'TBD',
    tag: 'coming-soon',
    isComingSoon: true,
    en: {
      name: 'Garden Shed Roof',
      description:
        "Lightweight, weather-resistant roofing panels. The blade's composite structure offers superior insulation.",
      details:
        'Roofing panels made from flattened blade sections offer exceptional insulation and weather resistance. The composite material provides superior thermal performance compared to traditional roofing. Lightweight yet incredibly strong — designed to last 50+ years.',
    },
    de: {
      name: 'Gartenhaus-Dach',
      description:
        'Leichte, wetterfeste Dachpaneele. Die Verbundstruktur des Blattes bietet überlegene Dämmung.',
      details:
        'Dachpaneele aus abgeflachten Blattsegmenten bieten außergewöhnliche Dämmung und Wetterfestigkeit. Das Verbundmaterial bietet im Vergleich zur traditionellen Bedachung überlegene Wärmeleistung. Leicht und dennoch unglaublich stark — für eine Lebensdauer von 50+ Jahren konzipiert.',
    },
  },
  {
    slug: 'bookshelf',
    price: 'TBD',
    tag: 'coming-soon',
    isComingSoon: true,
    en: {
      name: 'Bookshelf',
      description:
        'Indoor furniture with unique curved blade aesthetic. Each piece is one-of-a-kind due to blade geometry.',
      details:
        'Transform your interior with a statement piece of sustainable design. Each bookshelf preserves the elegant curves of the original blade, creating a functional sculpture. The composite material is lightweight yet extremely rigid — perfect for heavy book collections.',
    },
    de: {
      name: 'Bücherregal',
      description:
        'Inneneinrichtung mit einzigartiger geschwungener Blatt-Ästhetik. Jedes Stück ist durch die Blattgeometrie ein Unikat.',
      details:
        'Verwandeln Sie Ihr Interieur mit einem Statement-Stück nachhaltigen Designs. Jedes Bücherregal bewahrt die eleganten Kurven des ursprünglichen Blatts und schafft eine funktionale Skulptur. Das Verbundmaterial ist leicht und dennoch extrem steif — ideal für schwere Büchersammlungen.',
    },
  },
  {
    slug: 'plant-pot',
    price: 'TBD',
    tag: 'coming-soon',
    isComingSoon: true,
    en: {
      name: 'Plant Pot',
      description:
        'Decorative planters cut from blade segments. UV-resistant composite lasts a lifetime outdoors.',
      details:
        'Decorative planters carved from blade segments bring industrial elegance to any garden or patio. The composite material is naturally resistant to UV, frost, and water damage. Each pot has a unique shape determined by its position on the original blade.',
    },
    de: {
      name: 'Blumentopf',
      description:
        'Dekorative Pflanzgefäße aus Blattsegmenten. UV-beständiges Verbundmaterial hält ein Leben lang im Freien.',
      details:
        'Dekorative Pflanzgefäße aus Blattsegmenten bringen industrielle Eleganz in jeden Garten oder auf jede Terrasse. Das Verbundmaterial ist von Natur aus UV-, frost- und wasserschadenresistent. Jeder Topf hat eine einzigartige Form, die durch seine Position auf dem ursprünglichen Blatt bestimmt wird.',
    },
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
