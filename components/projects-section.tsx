"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import ProjectShowcase from "./project-showcase"

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  const projects = [
    {
      id: "sugarhero",
      title: "SugarHero",
      category: "web",
      description: "Application médicale pour enfants diabétiques",
      image: "/sugarhero-hero.png",
      tags: ["React.js", "Node.js", "MongoDB"],
    },
    {
      id: "serenity",
      title: "Serenity Tunisia",
      category: "web",
      description: "Plateforme de bien-être tunisienne avec IA conversationnelle",
      image: "/serenity-dashboard.png",
      tags: ["Next.js 15", "React 18", "IA", "TypeScript"],
    },
    {
      id: "covid",
      title: "Analyse COVID-19",
      category: "data",
      description: "Analyse de données et facteurs de risque",
      image: "/covid-timeline.png",
      tags: ["Python", "Pandas", "Plotly"],
    },
    {
      id: "todolist",
      title: "ToDoList",
      category: "mobile",
      description: "Application mobile de gestion de tâches",
      image: "/todolist-main-interface.png",
      tags: ["Java", "Android", "Firebase"],
    },
    {
      id: "springboot",
      title: "Système Bibliothèque",
      category: "web",
      description: "Gestion de bibliothèque avec Spring Boot",
      image: "/library-books.png",
      tags: ["Java", "Spring Boot", "MySQL"],
    },
    {
      id: "guardpet",
      title: "GuardPet (Paw Pets)",
      category: "ux",
      description: "Application de mise en relation propriétaires/pet-sitters",
      image: "/guardpet-home-updated.png",
      tags: ["UX/UI Design", "Figma", "Wireframes"],
    },
  ]

  if (selectedProject) {
    return (
      <section id="projects" className="py-16">
        <div className="container">
          <Button
            variant="ghost"
            onClick={() => setSelectedProject(null)}
            className="mb-8 text-blue-700 hover:text-blue-800 hover:bg-blue-50"
          >
            ← Retour aux projets
          </Button>
          <ProjectShowcase project={selectedProject as any} />
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="animate-slideUp">
            <h2 className="text-3xl font-bold mb-2 text-blue-800">Mes Projets</h2>
            <p className="text-blue-600">Découvrez mes réalisations récentes</p>
          </div>
        </div>

        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="mb-8 bg-blue-100">
            <TabsTrigger value="all" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Tous
            </TabsTrigger>
            <TabsTrigger value="ux" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              UX/UI Design
            </TabsTrigger>
            <TabsTrigger value="web" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Web
            </TabsTrigger>
            <TabsTrigger value="mobile" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Mobile
            </TabsTrigger>
            <TabsTrigger value="data" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Data Science
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project.id)}
                index={index}
              />
            ))}
          </TabsContent>

          <TabsContent value="ux" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((project) => project.category === "ux")
              .map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project.id)}
                  index={index}
                />
              ))}
          </TabsContent>

          <TabsContent value="web" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((project) => project.category === "web")
              .map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project.id)}
                  index={index}
                />
              ))}
          </TabsContent>

          <TabsContent value="mobile" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((project) => project.category === "mobile")
              .map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project.id)}
                  index={index}
                />
              ))}
          </TabsContent>

          <TabsContent value="data" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((project) => project.category === "data")
              .map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project.id)}
                  index={index}
                />
              ))}
          </TabsContent>
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
    tags: string[]
  }
  onClick: () => void
  index: number
}

function ProjectCard({ project, onClick, index }: ProjectCardProps) {
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
          Voir le projet
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}
