import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import type { Lang } from '../i18n/translations'

export function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const { lang, setLang, t } = useLang()

  const navLinks = [
    { label: t.nav.about, section: 'solution' },
    { label: t.nav.vision, section: 'vision' },
    { label: t.nav.products, section: 'products' },
    { label: t.nav.getInTouch, section: 'contact' },
  ]

  const scrollToSection = (section: string) => {
    const doScroll = () =>
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(doScroll, 120)
    } else {
      doScroll()
    }
  }

  const LangBtn = ({ l }: { l: Lang }) => (
    <button
      onClick={() => setLang(l)}
      className={`text-xs font-semibold font-display tracking-widest uppercase border-0 bg-transparent cursor-pointer transition-colors duration-150 ${
        lang === l ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
      }`}
    >
      {l.toUpperCase()}
    </button>
  )

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/10">
      {/* Single row — logo · nav links · lang switcher */}
      <div className="container flex items-center justify-between h-16 gap-4">
        {/* Logo — far left */}
        <Link
          to="/"
          className="font-display text-lg font-bold text-foreground shrink-0"
          style={{ letterSpacing: '-0.04em' }}
        >
          R4Sus<span className="text-primary">.</span>
        </Link>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Nav links + language switcher — all on the right */}
        <div className="flex items-center gap-1 sm:gap-4 overflow-x-auto no-scrollbar">
          {navLinks.map((link) => (
            <button
              key={link.section}
              onClick={() => scrollToSection(link.section)}
              className={`text-xs sm:text-sm font-medium whitespace-nowrap border-0 bg-transparent cursor-pointer transition-colors duration-200 shrink-0 px-1 ${
                link.section === 'contact'
                  ? 'text-primary font-semibold hover:text-primary/80'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.label}
            </button>
          ))}
          <span className="text-muted-foreground/20 text-xs mx-1">|</span>
          <LangBtn l="en" />
          <span className="text-muted-foreground/40 text-xs">|</span>
          <LangBtn l="de" />
        </div>
      </div>
    </nav>
  )
}
