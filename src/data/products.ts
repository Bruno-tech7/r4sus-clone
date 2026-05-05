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
        'A full turbine blade cross-section repurposed as a sculptural bench. Aerodynamic, elegant, maintenance-free.',
      details:
        "Each bench uses the entire aerodynamic cross-section of a decommissioned turbine blade as its seating surface, mounted on a lightweight steel lattice base. The natural foil profile is perfectly ergonomic for sitting. UV-resistant, waterproof, and graffiti-resistant composite surface — no painting or sealing required, ever. Available in lengths from 2m to 6m.",
    },
    de: {
      name: 'Outdoor-Parkbank',
      description:
        'Ein kompletter Turbinenblatt-Querschnitt als skulpturale Bank. Aerodynamisch, elegant, wartungsfrei.',
      details:
        "Jede Bank verwendet den gesamten aerodynamischen Querschnitt eines stillgelegten Turbinenblatts als Sitzfläche, montiert auf einem leichten Stahlgittergestell. Das natürliche Folienprofil ist ergonomisch perfekt zum Sitzen. UV-beständige, wasserdichte und graffiti-resistente Verbundoberfläche — kein Streichen oder Versiegeln erforderlich. Erhältlich in Längen von 2 m bis 6 m.",
    },
  },
  {
    slug: 'chair',
    price: '1,500 €',
    tag: 'B2C',
    isComingSoon: false,
    en: {
      name: 'Blade Chair',
      description:
        'A statement chair with side panels cut from turbine blade composite. Lightweight, rigid, and built to last a lifetime.',
      details:
        'The R4Sus Blade Chair pairs turbine blade composite side panels — exposed to reveal the distinctive layered structure — with a smooth white composite seat and backrest. Incredibly strong yet lightweight, it resists UV, moisture, and temperature extremes without any maintenance. Each chair is one-of-a-kind, shaped by the position of its panels on the original blade. Suitable for indoor and outdoor use.',
    },
    de: {
      name: 'Blatt-Stuhl',
      description:
        'Ein besonderer Stuhl mit Seitenpanelen aus Turbinenblatt-Komposit. Leicht, steif und für ein Leben lang gebaut.',
      details:
        'Der R4Sus Blatt-Stuhl kombiniert Seitenpaneele aus Turbinenblatt-Komposit — freigelegt um die charakteristische Schichtstruktur zu zeigen — mit einer glatten weißen Verbundsitzfläche und Rückenlehne. Unglaublich stark und dennoch leicht, widersteht er UV, Feuchtigkeit und Temperaturschwankungen ohne jede Wartung. Jeder Stuhl ist ein Unikat, geformt durch die Position seiner Paneele auf dem ursprünglichen Blatt. Für Innen- und Außenbereich geeignet.',
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
    price: '80–300 €',
    tag: 'B2C / B2G',
    isComingSoon: false,
    en: {
      name: 'Plant Pot',
      description:
        'Cylindrical blade-composite planters in a cascading trio. UV-resistant, frost-proof, lifetime outdoor durability.',
      details:
        'Each planter is formed from a section of turbine blade composite, cut and shaped into smooth cylinders that connect into a cascading trio. The composite material is naturally resistant to UV, frost, and water damage — zero maintenance, ever. Each set is unique, shaped by the curvature of the original blade. Available as single, double, or triple-pot configurations. Ideal for public spaces, terraces, and gardens.',
    },
    de: {
      name: 'Blumentopf',
      description:
        'Zylindrische Verbundstoff-Pflanzgefäße im kaskadierenden Trio. UV-beständig, frostfest, lebenslange Haltbarkeit.',
      details:
        'Jedes Pflanzgefäß wird aus einem Abschnitt des Turbinenblatt-Verbundstoffs geformt und zu glatten Zylindern verarbeitet, die zu einem kaskadierenden Trio verbunden werden. Das Verbundmaterial ist von Natur aus UV-, frost- und wasserschadenresistent — wartungsfrei für immer. Jedes Set ist einzigartig, geformt durch die Krümmung des ursprünglichen Blatts. Erhältlich als Einzel-, Doppel- oder Dreifach-Topf-Konfiguration.',
    },
  },
  {
    slug: 'business-card',
    price: '50–150 €',
    tag: 'B2C / B2B',
    isComingSoon: false,
    en: {
      name: 'Blade Business Card',
      description:
        'Handcrafted business cards made from turbine blade glass fibre. Silver gloss finish, 0.6 mm thick — a card that tells your story.',
      details:
        'Each R4Sus Blade Business Card is handcrafted from the glass fibre composite of a decommissioned wind turbine blade. The silver gloss finish showcases the distinctive woven fibre texture that makes every card unique. At 0.6 mm thickness with rounded corners, it has the weight and feel of quality metal — yet it is fully sustainable. Available with custom laser engraving or UV printing. Minimum order: 10 cards.',
    },
    de: {
      name: 'Rotorblatt-Visitenkarte',
      description:
        'Handgefertigte Visitenkarten aus Turbinenblatt-Glasfaser. Silber-Hochglanz, 0,6 mm dick — eine Karte, die Ihre Geschichte erzählt.',
      details:
        'Jede R4Sus Rotorblatt-Visitenkarte wird handgefertigt aus dem Glasfaser-Verbundstoff eines stillgelegten Windturbinenrotorblatts. Der Silber-Hochglanz zeigt die charakteristische gewebte Faserstruktur, die jede Karte einzigartig macht. Mit 0,6 mm Dicke und abgerundeten Ecken hat sie das Gewicht und das Gefühl von Qualitätsmetall — und ist dennoch vollständig nachhaltig. Erhältlich mit individueller Lasergravur oder UV-Druck. Mindestbestellung: 10 Karten.',
    },
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
