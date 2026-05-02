import { useState } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'O nás', href: '#solution' },
  { label: 'Products', href: '#products' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

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
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 rounded-inner bg-primary text-primary-foreground font-display font-semibold text-sm hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
          >
            Get in Touch
          </a>
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
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="px-5 py-2 rounded-inner bg-primary text-primary-foreground font-display font-semibold text-sm text-center"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
