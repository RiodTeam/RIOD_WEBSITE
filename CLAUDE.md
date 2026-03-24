# RIOD Website - Claude Code Project Guide

## Company
- **Brand**: RIOD (by RnD Square Pvt. Ltd.)
- **Domain**: riod.in
- **Industry**: EV charging infrastructure, energy management
- **Location**: Infopark Koratty, Kerala, India
- **Contact**: info@riod.in
- **Production URL**: 65.0.238.126:3000 (auto-deploys from main via GitHub Actions)

## Tech Stack
- **Framework**: Next.js 14+ (App Router) with TypeScript
- **CMS**: Payload CMS with MongoDB
- **Styling**: Tailwind CSS (utility-first)
- **Fonts**: Inter (primary), Geist Sans (secondary) — loaded via `next/font/google`
- **Module System**: ESM (`"type": "module"` in package.json) — use `.cjs` extension for CommonJS scripts
- **Image Format**: WebP (optimized with Sharp — resize 1400x800, quality 80)
- **Package Manager**: npm
- **Build**: `npm run build` (uses `cross-env NODE_OPTIONS="--no-deprecation"`)

## Brand Design System
These are the canonical brand values. All components must use these exactly.

| Token | Value | Usage |
|-------|-------|-------|
| Primary Accent | `#cdf80a` | Buttons, highlights, badges, checkmarks |
| Hover Accent | `#b8e000` | All hover states on accent elements |
| Dark Text | `#1b1b1b` | Headings, dark backgrounds, filter buttons |
| Light Accent BG | `#f0f7d4` | Subtle accent backgrounds |
| Body Font | `var(--font-inter), "Inter", sans-serif` | Global body text |
| Button Style | `rounded-full` | All CTA buttons |

**Do NOT use**: `#00E17B`, `#00c96b`, `#22c55e`, `#d8ff2a`, `#d8f540`, `#b8e009`, `#404040`, `bg-black` for branded elements, or `Arial/Helvetica` as body font.

## Project Structure
```
app/
├── (route)/                    # Route group (all frontend pages)
│   ├── page.tsx                # Homepage
│   ├── about/                  # About us
│   ├── products/
│   │   ├── ev-chargers/        # EV charger listing
│   │   │   └── [slug]/         # Individual product (PowerPod, PowerPod Go, etc.)
│   │   └── energy/             # Energy products (Power Master, etc.)
│   ├── technology/
│   │   └── [slug]/             # 14 dynamic technology pages
│   ├── insights/
│   │   └── [slug]/             # 46 blog articles
│   ├── case-studies/
│   │   └── [slug]/             # 5 case studies
│   ├── resources/              # Downloadable PDFs
│   ├── applications/           # Application verticals
│   ├── ev-chargers-*/          # Vertical landing pages (malls, hospitals, parking, etc.)
│   ├── ev-charging-*/          # More vertical pages (workplaces, hotels, apartments)
│   ├── contact/
│   ├── careers/
│   ├── partners/
│   ├── privacy-policy/
│   ├── terms-and-conditions/
│   └── layout.tsx              # Root layout with font config
├── components/
│   ├── common/                 # Hero, NewsletterSignup, LeadFormPopup, etc.
│   ├── homepage/               # HeroVideoSection, SolutionsSection, etc.
│   ├── ev-chargers/            # ProductGrid, Services, VehicleScroll, etc.
│   ├── product-detail/         # FeaturesGrid, VariantsTable, VehiclesSupported
│   ├── insights/               # BlogGrid
│   ├── individual-insight/     # BlogDetailSection, NextArticlesSection
│   ├── case-studies/           # CaseStudyGrid, CaseStudyDetail
│   ├── technology/             # TechnologyGrid, TechnologySection
│   ├── aboutus/                # TeamSection, FeatureGridSection, etc.
│   ├── energy/                 # PowerMasterArchitecture
│   ├── resources/              # ResourceGrid
│   ├── selection-guide/        # SelectionWizard (multi-step)
│   ├── contact/                # ContactFormSection, LocationSection
│   ├── header/                 # header.tsx
│   └── footer/                 # FooterSection.tsx
├── data/
│   ├── technologies.ts         # 14 technology pages data
│   └── powerpodData.ts         # Product spec data
├── globals.css                 # Global styles, font-family, heading classes
└── ...
```

### Key Data Files
- `app/data/technologies.ts` — 14 technology page definitions (slug, title, hero image, sections)
- `app/data/powerpodData.ts` — EV charger product specifications
- `app/components/data/insightsData.ts` — 46 blog article definitions
- `app/components/data/caseStudiesData.ts` — 5 case study definitions

### Public Assets
```
public/
├── insights/          # 90 WebP images (46 primary + 44 secondary "-2" variants)
├── case-studies/      # 8 WebP images (4 case studies x 2 each)
├── applications/      # 18 WebP images (malls 6, hospitals 4, parking 6)
├── technology/        # 52 WebP images (14 hero + 38 section images)
├── home/              # Homepage assets
├── products/          # Product images
└── ...
```

## Dynamic Routes Pattern
Technology, insights, and case studies use `[slug]` dynamic routes with `generateStaticParams()`:
```tsx
export async function generateStaticParams() {
  return data.map((item) => ({ slug: item.slug }));
}
```

## Image Optimization Workflow
When adding new images from stock photos:
1. Place source images in a staging folder
2. Create a `.cjs` script (NOT `.js` — ESM project!) using Sharp:
   - Resize to 1400x800
   - Convert to WebP, quality 80
   - Output to appropriate `public/` subdirectory
3. Update data files to reference new `/category/slug.webp` paths
4. Verify build passes before committing

## Known Pending Items
- **HVAC case study image**: Case study #3 (`hvac-integrated-ev-charging`) still uses `/home/hero.webp` placeholder
- **28 PDF downloads**: All download links in `/resources` page reference non-existent PDFs in `public/`
- **Application gallery wiring**: 18 images exist in `public/applications/` but page components don't reference them yet
- **Product spec pages**: PowerPod/PowerPod Go/PowerPod City individual spec pages may need enhancement
- **About page**: Potential restructure planned

## Git Workflow
- Main branch: `main`
- Remote: `origin` → `https://github.com/RiodTeam/RIOD_WEBSITE.git`
- Auto-deploys to production on push to main
- Commit messages: descriptive, include Co-Authored-By for AI-assisted commits
- Always run `npm run build` before committing to verify no build errors

## Reference: rnd-production Codebase
The rnd-production site (`C:\Users\LENOVO\Desktop\Website\rnd-production`) is the parent company website and serves as the brand reference for design tokens (colors, fonts, button styles). Cross-reference when in doubt about brand standards.
