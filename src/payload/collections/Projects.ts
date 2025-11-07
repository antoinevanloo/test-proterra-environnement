import { CollectionConfig } from 'payload/types'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    group: 'Contenu',
    description: 'Gestion des réalisations et projets',
    defaultColumns: ['title', 'category', 'location', 'year', 'status'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Titre du projet',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'URL (slug)',
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }: { value?: string; data?: any }) => {
            if (!value && data?.title) {
              return data.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-+|-+$/g, '')
            }
            return value
          },
        ],
      },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      label: 'Catégorie',
      options: [
        { label: 'Bassins industriels', value: 'bassins-industriels' },
        { label: 'Bassins agricoles', value: 'bassins-agricoles' },
        { label: 'Bassins de rétention', value: 'bassins-retention' },
        { label: 'Bassins de stockage', value: 'bassins-stockage' },
        { label: 'Déchets & Terres polluées', value: 'dechets-terres-polluees' },
        { label: 'Couvertures flottantes', value: 'couvertures-flottantes' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'location',
      type: 'text',
      required: true,
      label: 'Localisation',
      admin: {
        description: 'Ville et département (ex: Tours, 37)',
      },
    },
    {
      name: 'year',
      type: 'text',
      required: true,
      label: 'Année',
      admin: {
        description: 'Année de réalisation',
      },
    },
    {
      name: 'client',
      type: 'text',
      label: 'Client',
      admin: {
        description: 'Nom du client (optionnel)',
      },
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
      label: 'Description complète',
    },
    {
      name: 'details',
      type: 'group',
      label: 'Détails techniques',
      fields: [
        {
          name: 'surface',
          type: 'text',
          label: 'Surface (m²)',
        },
        {
          name: 'duration',
          type: 'text',
          label: 'Durée du chantier',
        },
        {
          name: 'material',
          type: 'text',
          label: 'Matériau principal',
        },
      ],
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Image principale',
    },
    {
      name: 'gallery',
      type: 'array',
      label: 'Galerie photos',
      minRows: 0,
      maxRows: 20,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Image',
        },
        {
          name: 'caption',
          type: 'text',
          label: 'Légende',
        },
      ],
    },
    {
      name: 'tags',
      type: 'array',
      label: 'Tags',
      maxRows: 10,
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'relatedProjects',
      type: 'relationship',
      relationTo: 'projects',
      hasMany: true,
      label: 'Projets similaires',
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      label: 'Statut',
      options: [
        { label: 'Brouillon', value: 'draft' },
        { label: 'Publié', value: 'published' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishedDate',
      type: 'date',
      label: 'Date de publication',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
      hooks: {
        beforeChange: [
          ({ data }: { data?: any }) => {
            if (data?.status === 'published' && !data.publishedDate) {
              return new Date().toISOString()
            }
            return data?.publishedDate
          },
        ],
      },
    },
  ],
  timestamps: true,
}
