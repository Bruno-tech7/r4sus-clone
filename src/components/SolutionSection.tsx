import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function SolutionSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="solution" ref={ref} className="py-24 md:py-32 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-3xl"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            We give turbine blades a second life.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            At R4Sus, we intercept decommissioned wind turbine blades before they reach the landfill
            or incinerator. Using precision cutting and innovative design, we transform these advanced
            composite materials into durable, beautiful urban furniture and infrastructure — proving
            that the end of one lifecycle is the beginning of another.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Founded by{' '}
            <span className="text-foreground font-medium">Samuel E. Arpas</span>, R4Sus stands for{' '}
            <em>Redesigned for Sustainability</em>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
