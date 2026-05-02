import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { Product } from '../data/products'

interface ProductCardProps {
  product: Product
  index: number
  inView: boolean
}

export function ProductCard({ product, index, inView }: ProductCardProps) {
  const isComingSoon = product.tag === 'Coming soon'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.08 * index, ease: [0.25, 0.1, 0.25, 1] }}
      className="group rounded-outer border border-border bg-card overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      {/* Placeholder image area */}
      <div className="aspect-[4/3] bg-gradient-to-br from-section-dark to-secondary flex items-center justify-center overflow-hidden">
        <svg
          viewBox="0 0 200 120"
          className="w-3/4 transition-transform duration-500 group-hover:scale-105"
          style={{ color: 'hsl(89 100% 42% / 0.2)' }}
          fill="currentColor"
        >
          <ellipse cx="100" cy="60" rx="90" ry="30" transform="rotate(-8 100 60)" />
        </svg>
      </div>

      {/* Card content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-medium font-display ${
              isComingSoon
                ? 'bg-muted text-muted-foreground'
                : 'bg-primary text-primary-foreground'
            }`}
          >
            {product.tag}
          </span>
          <span className="text-sm font-medium text-muted-foreground">{product.price}</span>
        </div>

        <h3 className="font-display text-xl font-bold text-foreground mb-2">{product.name}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{product.description}</p>

        <Link
          to={`/products/${product.slug}`}
          className="text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200"
        >
          View details →
        </Link>
      </div>
    </motion.div>
  )
}
