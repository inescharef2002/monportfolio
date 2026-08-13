"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Languages } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export default function LanguagesSection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="languages" className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container">
        <div className="text-center mb-12 animate-slideUp">
          <h2 className="text-3xl font-bold mb-2 text-blue-800">{t.languages.title}</h2>
          <p className="text-blue-600 max-w-2xl mx-auto">{t.languages.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {t.languages.items.map((item, index) => (
            <Card
              key={item.name}
              className="border-blue-100 shadow-md hover:shadow-lg transition-all duration-300 animate-slideUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Languages className="h-4 w-4 text-blue-600" />
                  <CardTitle className="text-lg text-blue-700">{item.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">{item.note}</p>
                <Progress
                  value={item.level}
                  className="h-2 bg-blue-100"
                  indicatorClassName="bg-gradient-to-r from-blue-400 to-blue-600"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
