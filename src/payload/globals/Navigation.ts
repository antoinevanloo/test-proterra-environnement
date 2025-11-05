import type { GlobalConfig } from 'payload'

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  label: 'Navigation',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'mainMenu',
      type: 'array',
      label: 'Menu principal',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Label',
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          label: 'URL',
        },
        {
          name: 'openInNewTab',
          type: 'checkbox',
          label: 'Ouvrir dans un nouvel onglet',
          defaultValue: false,
        },
      ],
    },
  ],
}
