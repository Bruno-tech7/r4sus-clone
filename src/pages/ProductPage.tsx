import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Navbar } from '../components/Navbar'
import { getProductBySlug } from '../data/products'
import { FORMSPREE_ID } from '../config'

export function ProductPage() {
  const { slug } = useParams<{ slug: string }>()
  const product = getProductBySlug(slug || '')
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

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
      if (res.ok) {
        setSubmitted(true)
        form.reset()
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container pt-32 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground">Product not found</h1>
          <Link to="/#products" className="mt-4 inline-block text-primary hover:underline">
            ← Back to products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container">
          <Link
            to="/#products"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 12L6 8l4-4" />
            </svg>
            Back to products
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left — image + info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="aspect-[4/3] rounded-outer bg-gradient-to-br from-section-dark to-secondary overflow-hidden flex items-center justify-center">
                <svg viewBox="0 0 200 120" className="w-3/4"
                  style={{ color: 'hsl(89 100% 42% / 0.2)' }} fill="currentColor">
                  <ellipse cx="100" cy="60" rx="90" ry="30" transform="rotate(-8 100 60)" />
                </svg>
              </div>

              <div className="mt-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
                  {product.tag}
                </span>
                <h1 className="mt-4 font-display text-3xl md:text-4xl font-bold text-foreground">
                  {product.name}
                </h1>
                <p className="mt-2 text-2xl font-display font-semibold text-primary">
                  {product.price}
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">{product.description}</p>
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
                <h2 className="font-display text-xl font-bold text-foreground mb-4">Product details</h2>
                <p className="text-muted-foreground leading-relaxed">{product.details}</p>
              </div>

              <div className="rounded-outer p-8"
                style={{ backgroundColor: 'hsl(var(--section-dark))', color: 'hsl(var(--section-dark-foreground))' }}>
                <h2 className="font-display text-xl font-bold mb-2">Send Product Inquiry</h2>
                <p className="text-sm mb-6" style={{ color: 'hsl(var(--section-dark-foreground) / 0.6)' }}>
                  We'll get back to you about{' '}
                  <span className="text-primary font-medium">{product.name}</span>.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-card rounded-outer p-6 text-center"
                  >
                    <div className="text-3xl mb-3">✓</div>
                    <p className="font-display font-semibold">Message sent!</p>
                    <p className="text-sm mt-1" style={{ color: 'hsl(var(--section-dark-foreground) / 0.6)' }}>
                      We'll get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="hidden" name="inquiry_type" value="product" />
                    <input type="hidden" name="product" value={product.name} />

                    <div className="px-4 py-3 rounded-inner bg-primary/10 border border-primary/20">
                      <p className="text-xs text-primary font-medium uppercase tracking-wider">
                        Product inquiry — {product.name}
                      </p>
                    </div>

                    <div>
                      <label htmlFor="pi-name" className="block text-sm font-medium mb-2"
                        style={{ color: 'hsl(var(--section-dark-foreground) / 0.8)' }}>Name</label>
                      <input id="pi-name" name="name" type="text" required placeholder="Your name"
                        className="w-full px-4 py-3 rounded-inner bg-muted text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow duration-200" />
                    </div>

                    <div>
                      <label htmlFor="pi-email" className="block text-sm font-medium mb-2"
                        style={{ color: 'hsl(var(--section-dark-foreground) / 0.8)' }}>Email</label>
                      <input id="pi-email" name="email" type="email" required placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-inner bg-muted text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow duration-200" />
                    </div>

                    <div>
                      <label htmlFor="pi-message" className="block text-sm font-medium mb-2"
                        style={{ color: 'hsl(var(--section-dark-foreground) / 0.8)' }}>Message</label>
                      <textarea id="pi-message" name="message" rows={4} required
                        placeholder="Tell us about your project..."
                        className="w-full px-4 py-3 rounded-inner bg-muted text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow duration-200 resize-none" />
                    </div>

                    {error && (
                      <p className="text-red-400 text-sm text-center">
                        Sending failed. Please try again.
                      </p>
                    )}

                    <button type="submit" disabled={sending}
                      className="w-full px-8 py-4 rounded-inner bg-primary text-primary-foreground font-display font-semibold text-base hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 disabled:opacity-60 disabled:scale-100">
                      {sending ? 'Sending...' : 'Send Product Inquiry'}
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
