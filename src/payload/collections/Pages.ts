import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    group: 'Contenu',
    description: 'Gestion des pages avec Page Builder',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Titre de la page',
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
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      admin: {
        position: 'sidebar',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Titre SEO',
          maxLength: 60,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description SEO',
          maxLength: 160,
        },
        {
          name: 'keywords',
          type: 'text',
          label: 'Mots-clés (séparés par des virgules)',
        },
      ],
    },
    // Page Builder Blocks
    {
      name: 'blocks',
      type: 'blocks',
      label: 'Contenu de la page',
      labels: {
        singular: 'Bloc',
        plural: 'Blocs',
      },
      blocks: [
        // Hero Block
        {
          slug: 'hero',
          labels: {
            singular: 'Hero',
            plural: 'Heros',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              label: 'Titre',
            },
            {
              name: 'subtitle',
              type: 'textarea',
              label: 'Sous-titre',
            },
            {
              name: 'backgroundType',
              type: 'select',
              required: true,
              defaultValue: 'gradient',
              label: 'Type de fond',
              options: [
                { label: 'Dégradé Proterra', value: 'gradient' },
                { label: 'Image', value: 'image' },
              ],
            },
            {
              name: 'backgroundImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Image de fond',
              admin: {
                condition: (data: any) => data.backgroundType === 'image',
              },
            },
            {
              name: 'cta',
              type: 'array',
              label: 'Boutons CTA',
              maxRows: 2,
              fields: [
                {
                  name: 'text',
                  type: 'text',
                  required: true,
                  label: 'Texte du bouton',
                },
                {
                  name: 'url',
                  type: 'text',
                  required: true,
                  label: 'URL',
                },
                {
                  name: 'style',
                  type: 'select',
                  required: true,
                  defaultValue: 'primary',
                  label: 'Style',
                  options: [
                    { label: 'Primaire (Lime)', value: 'primary' },
                    { label: 'Secondaire (Blue)', value: 'secondary' },
                    { label: 'Outline', value: 'outline' },
                  ],
                },
              ],
            },
          ],
        },
        // Rich Text Block
        {
          slug: 'richText',
          labels: {
            singular: 'Texte enrichi',
            plural: 'Textes enrichis',
          },
          fields: [
            {
              name: 'content',
              type: 'richText',
              required: true,
              label: 'Contenu',
            },
            {
              name: 'maxWidth',
              type: 'select',
              defaultValue: 'normal',
              label: 'Largeur maximale',
              options: [
                { label: 'Petite (prose)', value: 'prose' },
                { label: 'Normale', value: 'normal' },
                { label: 'Large', value: 'wide' },
                { label: 'Pleine largeur', value: 'full' },
              ],
            },
          ],
        },
        // Image Block
        {
          slug: 'image',
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
            {
              name: 'size',
              type: 'select',
              defaultValue: 'large',
              label: 'Taille',
              options: [
                { label: 'Petite', value: 'small' },
                { label: 'Moyenne', value: 'medium' },
                { label: 'Grande', value: 'large' },
                { label: 'Pleine largeur', value: 'full' },
              ],
            },
          ],
        },
        // Gallery Block
        {
          slug: 'gallery',
          labels: {
            singular: 'Galerie',
            plural: 'Galeries',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Titre',
            },
            {
              name: 'images',
              type: 'array',
              required: true,
              minRows: 2,
              label: 'Images',
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
              name: 'columns',
              type: 'select',
              defaultValue: '3',
              label: 'Nombre de colonnes',
              options: [
                { label: '2 colonnes', value: '2' },
                { label: '3 colonnes', value: '3' },
                { label: '4 colonnes', value: '4' },
              ],
            },
          ],
        },
        // Video Block
        {
          slug: 'video',
          labels: {
            singular: 'Vidéo',
            plural: 'Vidéos',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Titre',
            },
            {
              name: 'videoType',
              type: 'select',
              required: true,
              defaultValue: 'youtube',
              label: 'Type de vidéo',
              options: [
                { label: 'YouTube', value: 'youtube' },
                { label: 'Vimeo', value: 'vimeo' },
                { label: 'Fichier uploadé', value: 'file' },
              ],
            },
            {
              name: 'videoId',
              type: 'text',
              label: 'ID YouTube/Vimeo',
              admin: {
                condition: (data: any) => data.videoType !== 'file',
              },
            },
            {
              name: 'videoFile',
              type: 'upload',
              relationTo: 'media',
              label: 'Fichier vidéo',
              admin: {
                condition: (data: any) => data.videoType === 'file',
              },
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Description',
            },
          ],
        },
        // CTA Block
        {
          slug: 'cta',
          labels: {
            singular: 'Call-to-Action',
            plural: 'Call-to-Actions',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              label: 'Titre',
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Description',
            },
            {
              name: 'buttons',
              type: 'array',
              required: true,
              minRows: 1,
              maxRows: 2,
              label: 'Boutons',
              fields: [
                {
                  name: 'text',
                  type: 'text',
                  required: true,
                  label: 'Texte',
                },
                {
                  name: 'url',
                  type: 'text',
                  required: true,
                  label: 'URL',
                },
                {
                  name: 'style',
                  type: 'select',
                  defaultValue: 'primary',
                  label: 'Style',
                  options: [
                    { label: 'Primaire', value: 'primary' },
                    { label: 'Secondaire', value: 'secondary' },
                    { label: 'Outline', value: 'outline' },
                  ],
                },
              ],
            },
            {
              name: 'background',
              type: 'select',
              defaultValue: 'navy',
              label: 'Couleur de fond',
              options: [
                { label: 'Navy', value: 'navy' },
                { label: 'Lime', value: 'lime' },
                { label: 'Blanc', value: 'white' },
                { label: 'Gris', value: 'gray' },
              ],
            },
          ],
        },
        // Features Grid Block
        {
          slug: 'featuresGrid',
          labels: {
            singular: 'Grille de services/fonctionnalités',
            plural: 'Grilles de services',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Titre',
            },
            {
              name: 'subtitle',
              type: 'textarea',
              label: 'Sous-titre',
            },
            {
              name: 'features',
              type: 'array',
              required: true,
              minRows: 2,
              label: 'Services/Fonctionnalités',
              fields: [
                {
                  name: 'icon',
                  type: 'select',
                  required: true,
                  label: 'Icône',
                  options: [
                    { label: 'Droplets (Gouttes)', value: 'droplets' },
                    { label: 'Shield (Bouclier)', value: 'shield' },
                    { label: 'Factory (Usine)', value: 'factory' },
                    { label: 'Recycle', value: 'recycle' },
                    { label: 'Wind (Vent)', value: 'wind' },
                    { label: 'Sun (Soleil)', value: 'sun' },
                    { label: 'Leaf (Feuille)', value: 'leaf' },
                    { label: 'Building2 (Bâtiment)', value: 'building2' },
                  ],
                },
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  label: 'Titre',
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                  label: 'Description',
                },
                {
                  name: 'link',
                  type: 'text',
                  label: 'Lien (optionnel)',
                },
              ],
            },
            {
              name: 'columns',
              type: 'select',
              defaultValue: '3',
              label: 'Nombre de colonnes',
              options: [
                { label: '2 colonnes', value: '2' },
                { label: '3 colonnes', value: '3' },
                { label: '4 colonnes', value: '4' },
              ],
            },
          ],
        },
        // Stats Block
        {
          slug: 'stats',
          labels: {
            singular: 'Statistiques',
            plural: 'Statistiques',
          },
          fields: [
            {
              name: 'stats',
              type: 'array',
              required: true,
              minRows: 2,
              maxRows: 6,
              label: 'Statistiques',
              fields: [
                {
                  name: 'value',
                  type: 'text',
                  required: true,
                  label: 'Valeur (ex: 500+)',
                },
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                  label: 'Libellé',
                },
              ],
            },
          ],
        },
        // Testimonials Block
        {
          slug: 'testimonials',
          labels: {
            singular: 'Témoignages',
            plural: 'Témoignages',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Titre',
            },
            {
              name: 'testimonials',
              type: 'relationship',
              relationTo: 'testimonials',
              hasMany: true,
              required: true,
              label: 'Témoignages à afficher',
            },
          ],
        },
        // Contact Form Block
        {
          slug: 'contactForm',
          labels: {
            singular: 'Formulaire de contact',
            plural: 'Formulaires de contact',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Titre',
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Description',
            },
            {
              name: 'emailTo',
              type: 'email',
              required: true,
              defaultValue: 'proterra@proterra-environnement.com',
              label: 'Email de destination',
            },
          ],
        },
        // Map Block
        {
          slug: 'map',
          labels: {
            singular: 'Carte',
            plural: 'Cartes',
          },
          fields: [
            {
              name: 'office',
              type: 'select',
              required: true,
              defaultValue: 'la-ville-aux-dames',
              label: 'Bureau',
              options: [
                { label: 'La Ville-aux-Dames', value: 'la-ville-aux-dames' },
                { label: 'Trappes', value: 'trappes' },
                { label: 'Les deux', value: 'both' },
              ],
            },
            {
              name: 'height',
              type: 'select',
              defaultValue: 'medium',
              label: 'Hauteur',
              options: [
                { label: 'Petite (300px)', value: 'small' },
                { label: 'Moyenne (500px)', value: 'medium' },
                { label: 'Grande (700px)', value: 'large' },
              ],
            },
          ],
        },
        // FAQ/Accordion Block
        {
          slug: 'faq',
          labels: {
            singular: 'FAQ/Accordéon',
            plural: 'FAQs/Accordéons',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Titre',
            },
            {
              name: 'items',
              type: 'array',
              required: true,
              minRows: 2,
              label: 'Questions/Réponses',
              fields: [
                {
                  name: 'question',
                  type: 'text',
                  required: true,
                  label: 'Question',
                },
                {
                  name: 'answer',
                  type: 'richText',
                  required: true,
                  label: 'Réponse',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  timestamps: true,
}
