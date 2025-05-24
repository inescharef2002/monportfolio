import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function EducationSection() {
  return (
    <section id="education" className="py-16">
      <div className="container">
        <div className="text-center mb-12 animate-slideUp">
          <h2 className="text-3xl font-bold mb-2 text-blue-800">Formation</h2>
          <p className="text-blue-600 max-w-2xl mx-auto">Mon parcours académique en informatique et génie logiciel</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-blue-100 shadow-md hover:shadow-lg transition-all duration-300 animate-slideUp">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-blue-800">Cycle d'Ingénieur en Informatique</CardTitle>
                  <CardDescription>EPI Digital School</CardDescription>
                </div>
                <Badge className="bg-blue-600">2024-Présent</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Formation d'ingénieur en informatique avec spécialisation en développement logiciel et intelligence
                artificielle.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-blue-700">
                <li>Développement d'applications web et mobiles avancées</li>
                <li>Intelligence artificielle et apprentissage automatique</li>
                <li>Architecture logicielle et conception de systèmes</li>
                <li>Gestion de projets informatiques</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-100 shadow-md hover:shadow-lg transition-all duration-300 animate-slideUp animate-delay-200">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-blue-800">Cycle Préparatoire Intégré</CardTitle>
                  <CardDescription>EPI Digital School</CardDescription>
                </div>
                <Badge className="bg-blue-600">2021-2023</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Formation préparatoire aux études d'ingénieur avec focus sur les fondamentaux de l'informatique et des
                mathématiques.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-blue-700">
                <li>Algorithmique et structures de données</li>
                <li>Programmation orientée objet</li>
                <li>Bases de données relationnelles</li>
                <li>Mathématiques pour l'informatique</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-100 shadow-md hover:shadow-lg transition-all duration-300 animate-slideUp animate-delay-300">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-blue-800">Baccalauréat Technique</CardTitle>
                  <CardDescription>Lycée Technique</CardDescription>
                </div>
                <Badge className="bg-blue-600">2020-2021</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Baccalauréat technique avec spécialisation en sciences et technologies de l'information. Obtenu avec
                mention.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-100 shadow-md hover:shadow-lg transition-all duration-300 animate-slideUp animate-delay-400">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-blue-800">Certifications</CardTitle>
                  <CardDescription>Diverses plateformes</CardDescription>
                </div>
                <Badge className="bg-blue-600">2021-2024</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium text-blue-700">CCNA1/CCNA2</span>
                  <p className="text-sm text-muted-foreground">Réseaux informatiques et protocoles</p>
                </li>
                <li>
                  <span className="font-medium text-blue-700">Microsoft Azure Fundamentals (AZ-900)</span>
                  <p className="text-sm text-muted-foreground">Services cloud Microsoft Azure</p>
                </li>
                <li>
                  <span className="font-medium text-blue-700">AWS Cloud Practitioner</span>
                  <p className="text-sm text-muted-foreground">Services cloud Amazon Web Services</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
