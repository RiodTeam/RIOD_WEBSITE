import { CollectionConfig } from 'payload'

export const BlogImage: CollectionConfig = {
  slug: 'blogImage',
  labels: {
    singular: 'Insight Image',
    plural: 'Insight Images',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  admin: {
    useAsTitle: 'alt',
    group: 'Blog',
  },
  upload: {
    mimeTypes: ['image/*'],
    adminThumbnail: 'url',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: 'Alt Text',
    },
  ],
}
