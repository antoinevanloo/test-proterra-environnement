import { CollectionConfig } from 'payload/types'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    group: 'Administration',
    description: 'Gestion des utilisateurs et administrateurs',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Nom complet',
    },
    {
      name: 'role',
      type: 'select',
      label: 'Rôle',
      required: true,
      defaultValue: 'editor',
      options: [
        {
          label: 'Administrateur',
          value: 'admin',
        },
        {
          label: 'Éditeur',
          value: 'editor',
        },
        {
          label: 'Contributeur',
          value: 'contributor',
        },
      ],
      admin: {
        description: 'Niveau d\'accès de l\'utilisateur',
      },
    },
  ],
  timestamps: true,
}
