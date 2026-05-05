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
    slug: 'bike-shelter',
    price: '2,000–6,000 €',
    tag: 'B2G / B2C',
    isComingSoon: false,
    en: {
      name: 'Bike Shelter',
      description:
        'A full turbine blade repurposed as a covered bicycle parking shelter. Protects bikes from rain and sun.',
      details:
        'A single decommissioned turbine blade is mounted on a steel base to create a sculptural, fully weatherproof bicycle shelter. The natural curve of the blade channels rainwater away while providing complete overhead cover for up to 8 bikes. UV-resistant, maintenance-free composite surface. Available in original white finish or custom colour. Ideal for train stations, offices, schools and public spaces.',
    },
    de: {
      name: 'Fahrradunterstand',
      description:
        'Ein ganzes Turbinenblatt als überdachter Fahrradparkplatz. Schützt Fahrräder vor Regen und Sonne.',
      details:
        'Ein stillgelegtes Turbinenblatt wird auf einem Stahlsockel montiert und schafft so einen skulpturalen, vollständig wetterfesten Fahrradunterstand. Die natürliche Krümmung des Blatts leitet Regenwasser ab und bietet gleichzeitig vollständigen Überkopfschutz für bis zu 8 Fahrräder. UV-beständige, wartungsfreie Verbundoberfläche. Erhältlich in originalem Weißlack oder individueller Farbe. Ideal für Bahnhöfe, Büros, Schulen und öffentliche Plätze.',
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
    price: '800–2,500 €',
    tag: 'B2G / B2C',
    isComingSoon: false,
    en: {
      name: 'Exterior Bookcase',
      description:
        'Weatherproof public book-exchange cabinet built from turbine blade composite panels. A free library for any community space.',
      details:
        'The R4Sus Exterior Bookcase repurposes turbine blade composite panels into a fully weatherproof public book-exchange cabinet. The glazed front door seals out rain while the composite shell withstands UV, frost, and vandalism for 50+ years without painting or sealing. Available as a freestanding kiosk or wall-mounted unit. Ideal for parks, schools, libraries, and residential squares.',
    },
    de: {
      name: 'Außen-Bücherschrank',
      description:
        'Wetterfester öffentlicher Büchertausch-Schrank aus Turbinenblatt-Verbundpanelen. Eine kostenlose Bibliothek für jeden Gemeinschaftsraum.',
      details:
        'Der R4Sus Außen-Bücherschrank verwendet Turbinenblatt-Verbundpaneele für einen vollständig wetterfesten öffentlichen Büchertausch-Schrank. Die verglaste Fronttür dichtet gegen Regen ab, während die Verbundschale UV, Frost und Vandalismus für 50+ Jahre ohne Lackieren oder Versiegeln standhält. Erhältlich als freistehender Kiosk oder wandmontierte Einheit. Ideal für Parks, Schulen, Bibliotheken und Wohnplätze.',
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
