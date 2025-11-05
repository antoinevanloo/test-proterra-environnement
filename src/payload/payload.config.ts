import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

// Collections
import { Projects } from './collections/Projects'
import { Articles } from './collections/Articles'
import { Testimonials } from './collections/Testimonials'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Users } from './collections/Users'

// Globals
import { SiteSettings } from './globals/SiteSettings'
import { Navigation } from './globals/Navigation'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  // Admin panel configuration
  admin: {
    user: 'users',
    meta: {
      titleSuffix: '- Proterra CMS',
      favicon: '/favicon.ico',
      ogImage: '/og-image.jpg',
    },
    components: {
      // Custom logo component can be added here
    },
  },

  // Collections
  collections: [Projects, Articles, Testimonials, Media, Pages, Users],

  // Global settings
  globals: [SiteSettings, Navigation],

  // Editor configuration
  editor: lexicalEditor({}),

  // Secret key for encryption
  secret: process.env.PAYLOAD_SECRET || 'your-secret-key-change-in-production',

  // TypeScript configuration
  typescript: {
    outputFile: path.resolve(dirname, '../payload-types.ts'),
  },

  // Database adapter (PostgreSQL)
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || 'postgres://localhost:5432/proterra',
    },
  }),

  // Sharp for image processing
  sharp,

  // Plugins can be added here
  plugins: [],

  // CORS configuration
  cors: [process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'].filter(Boolean),

  // CSRF protection
  csrf: [process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'].filter(Boolean),

  // GraphQL configuration
  graphQL: {
    schemaOutputFile: path.resolve(dirname, '../generated-schema.graphql'),
  },

  // Upload configuration
  upload: {
    limits: {
      fileSize: 10000000, // 10MB
    },
  },
})
