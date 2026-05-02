import { useEffect, useRef, useState } from 'react'

export function useInView(options?: IntersectionObserverInit & { once?: boolean }) {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (options?.once && inView) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (options?.once) observer.disconnect()
        } else {
          if (!options?.once) setInView(false)
        }
      },
      {
        threshold: options?.threshold ?? 0,
        rootMargin: options?.rootMargin ?? '-100px',
      },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, inView }
}
