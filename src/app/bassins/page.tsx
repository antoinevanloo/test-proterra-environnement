import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowRight, CheckCircle, Factory, Droplets, Shield, Waves } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bassins - Étanchéité de bassins industriels et agricoles',
  description:
    'Solutions d\'étanchéité par géosynthétiques pour bassins industriels, agricoles, de rétention et de stockage d\'eau. Expertise Proterra Environnement.',
  openGraph: {
    title: 'Bassins - Étanchéité de bassins | Proterra Environnement',
    description:
      'Solutions d\'étanchéité par géosynthétiques pour bassins industriels, agricoles, de rétention et de stockage d\'eau.',
    type: 'website',
  },
}

export default function BassinsPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-proterra-navy-500 via-proterra-navy-400 to-proterra-blue-500 pt-32 pb-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-6xl">
              Étanchéité de{' '}
              <span className="bg-gradient-to-r from-proterra-lime-500 to-proterra-blue-400 bg-clip-text text-transparent">
                Bassins
              </span>
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-white/90 md:text-xl">
              Solutions d'étanchéité par géosynthétiques pour tous types de bassins : industriels,
              agricoles, rétention et stockage d'eau. Expertise reconnue depuis 2009.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                <CheckCircle size={20} className="text-proterra-lime-500" />
                <span className="text-sm font-medium">Étanchéité garantie</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                <CheckCircle size={20} className="text-proterra-lime-500" />
                <span className="text-sm font-medium">Matériaux certifiés</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                <CheckCircle size={20} className="text-proterra-lime-500" />
                <span className="text-sm font-medium">Installation experte</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Tabs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="industriels" className="w-full">
            <div className="mb-8 flex justify-center">
              <TabsList className="grid w-full max-w-3xl grid-cols-2 lg:grid-cols-4">
                <TabsTrigger value="industriels">
                  <Factory size={18} className="mr-2" />
                  Industriels
                </TabsTrigger>
                <TabsTrigger value="agricoles">
                  <Droplets size={18} className="mr-2" />
                  Agricoles
                </TabsTrigger>
                <TabsTrigger value="retention">
                  <Shield size={18} className="mr-2" />
                  Rétention
                </TabsTrigger>
                <TabsTrigger value="stockage">
                  <Waves size={18} className="mr-2" />
                  Stockage
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Bassins Industriels */}
            <TabsContent value="industriels">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                <div>
                  <h2 className="mb-4 text-3xl font-bold text-proterra-navy-500">
                    Bassins Industriels
                  </h2>
                  <p className="mb-6 text-lg leading-relaxed text-gray-600">
                    Nous réalisons l'étanchéité de bassins pour les industries chimiques,
                    pharmaceutiques, agroalimentaires et de traitement des eaux. Nos solutions
                    garantissent une protection durable contre les infiltrations et la contamination
                    des sols.
                  </p>

                  <h3 className="mb-4 text-xl font-bold text-proterra-navy-500">
                    Applications typiques
                  </h3>
                  <ul className="mb-6 space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                      <span className="text-gray-600">
                        Bassins de process industriels (traitement chimique, refroidissement)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                      <span className="text-gray-600">
                        Bassins de décantation et de clarification
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                      <span className="text-gray-600">
                        Stations d'épuration industrielles (STEP)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                      <span className="text-gray-600">
                        Bassins de neutralisation et de traitement d'effluents
                      </span>
                    </li>
                  </ul>

                  <Card className="bg-gray-50">
                    <CardHeader>
                      <CardTitle className="text-lg">Matériaux utilisés</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Géomembranes PEHD (polyéthylène haute densité) 1.5 à 2.5mm</li>
                        <li>• Géomembranes PVC renforcé pour résistance chimique</li>
                        <li>• Géotextiles de protection anti-poinçonnement</li>
                        <li>• Systèmes d'ancrage périphérique certifiés</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Gallery - placeholder images */}
                  <div className="aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-proterra-navy-500 to-proterra-blue-500 shadow-lg">
                    <div className="flex h-full items-center justify-center text-white/30">
                      <Factory size={80} />
                    </div>
                  </div>
                  <div className="aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-proterra-lime-500 to-proterra-blue-500 shadow-lg">
                    <div className="flex h-full items-center justify-center text-white/30">
                      <Droplets size={80} />
                    </div>
                  </div>
                  <div className="aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-proterra-blue-500 to-proterra-navy-500 shadow-lg">
                    <div className="flex h-full items-center justify-center text-white/30">
                      <Shield size={80} />
                    </div>
                  </div>
                  <div className="aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-proterra-navy-400 to-proterra-lime-500 shadow-lg">
                    <div className="flex h-full items-center justify-center text-white/30">
                      <Waves size={80} />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Bassins Agricoles */}
            <TabsContent value="agricoles">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                <div>
                  <h2 className="mb-4 text-3xl font-bold text-proterra-navy-500">
                    Bassins Agricoles
                  </h2>
                  <p className="mb-6 text-lg leading-relaxed text-gray-600">
                    Solutions adaptées aux besoins agricoles : réserves d'eau d'irrigation, bassins
                    de stockage de lisier, fosses à effluents d'élevage. Conformes aux normes
                    environnementales et agricoles.
                  </p>

                  <h3 className="mb-4 text-xl font-bold text-proterra-navy-500">
                    Applications typiques
                  </h3>
                  <ul className="mb-6 space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                      <span className="text-gray-600">
                        Réserves d'eau pour irrigation (10 000m³ à 100 000m³+)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                      <span className="text-gray-600">
                        Bassins de stockage de lisier et fumier liquide
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                      <span className="text-gray-600">Fosses à effluents d'élevage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                      <span className="text-gray-600">
                        Lagunes de traitement aérobie et anaérobie
                      </span>
                    </li>
                  </ul>

                  <Card className="bg-gray-50">
                    <CardHeader>
                      <CardTitle className="text-lg">Avantages de nos solutions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Étanchéité garantie 20 ans minimum</li>
                        <li>• Résistance aux UV et intempéries</li>
                        <li>• Conformité réglementaire environnementale</li>
                        <li>• Installation rapide et économique</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-green-600 to-emerald-500 shadow-lg">
                    <div className="flex h-full items-center justify-center text-white/30">
                      <Droplets size={80} />
                    </div>
                  </div>
                  <div className="aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg">
                    <div className="flex h-full items-center justify-center text-white/30">
                      <Waves size={80} />
                    </div>
                  </div>
                  <div className="aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-emerald-600 to-teal-500 shadow-lg">
                    <div className="flex h-full items-center justify-center text-white/30">
                      <Shield size={80} />
                    </div>
                  </div>
                  <div className="aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-teal-500 to-green-600 shadow-lg">
                    <div className="flex h-full items-center justify-center text-white/30">
                      <Factory size={80} />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Bassins de Rétention */}
            <TabsContent value="retention">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                <div>
                  <h2 className="mb-4 text-3xl font-bold text-proterra-navy-500">
                    Bassins de Rétention
                  </h2>
                  <p className="mb-6 text-lg leading-relaxed text-gray-600">
                    Étanchéité de bassins de rétention pour la gestion des eaux pluviales, des eaux
                    d'extinction incendie et des eaux de ruissellement. Protection contre les
                    pollutions accidentelles.
                  </p>

                  <h3 className="mb-4 text-xl font-bold text-proterra-navy-500">
                    Applications typiques
                  </h3>
                  <ul className="mb-6 space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                      <span className="text-gray-600">
                        Bassins de rétention d'eaux pluviales (zones commerciales, industrielles)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                      <span className="text-gray-600">
                        Bassins de rétention d'eaux d'extinction incendie
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                      <span className="text-gray-600">
                        Bassins d'orage et de gestion des crues
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                      <span className="text-gray-600">Noues et fossés étanches</span>
                    </li>
                  </ul>

                  <Card className="bg-gray-50">
                    <CardHeader>
                      <CardTitle className="text-lg">Conformité réglementaire</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Nos solutions respectent les exigences réglementaires en matière de gestion
                        des eaux pluviales et de prévention des pollutions (Loi sur l'Eau, règlement
                        ICPE).
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-blue-600 to-indigo-500 shadow-lg">
                    <div className="flex h-full items-center justify-center text-white/30">
                      <Shield size={80} />
                    </div>
                  </div>
                  <div className="aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg">
                    <div className="flex h-full items-center justify-center text-white/30">
                      <Waves size={80} />
                    </div>
                  </div>
                  <div className="aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-indigo-600 to-purple-500 shadow-lg">
                    <div className="flex h-full items-center justify-center text-white/30">
                      <Droplets size={80} />
                    </div>
                  </div>
                  <div className="aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg">
                    <div className="flex h-full items-center justify-center text-white/30">
                      <Factory size={80} />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Bassins de Stockage d'Eau */}
            <TabsContent value="stockage">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                <div>
                  <h2 className="mb-4 text-3xl font-bold text-proterra-navy-500">
                    Bassins de Stockage d'Eau
                  </h2>
                  <p className="mb-6 text-lg leading-relaxed text-gray-600">
                    Solutions d'étanchéité pour le stockage d'eau potable, d'eau de process, de
                    réserves d'eau pour la lutte contre les incendies. Garantie de la qualité de
                    l'eau stockée.
                  </p>

                  <h3 className="mb-4 text-xl font-bold text-proterra-navy-500">
                    Applications typiques
                  </h3>
                  <ul className="mb-6 space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                      <span className="text-gray-600">
                        Réservoirs d'eau potable (conformes ACS - Attestation de Conformité Sanitaire)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                      <span className="text-gray-600">Réserves d'eau de process industriel</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                      <span className="text-gray-600">
                        Réserves DFCI (Défense de la Forêt Contre les Incendies)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                      <span className="text-gray-600">
                        Bassins de récupération d'eau de pluie
                      </span>
                    </li>
                  </ul>

                  <Card className="bg-gray-50">
                    <CardHeader>
                      <CardTitle className="text-lg">Certifications sanitaires</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Nous utilisons exclusivement des géomembranes certifiées ACS pour le contact
                        avec l'eau potable, garantissant l'absence de migration de substances dans
                        l'eau stockée.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 shadow-lg">
                    <div className="flex h-full items-center justify-center text-white/30">
                      <Waves size={80} />
                    </div>
                  </div>
                  <div className="aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500 shadow-lg">
                    <div className="flex h-full items-center justify-center text-white/30">
                      <Droplets size={80} />
                    </div>
                  </div>
                  <div className="aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-cyan-500 to-teal-400 shadow-lg">
                    <div className="flex h-full items-center justify-center text-white/30">
                      <Shield size={80} />
                    </div>
                  </div>
                  <div className="aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-teal-500 to-sky-500 shadow-lg">
                    <div className="flex h-full items-center justify-center text-white/30">
                      <Factory size={80} />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-proterra-navy-500 md:text-4xl">
              Notre méthode d'intervention
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Un processus éprouvé pour garantir la qualité et la durabilité de l'étanchéité
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-proterra-lime-500 to-proterra-blue-500 text-white">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <CardTitle>Étude technique</CardTitle>
                <CardDescription>
                  Analyse du projet, dimensionnement, choix des matériaux adaptés
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-proterra-lime-500 to-proterra-blue-500 text-white">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <CardTitle>Préparation du support</CardTitle>
                <CardDescription>
                  Terrassement, compactage, mise en forme, contrôle qualité du support
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-proterra-lime-500 to-proterra-blue-500 text-white">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <CardTitle>Pose de l'étanchéité</CardTitle>
                <CardDescription>
                  Installation des géosynthétiques, soudure des lés, contrôle des assemblages
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-proterra-lime-500 to-proterra-blue-500 text-white">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <CardTitle>Contrôle et réception</CardTitle>
                <CardDescription>
                  Tests d'étanchéité, contrôle qualité, PV de réception, garantie décennale
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-proterra-navy-500 to-proterra-navy-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Un projet de bassin à étanchéifier ?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Nos experts étudient votre projet et vous proposent la solution la plus adaptée à vos
            besoins et contraintes.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button variant="primary" size="lg" asChild>
              <Link href="/contact">
                Demander une étude gratuite
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
