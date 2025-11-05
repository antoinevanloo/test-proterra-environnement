import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, CheckCircle, Shield, Recycle, AlertTriangle, Leaf } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Déchets & Terres polluées - Confinement et protection des sols',
  description:
    'Solutions de confinement de déchets et terres polluées par géosynthétiques. ISDND, centres de stockage, barrières de sécurité. Expert Proterra Environnement.',
  openGraph: {
    title: 'Déchets & Terres polluées - Protection environnementale | Proterra Environnement',
    description:
      'Solutions de confinement de déchets et terres polluées par géosynthétiques. Centres de stockage et protection des sols.',
    type: 'website',
  },
}

const solutions = [
  {
    icon: Shield,
    title: 'Centres de stockage de déchets (ISDND)',
    description:
      'Étanchéité complète de centres de stockage de déchets non dangereux et dangereux avec géomembranes multi-couches.',
    features: [
      'Barrière de fond (géomembrane PEHD 2.0 à 2.5mm)',
      'Drainage des lixiviats avec géocomposites',
      'Couverture finale multi-couches',
      'Système de collecte et traitement des biogaz',
    ],
    color: 'from-red-600 to-orange-500',
  },
  {
    icon: AlertTriangle,
    title: 'Confinement de terres polluées',
    description:
      'Solutions de confinement sur site ou hors site de sols pollués pour prévenir la migration des polluants.',
    features: [
      'Barrières verticales étanches',
      'Confinement horizontal (couverture)',
      'Systèmes de drainage périphérique',
      'Suivi et monitoring des eaux souterraines',
    ],
    color: 'from-yellow-600 to-amber-500',
  },
  {
    icon: Recycle,
    title: 'Casiers de déchets inertes',
    description:
      'Étanchéité de casiers pour le stockage de déchets inertes (gravats, béton, tuiles) conformes aux normes.',
    features: [
      'Géomembranes adaptées aux déchets inertes',
      'Systèmes de drainage des eaux pluviales',
      'Aménagements paysagers post-exploitation',
      'Conformité réglementaire ICPE',
    ],
    color: 'from-gray-600 to-slate-500',
  },
  {
    icon: Leaf,
    title: 'Plateformes de compostage',
    description:
      'Étanchéité de plateformes de compostage et de stockage de déchets verts pour la protection des sols et des eaux.',
    features: [
      'Aires étanches avec pente de drainage',
      'Résistance aux effluents organiques',
      'Collecte des jus de compostage',
      'Revêtements résistants au trafic',
    ],
    color: 'from-green-600 to-emerald-500',
  },
]

export default function DechetsTerresPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-proterra-navy-500 via-proterra-navy-400 to-proterra-blue-500 pt-32 pb-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-6xl">
              Déchets &{' '}
              <span className="bg-gradient-to-r from-proterra-lime-500 to-proterra-blue-400 bg-clip-text text-transparent">
                Terres polluées
              </span>
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-white/90 md:text-xl">
              Protection des sols et des eaux par géosynthétiques. Confinement de déchets, centres de
              stockage ISDND, réhabilitation de sites pollués. Expertise environnementale depuis 2009.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                <CheckCircle size={20} className="text-proterra-lime-500" />
                <span className="text-sm font-medium">Conformité ICPE</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                <CheckCircle size={20} className="text-proterra-lime-500" />
                <span className="text-sm font-medium">Protection environnementale</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                <CheckCircle size={20} className="text-proterra-lime-500" />
                <span className="text-sm font-medium">Sécurité garantie</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-proterra-navy-500 md:text-4xl">
              Nos solutions de confinement
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Des systèmes d'étanchéité adaptés à chaque type de déchet et de pollution pour une
              protection maximale de l'environnement
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <Card key={index} className="overflow-hidden transition-all hover:shadow-xl">
                  <CardHeader>
                    <div
                      className={`mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${solution.color} text-white`}
                    >
                      <Icon size={32} />
                    </div>
                    <CardTitle className="text-2xl">{solution.title}</CardTitle>
                    <CardDescription className="text-base">{solution.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
                      Caractéristiques
                    </h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technical Details Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-proterra-navy-500">
                Systèmes d'étanchéité multi-barrières
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                Nous mettons en œuvre des systèmes d'étanchéité conformes aux normes les plus strictes
                pour les installations classées (ICPE) et les sites pollués.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-xl font-bold text-proterra-navy-500">
                    Barrière de fond (étanchéité primaire)
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-600">
                      <CheckCircle size={18} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                      <span>
                        Argile compactée 1m minimum (k ≤ 10⁻⁹ m/s) ou équivalent géosynthétique
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <CheckCircle size={18} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                      <span>Géomembrane PEHD 2.0 à 2.5mm résistante aux UV et agents chimiques</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <CheckCircle size={18} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                      <span>Géotextile de protection anti-poinçonnement 800 g/m²+</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-bold text-proterra-navy-500">
                    Drainage des lixiviats
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-600">
                      <CheckCircle size={18} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                      <span>Géocomposite drainant 5 à 10mm d'épaisseur</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <CheckCircle size={18} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                      <span>Réseau de collecte gravitaire avec pente ≥ 3%</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <CheckCircle size={18} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                      <span>Station de pompage et traitement des lixiviats</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-bold text-proterra-navy-500">
                    Couverture finale
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-600">
                      <CheckCircle size={18} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                      <span>Couche drainante pour les eaux pluviales</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <CheckCircle size={18} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                      <span>Géomembrane PEHD 1.5 à 2.0mm anti-UV</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <CheckCircle size={18} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                      <span>Couche de terre végétale et revégétalisation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-bold text-proterra-navy-500">
                Réglementation et certifications
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                Toutes nos installations sont conformes aux arrêtés ministériels et aux normes
                européennes en vigueur.
              </p>

              <div className="space-y-4">
                <Card className="border-l-4 border-l-proterra-lime-500">
                  <CardHeader>
                    <CardTitle className="text-lg">Arrêté du 15 février 2016</CardTitle>
                    <CardDescription>
                      Installations de stockage de déchets non dangereux (ISDND)
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-l-4 border-l-proterra-blue-500">
                  <CardHeader>
                    <CardTitle className="text-lg">Arrêté du 30 décembre 2002</CardTitle>
                    <CardDescription>
                      Installations de stockage de déchets inertes (ISDI)
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-l-4 border-l-proterra-navy-500">
                  <CardHeader>
                    <CardTitle className="text-lg">Normes NF EN</CardTitle>
                    <CardDescription>
                      Géosynthétiques certifiés NF EN 13361, NF EN 13491, NF EN 13492
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>

              <div className="mt-8">
                <Card className="bg-proterra-lime-50 border-proterra-lime-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-proterra-navy-500">
                      <Shield size={24} className="text-proterra-lime-500" />
                      Garantie et suivi
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                        <span>Garantie décennale sur l'étanchéité</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                        <span>Contrôle qualité à chaque étape (CQE indépendant)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                        <span>Dossier de récolement complet</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                        <span>Maintenance et suivi post-exploitation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-proterra-navy-500 md:text-4xl">
              Bénéfices environnementaux
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Nos solutions de confinement protègent durablement les sols et les eaux souterraines
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Shield size={32} className="text-blue-600" />
                </div>
                <CardTitle className="text-lg">Protection des nappes phréatiques</CardTitle>
                <CardDescription>
                  Barrières étanches empêchant la migration des polluants vers les eaux souterraines
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Leaf size={32} className="text-green-600" />
                </div>
                <CardTitle className="text-lg">Préservation des écosystèmes</CardTitle>
                <CardDescription>
                  Confinement des déchets et polluants pour protéger la faune et la flore
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
                  <AlertTriangle size={32} className="text-yellow-600" />
                </div>
                <CardTitle className="text-lg">Prévention des risques</CardTitle>
                <CardDescription>
                  Réduction des risques sanitaires et environnementaux pour les populations
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                  <Recycle size={32} className="text-purple-600" />
                </div>
                <CardTitle className="text-lg">Réhabilitation de sites</CardTitle>
                <CardDescription>
                  Valorisation de friches industrielles et remise en état de sites pollués
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-proterra-navy-500 to-proterra-navy-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Un projet de confinement ou de dépollution ?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Nos experts vous accompagnent dans la définition, la conception et la réalisation de vos
            projets de gestion de déchets et de sites pollués.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button variant="primary" size="lg" asChild>
              <Link href="/contact">
                Demander une étude technique
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
