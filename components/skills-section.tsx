"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function SkillsSection() {
  const [selectedTab, setSelectedTab] = useState("programming")

  const skills = {
    programming: [
      { name: "Python", level: 90 },
      { name: "Java", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "TypeScript", level: 75 },
      { name: "C/C++", level: 70 },
      { name: "Kotlin", level: 65 },
      { name: "Swift", level: 60 },
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
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 80 },
      { name: "Keras", level: 75 },
      { name: "CNN/RNN", level: 70 },
      { name: "scikit-learn", level: 65 },
    ],
    web: [
      { name: "React", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Spring Boot", level: 75 },
      { name: "Android (Kotlin)", level: 70 },
      { name: "iOS (Swift)", level: 65 },
    ],
    cloud: [
      { name: "Azure", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Docker", level: 70 },
      { name: "GitHub", level: 85 },
      { name: "CI/CD", level: 65 },
    ],
    database: [
      { name: "SQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Firebase", level: 75 },
      { name: "PostgreSQL", level: 70 },
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
          <h2 className="text-3xl font-bold mb-2 text-blue-800">Compétences Techniques</h2>
          <p className="text-blue-600 max-w-2xl mx-auto">
            Mes compétences techniques couvrent un large éventail de technologies, du développement web et mobile à
            l'intelligence artificielle, au cloud et au design UX/UI.
          </p>
        </div>

        <Tabs defaultValue="programming" className="mb-12" onValueChange={setSelectedTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 md:grid-cols-7 bg-blue-100">
              <TabsTrigger
                value="programming"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                Programmation
              </TabsTrigger>
              <TabsTrigger value="ux" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                UX/UI Design
              </TabsTrigger>
              <TabsTrigger value="ai" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                IA
              </TabsTrigger>
              <TabsTrigger value="web" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Web/Mobile
              </TabsTrigger>
              <TabsTrigger value="cloud" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Cloud/DevOps
              </TabsTrigger>
              <TabsTrigger value="database" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Bases de données
              </TabsTrigger>
              <TabsTrigger value="systems" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Systèmes
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
              <CardTitle className="text-blue-800">UX/UI Design</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Conception d'expériences utilisateur centrées sur l'humain avec recherche utilisateur, personas,
                wireframes et prototypes interactifs.
              </p>
            </CardContent>
          </Card>
          <Card className="border-blue-100 shadow-md hover:shadow-lg transition-all duration-300 animate-slideUp animate-delay-200">
            <CardHeader>
              <CardTitle className="text-blue-800">Développement Full-Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Expérience complète dans le développement d'applications web et mobiles, de la conception de l'interface
                utilisateur à l'implémentation des API et la gestion des bases de données.
              </p>
            </CardContent>
          </Card>
          <Card className="border-blue-100 shadow-md hover:shadow-lg transition-all duration-300 animate-slideUp animate-delay-400">
            <CardHeader>
              <CardTitle className="text-blue-800">Intelligence Artificielle</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Compétences en développement de modèles d'apprentissage automatique et de réseaux de neurones pour
                l'analyse de données et la résolution de problèmes complexes.
              </p>
            </CardContent>
          </Card>
          <Card className="border-blue-100 shadow-md hover:shadow-lg transition-all duration-300 animate-slideUp animate-delay-600">
            <CardHeader>
              <CardTitle className="text-blue-800">Cloud & DevOps</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Expérience dans le déploiement et la gestion d'applications sur des plateformes cloud comme Azure et
                AWS, ainsi que dans l'utilisation d'outils DevOps pour l'automatisation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
