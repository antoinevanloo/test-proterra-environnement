import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ArrowRight, MapPin, Calendar, Ruler } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Réalisations - Nos projets d\'étanchéité par géosynthétiques',
  description:
    'Découvrez nos réalisations en étanchéité : bassins industriels et agricoles, centres de stockage de déchets, couvertures flottantes. Plus de 500 projets réussis.',
  openGraph: {
    title: 'Réalisations - Nos projets | Proterra Environnement',
    description:
      'Plus de 500 projets d\'étanchéité réalisés partout en France. Découvrez nos réalisations.',
    type: 'website',
  },
}

// Mock data - will be replaced with Payload CMS data
const mockProjects = [
  {
    id: 1,
    title: 'Bassin de rétention industriel - Site Michelin',
    category: 'Bassins industriels',
    location: 'Clermont-Ferrand (63)',
    year: '2024',
    surface: '15 000 m²',
    image: 'bassin-michelin',
    description:
      'Étanchéité complète d\'un bassin de rétention pour le site industriel Michelin avec géomembrane PEHD 2.0mm et système de drainage.',
  },
  {
    id: 2,
    title: 'ISDND Veolia - Casier de stockage',
    category: 'Déchets & Terres polluées',
    location: 'Lyon (69)',
    year: '2024',
    surface: '25 000 m²',
    image: 'isdnd-veolia',
    description:
      'Installation d\'un système d\'étanchéité multi-couches pour un nouveau casier de stockage de déchets non dangereux, conforme aux normes ICPE.',
  },
  {
    id: 3,
    title: 'Réserve d\'irrigation agricole',
    category: 'Bassins agricoles',
    location: 'Poitiers (86)',
    year: '2023',
    surface: '50 000 m²',
    image: 'reserve-irrigation',
    description:
      'Création d\'une réserve d\'eau de 100 000m³ pour l\'irrigation avec géomembrane PEHD et couverture flottante pour réduire l\'évaporation.',
  },
  {
    id: 4,
    title: 'Station d\'épuration - Couverture flottante',
    category: 'Couvertures flottantes',
    location: 'Tours (37)',
    year: '2023',
    surface: '8 000 m²',
    image: 'step-tours',
    description:
      'Installation de couvertures flottantes sur 4 bassins d\'aération pour réduire les odeurs et l\'évaporation de 90%.',
  },
  {
    id: 5,
    title: 'Bassin de stockage eau potable',
    category: 'Bassins de stockage',
    location: 'Orléans (45)',
    year: '2023',
    surface: '12 000 m²',
    image: 'eau-potable-orleans',
    description:
      'Étanchéité d\'un bassin de stockage d\'eau potable avec géomembrane PEHD certifiée ACS (Attestation de Conformité Sanitaire).',
  },
  {
    id: 6,
    title: 'Plateforme de compostage industriel',
    category: 'Déchets & Terres polluées',
    location: 'Nantes (44)',
    year: '2023',
    surface: '10 000 m²',
    image: 'compostage-nantes',
    description:
      'Étanchéité complète d\'une plateforme de compostage avec système de collecte des jus de percolation et réseau de drainage.',
  },
]

const categories = [
  'Toutes les réalisations',
  'Bassins industriels',
  'Bassins agricoles',
  'Bassins de stockage',
  'Déchets & Terres polluées',
  'Couvertures flottantes',
]

export default function RealisationsPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-proterra-navy-500 via-proterra-navy-400 to-proterra-blue-500 pt-32 pb-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-6xl">
              Nos{' '}
              <span className="bg-gradient-to-r from-proterra-lime-500 to-proterra-blue-400 bg-clip-text text-transparent">
                Réalisations
              </span>
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-white/90 md:text-xl">
              Plus de 500 projets d'étanchéité réalisés partout en France depuis 2009. Découvrez
              quelques-unes de nos réalisations majeures.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-4xl font-extrabold text-proterra-navy-500">500+</div>
              <p className="text-sm font-medium uppercase tracking-wide text-gray-600">
                Projets réalisés
              </p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-extrabold text-proterra-navy-500">2M+</div>
              <p className="text-sm font-medium uppercase tracking-wide text-gray-600">
                m² posés
              </p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-extrabold text-proterra-navy-500">100%</div>
              <p className="text-sm font-medium uppercase tracking-wide text-gray-600">
                Clients satisfaits
              </p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-extrabold text-proterra-navy-500">15+</div>
              <p className="text-sm font-medium uppercase tracking-wide text-gray-600">
                Années d'expérience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-600">
              {mockProjects.length} projet{mockProjects.length > 1 ? 's' : ''} trouvé
              {mockProjects.length > 1 ? 's' : ''}
            </p>
            <div className="flex items-center gap-2">
              <label htmlFor="category-filter" className="text-sm font-medium text-gray-700">
                Filtrer par :
              </label>
              <Select defaultValue="Toutes les réalisations">
                <SelectTrigger className="w-64">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(cat => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {mockProjects.map(project => (
              <Card
                key={project.id}
                className="group overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1"
              >
                {/* Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-proterra-navy-500 to-proterra-blue-500">
                  <div className="flex h-full items-center justify-center text-white/30 transition-all group-hover:scale-110">
                    <Ruler size={60} />
                  </div>
                </div>

                <CardHeader>
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="inline-block rounded-full bg-proterra-lime-100 px-3 py-1 text-xs font-medium text-proterra-navy-500">
                      {project.category}
                    </span>
                  </div>

                  <CardTitle className="text-xl leading-tight group-hover:text-proterra-navy-500">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Project Details */}
                  <div className="mb-4 space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="flex-shrink-0 text-proterra-lime-500" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="flex-shrink-0 text-proterra-lime-500" />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Ruler size={16} className="flex-shrink-0 text-proterra-lime-500" />
                      <span>{project.surface}</span>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    asChild
                    className="w-full group-hover:bg-proterra-lime-50"
                  >
                    <Link href={`/realisations/${project.id}`}>
                      Voir le projet
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-proterra-navy-500 to-proterra-navy-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Votre projet d'étanchéité ?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Chaque projet est unique. Parlons du vôtre et trouvons ensemble la solution
            d'étanchéité la plus adaptée à vos besoins.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button variant="primary" size="lg" asChild>
              <Link href="/contact">
                Demander un devis gratuit
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/bassins">Découvrir nos services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
