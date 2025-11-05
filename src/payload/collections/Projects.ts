import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'location', 'year', 'featured'],
    group: 'Contenu',
    description: 'Gestion des réalisations et projets',
  },
  access: {
    read: () => true, // Public
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Titre du projet',
      admin: {
        description: 'Ex: Bassin industriel - Plateforme logistique',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'URL (slug)',
      admin: {
        description: 'Généré automatiquement à partir du titre',
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
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
      name: 'category',
      type: 'select',
      required: true,
      label: 'Catégorie',
      options: [
        {
          label: 'Bassins',
          value: 'bassins',
        },
        {
          label: 'Déchets & Terres polluées',
          value: 'dechets-terres-polluees',
        },
        {
          label: 'Couvertures flottantes',
          value: 'couvertures-flottantes',
        },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Projet vedette',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Afficher en page d\'accueil',
      },
    },
    {
      name: 'year',
      type: 'number',
      required: true,
      label: 'Année',
      admin: {
        position: 'sidebar',
        description: 'Année de réalisation',
      },
      defaultValue: () => new Date().getFullYear(),
    },
    {
      name: 'location',
      type: 'text',
      required: true,
      label: 'Localisation',
      admin: {
        description: 'Ex: Allex (77) - 4 072 m² ou Provence-Alpes-Côte d\'Azur',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Résumé court',
      admin: {
        description: 'Description courte pour les cartes (150 caractères max)',
      },
      maxLength: 150,
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
      label: 'Description complète',
      admin: {
        description: 'Description détaillée du projet',
      },
    },
    {
      name: 'details',
      type: 'group',
      label: 'Détails du projet',
      fields: [
        {
          name: 'client',
          type: 'text',
          label: 'Client',
          admin: {
            description: 'Nom du client (peut être masqué si confidentiel)',
          },
        },
        {
          name: 'surface',
          type: 'text',
          label: 'Surface',
          admin: {
            description: 'Ex: 4 072 m² ou 5000 m²',
          },
        },
        {
          name: 'volume',
          type: 'text',
          label: 'Volume',
          admin: {
            description: 'Ex: 3000 m³ (optionnel)',
          },
        },
        {
          name: 'duration',
          type: 'text',
          label: 'Durée des travaux',
          admin: {
            description: 'Ex: 3 semaines',
          },
        },
        {
          name: 'material',
          type: 'text',
          label: 'Matériau',
          admin: {
            description: 'Ex: PEHD 2mm, Géomembrane PEHD 1.5mm',
          },
        },
        {
          name: 'technique',
          type: 'textarea',
          label: 'Technique utilisée',
          admin: {
            description: 'Description des techniques mises en œuvre',
          },
        },
      ],
    },
    {
      name: 'images',
      type: 'array',
      label: 'Galerie photos',
      minRows: 1,
      maxRows: 15,
      labels: {
        singular: 'Image',
        plural: 'Images',
      },
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
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Image principale',
      admin: {
        description: 'Image de couverture du projet',
      },
    },
    {
      name: 'tags',
      type: 'array',
      label: 'Mots-clés',
      maxRows: 10,
      labels: {
        singular: 'Mot-clé',
        plural: 'Mots-clés',
      },
      admin: {
        description: 'Tags pour filtrer les projets',
      },
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
      admin: {
        description: 'Sélectionner 3-4 projets similaires',
      },
      maxDepth: 1,
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: 'Date de publication',
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
        {
          label: 'Brouillon',
          value: 'draft',
        },
        {
          label: 'Publié',
          value: 'published',
        },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        // Auto-generate slug if not provided
        if (data.title && !data.slug) {
          data.slug = data.title
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '')
        }
        return data
      },
    ],
  },
  timestamps: true,
}
