"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import ProjectShowcase from "./project-showcase"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

const PROJECT_META = [
  { id: "smartclothing", category: "mobile", image: "/smartclothing-home.png", tags: ["Flutter", "FastAPI", "Firebase", "Gemini 2.0 Flash Vision API"] },
  { id: "sugarhero", category: "web", image: "/sugarhero-hero.png", tags: ["React.js", "Node.js", "MongoDB"] },
  { id: "covid", category: "data", image: "/covid-timeline.png", tags: ["Python", "Pandas", "Plotly"] },
  { id: "todolist", category: "mobile", image: "/todolist-main-interface.png", tags: ["Java", "Android", "Firebase"] },
  { id: "springboot", category: "web", image: "/library-books.png", tags: ["Java", "Spring Boot", "MySQL"] },
  { id: "guardpet", category: "ux", image: "/guardpet-home-updated.png", tags: ["UX/UI Design", "Figma", "Wireframes"] },
] as const

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const { language } = useLanguage()
  const t = translations[language]

  const projects = PROJECT_META.map((meta) => ({
    ...meta,
    title: t.projects.items[meta.id as keyof typeof t.projects.items].title,
    description: t.projects.items[meta.id as keyof typeof t.projects.items].description,
  }))

  if (selectedProject) {
    return (
      <section id="projects" className="py-16">
        <div className="container">
          <Button
            variant="ghost"
            onClick={() => setSelectedProject(null)}
            className="mb-8 text-blue-700 hover:text-blue-800 hover:bg-blue-50"
          >
            {t.projects.backToProjects}
          </Button>
          <ProjectShowcase project={selectedProject as any} />
        </div>
      </section>
    )
  }

  const categories = [
    { value: "all", label: t.projects.tabs.all },
    { value: "ux", label: t.projects.tabs.ux },
    { value: "web", label: t.projects.tabs.web },
    { value: "mobile", label: t.projects.tabs.mobile },
    { value: "data", label: t.projects.tabs.data },
  ]

  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="animate-slideUp">
            <h2 className="text-3xl font-bold mb-2 text-blue-800">{t.projects.title}</h2>
            <p className="text-blue-600">{t.projects.subtitle}</p>
          </div>
        </div>

        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="mb-8 bg-blue-100">
            {categories.map((category) => (
              <TabsTrigger
                key={category.value}
                value={category.value}
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.value} value={category.value} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((project) => category.value === "all" || project.category === category.value)
                .map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={() => setSelectedProject(project.id)}
                    index={index}
                    viewProjectLabel={t.projects.viewProject}
                  />
                ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: {
    id: string
    title: string
    description: string
    image: string
    tags: readonly string[]
  }
  onClick: () => void
  index: number
  viewProjectLabel: string
}

function ProjectCard({ project, onClick, index, viewProjectLabel }: ProjectCardProps) {
  return (
    <Card
      className="overflow-hidden group border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 animate-slideUp"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-blue-800">{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={onClick} className="w-full bg-blue-600 hover:bg-blue-700">
          {viewProjectLabel}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}
