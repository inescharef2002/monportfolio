"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { LineChart, BarChart, Activity, Clock, Users, Shield } from "lucide-react"

export default function SugarheroShowcase() {
  const [activeDemo, setActiveDemo] = useState("dashboard")

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h1 className="text-4xl font-bold mb-4">SugarHero</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Plateforme éducative pour enfants diabétiques avec suivi glycémique, repas et activité physique
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge>React.js</Badge>
            <Badge>Node.js</Badge>
            <Badge>MongoDB</Badge>
            <Badge>JWT</Badge>
            <Badge>Socket.IO</Badge>
          </div>
          <p className="mb-6">
            SugarHero est une application médicale full-stack conçue pour aider les enfants diabétiques à gérer leur
            condition de manière ludique et éducative. La plateforme offre un suivi glycémique en temps réel, des
            recommandations de repas, et un suivi d'activité physique.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Activity className="text-primary h-5 w-5" />
              <span>Suivi en temps réel</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="text-primary h-5 w-5" />
              <span>Gestion CRUD utilisateurs</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="text-primary h-5 w-5" />
              <span>Système sécurisé</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-primary h-5 w-5" />
              <span>Notifications</span>
            </div>
          </div>
          <div className="flex gap-4">
            <Button>Voir le code</Button>
            <Button variant="outline">Démo en ligne</Button>
          </div>
        </div>
        <div className="bg-muted rounded-lg overflow-hidden">
          <img src="/diabetic-kids-app.png" alt="SugarHero Application" className="w-full h-full object-cover" />
        </div>
      </div>

      <Tabs defaultValue="features" className="mb-12">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="features">Fonctionnalités</TabsTrigger>
          <TabsTrigger value="tech">Stack Technique</TabsTrigger>
          <TabsTrigger value="challenges">Défis & Solutions</TabsTrigger>
        </TabsList>
        <TabsContent value="features">
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Suivi Glycémique</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Permet aux enfants et parents de suivre les niveaux de glycémie en temps réel avec des visualisations
                  adaptées aux enfants.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Gestion des Repas</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Suggestions de repas équilibrés avec calcul automatique des glucides et impact sur la glycémie.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Activité Physique</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Suivi des activités physiques et leur impact sur les niveaux de glycémie avec recommandations
                  personnalisées.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tableau de Bord Admin</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Interface complète pour les professionnels de santé avec gestion CRUD des utilisateurs et contenus.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Système d'alertes en temps réel pour les niveaux critiques de glycémie et rappels de médicaments.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Sécurité</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Système sécurisé de récupération de mot de passe par email et authentification robuste.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="tech">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Badge variant="outline">React.js</Badge>
                  <span>Interface utilisateur interactive et réactive</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Socket.IO (client)</Badge>
                  <span>Communication en temps réel</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Chart.js</Badge>
                  <span>Visualisations graphiques des données</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Tailwind CSS</Badge>
                  <span>Styling responsive et moderne</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Node.js</Badge>
                  <span>Serveur JavaScript</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Express</Badge>
                  <span>Framework web</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">MongoDB</Badge>
                  <span>Base de données NoSQL</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">JWT</Badge>
                  <span>Authentification sécurisée</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Socket.IO</Badge>
                  <span>Communication bidirectionnelle en temps réel</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Nodemailer</Badge>
                  <span>Envoi d'emails pour récupération de mot de passe</span>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="challenges">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Défi: Interface adaptée aux enfants</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Créer une interface à la fois ludique pour les enfants mais aussi informative pour les parents et
                  professionnels de santé.
                </p>
                <p className="mt-2 font-medium">
                  Solution: Design centré utilisateur avec différents modes d'affichage selon le profil connecté.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Défi: Données en temps réel</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Assurer la transmission et l'affichage des données glycémiques en temps réel sans latence.</p>
                <p className="mt-2 font-medium">
                  Solution: Implémentation de Socket.IO pour une communication bidirectionnelle instantanée.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Défi: Sécurité des données médicales</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Garantir la confidentialité et la sécurité des données médicales sensibles des enfants.</p>
                <p className="mt-2 font-medium">
                  Solution: Chiffrement des données, authentification JWT robuste et autorisations basées sur les rôles.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Démonstration Interactive</h2>
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <Button
            variant={activeDemo === "dashboard" ? "default" : "outline"}
            onClick={() => setActiveDemo("dashboard")}
            className="justify-start"
          >
            <LineChart className="mr-2 h-4 w-4" />
            Tableau de bord
          </Button>
          <Button
            variant={activeDemo === "meals" ? "default" : "outline"}
            onClick={() => setActiveDemo("meals")}
            className="justify-start"
          >
            <BarChart className="mr-2 h-4 w-4" />
            Gestion des repas
          </Button>
          <Button
            variant={activeDemo === "activity" ? "default" : "outline"}
            onClick={() => setActiveDemo("activity")}
            className="justify-start"
          >
            <Activity className="mr-2 h-4 w-4" />
            Activité physique
          </Button>
          <Button
            variant={activeDemo === "admin" ? "default" : "outline"}
            onClick={() => setActiveDemo("admin")}
            className="justify-start"
          >
            <Users className="mr-2 h-4 w-4" />
            Admin
          </Button>
        </div>
        <div className="bg-muted rounded-lg overflow-hidden h-[400px] relative">
          {activeDemo === "dashboard" && (
            <img src="/placeholder-nlm0k.png" alt="Dashboard SugarHero" className="w-full h-full object-cover" />
          )}
          {activeDemo === "meals" && (
            <img
              src="/diabetes-app-meal-management.png"
              alt="Gestion des repas SugarHero"
              className="w-full h-full object-cover"
            />
          )}
          {activeDemo === "activity" && (
            <img
              src="/placeholder.svg?height=400&width=1200&query=suivi%20activite%20physique%20application%20enfants%20diabetiques"
              alt="Activité physique SugarHero"
              className="w-full h-full object-cover"
            />
          )}
          {activeDemo === "admin" && (
            <img
              src="/placeholder.svg?height=400&width=1200&query=tableau%20de%20bord%20administrateur%20application%20medicale"
              alt="Admin SugarHero"
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>
    </div>
  )
}
