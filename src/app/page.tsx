import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Building2, Droplets, Shield, CheckCircle } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-proterra-navy-500 via-proterra-navy-400 to-proterra-blue-500 pt-32 pb-24 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
              Expert en{' '}
              <span className="bg-gradient-to-r from-proterra-lime-500 to-proterra-blue-400 bg-clip-text text-transparent">
                étanchéité
              </span>
              <br />
              par géosynthétiques
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-white/90 md:text-xl">
              Depuis 2009, Proterra Environnement accompagne vos projets industriels et environnementaux
              avec des solutions durables et innovantes.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button variant="primary" size="lg" asChild>
                <Link href="/contact">
                  Demander un devis
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/realisations">Voir nos réalisations</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-4xl font-extrabold text-proterra-navy-500 md:text-5xl">
                500+
              </div>
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                Projets réalisés
              </p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-extrabold text-proterra-navy-500 md:text-5xl">
                15+
              </div>
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                Années d'expertise
              </p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-extrabold text-proterra-navy-500 md:text-5xl">
                100%
              </div>
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                Made in France
              </p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-extrabold text-proterra-navy-500 md:text-5xl">
                24/7
              </div>
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                Support technique
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-proterra-navy-500 md:text-4xl">
              Nos domaines d'expertise
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Des solutions sur mesure pour vos projets d'étanchéité et de protection environnementale
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Bassins */}
            <Card className="group transition-all hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-proterra-lime-500 to-proterra-blue-500 text-white transition-transform group-hover:scale-110">
                  <Droplets size={32} />
                </div>
                <CardTitle className="text-2xl">Bassins</CardTitle>
                <CardDescription>
                  Étanchéité de bassins industriels, agricoles, rétention et stockage d'eau
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="mb-6 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                    <span>Bassins de rétention et stockage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                    <span>Bassins industriels et agricoles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                    <span>Stations d'épuration</span>
                  </li>
                </ul>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/bassins">
                    En savoir plus
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Déchets & Terres polluées */}
            <Card className="group transition-all hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-proterra-lime-500 to-proterra-blue-500 text-white transition-transform group-hover:scale-110">
                  <Shield size={32} />
                </div>
                <CardTitle className="text-2xl">Déchets & Terres polluées</CardTitle>
                <CardDescription>
                  Protection des sols et confinement de déchets pour préserver l'environnement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="mb-6 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                    <span>Centres de stockage de déchets (ISDND)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                    <span>Confinement de terres polluées</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                    <span>Barrières de sécurité passive</span>
                  </li>
                </ul>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/dechets-terres-polluees">
                    En savoir plus
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Couvertures flottantes */}
            <Card className="group transition-all hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-proterra-lime-500 to-proterra-blue-500 text-white transition-transform group-hover:scale-110">
                  <Building2 size={32} />
                </div>
                <CardTitle className="text-2xl">Couvertures flottantes</CardTitle>
                <CardDescription>
                  Solutions innovantes pour la couverture de bassins et réservoirs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="mb-6 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                    <span>Réduction de l'évaporation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                    <span>Protection contre les intempéries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                    <span>Contrôle des odeurs</span>
                  </li>
                </ul>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/couvertures-flottantes">
                    En savoir plus
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-proterra-navy-500 to-proterra-navy-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Un projet d'étanchéité ?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Notre équipe d'experts est à votre disposition pour étudier votre projet et vous proposer
            la solution la plus adaptée à vos besoins.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button variant="primary" size="lg" asChild>
              <Link href="/contact">
                Demander un devis gratuit
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white/10">
              <Link href="/realisations">Voir nos réalisations</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
