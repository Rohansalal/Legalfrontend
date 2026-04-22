# Legal Door — Full Product Blueprint
> Reference: valiksearch.com · Target: legaltech SaaS with search, services, and professional network
> Date: 2026-04-20 | Stack: Next.js 16 + Cloudflare Workers + Neon Postgres

---

## 1. Vision & Core Concept

Legal Door is a **legal-tech search & services marketplace** — the "Valiksearch for legal services" in India. Users search for a legal service (e.g., "trademark registration Mumbai"), get matched results with pricing and lawyers, and can book/order directly. A network of verified legal professionals handles delivery; an admin panel governs the platform.

### Key Value Propositions
- **Instant service search** with price comparison (like valiksearch flight/hotel search)
- **Transparent pricing** — no hidden fees, fixed + custom quotes
- **Verified professional network** — KYC'd lawyers, CAs, and legal consultants
- **End-to-end workflow** — from search → booking → document upload → delivery → review

---

## 2. Monorepo Architecture

```
legal-door/
├── apps/
│   ├── web/              ← Current frontend (Next.js 16, this repo)
│   ├── admin/            ← Admin panel (Next.js + shadcn)
│   └── portal/           ← User/client portal (Next.js + shadcn)
├── packages/
│   ├── ui/               ← Shared component library (extracted from current /components/ui/common)
│   ├── api-client/       ← Type-safe API client (generated from OpenAPI spec)
│   └── shared/           ← Shared types, constants, validations (Zod schemas)
├── backend/
│   ├── api/              ← Cloudflare Workers (Hono.js)
│   ├── db/               ← Drizzle ORM migrations (Neon Postgres)
│   └── queues/           ← Cloudflare Queues for async jobs
└── infra/
    ├── wrangler.toml     ← Cloudflare config
    └── d1-schema.sql     ← D1 SQLite for edge-cached reads
```

### Why This Stack
| Layer | Choice | Reason |
|-------|--------|--------|
| Frontend | Next.js 16 App Router | Already built, RSC for SEO |
| Backend API | Cloudflare Workers + Hono.js | Edge latency, free tier generous, same Cloudflare account |
| Primary DB | Neon Postgres (serverless) | Postgres reliability, scales to zero |
| Edge Cache DB | Cloudflare D1 | Cache popular service/lawyer listings at edge |
| File Storage | Cloudflare R2 | S3-compatible, zero egress cost |
| Auth | Cloudflare Zero Trust + JWT | Workers-native, no cold starts |
| Email | Resend | Developer-friendly, Cloudflare Workers compatible |
| Payments | Razorpay | India-first, INR support, UPI |
| Search | Cloudflare Vectorize | Semantic search for services/lawyers |

---

## 3. Services Page (Priority #1 — valiksearch.com inspiration)

### Layout Blueprint
```
/services
├── /services/[category]               ← e.g., /services/business-registration
│   ├── Hero with search bar           ← "What legal service do you need?"
│   ├── Sub-category grid (filterable)
│   └── Featured professionals sidebar
└── /services/[category]/[slug]        ← e.g., /services/business-registration/pvt-ltd
    ├── Service detail page
    │   ├── What's included (checklist)
    │   ├── Timeline & pricing
    │   ├── Documents required
    │   ├── Assigned lawyer card
    │   └── Order CTA / Book consultation
    └── Related services
```

### Search Architecture (valiksearch-style)
```
Search Bar Input → Debounced API call → /api/search?q=trademark+delhi&type=service
                                       ↓
                              Cloudflare Vectorize (semantic)
                              + Postgres full-text search
                                       ↓
                              Results: services + lawyers + articles
                                       ↓
                              Filtered/sorted UI with instant results
```

### Service Page Component Structure
```tsx
// Priority components to build next:
components/
├── search/
│   ├── GlobalSearch.tsx      ← Upgrade existing search-bar.tsx with real API
│   ├── SearchResults.tsx     ← Dropdown with service/lawyer/article results
│   └── SearchFilters.tsx     ← Category, price, location, rating filters
├── services/
│   ├── ServiceHero.tsx       ← Page hero with breadcrumb + search
│   ├── ServiceGrid.tsx       ← Filterable card grid
│   ├── ServiceDetail.tsx     ← Full service page layout
│   ├── PricingCard.tsx       ← Fixed/custom/premium pricing tiers
│   ├── DocumentChecklist.tsx ← Required documents with upload slots
│   └── OrderFlow.tsx         ← Multi-step order wizard
└── professionals/
    ├── LawyerCard.tsx        ← Verified badge, ratings, specialization
    ├── LawyerProfile.tsx     ← Full profile with cases, reviews
    └── BookConsultation.tsx  ← Calendar booking widget
```

---

## 4. Backend API (Cloudflare Workers + Hono.js)

### Setup
```bash
npm create cloudflare@latest backend/api -- --template hono
cd backend/api
npm install hono drizzle-orm @neondatabase/serverless zod jose
```

### API Routes
```
backend/api/src/routes/
├── auth.ts          POST /auth/register, /auth/login, /auth/refresh
├── services.ts      GET  /services, /services/:slug, /services/search
├── orders.ts        POST /orders, GET /orders/:id, PATCH /orders/:id/status
├── professionals.ts GET  /lawyers, /lawyers/:id, POST /lawyers/apply
├── admin.ts         Admin-only routes (verified via JWT role claim)
├── uploads.ts       POST /uploads (R2 presigned URL)
├── payments.ts      POST /payments/create, /payments/verify (Razorpay webhook)
└── reviews.ts       POST /reviews, GET /reviews/:serviceId
```

### Database Schema (Neon Postgres via Drizzle)
```sql
-- Core tables
users           id, email, name, role(client|lawyer|admin), kyc_status, created_at
services        id, category_id, slug, title, description, base_price, timeline_days
service_categories  id, name, slug, icon, parent_id (self-referential for sub-cats)
professionals   id, user_id, specializations[], rating, verified_at, bar_council_id
orders          id, user_id, service_id, professional_id, status, total_amount, paid_at
order_documents id, order_id, filename, r2_key, type(required|submitted|delivered)
reviews         id, order_id, rating, content, verified_purchase
payments        id, order_id, razorpay_order_id, status, amount, currency

-- Search optimization
service_search_vector  tsvector column on services (pg_trgm + to_tsvector)
```

### Wrangler Config
```toml
# backend/api/wrangler.toml
name = "legal-door-api"
main = "src/index.ts"
compatibility_date = "2024-01-01"

[[d1_databases]]
binding = "DB"
database_name = "legal-door-cache"
database_id = "YOUR_D1_ID"

[[r2_buckets]]
binding = "STORAGE"
bucket_name = "legal-door-documents"

[[vectorize]]
binding = "SEARCH_INDEX"
index_name = "legal-door-services"

[vars]
ENVIRONMENT = "production"

[secrets]
# Set via: wrangler secret put DATABASE_URL
# DATABASE_URL, JWT_SECRET, RAZORPAY_KEY_SECRET, RESEND_API_KEY
```

---

## 5. Admin Panel

### Stack: Next.js 16 + shadcn/ui (separate app in monorepo)
```
apps/admin/
├── app/
│   ├── dashboard/        ← Revenue, orders, user stats (Recharts)
│   ├── services/         ← CRUD for service catalog
│   ├── orders/           ← Order management + status updates
│   ├── professionals/    ← Lawyer/CA verification queue
│   ├── users/            ← User management, ban/verify
│   ├── payments/         ← Razorpay reconciliation
│   ├── reviews/          ← Moderation queue
│   └── settings/         ← Platform config, pricing, notifications
```

### Admin Features
- **Dashboard**: Revenue MTD/YTD, orders by status, new signups, active professionals
- **Order Kanban**: Drag-drop status board (Pending → Assigned → In Progress → Delivered → Closed)
- **Lawyer Verification**: Document review, KYC approval flow, bar council ID validation
- **Service Builder**: Rich text editor for service pages, pricing tiers, document requirements
- **Analytics**: Conversion funnel (search → view → order → review), popular services by city

### Admin Auth
```tsx
// Middleware: apps/admin/middleware.ts
// Verify JWT, check role === 'admin', redirect to /login if not
// Use Cloudflare Zero Trust for extra layer (IP allowlist)
```

---

## 6. User Portal (Client Dashboard)

### Stack: Same as admin but client-facing
```
apps/portal/
├── app/
│   ├── dashboard/        ← Active orders, documents due, upcoming calls
│   ├── orders/
│   │   ├── [id]/         ← Order detail: timeline, chat, document upload
│   │   └── new/          ← Initiate order from service selection
│   ├── documents/        ← All uploaded/received documents
│   ├── profile/          ← KYC, billing info, notification settings
│   ├── professionals/    ← Saved lawyers, past consultations
│   └── reviews/          ← Write reviews for completed orders
```

### User Features
- **Order Tracker**: Real-time status with progress steps (like Swiggy/Zomato tracking)
- **Document Vault**: Upload required docs, receive completed docs from lawyers
- **Secure Messaging**: Order-scoped chat with assigned professional
- **Consultation Booking**: Calendar integration (Google Calendar / Calendly embed)
- **Notifications**: Email (Resend) + in-app (Sonner toasts, already installed)

---

## 7. Cloudflare Deployment Plan

### Phase 1 — Frontend Only (Current State → Production)
```bash
# Deploy current Next.js to Cloudflare Pages
npm run build
npx wrangler pages deploy .next/static --project-name legal-door-web

# Or connect GitHub repo → Cloudflare Pages auto-deploy
# Build command: npm run build
# Output directory: .next
# Environment: NODE_VERSION=20
```

### Phase 2 — Backend API
```bash
cd backend/api
npx wrangler deploy
# API available at: https://legal-door-api.YOUR_SUBDOMAIN.workers.dev
# Custom domain: api.legaldoor.in (via Cloudflare DNS CNAME)
```

### Phase 3 — Neon Postgres Setup
```bash
# 1. Create Neon project at neon.tech
# 2. Get connection string
# 3. Set secret in Workers:
npx wrangler secret put DATABASE_URL
# 4. Run migrations:
cd backend/db
npx drizzle-kit migrate
```

### Phase 4 — Full Stack Go-Live
```
legaldoor.in           → Cloudflare Pages (web app)
api.legaldoor.in       → Cloudflare Workers (backend)
admin.legaldoor.in     → Cloudflare Pages (admin panel, Zero Trust protected)
portal.legaldoor.in    → Cloudflare Pages (user portal)
assets.legaldoor.in    → Cloudflare R2 (documents, images)
```

### Cloudflare Services Used
| Service | Purpose | Cost |
|---------|---------|------|
| Pages | Host Next.js apps | Free (unlimited sites) |
| Workers | Backend API | Free 100k req/day |
| D1 | Edge SQLite cache | Free 5M reads/day |
| R2 | File storage | Free 10GB/month |
| Vectorize | Semantic search | Free 30M queries/month |
| Queues | Async jobs (email, notifications) | Free 1M messages/month |
| Zero Trust | Admin panel auth | Free 50 users |

**Estimated cost at launch: $0–$15/month** (Neon Postgres free tier + Razorpay fees only)

---

## 8. Common UI Package Plan

### Location: `components/ui/common/` (already created)
### Future extraction: `packages/ui/` for monorepo sharing

#### Components to Build (Priority Order)
```
Phase 1 (Now):               ← DONE
├── design-tokens.ts         ← Color, radius, shadow, animation tokens
├── section-header.tsx       ← Reusable section badge+title+description
├── stat-card.tsx            ← Reusable stat display (value + label)
├── service-badge.tsx        ← Reusable badge variants
└── index.ts                 ← Barrel export

Phase 2 (Services Page):
├── pricing-card.tsx         ← Service pricing with features list
├── timeline-step.tsx        ← Progress step (reusable from process-section)
├── professional-card.tsx    ← Lawyer/CA card with rating, specializations
├── search-input.tsx         ← Upgraded search with autocomplete
└── document-upload.tsx      ← Drag-drop file upload with type validation

Phase 3 (Portal):
├── order-status-badge.tsx   ← Status pill (Pending/Active/Delivered/etc)
├── empty-state.tsx          ← Empty list/search states with illustration
├── data-table.tsx           ← Sortable/filterable table for admin/portal
├── calendar-widget.tsx      ← Consultation booking calendar
└── chat-bubble.tsx          ← Order-scoped messaging bubbles
```

#### Usage Example (after common UI is built)
```tsx
import { SectionHeader, StatCard, ServiceBadge } from '@/components/ui/common';

// In any section:
<SectionHeader
  badge="Our Process"
  badgeIcon={CheckCircle2}
  title="How Legal Door"
  titleHighlight="Works."
  description="Precision at every step."
  theme="dark"
/>
```

---

## 9. Implementation Roadmap

### Milestone 1 — Production Landing Page (Week 1–2)
- [x] Fix UI bugs (w-18, dead footer links, badge border, testimonials nav)
- [x] Create common UI package (design-tokens, section-header, stat-card, service-badge)
- [ ] Deploy frontend to Cloudflare Pages
- [ ] Connect custom domain (legaldoor.in)
- [ ] SEO: sitemap.xml, robots.txt, OpenGraph images
- [ ] Performance: next/image for all images, lazy load sections

### Milestone 2 — Services Catalog (Week 3–4)
- [ ] Build `/services/[category]/[slug]` dynamic pages
- [ ] Static data layer: JSON/MDX service catalog (50+ services)
- [ ] Service search (client-side Fuse.js initially)
- [ ] Service detail page with pricing, timeline, documents required
- [ ] WhatsApp/Calendly CTA for lead capture (no backend yet)

### Milestone 3 — Backend API (Week 5–7)
- [ ] Cloudflare Workers + Hono.js setup
- [ ] Neon Postgres + Drizzle migrations
- [ ] Auth: register/login/JWT (email/password + Google OAuth)
- [ ] Services API: CRUD, search endpoint
- [ ] Order creation + Razorpay payment integration
- [ ] Email notifications via Resend

### Milestone 4 — User Portal (Week 8–10)
- [ ] Portal app (`apps/portal/`)
- [ ] Order dashboard with status tracking
- [ ] Document upload to R2
- [ ] Profile management

### Milestone 5 — Admin Panel (Week 11–13)
- [ ] Admin app (`apps/admin/`)
- [ ] Order management kanban
- [ ] Professional verification queue
- [ ] Analytics dashboard
- [ ] Cloudflare Zero Trust for admin auth

### Milestone 6 — Professional Network (Week 14–16)
- [ ] Lawyer registration + KYC flow
- [ ] Professional profiles (public)
- [ ] Order assignment workflow
- [ ] Review system
- [ ] Semantic search (Cloudflare Vectorize)

---

## 10. Current Bugs Fixed

| Bug | File | Fix Applied |
|-----|------|------------|
| `w-18 h-18` invalid Tailwind | `process-section.tsx:187` | Changed to `w-20 h-20` |
| Badge border blends on hover | `services-section.tsx:190` | `border-[#022d54]` → `border-white/20` |
| Testimonials nav non-functional | `testimonials-section.tsx:58-63` | Added `useState`, prev/next carousel, 6 testimonials |
| Footer service links 404 | `footer.tsx:64-68` | Added `/services/` prefix to all service links |

---

## 11. Environment Variables

```env
# .env.local (frontend)
NEXT_PUBLIC_API_URL=https://api.legaldoor.in
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_xxxxx
NEXT_PUBLIC_GA_ID=G-XXXXXXXX

# backend/api/.dev.vars (Workers local dev)
DATABASE_URL=postgresql://user:pass@ep-xxx.neon.tech/neondb?sslmode=require
JWT_SECRET=your-256-bit-secret
RAZORPAY_KEY_SECRET=xxxxxxxxxxxx
RESEND_API_KEY=re_xxxxxxxxxxxx
R2_BUCKET_URL=https://pub-xxx.r2.dev
```

---

## 12. Key Commands

```bash
# Frontend dev
cd apps/web && npm run dev

# Backend dev (Workers)
cd backend/api && npx wrangler dev

# DB migrations
cd backend/db && npx drizzle-kit generate && npx drizzle-kit migrate

# Deploy frontend
npx wrangler pages deploy

# Deploy backend
cd backend/api && npx wrangler deploy

# Type generation from DB schema
cd backend/db && npx drizzle-kit introspect
```
