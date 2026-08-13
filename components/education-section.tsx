"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export default function EducationSection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="education" className="py-16">
      <div className="container">
        <div className="text-center mb-12 animate-slideUp">
          <h2 className="text-3xl font-bold mb-2 text-blue-800">{t.education.title}</h2>
          <p className="text-blue-600 max-w-2xl mx-auto">{t.education.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-blue-100 shadow-md hover:shadow-lg transition-all duration-300 animate-slideUp">
            <CardHeader>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <CardTitle className="text-blue-800">{t.education.degree.title}</CardTitle>
                  <CardDescription>{t.education.degree.school}</CardDescription>
                </div>
                <div className="flex flex-col gap-2 items-end shrink-0">
                  <Badge className="bg-blue-600 whitespace-nowrap">{t.education.degree.badge}</Badge>
                  <Badge variant="outline" className="border-blue-300 text-blue-700 whitespace-nowrap">
                    {t.education.degree.mention}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{t.education.degree.description}</p>
              <ul className="list-disc pl-5 space-y-1 text-blue-700">
                {t.education.degree.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-100 shadow-md hover:shadow-lg transition-all duration-300 animate-slideUp animate-delay-200">
            <CardHeader>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <CardTitle className="text-blue-800">{t.education.prepCycle.title}</CardTitle>
                  <CardDescription>{t.education.prepCycle.school}</CardDescription>
                </div>
                <Badge className="bg-blue-600 shrink-0 whitespace-nowrap">{t.education.prepCycle.badge}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{t.education.prepCycle.description}</p>
              <ul className="list-disc pl-5 space-y-1 text-blue-700">
                {t.education.prepCycle.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-100 shadow-md hover:shadow-lg transition-all duration-300 animate-slideUp animate-delay-300">
            <CardHeader>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <CardTitle className="text-blue-800">{t.education.bac.title}</CardTitle>
                  <CardDescription>{t.education.bac.school}</CardDescription>
                </div>
                <Badge className="bg-blue-600 shrink-0 whitespace-nowrap">{t.education.bac.badge}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p>{t.education.bac.description}</p>
            </CardContent>
          </Card>

          <Card className="border-blue-100 shadow-md hover:shadow-lg transition-all duration-300 animate-slideUp animate-delay-400">
            <CardHeader>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <CardTitle className="text-blue-800">{t.education.certifications.title}</CardTitle>
                  <CardDescription>{t.education.certifications.school}</CardDescription>
                </div>
                <Badge className="bg-blue-600 shrink-0 whitespace-nowrap">{t.education.certifications.badge}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {t.education.certifications.items.map((cert) => (
                  <li key={cert.name}>
                    <span className="font-medium text-blue-700">{cert.name}</span>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
