import { mongooseAdapter } from '@payloadcms/db-mongodb'

import sharp from 'sharp'
import path from 'path'
import { buildConfig, PayloadRequest } from 'payload'
import { fileURLToPath } from 'url'

import { s3Storage } from '@payloadcms/storage-s3'

import { Categories } from './collections/Categories'
import { Media } from './collections/Media'
import { Users } from './collections/Users'
import { BlogImage } from './collections/Posts/BlogImage'
import { Posts } from './collections/Posts'
import { CaseStudies } from './collections/CaseStudies'
import { CaseStudyMedia } from './collections/CaseStudyMedia'
import { ContactSubmissions } from './collections/ContactSubmissions'
import { NewsletterSubmissions } from './collections/NewsletterSubmissions'
import { TechDownloads } from './collections/TechDownloads'
import { plugins } from './plugins'
import { defaultLexical } from '@/fields/defaultLexical'
import { getServerSideURL } from './utilities/getURL'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    components: {},
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  editor: defaultLexical,
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  collections: [
    Posts,
    Media,
    Categories,
    Users,
    BlogImage,
    CaseStudies,
    CaseStudyMedia,
    ContactSubmissions,
    NewsletterSubmissions,
    TechDownloads,
  ],
  cors: [getServerSideURL(), 'http://localhost:3000'].filter(Boolean),
  plugins: [
    ...plugins,
    s3Storage({
      collections: {
        media: {
          prefix: 'RIOD/media',
        },
        blogImage: {
          prefix: 'RIOD/blog-images',
        },
        caseStudyMedia: {
          prefix: 'RIOD/case-studies',
        },
      },
      bucket: process.env.S3_BUCKET!,
      config: {
        region: process.env.AWS_REGION!,
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
        },
      },
    }),
  ],
  secret: process.env.PAYLOAD_SECRET || '',
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        if (req.user) return true

        const authHeader = req.headers.get('authorization')
        return authHeader === `Bearer ${process.env.CRON_SECRET}`
      },
    },
    tasks: [],
  },
})
