/**
 * Payload API Client
 * Helper functions to fetch data from Payload CMS API
 */

const PAYLOAD_API_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3001'

// Types
export interface Article {
  id: string
  title: string
  slug: string
  excerpt: string
  content: any // Rich text content
  featuredImage?: {
    url: string
    alt: string
    width: number
    height: number
  }
  author: string
  category: string
  tags?: string[]
  published: boolean
  createdAt: string
  updatedAt: string
}

export interface Project {
  id: string
  title: string
  slug: string
  description: string
  category: string
  location: string
  year: number
  surface?: number
  client?: string
  featuredImage?: {
    url: string
    alt: string
  }
  gallery?: Array<{
    url: string
    alt: string
  }>
  published: boolean
  createdAt: string
}

export interface Testimonial {
  id: string
  name: string
  role?: string
  company: string
  quote: string
  avatar?: {
    url: string
  }
  rating: number
  published: boolean
}

export interface Page {
  id: string
  title: string
  slug: string
  layout?: any[] // Page Builder blocks
  published: boolean
  createdAt: string
  updatedAt: string
}

export interface ApiResponse<T> {
  docs: T[]
  totalDocs: number
  limit: number
  page: number
  totalPages: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

/**
 * Fetch all articles
 */
export async function getArticles(options?: {
  limit?: number
  page?: number
  category?: string
  published?: boolean
}): Promise<ApiResponse<Article>> {
  const params = new URLSearchParams()

  if (options?.limit) params.append('limit', options.limit.toString())
  if (options?.page) params.append('page', options.page.toString())
  if (options?.category) params.append('where[category][equals]', options.category)
  if (options?.published !== undefined) {
    params.append('where[published][equals]', options.published.toString())
  } else {
    params.append('where[published][equals]', 'true') // Default: only published
  }

  const url = `${PAYLOAD_API_URL}/api/articles?${params.toString()}`

  const res = await fetch(url, {
    next: { revalidate: 60 }, // ISR: revalidate every 60 seconds
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch articles: ${res.statusText}`)
  }

  return res.json()
}

/**
 * Fetch a single article by slug
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const url = `${PAYLOAD_API_URL}/api/articles?where[slug][equals]=${slug}&limit=1`

  const res = await fetch(url, {
    next: { revalidate: 60 },
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch article: ${res.statusText}`)
  }

  const data: ApiResponse<Article> = await res.json()
  return data.docs[0] || null
}

/**
 * Fetch all projects
 */
export async function getProjects(options?: {
  limit?: number
  page?: number
  category?: string
  published?: boolean
}): Promise<ApiResponse<Project>> {
  const params = new URLSearchParams()

  if (options?.limit) params.append('limit', options.limit.toString())
  if (options?.page) params.append('page', options.page.toString())
  if (options?.category) params.append('where[category][equals]', options.category)
  if (options?.published !== undefined) {
    params.append('where[published][equals]', options.published.toString())
  } else {
    params.append('where[published][equals]', 'true')
  }

  const url = `${PAYLOAD_API_URL}/api/projects?${params.toString()}`

  const res = await fetch(url, {
    next: { revalidate: 60 },
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch projects: ${res.statusText}`)
  }

  return res.json()
}

/**
 * Fetch a single project by slug
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const url = `${PAYLOAD_API_URL}/api/projects?where[slug][equals]=${slug}&limit=1`

  const res = await fetch(url, {
    next: { revalidate: 60 },
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch project: ${res.statusText}`)
  }

  const data: ApiResponse<Project> = await res.json()
  return data.docs[0] || null
}

/**
 * Fetch all testimonials
 */
export async function getTestimonials(options?: {
  limit?: number
  published?: boolean
}): Promise<ApiResponse<Testimonial>> {
  const params = new URLSearchParams()

  if (options?.limit) params.append('limit', options.limit.toString())
  if (options?.published !== undefined) {
    params.append('where[published][equals]', options.published.toString())
  } else {
    params.append('where[published][equals]', 'true')
  }

  // Sort by order ASC
  params.append('sort', 'order')

  const url = `${PAYLOAD_API_URL}/api/testimonials?${params.toString()}`

  const res = await fetch(url, {
    next: { revalidate: 60 },
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch testimonials: ${res.statusText}`)
  }

  return res.json()
}

/**
 * Fetch a page by slug
 */
export async function getPageBySlug(slug: string): Promise<Page | null> {
  const url = `${PAYLOAD_API_URL}/api/pages?where[slug][equals]=${slug}&where[published][equals]=true&limit=1`

  const res = await fetch(url, {
    next: { revalidate: 60 },
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch page: ${res.statusText}`)
  }

  const data: ApiResponse<Page> = await res.json()
  return data.docs[0] || null
}

/**
 * Fetch site settings (global)
 */
export async function getSiteSettings() {
  const url = `${PAYLOAD_API_URL}/api/globals/site-settings`

  const res = await fetch(url, {
    next: { revalidate: 3600 }, // Cache 1 hour
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch site settings: ${res.statusText}`)
  }

  return res.json()
}

/**
 * Fetch navigation (global)
 */
export async function getNavigation() {
  const url = `${PAYLOAD_API_URL}/api/globals/navigation`

  const res = await fetch(url, {
    next: { revalidate: 3600 }, // Cache 1 hour
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch navigation: ${res.statusText}`)
  }

  return res.json()
}

/**
 * Helper: Get image URL from Payload media object
 */
export function getImageUrl(image?: { url: string } | string): string {
  if (!image) return ''
  if (typeof image === 'string') return image
  return image.url
}

/**
 * Helper: Format date
 */
export function formatDate(dateString: string, locale: string = 'fr-FR'): string {
  const date = new Date(dateString)
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
