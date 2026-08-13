"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, ExternalLink } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export default function ExperienceSection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="experience" className="py-16">
      <div className="container">
        <div className="text-center mb-12 animate-slideUp">
          <h2 className="text-3xl font-bold mb-2 text-blue-800">{t.experience.title}</h2>
          <p className="text-blue-600 max-w-2xl mx-auto">{t.experience.subtitle}</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {t.experience.items.map((experience, index) => (
            <Card
              key={experience.title + experience.company}
              className="border-blue-100 shadow-md hover:shadow-lg transition-all duration-300 animate-slideUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 rounded-full p-2 mt-1">
                      <Briefcase className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-blue-800">{experience.title}</CardTitle>
                      <CardDescription>{experience.company}</CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-blue-600 whitespace-nowrap">{experience.period}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {experience.stack.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-blue-300 text-blue-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <ul className="list-disc pl-5 space-y-2 text-blue-700">
                  {experience.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                {"link" in experience && experience.link && (
                  <a
                    href={experience.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {experience.linkLabel}
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
