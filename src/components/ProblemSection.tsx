import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const problems = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <path d="M24 4L6 14v20l18 10 18-10V14L24 4z" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M16 20l-4 8h24l-4-8H16z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
      </svg>
    ),
    title: 'Shredded as cement filler',
    description:
      'Most decommissioned blades are ground down and mixed into concrete — downcycling decades of advanced engineering into rubble.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="28" r="12" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M18 28c0-4 3-8 6-12 3 4 6 8 6 12" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
        <path d="M20 12l-2-8M28 12l2-8M24 8V2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Burned for waste heat',
    description:
      'Incineration releases carcinogenic pollutants into the air — trading one environmental crisis for another.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect x="8" y="16" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M8 28h32" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 8v8M16 10l8-2 8 2" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M14 22h4M30 22h4M14 34h4M30 34h4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Dumped in landfills',
    description:
      'Blades up to 80 meters long occupy massive landfill space. They will not decompose for hundreds of years.',
  },
]

export function ProblemSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

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
            85% of turbine blades end up as waste.
          </h2>
          <p className="mt-4 text-lg max-w-xl" style={{ color: 'hsl(var(--section-dark-foreground) / 0.6)' }}>
            Every year, thousands of wind turbine blades are decommissioned. The industry's current
            solutions are failing the planet.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {problems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * (i + 1), ease: [0.25, 0.1, 0.25, 1] }}
              className="glass-card rounded-outer p-8"
            >
              <div className="text-primary mb-6">{item.icon}</div>
              <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
              <p className="leading-relaxed" style={{ color: 'hsl(var(--section-dark-foreground) / 0.6)' }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
