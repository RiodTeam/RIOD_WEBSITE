import { CollectionConfig } from 'payload'
import { revalidateCollectionAfterChange, revalidateCollectionAfterDelete } from './Posts/hooks/revalidateCollection'
import {
  lexicalEditor,
  BoldFeature,
  ItalicFeature,
  UnderlineFeature,
  StrikethroughFeature,
  UnorderedListFeature,
  OrderedListFeature,
  HeadingFeature,
  LinkFeature,
  ParagraphFeature,
} from '@payloadcms/richtext-lexical'

const contentEditor = lexicalEditor({
  features: [
    ParagraphFeature(),
    BoldFeature(),
    ItalicFeature(),
    UnderlineFeature(),
    StrikethroughFeature(),
    HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
    UnorderedListFeature(),
    OrderedListFeature(),
    LinkFeature(),
  ],
})

export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  labels: {
    singular: 'Case Study',
    plural: 'Case Studies',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'industry', 'technology', 'slug'],
    group: 'Case Studies',
  },
  hooks: {
    afterChange: [
      revalidateCollectionAfterChange((doc) => [
        '/case-studies',
        `/case-studies/${doc?.slug}`,
        '/',
      ]),
    ],
    afterDelete: [
      revalidateCollectionAfterDelete((doc) => [
        '/case-studies',
        `/case-studies/${doc?.slug}`,
        '/',
      ]),
    ],
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      type: 'group',
      name: 'meta',
      label: 'SEO Meta',
      fields: [
        {
          name: 'metaTitle',
          label: 'Meta Title',
          type: 'text',
          required: true,
        },
        {
          name: 'metaDescription',
          label: 'Meta Description',
          type: 'textarea',
          required: true,
          maxLength: 160,
        },
      ],
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      label: 'Content',
      type: 'group',
      required: true,
      fields: [
        {
          name: 'paraOne',
          label: 'Problem Statement',
          required: true,
          type: 'richText',
          editor: contentEditor,
        },
        {
          name: 'paraTwo',
          label: 'Our Solution',
          required: true,
          type: 'richText',
          editor: contentEditor,
        },
        {
          name: 'paraThree',
          label: 'Insights & Outcomes',
          required: true,
          type: 'richText',
          editor: contentEditor,
        },
      ],
    },
    {
      name: 'counterData',
      label: 'Counter Data',
      required: true,
      type: 'array',
      labels: {
        singular: 'Counter Item',
        plural: 'Counter Items',
      },
      minRows: 3,
      maxRows: 3,
      fields: [
        {
          name: 'count',
          label: 'Count Value',
          type: 'text',
          required: true,
          admin: {
            description: 'Example: 40%, 3X, 100+, etc.',
          },
        },
        {
          name: 'text',
          label: 'Description',
          type: 'textarea',
          required: true,
        },
      ],
    },
    {
      name: 'displayImage',
      label: 'Display Image',
      required: false,
      type: 'upload',
      relationTo: 'caseStudyMedia',
    },
    {
      name: 'bannerImage',
      label: 'Banner Image',
      required: false,
      type: 'upload',
      relationTo: 'caseStudyMedia',
    },
    {
      name: 'studyImages',
      label: 'Study Images',
      required: false,
      type: 'group',
      fields: [
        {
          name: 'image01',
          label: 'Image 01',
          required: false,
          type: 'upload',
          relationTo: 'caseStudyMedia',
        },
        {
          name: 'image02',
          label: 'Image 02',
          required: false,
          type: 'upload',
          relationTo: 'caseStudyMedia',
        },
        {
          name: 'image03',
          label: 'Image 03',
          required: false,
          type: 'upload',
          relationTo: 'caseStudyMedia',
        },
      ],
    },
    {
      name: 'industry',
      label: 'Industry',
      type: 'select',
      required: true,
      options: [
        { label: 'Automotive', value: 'automotive' },
        { label: 'Energy', value: 'energy' },
        { label: 'Healthcare', value: 'healthcare' },
        { label: 'Manufacturing', value: 'manufacturing' },
        { label: 'Technology', value: 'technology' },
      ],
    },
    {
      name: 'technology',
      label: 'Technologies Used',
      type: 'array',
      admin: {
        description: 'Add technologies used in this case study.',
      },
      fields: [
        {
          name: 'name',
          label: 'Technology Name',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'tag',
      label: 'Category Tag',
      type: 'select',
      required: true,
      options: [
        { label: 'EV Charging', value: 'EV Charging' },
        { label: 'Energy Management', value: 'Energy Management' },
      ],
      admin: {
        position: 'sidebar',
        description: 'Used for filtering on the case studies listing page.',
      },
    },
    {
      name: 'client',
      label: 'Client',
      type: 'text',
      required: true,
      admin: {
        description: 'e.g. "Major multinational with 500+ vehicle fleet"',
      },
    },
    {
      name: 'location',
      label: 'Location',
      type: 'text',
      required: true,
      admin: {
        description: 'e.g. "Greece", "Global (12 campuses)"',
      },
    },
    {
      name: 'summary',
      label: 'Summary',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Short summary shown on the case study listing cards.',
      },
    },
    {
      name: 'testimonial',
      label: 'Testimonial',
      type: 'group',
      fields: [
        {
          name: 'quote',
          label: 'Quote',
          type: 'textarea',
        },
        {
          name: 'author',
          label: 'Author',
          type: 'text',
        },
        {
          name: 'role',
          label: 'Role / Title',
          type: 'text',
        },
      ],
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      unique: true,
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
