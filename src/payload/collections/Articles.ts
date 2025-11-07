import { CollectionConfig } from 'payload/types'

export const Articles: CollectionConfig = {
  slug: 'articles',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'publishedAt', 'status'],
    group: 'Contenu',
    description: 'Gestion des actualités et articles de blog',
  },
  access: {
    read: ({ req: { user } }) => {
      if (user) return true
      return {
        status: {
          equals: 'published',
        },
      }
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Titre de l\'article',
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
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/[^\w\s-]/g, '')
                .replace(/[\s_-]+/g, '-')
                .replace(/^-+|-+$/g, '')
            }
            return value
          },
        ],
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
      label: 'Résumé',
      maxLength: 200,
      admin: {
        description: 'Description courte pour les cartes et le SEO (200 caractères max)',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'Contenu',
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Image de couverture',
    },
    {
      name: 'author',
      type: 'text',
      label: 'Auteur',
      defaultValue: 'Proterra Environnement',
    },
    {
      name: 'category',
      type: 'select',
      label: 'Catégorie',
      options: [
        { label: 'Actualité', value: 'actualite' },
        { label: 'Projet', value: 'projet' },
        { label: 'Événement', value: 'evenement' },
        { label: 'Technique', value: 'technique' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'tags',
      type: 'array',
      label: 'Mots-clés',
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
      name: 'publishedAt',
      type: 'date',
      label: 'Date de publication',
      required: true,
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
      defaultValue: () => new Date().toISOString(),
    },
    {
      name: 'status',
      type: 'select',
      label: 'Statut',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Brouillon', value: 'draft' },
        { label: 'Publié', value: 'published' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
  timestamps: true,
}
