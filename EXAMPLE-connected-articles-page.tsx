/**
 * EXEMPLE : Page Articles connectée à Payload CMS
 *
 * Ce fichier montre comment remplacer src/app/actus/page.tsx
 * par une version connectée à l'API Payload
 *
 * POUR L'UTILISER :
 * 1. Remplacer le contenu de src/app/actus/page.tsx par ce fichier
 * 2. Créer quelques articles dans Payload Admin
 * 3. Rafraîchir http://localhost:3000/actus
 */

import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import { getArticles, formatDate, getImageUrl } from '@/lib/payload-api'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Actualités - Proterra Environnement',
  description:
    'Suivez l\'actualité de Proterra Environnement : projets, innovations, événements et actualités du secteur de l\'étanchéité par géosynthétiques.',
}

// Fonction pour calculer le temps de lecture (approximatif)
function calculateReadTime(content: any): string {
  // Approximation : 200 mots par minute
  const text = JSON.stringify(content || '')
  const words = text.split(/\s+/).length
  const minutes = Math.ceil(words / 200)
  return `${minutes} min`
}

export default async function ActusPage() {
  // Récupérer les articles depuis l'API Payload
  try {
    const articlesData = await getArticles({
      published: true, // Seulement les articles publiés
      limit: 50, // Limite
    })

    const articles = articlesData.docs

    return (
      <>
        <Header />

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-blue-50 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Actualités
              </h1>
              <p className="text-xl text-gray-600">
                Suivez l'actualité de Proterra Environnement et du secteur de l'étanchéité par
                géosynthétiques
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {articles.length === 0 ? (
              // Aucun article trouvé
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-gray-600">
                  Aucun article publié pour le moment. Revenez bientôt !
                </p>
                <p className="mt-4 text-sm text-gray-500">
                  💡 Créez votre premier article dans{' '}
                  <a
                    href="http://localhost:3001/admin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline"
                  >
                    Payload Admin
                  </a>
                </p>
              </div>
            ) : (
              // Liste des articles
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => (
                  <Card key={article.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
                    {/* Image */}
                    {article.featuredImage && (
                      <div className="relative aspect-video overflow-hidden bg-gray-100">
                        <Image
                          src={getImageUrl(article.featuredImage)}
                          alt={article.featuredImage.alt || article.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                    )}

                    <CardHeader>
                      {/* Category */}
                      {article.category && (
                        <div className="mb-2 flex items-center gap-2 text-sm text-green-600">
                          <Tag className="h-4 w-4" />
                          <span>{article.category}</span>
                        </div>
                      )}

                      {/* Title */}
                      <CardTitle className="line-clamp-2">
                        <Link href={`/actus/${article.slug}`} className="hover:text-green-600 transition-colors">
                          {article.title}
                        </Link>
                      </CardTitle>

                      {/* Excerpt */}
                      <CardDescription className="line-clamp-3">
                        {article.excerpt}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      {/* Meta */}
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <time dateTime={article.createdAt}>
                            {formatDate(article.createdAt)}
                          </time>
                        </div>

                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{calculateReadTime(article.content)}</span>
                        </div>
                      </div>

                      {/* Read more */}
                      <Link href={`/actus/${article.slug}`}>
                        <Button variant="ghost" className="mt-4 w-full group-hover:bg-green-50">
                          Lire l'article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Pagination (si nécessaire) */}
            {articlesData.totalPages > 1 && (
              <div className="mt-12 flex justify-center gap-2">
                {articlesData.hasPrevPage && (
                  <Button variant="outline">Page précédente</Button>
                )}
                <span className="flex items-center px-4 text-sm text-gray-600">
                  Page {articlesData.page} sur {articlesData.totalPages}
                </span>
                {articlesData.hasNextPage && (
                  <Button variant="outline">Page suivante</Button>
                )}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-green-600 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold">Restons en contact</h2>
            <p className="mb-8 text-lg text-green-100">
              Abonnez-vous à notre newsletter pour recevoir nos dernières actualités
            </p>
            <Button size="lg" variant="secondary">
              S'abonner à la newsletter
            </Button>
          </div>
        </section>

        <Footer />
      </>
    )
  } catch (error) {
    console.error('Error fetching articles:', error)

    return (
      <>
        <Header />
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 text-3xl font-bold text-gray-900">Erreur de chargement</h1>
            <p className="text-gray-600">
              Impossible de charger les articles. Vérifiez que Payload CMS est démarré sur le port
              3001.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              💡 Commande : <code className="rounded bg-gray-100 px-2 py-1">npm run dev:payload</code>
            </p>
          </div>
        </section>
        <Footer />
      </>
    )
  }
}
