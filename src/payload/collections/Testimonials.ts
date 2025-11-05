import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'company', 'order'],
    group: 'Contenu',
    description: 'Gestion des témoignages clients',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Nom du client',
    },
    {
      name: 'role',
      type: 'text',
      label: 'Poste / Fonction',
      admin: {
        description: 'Ex: Directeur technique, Chef de projet',
      },
    },
    {
      name: 'company',
      type: 'text',
      required: true,
      label: 'Entreprise',
    },
    {
      name: 'quote',
      type: 'textarea',
      required: true,
      label: 'Témoignage',
      admin: {
        description: 'Citation du client (2-3 phrases)',
      },
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
      label: 'Photo du client',
      admin: {
        description: 'Photo optionnelle',
      },
    },
    {
      name: 'rating',
      type: 'number',
      label: 'Note',
      min: 1,
      max: 5,
      defaultValue: 5,
      admin: {
        description: 'Note sur 5',
        step: 1,
      },
    },
    {
      name: 'order',
      type: 'number',
      label: 'Ordre d\'affichage',
      defaultValue: 0,
      admin: {
        description: 'Plus le nombre est petit, plus le témoignage apparaît en premier',
        position: 'sidebar',
      },
    },
    {
      name: 'published',
      type: 'checkbox',
      label: 'Publié',
      defaultValue: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
  timestamps: true,
}
