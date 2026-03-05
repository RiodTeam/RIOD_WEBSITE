# RIOD Website

Next.js website with Payload CMS backend for managing blogs, insights, and case studies.

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 15.4.11 |
| CMS | Payload CMS | 3.68.5 |
| Database | MongoDB (Mongoose adapter) | — |
| Media Storage | AWS S3 | — |
| Rich Text Editor | Lexical (via Payload) | — |
| Styling | Tailwind CSS | v4 |
| Language | TypeScript | 5.x |
| React | React | 18.3.x |

## Prerequisites

- **Node.js** >= 18.x
- **npm** (project uses `legacy-peer-deps=true` via `.npmrc`)
- **MongoDB** — either local or MongoDB Atlas cluster
- **AWS S3 Bucket** — for media/image uploads

---

## Environment Variables

Create a `.env` file in the project root. **Never commit this file** (it's in `.gitignore`).

### Required

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URI` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/riod` |
| `PAYLOAD_SECRET` | Secret key for Payload encryption (min 32 chars) | `a-very-long-random-secret-string-here` |
| `S3_BUCKET` | AWS S3 bucket name for media uploads | `riod-media` |
| `AWS_REGION` | AWS region for S3 | `ap-south-1` |
| `AWS_ACCESS_KEY_ID` | AWS IAM access key | `AKIA...` |
| `AWS_SECRET_ACCESS_KEY` | AWS IAM secret key | `wJal...` |

### Optional

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_SERVER_URL` | Public URL of the site | `http://localhost:3000` |
| `PREVIEW_SECRET` | Secret for live preview authentication | — |
| `CRON_SECRET` | Bearer token for scheduled job endpoints | — |

### `.env` Template

```env
# Database
DATABASE_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/riod

# Payload
PAYLOAD_SECRET=<generate-a-random-32-char-string>

# Server
NEXT_PUBLIC_SERVER_URL=http://localhost:3000

# AWS S3
S3_BUCKET=<your-bucket-name>
AWS_REGION=ap-south-1
AWS_ACCESS_KEY_ID=<your-access-key>
AWS_SECRET_ACCESS_KEY=<your-secret-key>

# Optional
PREVIEW_SECRET=<any-secret>
CRON_SECRET=<any-secret>
```

---

## MongoDB Setup

### Option 1: MongoDB Atlas (Recommended for production)

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas) and create a free cluster
2. Create a database user with read/write permissions
3. Whitelist your IP address (or use `0.0.0.0/0` for development)
4. Get the connection string from **Connect > Drivers**
5. Set `DATABASE_URI` in your `.env`:
   ```
   DATABASE_URI=mongodb+srv://myuser:mypassword@cluster0.abc123.mongodb.net/riod?retryWrites=true&w=majority
   ```

### Option 2: Local MongoDB

1. Install MongoDB Community Server from [mongodb.com/try/download](https://www.mongodb.com/try/download/community)
2. Start the MongoDB service
3. Set `DATABASE_URI` in your `.env`:
   ```
   DATABASE_URI=mongodb://localhost:27017/riod
   ```

Payload will automatically create all required collections and indexes on first startup.

---

## AWS S3 Setup

Media uploads (blog images, case study images, general media) are stored in S3.

### 1. Create an S3 Bucket

- Go to [AWS S3 Console](https://s3.console.aws.amazon.com/)
- Create a bucket (e.g., `riod-media`) in your preferred region
- **Block all public access** can remain ON — Payload generates signed URLs

### 2. Create an IAM User

Create an IAM user with programmatic access and attach this policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:DeleteObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::your-bucket-name",
        "arn:aws:s3:::your-bucket-name/*"
      ]
    }
  ]
}
```

### 3. S3 Folder Structure

Payload organizes uploads with these prefixes:

| Prefix | Collection | Content |
|--------|-----------|---------|
| `media/` | Media | General media library |
| `blog-images/` | BlogImage | Blog/insight hero images |
| `case-studies/` | CaseStudyMedia | Case study images |

### 4. CORS Configuration

Add this CORS config to your S3 bucket if accessing media from the browser:

```json
[
  {
    "AllowedHeaders": ["*"],
    "AllowedMethods": ["GET", "PUT", "POST"],
    "AllowedOrigins": ["http://localhost:3000", "https://your-production-domain.com"],
    "ExposeHeaders": []
  }
]
```

---

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

Copy the `.env` template above into a `.env` file and fill in your credentials.

### 3. Start Development Server

```bash
npm run dev
```

The app starts at `http://localhost:3000`.

### 4. Create Admin User

Navigate to `http://localhost:3000/admin` and create your first admin account.

### 5. Generate Types (after changing collections)

```bash
npm run generate:types
npm run generate:importmap
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run generate:types` | Generate Payload TypeScript types |
| `npm run generate:importmap` | Generate Payload admin import map |
| `npm run payload` | Run Payload CLI commands |

---

## Project Structure

```
├── access/                    # Payload access control functions
│   ├── anyone.ts              # Public access
│   ├── authenticated.ts       # Logged-in users only
│   └── authenticatedOrPublished.ts
│
├── app/
│   ├── (payload)/             # Payload admin panel & API (isolated layout)
│   │   ├── admin/             # Admin panel UI
│   │   └── api/               # REST API endpoints
│   │
│   ├── (route)/               # Frontend routes (with Header/Footer)
│   │   ├── about/
│   │   ├── contact/
│   │   ├── insights/          # Blog listing & detail pages
│   │   ├── products/
│   │   ├── layout.tsx         # Frontend layout (fonts, Header, Footer)
│   │   └── page.tsx           # Homepage
│   │
│   ├── components/            # React components
│   ├── lib/
│   │   └── fetchPosts.ts      # Payload Local API data fetching
│   ├── globals.css
│   └── layout.tsx             # Root layout (minimal, shared by all routes)
│
├── blocks/                    # Lexical rich text editor blocks
│   ├── Banner/config.ts       # Info/warning/error/success banners
│   ├── Code/config.ts         # Code snippet blocks
│   └── MediaBlock/config.ts   # Inline media embeds
│
├── collections/               # Payload CMS collection definitions
│   ├── Posts/
│   │   ├── index.ts           # Blog/Insights collection
│   │   ├── BlogImage.ts       # Blog image uploads
│   │   └── hooks/             # Revalidation & author hooks
│   ├── CaseStudies.ts         # Case studies collection
│   ├── CaseStudyMedia.ts      # Case study image uploads
│   ├── Categories.ts          # Blog categories
│   ├── Media.ts               # General media library
│   └── Users/index.ts         # Admin users (auth)
│
├── fields/                    # Custom Payload field configs
│   └── defaultLexical.ts      # Default rich text editor
│
├── hooks/                     # Global Payload hooks
├── plugins/index.ts           # Payload plugin configuration
├── search/                    # Search plugin config
├── utilities/                 # Helper functions
│
├── payload.config.ts          # Main Payload configuration
├── next.config.mjs            # Next.js config (wrapped with withPayload)
├── tsconfig.json
└── package.json
```

---

## CMS Collections

### Posts (Insights)

Blog articles with rich text content. Admin group: **Blog**.

| Field | Type | Description |
|-------|------|-------------|
| title | text | Article title (required) |
| description | textarea | Short description (required) |
| heroImage | upload | Hero image (BlogImage collection) |
| content | richText | Lexical editor with blocks (Banner, Code, Media) |
| categories | relationship | Link to Categories |
| relatedPosts | relationship | Related articles |
| publishedAt | date | Publish date (auto-set on publish) |
| authors | relationship | Link to Users |
| readTime | text | Estimated read time |
| slug | text | URL slug (auto-generated, unique) |
| meta | SEO | Title, description, image for SEO |

Supports **draft/publish workflow** with autosave and scheduled publishing.

### Categories

Blog post taxonomy with nested hierarchy support.

| Field | Type |
|-------|------|
| title | text (required) |
| slug | text (auto-generated) |

### Case Studies

Detailed project case studies. Admin group: **Case Studies**.

| Field | Type | Description |
|-------|------|-------------|
| title | text | Case study title |
| content.paraOne | richText | Problem Statement |
| content.paraTwo | richText | Our Solution |
| content.paraThree | richText | Insights & Outcomes |
| counterData | array (exactly 3) | Stats (e.g., "40%", "3X") with descriptions |
| displayImage | upload | Card/thumbnail image |
| bannerImage | upload | Full-width banner image |
| studyImages | group | 3 additional study images (image01, image02, image03) |
| industry | select | Automotive, Energy, Healthcare, Manufacturing, Technology |
| technology | multi-select | 36 options (IoT, AI, Cloud, EV, Embedded, etc.) |
| slug | text | URL slug (unique) |
| meta | group | SEO meta title and description |

### Media Collections

| Collection | Purpose | S3 Prefix |
|-----------|---------|-----------|
| Media | General media library with responsive image sizes | `media/` |
| BlogImage | Blog hero images | `blog-images/` |
| CaseStudyMedia | Case study images | `case-studies/` |

### Users

Admin authentication. Fields: `name`, `email`, `password` (managed by Payload auth).

---

## Payload Plugins

| Plugin | Purpose |
|--------|---------|
| `@payloadcms/plugin-seo` | Auto-generate SEO meta titles and URLs |
| `@payloadcms/plugin-search` | Search indexing for posts |
| `@payloadcms/plugin-nested-docs` | Nested category hierarchy |
| `@payloadcms/plugin-redirects` | URL redirect management |
| `@payloadcms/storage-s3` | AWS S3 media storage |

---

## Key URLs

| URL | Description |
|-----|-------------|
| `/` | Frontend website |
| `/admin` | Payload admin panel |
| `/api/posts` | Posts REST API |
| `/api/categories` | Categories REST API |
| `/api/case-studies` | Case Studies REST API |
| `/api/users` | Users REST API (authenticated) |
| `/api/media` | Media REST API |

---

## Deployment Notes

- Set all required environment variables in your hosting platform
- `NEXT_PUBLIC_SERVER_URL` should be your production domain (e.g., `https://riod.in`)
- Run `npm run build` for production builds
- Ensure MongoDB is accessible from the deployment environment
- S3 bucket should be in the same or nearby AWS region for performance
- The admin panel is available at `https://your-domain.com/admin`
