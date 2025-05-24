"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function GuardPetStoryboard() {
  const storyboardScenes = [
    {
      title: "Scène 1 : Le problème",
      description: "Leila se demande qui va s'occuper de Max pendant son voyage d'affaires",
      image: "/guardpet-storyboard-1.png",
    },
    {
      title: "Scène 2 : La recommandation",
      description: "Un ami lui recommande GuardPet après avoir eu une expérience positive",
      image: "/guardpet-storyboard-2.png",
    },
    {
      title: "Scène 3 : La rencontre",
      description: "Leila rencontre la pet-sitter et lui confie Max en toute confiance",
      image: "/guardpet-storyboard-3.png",
    },
    {
      title: "Scène 4 : La satisfaction",
      description: "De retour de voyage, Leila est ravie de l'expérience GuardPet",
      image: "/guardpet-storyboard-4.png",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4 text-blue-800">Storyboard GuardPet</h3>
        <p className="text-blue-600 max-w-2xl mx-auto">
          L'histoire de Leila, consultante en affaires, qui découvre GuardPet pour résoudre son problème de garde
          d'animal
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {storyboardScenes.map((scene, index) => (
          <Card
            key={index}
            className="border-blue-100 shadow-md animate-slideUp"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <CardHeader>
              <CardTitle className="text-blue-700">{scene.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                <img src={scene.image || "/placeholder.svg"} alt={scene.title} className="w-full h-full object-cover" />
              </div>
              <p className="text-muted-foreground">{scene.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <h4 className="text-xl font-bold mb-3 text-blue-800">Processus de Design</h4>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h5 className="font-medium text-blue-700">Recherche Utilisateur</h5>
            <p className="text-sm text-muted-foreground">Création de personas basés sur des interviews</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl font-bold text-blue-600">2</span>
            </div>
            <h5 className="font-medium text-blue-700">Storytelling</h5>
            <p className="text-sm text-muted-foreground">Création du parcours utilisateur en BD</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl font-bold text-blue-600">3</span>
            </div>
            <h5 className="font-medium text-blue-700">Prototypage</h5>
            <p className="text-sm text-muted-foreground">Wireframes et maquettes haute fidélité</p>
          </div>
        </div>
      </div>
    </div>
  )
}
