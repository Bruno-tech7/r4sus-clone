import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Navbar } from '../components/Navbar'
import { getProductBySlug } from '../data/products'
import { FORMSPREE_ID } from '../config'
import { useLang } from '../context/LanguageContext'
import { productPhotos } from '../data/productPhotos'
import { PhotoCarousel } from '../components/PhotoCarousel'
import {
  BusStopIllustration,
  ParkBenchIllustration,
  GardenShedRoofIllustration,
  BookshelfIllustration,
  PlantPotIllustration,
  ChargingStationIllustration,
  BikeShelterIllustration,
  ChairIllustration,
  BusinessCardIllustration,
} from '../components/ProductIllustrations'

const illustrations: Record<string, React.FC> = {
  'bus-stop': BusStopIllustration,
  'outdoor-park-bench': ParkBenchIllustration,
  'charging-station': ChargingStationIllustration,
  'bike-shelter': BikeShelterIllustration,
  'chair': ChairIllustration,
  'garden-shed-roof': GardenShedRoofIllustration,
  'bookshelf': BookshelfIllustration,
  'plant-pot': PlantPotIllustration,
  'business-card': BusinessCardIllustration,
}

export function ProductPage() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const { lang, t } = useLang()
  const product = getProductBySlug(slug || '')
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  const goBackToProducts = () => {
    navigate('/')
    setTimeout(() => {
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
    }, 120)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    setError(false)
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) { setSubmitted(true); form.reset() }
      else setError(true)
    } catch { setError(true) }
    finally { setSending(false) }
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container pt-32 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground">{t.productPage.notFound}</h1>
          <button onClick={goBackToProducts}
            className="mt-4 inline-block text-primary hover:underline bg-transparent border-0 cursor-pointer">
            {t.productPage.back}
          </button>
        </div>
      </div>
    )
  }

  const locale = product[lang]
  const displayPrice = product.price === 'TBD' ? t.products.priceTBD : product.price
  const Illustration = illustrations[product.slug]
  const photos = productPhotos[product.slug] ?? []

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container">
          <button
            onClick={goBackToProducts}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 bg-transparent border-0 cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 12L6 8l4-4" />
            </svg>
            {t.productPage.back}
          </button>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left — image + info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="aspect-[4/3] rounded-outer bg-gradient-to-br from-section-dark to-secondary overflow-hidden">
                {photos.length > 0 ? (
                  <PhotoCarousel photos={photos} alt={locale.name} />
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-6">
                    {Illustration && <Illustration />}
                  </div>
                )}
              </div>

              <div className="mt-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
                  {product.tag}
                </span>
                <h1 className="mt-4 font-display text-3xl md:text-4xl font-bold text-foreground">
                  {locale.name}
                </h1>
                <p className="mt-2 text-2xl font-display font-semibold text-primary">
                  {displayPrice}
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">{locale.description}</p>
              </div>
            </motion.div>

            {/* Right — details + form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col gap-8"
            >
              <div className="rounded-outer border border-border p-8">
                <h2 className="font-display text-xl font-bold text-foreground mb-4">{t.productPage.details}</h2>
                <p className="text-muted-foreground leading-relaxed">{locale.details}</p>
              </div>

              <div className="rounded-outer p-8"
                style={{ backgroundColor: 'hsl(var(--section-dark))', color: 'hsl(var(--section-dark-foreground))' }}>
                <h2 className="font-display text-xl font-bold mb-2">{t.productPage.inquiryTitle}</h2>
                <p className="text-sm mb-6" style={{ color: 'hsl(var(--section-dark-foreground) / 0.6)' }}>
                  {t.productPage.inquiryLead}{' '}
                  <span className="text-primary font-medium">{locale.name}</span>.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-card rounded-outer p-6 text-center"
                  >
                    <div className="text-3xl mb-3">✓</div>
                    <p className="font-display font-semibold">{t.productPage.successTitle}</p>
                    <p className="text-sm mt-1" style={{ color: 'hsl(var(--section-dark-foreground) / 0.6)' }}>
                      {t.productPage.successBody}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="hidden" name="inquiry_type" value="product" />
                    <input type="hidden" name="product" value={locale.name} />

                    <div className="px-4 py-3 rounded-inner bg-primary/10 border border-primary/20">
                      <p className="text-xs text-primary font-medium uppercase tracking-wider">
                        {t.productPage.inquiryBadge} — {locale.name}
                      </p>
                    </div>

                    <div>
                      <label htmlFor="pi-name" className="block text-sm font-medium mb-2"
                        style={{ color: 'hsl(var(--section-dark-foreground) / 0.8)' }}>{t.contact.name}</label>
                      <input id="pi-name" name="name" type="text" required placeholder={t.contact.namePh}
                        className="w-full px-4 py-3 rounded-inner bg-muted text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow duration-200" />
                    </div>

                    <div>
                      <label htmlFor="pi-email" className="block text-sm font-medium mb-2"
                        style={{ color: 'hsl(var(--section-dark-foreground) / 0.8)' }}>{t.contact.email}</label>
                      <input id="pi-email" name="email" type="email" required placeholder={t.contact.emailPh}
                        className="w-full px-4 py-3 rounded-inner bg-muted text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow duration-200" />
                    </div>

                    <div>
                      <label htmlFor="pi-message" className="block text-sm font-medium mb-2"
                        style={{ color: 'hsl(var(--section-dark-foreground) / 0.8)' }}>{t.contact.message}</label>
                      <textarea id="pi-message" name="message" rows={4} required
                        placeholder={t.contact.messagePh}
                        className="w-full px-4 py-3 rounded-inner bg-muted text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow duration-200 resize-none" />
                    </div>

                    {error && <p className="text-red-400 text-sm text-center">{t.productPage.error}</p>}

                    <button type="submit" disabled={sending}
                      className="w-full px-8 py-4 rounded-inner bg-primary text-primary-foreground font-display font-semibold text-base hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 disabled:opacity-60 disabled:scale-100">
                      {sending ? t.productPage.sending : t.productPage.send}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
