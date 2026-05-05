// Consistent sketch-style SVG illustrations for each product.
// Style: technical line drawing, white strokes on dark bg, green (primary) accents.

const G = 'hsl(89 100% 42%)'          // primary green
const GF = 'hsl(89 100% 42% / 0.22)'  // green fill (subtle)
const W6 = 'rgba(255,255,255,0.65)'   // white stroke main
const W4 = 'rgba(255,255,255,0.40)'   // white stroke secondary
const W2 = 'rgba(255,255,255,0.18)'   // white fill subtle
const WL = 'rgba(255,255,255,0.12)'   // ground / guides

const SVG = ({ children }: { children: React.ReactNode }) => (
  <svg viewBox="0 0 200 140" className="w-full h-full" fill="none">
    {children}
  </svg>
)

/** Bus Stop — curved blade canopy on two poles with bench inside */
export function BusStopIllustration() {
  return (
    <SVG>
      {/* ground */}
      <line x1="10" y1="126" x2="190" y2="126" stroke={WL} strokeWidth="1" />
      {/* poles */}
      <line x1="48"  y1="126" x2="48"  y2="50" stroke={W6} strokeWidth="2" />
      <line x1="152" y1="126" x2="152" y2="50" stroke={W6} strokeWidth="2" />
      {/* blade canopy — aerodynamic curve */}
      <path d="M18 54 Q100 24 182 52 L180 66 Q100 40 20 68 Z"
        fill={GF} stroke={G} strokeWidth="1.8" strokeLinejoin="round" />
      {/* rear wall */}
      <line x1="48" y1="68" x2="48" y2="104" stroke={W4} strokeWidth="1" />
      {/* bench seat */}
      <path d="M52 96 Q100 90 148 96 L147 103 Q100 98 53 103 Z"
        fill={W2} stroke={W6} strokeWidth="1.5" />
      {/* bench legs */}
      <line x1="68"  y1="103" x2="66"  y2="116" stroke={W4} strokeWidth="1.5" />
      <line x1="132" y1="103" x2="134" y2="116" stroke={W4} strokeWidth="1.5" />
      {/* ground shadow */}
      <ellipse cx="100" cy="126" rx="65" ry="3" fill={WL} />
    </SVG>
  )
}

/** Park Bench — blade cross-section as seat, metal legs */
export function ParkBenchIllustration() {
  return (
    <SVG>
      {/* ground */}
      <line x1="10" y1="122" x2="190" y2="122" stroke={WL} strokeWidth="1" />
      {/* blade seat */}
      <path d="M28 76 Q100 60 172 76 L170 88 Q100 74 30 88 Z"
        fill={GF} stroke={G} strokeWidth="1.8" strokeLinejoin="round" />
      {/* backrest (blade shape) */}
      <path d="M30 76 L33 52 Q100 36 167 52 L170 76"
        fill="none" stroke={W6} strokeWidth="1.5" />
      {/* backrest blade fill */}
      <path d="M33 52 Q100 68 167 52 L166 60 Q100 76 34 60 Z"
        fill={GF} stroke={G} strokeWidth="1.2" />
      {/* legs */}
      <line x1="54"  y1="88" x2="48"  y2="122" stroke={W6} strokeWidth="2" />
      <line x1="146" y1="88" x2="152" y2="122" stroke={W6} strokeWidth="2" />
      <line x1="78"  y1="88" x2="76"  y2="122" stroke={W4} strokeWidth="1.5" />
      <line x1="122" y1="88" x2="124" y2="122" stroke={W4} strokeWidth="1.5" />
      {/* cross brace */}
      <line x1="48" y1="110" x2="152" y2="110" stroke={W4} strokeWidth="1" />
      {/* shadow */}
      <ellipse cx="100" cy="122" rx="60" ry="3" fill={WL} />
    </SVG>
  )
}

/** Garden Shed Roof — blade panel on simple shed */
export function GardenShedRoofIllustration() {
  return (
    <SVG>
      {/* ground */}
      <line x1="10" y1="128" x2="190" y2="128" stroke={WL} strokeWidth="1" />
      {/* shed front face */}
      <rect x="38" y="72" width="118" height="56" stroke={W4} strokeWidth="1.5" />
      {/* shed right side (perspective) */}
      <line x1="156" y1="72"  x2="174" y2="58"  stroke={W4} strokeWidth="1" />
      <line x1="156" y1="128" x2="174" y2="114" stroke={W4} strokeWidth="1" />
      <line x1="174" y1="58"  x2="174" y2="114" stroke={W4} strokeWidth="1" />
      {/* right face fill */}
      <path d="M156 72 L174 58 L174 114 L156 128 Z" fill={W2} />
      {/* blade roof panel — main */}
      <path d="M20 66 Q100 42 180 60 L178 74 Q100 56 22 78 Z"
        fill={GF} stroke={G} strokeWidth="1.8" strokeLinejoin="round" />
      {/* blade roof right overhang (perspective) */}
      <path d="M178 60 L194 50 L192 62 L178 74 Z"
        fill={GF} stroke={G} strokeWidth="1.2" />
      {/* door */}
      <rect x="82" y="96" width="36" height="32" stroke={W6} strokeWidth="1.5" />
      <circle cx="114" cy="112" r="2.5" fill={W6} />
      {/* window */}
      <rect x="46" y="86" width="24" height="18" stroke={W4} strokeWidth="1" />
      <line x1="58" y1="86" x2="58" y2="104" stroke={W4} strokeWidth="0.75" />
      <line x1="46" y1="95" x2="70" y2="95" stroke={W4} strokeWidth="0.75" />
      {/* shadow */}
      <ellipse cx="100" cy="128" rx="75" ry="3" fill={WL} />
    </SVG>
  )
}

/** Bookshelf — frame with three curved blade shelves + books */
export function BookshelfIllustration() {
  return (
    <SVG>
      {/* frame */}
      <rect x="36" y="8" width="128" height="124" stroke={W6} strokeWidth="2" />
      {/* blade shelf 1 */}
      <path d="M40 46 Q100 34 160 46 L160 55 Q100 45 40 55 Z"
        fill={GF} stroke={G} strokeWidth="1.6" />
      {/* blade shelf 2 */}
      <path d="M40 80 Q100 68 160 80 L160 89 Q100 80 40 89 Z"
        fill={GF} stroke={G} strokeWidth="1.6" />
      {/* blade shelf 3 */}
      <path d="M40 114 Q100 102 160 114 L160 123 Q100 114 40 123 Z"
        fill={GF} stroke={G} strokeWidth="1.6" />
      {/* books — shelf 1 */}
      <rect x="44" y="21" width="8"  height="25" fill={W2} stroke={W4} strokeWidth="0.8" />
      <rect x="54" y="18" width="8"  height="28" fill={W2} stroke={W4} strokeWidth="0.8" />
      <rect x="64" y="23" width="7"  height="23" fill={W2} stroke={W4} strokeWidth="0.8" />
      <rect x="86" y="20" width="9"  height="26" fill={W2} stroke={W4} strokeWidth="0.8" />
      <rect x="120" y="22" width="7" height="24" fill={W2} stroke={W4} strokeWidth="0.8" />
      {/* books — shelf 2 */}
      <rect x="44" y="57" width="8"  height="23" fill={W2} stroke={W4} strokeWidth="0.8" />
      <rect x="54" y="55" width="10" height="25" fill={W2} stroke={W4} strokeWidth="0.8" />
      <rect x="100" y="58" width="8" height="22" fill={W2} stroke={W4} strokeWidth="0.8" />
      <rect x="138" y="56" width="7" height="24" fill={W2} stroke={W4} strokeWidth="0.8" />
      {/* books — shelf 3 */}
      <rect x="44" y="91"  width="8"  height="23" fill={W2} stroke={W4} strokeWidth="0.8" />
      <rect x="74" y="92"  width="9"  height="22" fill={W2} stroke={W4} strokeWidth="0.8" />
      <rect x="118" y="90" width="8"  height="24" fill={W2} stroke={W4} strokeWidth="0.8" />
      <rect x="144" y="93" width="7"  height="21" fill={W2} stroke={W4} strokeWidth="0.8" />
    </SVG>
  )
}

/** EV Charging Station — blade canopy over two charging columns with car */
export function ChargingStationIllustration() {
  return (
    <SVG>
      {/* ground platform */}
      <rect x="18" y="118" width="164" height="3" rx="1" fill={WL} />
      {/* vertical blade signage (left) */}
      <path d="M32 22 Q35 24 37 118 L41 118 Q43 24 46 22 Q39 16 32 22 Z"
        fill={GF} stroke={G} strokeWidth="1.6" strokeLinejoin="round" />
      {/* blade canopy */}
      <path d="M54 46 Q118 24 184 42 L182 57 Q118 38 56 60 Z"
        fill={GF} stroke={G} strokeWidth="1.8" strokeLinejoin="round" />
      {/* canopy support left */}
      <rect x="80"  y="57" width="5" height="8" fill={W6} />
      {/* canopy support right */}
      <rect x="148" y="55" width="5" height="8" fill={W6} />
      {/* left charging column */}
      <rect x="74" y="65" width="18" height="46" rx="2" fill={W2} stroke={W6} strokeWidth="1.5" />
      {/* charging port left */}
      <circle cx="83" cy="82" r="5" fill="none" stroke={G} strokeWidth="1.4" />
      <line x1="83" y1="77" x2="83" y2="70" stroke={G} strokeWidth="1.2" />
      {/* charging port indicator */}
      <rect x="77" y="92" width="12" height="5" rx="1" fill={GF} stroke={G} strokeWidth="0.8" />
      {/* right charging column */}
      <rect x="142" y="63" width="18" height="48" rx="2" fill={W2} stroke={W6} strokeWidth="1.5" />
      {/* charging port right */}
      <circle cx="151" cy="80" r="5" fill="none" stroke={G} strokeWidth="1.4" />
      <line x1="151" y1="75" x2="151" y2="68" stroke={G} strokeWidth="1.2" />
      <rect x="145" y="90" width="12" height="5" rx="1" fill={GF} stroke={G} strokeWidth="0.8" />
      {/* car body */}
      <path d="M62 100 Q68 88 88 86 L122 86 Q136 86 140 100 Z"
        fill={W2} stroke={W4} strokeWidth="1.2" />
      <rect x="62" y="100" width="78" height="14" rx="2" fill={W2} stroke={W4} strokeWidth="1.2" />
      {/* wheels */}
      <circle cx="78"  cy="116" r="6" fill="none" stroke={W6} strokeWidth="1.8" />
      <circle cx="124" cy="116" r="6" fill="none" stroke={W6} strokeWidth="1.8" />
      <circle cx="78"  cy="116" r="2" fill={W4} />
      <circle cx="124" cy="116" r="2" fill={W4} />
      {/* charging cable */}
      <path d="M92 111 Q85 114 83 111" fill="none" stroke={G} strokeWidth="1.2" strokeDasharray="2,2" />
      {/* shadow */}
      <ellipse cx="101" cy="121" rx="60" ry="3" fill={WL} />
    </SVG>
  )
}

/** Bike Shelter — whole blade mounted as curved bicycle canopy */
export function BikeShelterIllustration() {
  return (
    <SVG>
      {/* ground */}
      <line x1="10" y1="126" x2="190" y2="126" stroke={WL} strokeWidth="1" />
      {/* blade shell — large curved form, the whole blade */}
      <path d="M30 38 Q20 75 28 118 L52 118 Q44 75 68 42 Z"
        fill={GF} stroke={G} strokeWidth="1.8" strokeLinejoin="round" />
      {/* blade top surface / outer edge */}
      <path d="M30 38 Q100 18 172 52 L158 62 Q92 36 68 42 Z"
        fill={GF} stroke={G} strokeWidth="1.8" strokeLinejoin="round" />
      {/* blade inner concave surface */}
      <path d="M52 118 Q70 80 158 62 L158 72 Q72 90 54 126 Z"
        fill={W2} stroke={W4} strokeWidth="1" />
      {/* steel base / mount */}
      <rect x="34" y="118" width="20" height="6" rx="1" fill={W6} stroke={W6} strokeWidth="1" />
      <rect x="28" y="124" width="32" height="3" rx="1" fill={W4} />
      {/* bikes — simplified silhouettes */}
      {/* bike 1 */}
      <circle cx="100" cy="112" r="9" fill="none" stroke={W6} strokeWidth="1.5" />
      <circle cx="122" cy="112" r="9" fill="none" stroke={W6} strokeWidth="1.5" />
      <path d="M109 112 L114 100 L122 103 M114 100 L117 112" stroke={W6} strokeWidth="1.2" fill="none" />
      <line x1="109" y1="112" x2="100" y2="112" stroke={W6} strokeWidth="1.2" />
      {/* bike 2 (behind, lighter) */}
      <circle cx="138" cy="113" r="8" fill="none" stroke={W4} strokeWidth="1.2" />
      <circle cx="156" cy="113" r="8" fill="none" stroke={W4} strokeWidth="1.2" />
      <path d="M146 113 L150 102 L156 105 M150 102 L152 113" stroke={W4} strokeWidth="1" fill="none" />
      {/* handlebar bike 1 */}
      <line x1="113" y1="100" x2="116" y2="97" stroke={W6} strokeWidth="1.2" />
      <line x1="115" y1="97" x2="119" y2="98" stroke={W6} strokeWidth="1.2" />
      {/* shadow */}
      <ellipse cx="100" cy="127" rx="75" ry="3" fill={WL} />
    </SVG>
  )
}

/** Plant Pot — blade-segment pot with foliage */
export function PlantPotIllustration() {
  return (
    <SVG>
      {/* ground */}
      <line x1="20" y1="130" x2="180" y2="130" stroke={WL} strokeWidth="1" />
      {/* pot body — blade cross-section shape */}
      <path d="M65 118 L52 72 Q100 52 148 72 L135 118 Z"
        fill={GF} stroke={G} strokeWidth="1.8" strokeLinejoin="round" />
      {/* pot rim ellipse */}
      <ellipse cx="100" cy="72" rx="48" ry="10"
        fill="hsl(89 100% 42% / 0.12)" stroke={G} strokeWidth="1.6" />
      {/* blade texture line on pot */}
      <path d="M60 90 Q100 82 140 90" stroke={G} strokeWidth="0.8" strokeOpacity="0.5" />
      {/* base / drainage */}
      <path d="M65 118 Q100 125 135 118 L133 126 Q100 132 67 126 Z"
        fill={W2} stroke={W4} strokeWidth="1" />
      {/* soil surface inside pot */}
      <ellipse cx="100" cy="68" rx="36" ry="7" fill="rgba(255,255,255,0.06)" />
      {/* stems */}
      <path d="M100 64 C96 52 90 40 84 26" stroke={W6} strokeWidth="1.8" />
      <path d="M100 64 C104 50 112 38 118 24" stroke={W6} strokeWidth="1.8" />
      <path d="M100 64 C100 52 100 38 100 22" stroke={W6} strokeWidth="2" />
      {/* leaves */}
      <path d="M84 26 Q72 18 74 8 Q84 20 84 26"
        fill={W2} stroke={W4} strokeWidth="1" />
      <path d="M118 24 Q130 16 128 7 Q118 18 118 24"
        fill={W2} stroke={W4} strokeWidth="1" />
      <path d="M100 22 Q91 13 94 4 Q102 14 100 22"
        fill={W2} stroke={W4} strokeWidth="1" />
      {/* shadow */}
      <ellipse cx="100" cy="130" rx="45" ry="3" fill={WL} />
    </SVG>
  )
}
