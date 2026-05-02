import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const benefits = [
  {
    emoji: '♻️',
    title: 'Zero landfill waste',
    description:
      'Every blade we intercept is one less occupying landfill space for centuries. Full material utilization, zero waste.',
  },
  {
    emoji: '🌿',
    title: 'No toxic burning',
    description:
      'We eliminate the need for incineration, preventing carcinogenic emissions from entering communities.',
  },
  {
    emoji: '🏗️',
    title: 'Durable, long-lasting products',
    description:
      'Turbine blade composites are engineered for 25+ years of extreme weather. Our products inherit that resilience.',
  },
]

export function BenefitsSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 md:py-32 bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Sustainability without compromise.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * (i + 1), ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center"
            >
              <div className="text-5xl mb-6">{item.emoji}</div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
