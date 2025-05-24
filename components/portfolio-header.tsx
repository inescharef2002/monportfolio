"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function PortfolioHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="text-2xl font-bold text-primary">
            Ines Charef
          </a>
          <span className="hidden md:inline-block text-muted-foreground">Étudiante en Génie Logiciel</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            À propos
          </a>
          <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
            Projets
          </a>
          <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
            Compétences
          </a>
          <a href="#education" className="text-sm font-medium hover:text-primary transition-colors">
            Formation
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="https://github.com/inescharef2002" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/ines-charef-8b060a319/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </a>
          {mounted && (
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Changer de thème</span>
            </Button>
          )}
          <a href="mailto:charefines4@gmail.com">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Button>
          </a>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden container py-4 pb-6 border-b">
          <nav className="flex flex-col space-y-4">
            <a
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </a>
            <a
              href="#projects"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projets
            </a>
            <a
              href="#skills"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Compétences
            </a>
            <a
              href="#education"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Formation
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://github.com/inescharef2002" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/ines-charef-8b060a319/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </a>
              {mounted && (
                <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  <span className="sr-only">Changer de thème</span>
                </Button>
              )}
              <a href="mailto:charefines4@gmail.com">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
