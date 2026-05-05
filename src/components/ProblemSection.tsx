import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLang } from '../context/LanguageContext'

const icons = [
  <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" key="a">
    <path d="M24 4L6 14v20l18 10 18-10V14L24 4z" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M16 20l-4 8h24l-4-8H16z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
  </svg>,
  <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" key="b">
    <circle cx="24" cy="28" r="12" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M18 28c0-4 3-8 6-12 3 4 6 8 6 12" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
    <path d="M20 12l-2-8M28 12l2-8M24 8V2" stroke="currentColor" strokeWidth="1.5" />
  </svg>,
  <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" key="c">
    <rect x="8" y="16" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M8 28h32" stroke="currentColor" strokeWidth="1.5" />
    <path d="M24 8v8M16 10l8-2 8 2" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M14 22h4M30 22h4M14 34h4M30 34h4" stroke="currentColor" strokeWidth="1.5" />
  </svg>,
]

export function ProblemSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const { t } = useLang()

  return (
    <section
      ref={ref}
      className="py-24 md:py-32"
      style={{ backgroundColor: 'hsl(var(--section-dark))', color: 'hsl(var(--section-dark-foreground))' }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold max-w-2xl">
            {t.problem.h2}
          </h2>
          <p className="mt-4 text-lg max-w-xl" style={{ color: 'hsl(var(--section-dark-foreground) / 0.6)' }}>
            {t.problem.lead}
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {t.problem.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * (i + 1), ease: [0.25, 0.1, 0.25, 1] }}
              className="glass-card rounded-outer p-8"
            >
              <div className="text-primary mb-6">{icons[i]}</div>
              <h3 className="font-display text-xl font-semibold mb-3">{card.title}</h3>
              <p className="leading-relaxed" style={{ color: 'hsl(var(--section-dark-foreground) / 0.6)' }}>
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
