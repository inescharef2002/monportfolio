"use client"

import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export default function HeroSection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-background">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div className="animate-slideUp">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-blue-800">Ines Charef</h1>
          <h2 className="text-2xl md:text-3xl font-medium text-blue-600 mb-6">{t.hero.title}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md">{t.hero.bio}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <a href={t.hero.cvFile} download={t.hero.cvFileName}>
                <Download className="mr-2 h-4 w-4" />
                {t.hero.downloadCv}
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50" asChild>
              <a href="#projects">
                {t.hero.viewProjects}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
        <div className="relative animate-fadeIn">
          <div className="aspect-square rounded-full bg-gradient-to-br from-blue-200 to-blue-400 p-1.5">
            <div className="h-full w-full rounded-full overflow-hidden border-2 border-background">
              <img src="/profile-image.png" alt="Ines Charef" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-background rounded-lg shadow-lg p-4 flex items-center gap-3 animate-slideUp animate-delay-300">
            <div className="bg-blue-100 rounded-full p-2">
              <div className="bg-blue-600 text-white rounded-full p-2">
                <Download className="h-5 w-5" />
              </div>
            </div>
            <div>
              <p className="font-medium">{t.hero.cardTitle}</p>
              <p className="text-sm text-muted-foreground">{t.hero.cardSubtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
