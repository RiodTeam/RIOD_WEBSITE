import { CollectionConfig } from 'payload'

export const CaseStudyMedia: CollectionConfig = {
  slug: 'caseStudyMedia',
  labels: {
    singular: 'Case Study Media',
    plural: 'Case Study Media',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  admin: {
    useAsTitle: 'alt',
    group: 'Case Studies',
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
