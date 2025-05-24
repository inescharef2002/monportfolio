"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      // Utilisation du nouvel endpoint Formspree
      const response = await fetch("https://formspree.io/f/mgvkjern", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        throw new Error("Erreur lors de l'envoi du message")
      }
    } catch (error) {
      setSubmitError("Erreur lors de l'envoi du message. Veuillez réessayer.")
      console.error("Erreur:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container">
        <div className="text-center mb-12 animate-slideUp">
          <h2 className="text-3xl font-bold mb-2 text-blue-800">Contact</h2>
          <p className="text-blue-600 max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour discuter de projets ou d'opportunités
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-blue-100 shadow-md animate-slideUp">
            <CardHeader>
              <CardTitle className="text-blue-800">Envoyez-moi un message</CardTitle>
              <CardDescription>
                Remplissez le formulaire ci-dessous et je vous répondrai dès que possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8 animate-fadeIn">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                    <svg
                      className="w-8 h-8 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-blue-800">Message envoyé !</h3>
                  <p className="text-muted-foreground">
                    Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                  </p>
                  <Button className="mt-4 bg-blue-600 hover:bg-blue-700" onClick={() => setIsSubmitted(false)}>
                    Envoyer un autre message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-blue-700">
                        Nom
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Votre nom"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-blue-700">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="votre@email.com"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-blue-700">
                      Sujet
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Sujet de votre message"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-blue-700">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Votre message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                    />
                  </div>
                  {submitError && <div className="text-red-600 text-sm">{submitError}</div>}
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          <div className="space-y-6 animate-slideUp animate-delay-300">
            <Card className="border-blue-100 shadow-md">
              <CardHeader>
                <CardTitle className="text-blue-800">Informations de contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-blue-700">Email</h3>
                    <p className="text-muted-foreground">charefines4@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-blue-700">Téléphone</h3>
                    <p className="text-muted-foreground">+216 98403541</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-blue-700">Localisation</h3>
                    <p className="text-muted-foreground">15 Sousse, Sahloul</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100 shadow-md">
              <CardHeader>
                <CardTitle className="text-blue-800">Réseaux sociaux</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="https://github.com/inescharef2002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <Github className="h-5 w-5 text-blue-600" />
                  <div>
                    <h3 className="font-medium text-blue-700">GitHub</h3>
                    <p className="text-muted-foreground">github.com/inescharef2002</p>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/ines-charef-8b060a319/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-blue-600" />
                  <div>
                    <h3 className="font-medium text-blue-700">LinkedIn</h3>
                    <p className="text-muted-foreground">linkedin.com/in/ines-charef-8b060a319</p>
                  </div>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
