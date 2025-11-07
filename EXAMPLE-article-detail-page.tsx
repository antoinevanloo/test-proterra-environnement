/**
 * EXEMPLE : Page Article individuel [slug]
 *
 * CRÉER CE FICHIER À :
 * src/app/actus/[slug]/page.tsx
 *
 * Cette page affiche un article complet à partir de son slug
 * Exemple : /actus/nouveau-projet-bassin-lyon
 */

import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react'
import { getArticleBySlug, getImageUrl, formatDate } from '@/lib/payload-api'
import type { Metadata } from 'next'

// Type pour les props de la page
type Props = {
  params: { slug: string }
}

// Génération des métadonnées dynamiques (SEO)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug)

  if (!article) {
    return {
      title: 'Article non trouvé',
    }
  }

  return {
    title: `${article.title} - Proterra Environnement`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.createdAt,
      authors: [article.author],
      images: article.featuredImage
        ? [
            {
              url: getImageUrl(article.featuredImage),
              alt: article.featuredImage.alt || article.title,
            },
          ]
        : [],
    },
  }
}

// Fonction pour calculer le temps de lecture
function calculateReadTime(content: any): string {
  const text = JSON.stringify(content || '')
  const words = text.split(/\s+/).length
  const minutes = Math.ceil(words / 200)
  return `${minutes} min de lecture`
}

// Composant pour afficher le contenu rich text
// Note : Vous devrez peut-être créer un vrai renderer pour Slate
function RichTextRenderer({ content }: { content: any }) {
  if (!content) return null

  // Ceci est une version simplifiée
  // Pour un vrai renderer Slate, consultez :
  // https://payloadcms.com/docs/rich-text/slate#rendering-slate-content-in-your-app

  return (
    <div className="prose prose-lg max-w-none">
      {Array.isArray(content) &&
        content.map((block, i) => {
          if (block.type === 'h1') {
            return <h1 key={i}>{block.children?.map((c: any) => c.text).join('')}</h1>
          }
          if (block.type === 'h2') {
            return <h2 key={i}>{block.children?.map((c: any) => c.text).join('')}</h2>
          }
          if (block.type === 'h3') {
            return <h3 key={i}>{block.children?.map((c: any) => c.text).join('')}</h3>
          }
          if (block.type === 'paragraph') {
            return <p key={i}>{block.children?.map((c: any) => c.text).join('')}</p>
          }
          return null
        })}
    </div>
  )
}

export default async function ArticlePage({ params }: Props) {
  // Récupérer l'article depuis l'API
  const article = await getArticleBySlug(params.slug)

  // Si l'article n'existe pas, afficher 404
  if (!article) {
    notFound()
  }

  return (
    <>
      <Header />

      <article className="py-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/actus"
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-700"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour aux actualités
            </Link>
          </div>

          {/* Header */}
          <header className="mx-auto mb-12 max-w-4xl">
            {/* Category */}
            {article.category && (
              <div className="mb-4 flex items-center gap-2 text-sm font-medium text-green-600">
                <Tag className="h-4 w-4" />
                <span>{article.category}</span>
              </div>
            )}

            {/* Title */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {article.title}
            </h1>

            {/* Excerpt */}
            {article.excerpt && (
              <p className="mb-8 text-xl text-gray-600">{article.excerpt}</p>
            )}

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 border-y border-gray-200 py-4 text-sm text-gray-600">
              {/* Author */}
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-900">{article.author}</span>
              </div>

              {/* Date */}
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={article.createdAt}>{formatDate(article.createdAt)}</time>
              </div>

              {/* Read time */}
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{calculateReadTime(article.content)}</span>
              </div>
            </div>

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Featured Image */}
          {article.featuredImage && (
            <div className="mx-auto mb-12 max-w-5xl">
              <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={getImageUrl(article.featuredImage)}
                  alt={article.featuredImage.alt || article.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {article.featuredImage.alt && (
                <p className="mt-2 text-center text-sm text-gray-500">
                  {article.featuredImage.alt}
                </p>
              )}
            </div>
          )}

          {/* Content */}
          <div className="mx-auto max-w-4xl">
            <RichTextRenderer content={article.content} />
          </div>

          {/* Share / Actions */}
          <div className="mx-auto mt-12 max-w-4xl border-t border-gray-200 pt-8">
            <div className="flex items-center justify-between">
              <Link href="/actus">
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Retour aux actualités
                </Button>
              </Link>

              <Button>Partager l'article</Button>
            </div>
          </div>

          {/* Related articles section (optionnel) */}
          <div className="mx-auto mt-16 max-w-4xl">
            <h2 className="mb-8 text-2xl font-bold">Articles similaires</h2>
            <div className="text-gray-600">
              <p>Section des articles similaires à implémenter...</p>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-green-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Parlons de votre projet</h2>
          <p className="mb-8 text-lg text-green-100">
            Proterra Environnement vous accompagne dans tous vos projets d'étanchéité
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Nous contacter
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
