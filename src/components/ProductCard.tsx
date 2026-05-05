import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import type { Product } from '../data/products'
import { useLang } from '../context/LanguageContext'
import { productPhotos } from '../data/productPhotos'
import { PhotoCarousel } from './PhotoCarousel'
import {
  BusStopIllustration,
  ParkBenchIllustration,
  GardenShedRoofIllustration,
  BookshelfIllustration,
  PlantPotIllustration,
  ChargingStationIllustration,
  BikeShelterIllustration,
} from './ProductIllustrations'

const illustrations: Record<string, React.FC> = {
  'bus-stop': BusStopIllustration,
  'outdoor-park-bench': ParkBenchIllustration,
  'charging-station': ChargingStationIllustration,
  'bike-shelter': BikeShelterIllustration,
  'garden-shed-roof': GardenShedRoofIllustration,
  'bookshelf': BookshelfIllustration,
  'plant-pot': PlantPotIllustration,
}

interface ProductCardProps {
  product: Product
  index: number
  inView: boolean
}

export function ProductCard({ product, index, inView }: ProductCardProps) {
  const navigate = useNavigate()
  const { lang, t } = useLang()
  const locale = product[lang]
  const Illustration = illustrations[product.slug]
  const photos = productPhotos[product.slug] ?? []
  const displayPrice = product.price === 'TBD' ? t.products.priceTBD : product.price

  const handleClick = () => {
    if (!product.isComingSoon) {
      navigate(`/products/${product.slug}`)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.08 * index, ease: [0.25, 0.1, 0.25, 1] }}
      onClick={handleClick}
      className={`group rounded-outer border border-border bg-card overflow-hidden transition-shadow duration-300 ${
        product.isComingSoon
          ? 'opacity-75'
          : 'hover:shadow-lg cursor-pointer'
      }`}
    >
      {/* Photo carousel or SVG illustration */}
      <div className="aspect-[4/3] bg-gradient-to-br from-section-dark to-secondary overflow-hidden">
        {photos.length > 0 ? (
          <PhotoCarousel photos={photos} alt={locale.name} />
        ) : (
          <div className="w-full h-full flex items-center justify-center p-4">
            <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
              {Illustration && <Illustration />}
            </div>
          </div>
        )}
      </div>

      {/* Card content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-medium font-display ${
              product.isComingSoon
                ? 'bg-muted text-muted-foreground'
                : 'bg-primary text-primary-foreground'
            }`}
          >
            {product.isComingSoon ? t.products.comingSoon : product.tag}
          </span>
          <span className="text-sm font-medium text-muted-foreground">{displayPrice}</span>
        </div>

        <h3 className="font-display text-xl font-bold text-foreground mb-2">{locale.name}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{locale.description}</p>

        {product.isComingSoon ? (
          <span className="text-sm font-medium text-muted-foreground/50">
            {t.products.comingSoon}
          </span>
        ) : (
          <span className="text-sm font-medium text-primary group-hover:text-primary/80 transition-colors duration-200">
            {t.products.viewDetails}
          </span>
        )}
      </div>
    </motion.div>
  )
}
