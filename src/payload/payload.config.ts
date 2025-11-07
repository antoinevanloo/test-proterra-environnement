import { buildConfig } from 'payload/config'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import path from 'path'

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

export default buildConfig({
  // Admin panel configuration
  admin: {
    user: 'users',
    bundler: webpackBundler(),
    meta: {
      titleSuffix: '- Proterra CMS',
      favicon: '/favicon.ico',
      ogImage: '/og-image.jpg',
    },
  },

  // Editor configuration
  editor: slateEditor({}),

  // Collections
  collections: [Projects, Articles, Testimonials, Media, Pages, Users],

  // Global settings
  globals: [SiteSettings, Navigation],

  // Server URL - URL où Payload CMS est accessible
  // Utilisée par l'admin panel pour faire ses appels API
  serverURL: process.env.PAYLOAD_SERVER_URL || 'http://localhost:3001',

  // TypeScript configuration
  typescript: {
    outputFile: path.resolve(__dirname, '../payload-types.ts'),
  },

  // Database adapter (MongoDB)
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || 'mongodb://localhost:27017/proterra',
  }),

  // GraphQL configuration
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, '../generated-schema.graphql'),
  },
})
