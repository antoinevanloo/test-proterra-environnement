import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, CheckCircle, Wind, Sun, Droplets, ThermometerSun, Cloud, Waves } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Couvertures flottantes - Protection et couverture de bassins',
  description:
    'Couvertures flottantes pour bassins : réduction de l\'évaporation, protection contre les intempéries, contrôle des odeurs. Solutions Proterra Environnement.',
  openGraph: {
    title: 'Couvertures flottantes - Protection de bassins | Proterra Environnement',
    description:
      'Couvertures flottantes pour bassins : réduction de l\'évaporation, protection et contrôle des odeurs.',
    type: 'website',
  },
}

const benefits = [
  {
    icon: Droplets,
    title: 'Réduction de l\'évaporation',
    description: 'Jusqu\'à 95% d\'économie d\'eau grâce à une barrière physique efficace',
    stats: '95%',
  },
  {
    icon: Wind,
    title: 'Contrôle des odeurs',
    description: 'Confinement des émissions gazeuses et des nuisances olfactives',
    stats: '90%',
  },
  {
    icon: Sun,
    title: 'Protection thermique',
    description: 'Maintien de la température de l\'eau et réduction de la croissance algale',
    stats: '80%',
  },
  {
    icon: Cloud,
    title: 'Protection contre les intempéries',
    description: 'Protection contre la pluie, la neige, les débris et la contamination externe',
    stats: '100%',
  },
]

const applications = [
  {
    title: 'Stations d\'épuration',
    description: 'Couverture de bassins d\'aération, de décantation et de traitement des boues',
    image: Waves,
  },
  {
    title: 'Industrie agroalimentaire',
    description: 'Protection de bassins de process, réservoirs de stockage et lagunes',
    image: Droplets,
  },
  {
    title: 'Méthanisation',
    description: 'Couverture de digesteurs et de lagunes de méthanisation',
    image: Wind,
  },
  {
    title: 'Agriculture',
    description: 'Réserves d\'irrigation, bassins de stockage de lisier et fosses à effluents',
    image: Sun,
  },
]

export default function CouverturesFlottantesPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-proterra-navy-500 via-proterra-navy-400 to-proterra-blue-500 pt-32 pb-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-6xl">
              Couvertures{' '}
              <span className="bg-gradient-to-r from-proterra-lime-500 to-proterra-blue-400 bg-clip-text text-transparent">
                flottantes
              </span>
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-white/90 md:text-xl">
              Solutions innovantes de couverture de bassins et réservoirs. Réduction de l'évaporation,
              contrôle des odeurs, protection thermique et économies d'eau substantielles.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                <CheckCircle size={20} className="text-proterra-lime-500" />
                <span className="text-sm font-medium">Économie d'eau jusqu'à 95%</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                <CheckCircle size={20} className="text-proterra-lime-500" />
                <span className="text-sm font-medium">Installation rapide</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                <CheckCircle size={20} className="text-proterra-lime-500" />
                <span className="text-sm font-medium">Durabilité 20+ ans</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-proterra-navy-500 md:text-4xl">
              Bénéfices des couvertures flottantes
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Une solution technique éprouvée pour optimiser la gestion de vos bassins et réservoirs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={index} className="text-center transition-all hover:shadow-xl">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-proterra-lime-500 to-proterra-blue-500 text-white">
                      <Icon size={40} />
                    </div>
                    <div className="mb-2 text-4xl font-extrabold text-proterra-navy-500">
                      {benefit.stats}
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    <CardDescription className="text-sm">{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-proterra-navy-500 md:text-4xl">
              Découvrez nos couvertures en vidéo
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Installations et démonstrations de nos solutions de couvertures flottantes
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Video Placeholder 1 */}
            <div className="overflow-hidden rounded-xl bg-gradient-to-br from-proterra-navy-500 to-proterra-blue-500 shadow-xl">
              <div className="relative aspect-video">
                <div className="flex h-full items-center justify-center text-white/50">
                  <div className="text-center">
                    <svg
                      className="mx-auto mb-4 h-20 w-20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    <p className="text-sm">Vidéo : Installation de couverture flottante</p>
                    <p className="mt-2 text-xs text-white/30">
                      Exemple: youtube.com/embed/VIDEO_ID
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6">
                <h3 className="mb-2 text-xl font-bold text-proterra-navy-500">
                  Installation sur bassin d'épuration
                </h3>
                <p className="text-sm text-gray-600">
                  Découvrez le processus d'installation d'une couverture flottante sur un bassin de
                  station d'épuration de 5000m².
                </p>
              </div>
            </div>

            {/* Video Placeholder 2 */}
            <div className="overflow-hidden rounded-xl bg-gradient-to-br from-proterra-lime-500 to-proterra-blue-500 shadow-xl">
              <div className="relative aspect-video">
                <div className="flex h-full items-center justify-center text-white/50">
                  <div className="text-center">
                    <svg
                      className="mx-auto mb-4 h-20 w-20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    <p className="text-sm">Vidéo : Avantages des couvertures flottantes</p>
                    <p className="mt-2 text-xs text-white/30">
                      Exemple: youtube.com/embed/VIDEO_ID
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6">
                <h3 className="mb-2 text-xl font-bold text-proterra-navy-500">
                  Économies et performance
                </h3>
                <p className="text-sm text-gray-600">
                  Témoignage client : réduction de 90% de l'évaporation et contrôle total des odeurs
                  sur une lagune industrielle.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              💡 Les vidéos seront intégrées via Payload CMS avec des URLs YouTube ou Vimeo
            </p>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-proterra-navy-500 md:text-4xl">
              Applications
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Nos couvertures flottantes s'adaptent à tous types de bassins et réservoirs
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((app, index) => {
              const Icon = app.image
              return (
                <Card key={index} className="group overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="aspect-square bg-gradient-to-br from-proterra-navy-500 to-proterra-blue-500">
                    <div className="flex h-full items-center justify-center text-white/30 transition-all group-hover:scale-110">
                      <Icon size={80} />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{app.title}</CardTitle>
                    <CardDescription className="text-sm">{app.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technical Specs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-proterra-navy-500">
                Caractéristiques techniques
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                Nos couvertures flottantes sont conçues avec des matériaux haute performance pour une
                durabilité et une efficacité maximales.
              </p>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Matériaux</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                        <span>
                          Géomembrane PEHD ou PVC renforcé 0.8 à 1.5mm résistant aux UV
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                        <span>Flotteurs en polyéthylène haute densité insubmersibles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                        <span>Câbles d'ancrage en acier inoxydable ou cordage synthétique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                        <span>Système anti-soulèvement par grand vent</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Performances</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                        <span>Réduction de l'évaporation: 90 à 95%</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                        <span>Contrôle des odeurs: jusqu'à 90%</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                        <span>Résistance aux vents: jusqu'à 120 km/h</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                        <span>Durée de vie: 20+ ans avec entretien minimal</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-bold text-proterra-navy-500">Avantages économiques</h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                Un investissement rentable qui se traduit par des économies significatives à long terme.
              </p>

              <div className="space-y-4">
                <Card className="border-l-4 border-l-proterra-lime-500 bg-proterra-lime-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Droplets size={24} className="text-proterra-lime-500" />
                      Économies d'eau
                    </CardTitle>
                    <CardDescription>
                      Sur un bassin de 10 000m², économie de 5 000 à 8 000m³ d'eau par an dans les
                      régions à fort ensoleillement
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-l-4 border-l-proterra-blue-500 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <ThermometerSun size={24} className="text-proterra-blue-500" />
                      Économies d'énergie
                    </CardTitle>
                    <CardDescription>
                      Réduction des coûts de chauffage (bassins industriels) ou de refroidissement
                      grâce à l'isolation thermique
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-l-4 border-l-proterra-navy-500 bg-gray-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Wind size={24} className="text-proterra-navy-500" />
                      Réduction des traitements
                    </CardTitle>
                    <CardDescription>
                      Diminution des besoins en produits chimiques et traitement des eaux grâce à la
                      protection contre les contaminations externes
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-proterra-lime-100 border-2 border-proterra-lime-500">
                  <CardHeader>
                    <CardTitle className="text-proterra-navy-500">
                      Retour sur investissement
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="mb-2 text-5xl font-extrabold text-proterra-navy-500">3-5 ans</div>
                      <p className="text-sm text-gray-700">
                        Amortissement moyen de l'installation grâce aux économies réalisées
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-proterra-navy-500 to-proterra-navy-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Intéressé par une couverture flottante ?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Nos experts réalisent une étude personnalisée de votre bassin pour vous proposer la
            solution la plus adaptée et calculer les économies réalisables.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button variant="primary" size="lg" asChild>
              <Link href="/contact">
                Demander une étude personnalisée
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/realisations">Voir nos réalisations</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
