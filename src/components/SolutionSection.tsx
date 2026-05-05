import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLang } from '../context/LanguageContext'

export function SolutionSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const { t } = useLang()

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
            {t.solution.h2}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {t.solution.p1}
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {t.solution.p2}{' '}
            <span className="text-foreground font-medium">{t.solution.founder}</span>
            {t.solution.p2b}{' '}
            <em>{t.solution.brand}</em>
            {t.solution.p2c}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
