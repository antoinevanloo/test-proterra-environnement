'use client'

import { useState } from 'react'
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
import { Input } from '@/components/ui/input'
import { Calendar, Clock, ArrowRight, Search, Tag } from 'lucide-react'

// Mock data - will be replaced with Payload CMS data
const mockArticles = [
  {
    id: 1,
    title: 'Nouveau projet d\'étanchéité pour le bassin de La Rochelle',
    excerpt:
      'Proterra Environnement vient de remporter un contrat majeur pour l\'étanchéité d\'un bassin de rétention de 50 000m³ à La Rochelle.',
    category: 'Projet',
    date: '2024-11-15',
    readTime: '5 min',
    image: 'bassin-la-rochelle',
  },
  {
    id: 2,
    title: 'Innovation : Nouvelle gamme de géomembranes écologiques',
    excerpt:
      'Découvrez notre nouvelle gamme de géomembranes biosourcées, plus respectueuses de l\'environnement tout en conservant des performances optimales.',
    category: 'Innovation',
    date: '2024-11-10',
    readTime: '8 min',
    image: 'geomembranes-eco',
  },
  {
    id: 3,
    title: 'Certification ISO 14001 renouvelée pour 3 ans',
    excerpt:
      'Proterra Environnement renouvelle sa certification ISO 14001 en management environnemental, témoignant de notre engagement durable.',
    category: 'Entreprise',
    date: '2024-11-05',
    readTime: '3 min',
    image: 'certification-iso',
  },
  {
    id: 4,
    title: 'Webinaire gratuit : Les enjeux de l\'étanchéité en ISDND',
    excerpt:
      'Inscrivez-vous à notre prochain webinaire le 20 novembre sur les bonnes pratiques d\'étanchéité pour les centres de stockage de déchets.',
    category: 'Événement',
    date: '2024-10-28',
    readTime: '4 min',
    image: 'webinaire-isdnd',
  },
  {
    id: 5,
    title: 'Couvertures flottantes : Retour d\'expérience sur 10 ans',
    excerpt:
      'Analyse des performances de nos couvertures flottantes installées il y a 10 ans : économies, durabilité et retour sur investissement.',
    category: 'Projet',
    date: '2024-10-22',
    readTime: '6 min',
    image: 'couvertures-rex',
  },
  {
    id: 6,
    title: 'Recrutement : Proterra recherche 5 poseurs géosynthétiques',
    excerpt:
      'Nous agrandissons nos équipes ! Postes à pourvoir immédiatement sur La Ville-aux-Dames et Trappes. CDI, expérience souhaitée.',
    category: 'Recrutement',
    date: '2024-10-18',
    readTime: '2 min',
    image: 'recrutement',
  },
]

const categories = ['Toutes', 'Projet', 'Innovation', 'Entreprise', 'Événement', 'Recrutement']

export default function ActusPage() {
  const [selectedCategory, setSelectedCategory] = useState('Toutes')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredArticles = mockArticles.filter(article => {
    const matchesCategory = selectedCategory === 'Toutes' || article.category === selectedCategory
    const matchesSearch =
      searchQuery === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-proterra-navy-500 via-proterra-navy-400 to-proterra-blue-500 pt-32 pb-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-6xl">
              Actualités{' '}
              <span className="bg-gradient-to-r from-proterra-lime-500 to-proterra-blue-400 bg-clip-text text-transparent">
                Proterra
              </span>
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-white/90 md:text-xl">
              Suivez l'actualité de Proterra Environnement : projets, innovations, événements et vie
              d'entreprise
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <Input
                type="text"
                placeholder="Rechercher un article..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Tag size={20} className="text-gray-400" />
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Catégorie" />
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

          {/* Active Filters Display */}
          {(selectedCategory !== 'Toutes' || searchQuery) && (
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
              <span>Filtres actifs :</span>
              {selectedCategory !== 'Toutes' && (
                <span className="rounded-full bg-proterra-lime-100 px-3 py-1 text-proterra-navy-500">
                  {selectedCategory}
                </span>
              )}
              {searchQuery && (
                <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-700">
                  "{searchQuery}"
                </span>
              )}
              <button
                onClick={() => {
                  setSelectedCategory('Toutes')
                  setSearchQuery('')
                }}
                className="ml-2 text-proterra-navy-500 hover:underline"
              >
                Réinitialiser
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredArticles.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-xl text-gray-500">
                Aucun article ne correspond à votre recherche.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSelectedCategory('Toutes')
                  setSearchQuery('')
                }}
              >
                Réinitialiser les filtres
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-6 text-sm text-gray-600">
                {filteredArticles.length} article{filteredArticles.length > 1 ? 's' : ''} trouvé
                {filteredArticles.length > 1 ? 's' : ''}
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredArticles.map(article => (
                  <Card
                    key={article.id}
                    className="group overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1"
                  >
                    {/* Image Placeholder */}
                    <div className="aspect-video bg-gradient-to-br from-proterra-navy-500 to-proterra-blue-500">
                      <div className="flex h-full items-center justify-center text-white/30 transition-all group-hover:scale-110">
                        <Calendar size={60} />
                      </div>
                    </div>

                    <CardHeader>
                      {/* Meta Info */}
                      <div className="mb-2 flex items-center justify-between text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {new Date(article.date).toLocaleDateString('fr-FR', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {article.readTime}
                        </span>
                      </div>

                      {/* Category Badge */}
                      <div className="mb-3">
                        <span className="inline-block rounded-full bg-proterra-lime-100 px-3 py-1 text-xs font-medium text-proterra-navy-500">
                          {article.category}
                        </span>
                      </div>

                      <CardTitle className="text-xl leading-tight group-hover:text-proterra-navy-500">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
                    </CardHeader>

                    <CardContent>
                      <Button variant="ghost" asChild className="w-full group-hover:bg-proterra-lime-50">
                        <Link href={`/actus/${article.id}`}>
                          Lire la suite
                          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="py-20 bg-gradient-to-br from-proterra-navy-500 to-proterra-navy-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Restez informé de nos actualités
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Recevez chaque mois notre newsletter avec nos derniers projets, innovations et événements
          </p>
          <div className="mx-auto max-w-md">
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Votre email"
                className="bg-white text-gray-900 placeholder:text-gray-400"
              />
              <Button variant="primary" size="lg">
                S'inscrire
              </Button>
            </div>
            <p className="mt-3 text-xs text-white/60">
              En vous inscrivant, vous acceptez de recevoir nos communications. Vous pouvez vous
              désabonner à tout moment.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
