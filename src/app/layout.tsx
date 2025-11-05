import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import '@/styles/globals.css'

// Fonts configuration
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'),
  title: {
    default: 'Proterra Environnement | Expert en étanchéité par géosynthétiques',
    template: '%s | Proterra Environnement',
  },
  description:
    'Proterra Environnement, expert français en étanchéité par géosynthétiques. Solutions pour bassins, déchets, terres polluées et couvertures flottantes. Depuis 2009.',
  keywords: [
    'étanchéité',
    'géosynthétiques',
    'géomembranes',
    'bassins',
    'PEHD',
    'couvertures flottantes',
    'déchets',
    'terres polluées',
    'environnement',
    'Proterra',
    'étanchéité industrielle',
    'génie civil',
  ],
  authors: [{ name: 'Proterra Environnement' }],
  creator: 'Proterra Environnement',
  publisher: 'Proterra Environnement',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: '/',
    siteName: 'Proterra Environnement',
    title: 'Proterra Environnement | Expert en étanchéité par géosynthétiques',
    description:
      'Solutions d\'étanchéité pour bassins, déchets, terres polluées et couvertures flottantes.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Proterra Environnement',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Proterra Environnement',
    description: 'Expert en étanchéité par géosynthétiques',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token', // À remplacer par le vrai token Google Search Console
  },
}

// Schema.org JSON-LD pour SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Proterra Environnement',
  legalName: 'Proterra Environnement',
  url: 'https://www.proterra-environnement.com',
  logo: 'https://www.proterra-environnement.com/logo.png',
  foundingDate: '2009',
  description:
    'Expert en étanchéité par géosynthétiques pour bassins, déchets, terres polluées et couvertures flottantes',
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: 'Z.I du bois de Planté – 32, rue Jacqueline Auriol',
      addressLocality: 'La Ville-aux-Dames',
      postalCode: '37700',
      addressCountry: 'FR',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'ZAI des Bruyères – 3 avenue Le Verrier',
      addressLocality: 'Trappes',
      postalCode: '78190',
      addressCountry: 'FR',
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+33-2-47-42-82-82',
    contactType: 'customer service',
    email: 'proterra@proterra-environnement.com',
    availableLanguage: ['French'],
    areaServed: 'FR',
  },
  sameAs: ['https://fr.linkedin.com/company/proterra-environnement'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services d\'étanchéité',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Bassins',
          description: 'Étanchéité de bassins industriels et agricoles',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Déchets & Terres polluées',
          description: 'Solutions pour sites de stockage de déchets et terres polluées',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Couvertures flottantes',
          description: 'Couvertures flottantes pour bassins et réservoirs',
        },
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head>
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  )
}
