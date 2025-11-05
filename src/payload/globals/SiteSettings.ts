import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Paramètres du site',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      label: 'Nom du site',
      defaultValue: 'Proterra Environnement',
    },
    {
      name: 'tagline',
      type: 'text',
      label: 'Slogan',
      defaultValue: 'Expert en étanchéité par géosynthétiques',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      defaultValue:
        'Proterra Environnement, expert français en étanchéité par géosynthétiques depuis 2009.',
    },
    {
      name: 'contact',
      type: 'group',
      label: 'Contact',
      fields: [
        {
          name: 'email',
          type: 'email',
          label: 'Email principal',
          defaultValue: 'proterra@proterra-environnement.com',
        },
        {
          name: 'phone',
          type: 'text',
          label: 'Téléphone',
          defaultValue: '02 47 42 82 82',
        },
      ],
    },
    {
      name: 'social',
      type: 'group',
      label: 'Réseaux sociaux',
      fields: [
        {
          name: 'linkedin',
          type: 'text',
          label: 'LinkedIn',
          defaultValue: 'https://fr.linkedin.com/company/proterra-environnement',
        },
      ],
    },
  ],
}
