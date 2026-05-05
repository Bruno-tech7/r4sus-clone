import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FORMSPREE_ID } from '../config'
import { useLang } from '../context/LanguageContext'

export function ContactSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)
  const { t } = useLang()

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

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 md:py-32"
      style={{
        backgroundColor: 'hsl(var(--section-dark))',
        color: 'hsl(var(--section-dark-foreground))',
      }}
    >
      <div className="container">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold">{t.contact.h2}</h2>
            <p className="mt-4" style={{ color: 'hsl(var(--section-dark-foreground) / 0.6)' }}>
              {t.contact.lead}
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card rounded-outer p-8 text-center"
            >
              <div className="text-4xl mb-4">✓</div>
              <h3 className="font-display text-xl font-semibold mb-2">{t.contact.successTitle}</h3>
              <p style={{ color: 'hsl(var(--section-dark-foreground) / 0.6)' }}>{t.contact.successBody}</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="inquiry_type" value="general" />

              <div className="px-4 py-3 rounded-inner bg-primary/10 border border-primary/20">
                <p className="text-xs text-primary font-medium uppercase tracking-wider">{t.contact.badge}</p>
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2"
                  style={{ color: 'hsl(var(--section-dark-foreground) / 0.8)' }}>{t.contact.name}</label>
                <input id="name" name="name" type="text" required placeholder={t.contact.namePh}
                  className="w-full px-4 py-3 rounded-inner bg-muted text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow duration-200" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2"
                  style={{ color: 'hsl(var(--section-dark-foreground) / 0.8)' }}>{t.contact.email}</label>
                <input id="email" name="email" type="email" required placeholder={t.contact.emailPh}
                  className="w-full px-4 py-3 rounded-inner bg-muted text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow duration-200" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2"
                  style={{ color: 'hsl(var(--section-dark-foreground) / 0.8)' }}>{t.contact.message}</label>
                <textarea id="message" name="message" rows={4} required placeholder={t.contact.messagePh}
                  className="w-full px-4 py-3 rounded-inner bg-muted text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow duration-200 resize-none" />
              </div>

              {error && <p className="text-red-400 text-sm text-center">{t.contact.error}</p>}

              <button type="submit" disabled={sending}
                className="w-full px-8 py-4 rounded-inner bg-primary text-primary-foreground font-display font-semibold text-base hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 disabled:opacity-60 disabled:scale-100">
                {sending ? t.contact.sending : t.contact.send}
              </button>
            </motion.form>
          )}

          <p className="mt-8 text-center text-sm" style={{ color: 'hsl(var(--section-dark-foreground) / 0.4)' }}>
            www.r4sus.com
          </p>
        </div>
      </div>
    </section>
  )
}
