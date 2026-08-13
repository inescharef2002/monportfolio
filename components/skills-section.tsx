"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export default function SkillsSection() {
  const [selectedTab, setSelectedTab] = useState("programming")
  const { language } = useLanguage()
  const t = translations[language]

  const skills = {
    programming: [
      { name: "Python", level: 90 },
      { name: "Java", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "Dart", level: 80 },
      { name: "Kotlin", level: 65 },
      { name: "PHP", level: 70 },
    ],
    ux: [
      { name: "Figma", level: 85 },
      { name: "Wireframing", level: 80 },
      { name: "Prototyping", level: 75 },
      { name: "User Research", level: 70 },
      { name: "Design Thinking", level: 75 },
      { name: "Personas", level: 80 },
      { name: "User Stories", level: 85 },
    ],
    ai: [
      { name: "Machine Learning", level: 85 },
      { name: "TensorFlow", level: 80 },
      { name: "OpenCV", level: 80 },
      { name: "Power BI", level: 80 },
    ],
    web: [
      { name: "Flutter", level: 85 },
      { name: "React", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Angular", level: 70 },
      { name: "Spring Boot", level: 75 },
      { name: ".NET", level: 65 },
    ],
    cloud: [
      { name: "Azure", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Git", level: 85 },
      { name: "SCRUM", level: 80 },
    ],
    database: [
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 70 },
      { name: "Firebase", level: 80 },
    ],
    systems: [
      { name: "Linux", level: 80 },
      { name: "Shell Scripting", level: 75 },
    ],
  }

  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container">
        <div className="text-center mb-12 animate-slideUp">
          <h2 className="text-3xl font-bold mb-2 text-blue-800">{t.skills.title}</h2>
          <p className="text-blue-600 max-w-2xl mx-auto">{t.skills.subtitle}</p>
        </div>

        <Tabs defaultValue="programming" className="mb-12" onValueChange={setSelectedTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 md:grid-cols-7 bg-blue-100">
              <TabsTrigger
                value="programming"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                {t.skills.tabs.programming}
              </TabsTrigger>
              <TabsTrigger value="ux" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                {t.skills.tabs.ux}
              </TabsTrigger>
              <TabsTrigger value="ai" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                {t.skills.tabs.ai}
              </TabsTrigger>
              <TabsTrigger value="web" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                {t.skills.tabs.web}
              </TabsTrigger>
              <TabsTrigger value="cloud" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                {t.skills.tabs.cloud}
              </TabsTrigger>
              <TabsTrigger value="database" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                {t.skills.tabs.database}
              </TabsTrigger>
              <TabsTrigger value="systems" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                {t.skills.tabs.systems}
              </TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(skills).map(([category, categorySkills]) => (
            <TabsContent key={category} value={category} className="animate-fadeIn">
              <div className="grid md:grid-cols-2 gap-6">
                {categorySkills.map((skill, index) => (
                  <Card
                    key={index}
                    className="border-blue-100 animate-slideUp"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg text-blue-700">{skill.name}</CardTitle>
                        <CardDescription>{skill.level}%</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Progress
                        value={skill.level}
                        className="h-2 bg-blue-100"
                        indicatorClassName="bg-gradient-to-r from-blue-400 to-blue-600"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="grid md:grid-cols-4 gap-6">
          <Card className="border-blue-100 shadow-md hover:shadow-lg transition-all duration-300 animate-slideUp">
            <CardHeader>
              <CardTitle className="text-blue-800">{t.skills.cards.ux.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t.skills.cards.ux.description}</p>
            </CardContent>
          </Card>
          <Card className="border-blue-100 shadow-md hover:shadow-lg transition-all duration-300 animate-slideUp animate-delay-200">
            <CardHeader>
              <CardTitle className="text-blue-800">{t.skills.cards.fullstack.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t.skills.cards.fullstack.description}</p>
            </CardContent>
          </Card>
          <Card className="border-blue-100 shadow-md hover:shadow-lg transition-all duration-300 animate-slideUp animate-delay-400">
            <CardHeader>
              <CardTitle className="text-blue-800">{t.skills.cards.ai.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t.skills.cards.ai.description}</p>
            </CardContent>
          </Card>
          <Card className="border-blue-100 shadow-md hover:shadow-lg transition-all duration-300 animate-slideUp animate-delay-600">
            <CardHeader>
              <CardTitle className="text-blue-800">{t.skills.cards.cloud.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t.skills.cards.cloud.description}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
