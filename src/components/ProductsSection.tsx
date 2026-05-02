import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { products } from '../data/products'
import { ProductCard } from './ProductCard'

export function ProductsSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="products" ref={ref} className="py-24 md:py-32 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground max-w-xl">
            From turbine to furniture.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl">
            Every product carries the engineering DNA of wind energy infrastructure — built to endure.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
