import { createContext, useContext, useState, type ReactNode } from 'react'
import { translations, type Lang, type T } from '../i18n/translations'

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
  t: T
}

const Ctx = createContext<LangCtx | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangRaw] = useState<Lang>(() => {
    const s = localStorage.getItem('r4sus-lang')
    return s === 'de' ? 'de' : 'en'
  })

  const setLang = (l: Lang) => {
    setLangRaw(l)
    localStorage.setItem('r4sus-lang', l)
  }

  return (
    <Ctx.Provider value={{ lang, setLang, t: translations[lang] as T }}>
      {children}
    </Ctx.Provider>
  )
}

export const useLang = () => {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useLang must be inside LanguageProvider')
  return ctx
}
