"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

export type Language = "fr" | "en"

interface LanguageContextValue {
  language: Language
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
}

const STORAGE_KEY = "portfolio-language"

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("fr")

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === "fr" || stored === "en") {
      setLanguageState(stored)
    } else {
      const browserLang = window.navigator.language?.toLowerCase()
      if (browserLang && !browserLang.startsWith("fr")) {
        setLanguageState("en")
      }
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    window.localStorage.setItem(STORAGE_KEY, lang)
  }

  const toggleLanguage = () => setLanguage(language === "fr" ? "en" : "fr")

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
