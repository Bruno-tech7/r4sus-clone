import { motion } from 'framer-motion'
import heroBg from '../assets/hero-bg.jpg'

export function Hero() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image + overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Wind turbines on green hills"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl"
        >
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-sm font-medium bg-primary text-primary-foreground font-display">
            R4Sus.com
          </span>

          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-secondary-foreground"
            style={{ textWrap: 'balance' } as React.CSSProperties}
          >
            Turbine blades shouldn't die in a landfill.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-secondary-foreground/80 max-w-xl leading-relaxed">
            We repurpose decommissioned wind infrastructure into high-performance urban furniture.
            Engineering a second life for the giants of the sky.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={scrollToProducts}
              className="px-8 py-4 rounded-inner bg-primary text-primary-foreground font-display font-semibold text-base hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
            >
              Explore Products
            </button>
            <a
              href="#contact"
              className="px-8 py-4 rounded-inner border border-secondary-foreground/30 text-secondary-foreground font-display font-semibold text-base hover:bg-secondary-foreground/10 transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
