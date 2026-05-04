import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'O nás', section: 'solution' },
  { label: 'Products', section: 'products' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (section: string) => {
    setMenuOpen(false)
    const doScroll = () => {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
    }
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(doScroll, 120)
    } else {
      doScroll()
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/10">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          to="/"
          className="font-display text-xl font-bold text-foreground tracking-tight"
          style={{ letterSpacing: '-0.04em' }}
        >
          R4Sus
          <span className="text-primary">.</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.section)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 bg-transparent border-0 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="px-5 py-2 rounded-inner bg-primary text-primary-foreground font-display font-semibold text-sm hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 cursor-pointer border-0"
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-border overflow-hidden">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.section)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left bg-transparent border-0 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2 rounded-inner bg-primary text-primary-foreground font-display font-semibold text-sm text-center border-0 cursor-pointer"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
