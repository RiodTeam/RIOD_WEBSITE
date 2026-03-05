import type { CollectionConfig } from 'payload'

export const TechDownloads: CollectionConfig = {
  slug: 'tech-downloads',
  labels: {
    singular: 'Tech Download',
    plural: 'Tech Downloads',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'resource', 'createdAt'],
    group: 'Form Submissions',
  },
  access: {
    read: ({ req: { user } }) => Boolean(user),
    create: () => true,
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'company',
      type: 'text',
    },
    {
      name: 'resource',
      type: 'select',
      required: true,
      options: [
        { label: 'Product Catalogue', value: 'product-catalogue' },
        { label: 'Technical Datasheet', value: 'technical-datasheet' },
        { label: 'Integration Guide', value: 'integration-guide' },
        { label: 'White Paper', value: 'white-paper' },
      ],
    },
  ],
}
