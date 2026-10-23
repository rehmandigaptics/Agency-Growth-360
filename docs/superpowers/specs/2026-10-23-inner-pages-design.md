# Agency Growth 360 — Inner Pages Design

**Date:** 2026-10-23  
**Status:** Draft for review  
**Approach:** Shared page shell + reused homepage sections (approved)

## Goal

Add real inner routes for the marketing site so navigation goes beyond single-page anchors, while keeping the existing dark + lime premium visual language.

## Scope

### In scope

| Route | Purpose |
|---|---|
| `/about` | Who Agency Growth 360 is |
| `/services` | What we deliver |
| `/why-us` | Why partner with AG360 |
| `/process` | How engagement works |
| `/who-we-help` | Agencies and freelancers |
| `/contact` | Start a conversation |

Also in scope:

- Shared page chrome (header, footer, page hero, bottom CTA)
- Wire header/footer/brand links to real paths
- Keep homepage section IDs for in-page scroll where useful
- Metadata (title/description) per route
- Responsive layout and light GSAP reveals consistent with home

### Out of scope

- `/workflows` and `/faq` as standalone routes (remain homepage sections)
- Backend contact form, CRM, or email API
- Blog/journal pages
- Auth, CMS, or admin
- Inventing fake client stats, testimonials, or case-study numbers

## Architecture

### Shared layout pieces

1. **`Header` / `Footer` / `Brand`**  
   - Update nav + footer links from `#section` to routes listed above.  
   - Brand / logo → `/`.  
   - Homepage can still use hash links for in-page CTAs (e.g. Explore Services → `/services` or `#services` on home only).  
   - Active link styling on the current path.

2. **`PageShell`**  
   - Wraps every inner page: `Header` → `<main>` → `Footer`, inside existing `SiteShell` (GSAP).

3. **`PageHero`**  
   - Full-width atmospheric block (gradient / subtle glow, not flat).  
   - Content budget: brand-safe kicker, one headline (lime accent on key phrase), one supporting sentence, one CTA group.  
   - Optional side/supporting visual only when it strengthens the page (photo via existing `FrameImage` + local assets).  
   - Adequate top padding under the fixed glass header.

4. **`PageCta`**  
   - Bottom conversation band (reuse / adapt `ConversationCta` pattern).  
   - Primary action: `mailto:` via existing `mail()` helper.  
   - No fake form submission.

### Composition model

Each route:

```
PageShell
  PageHero (page-specific copy)
  Reused section component(s) from homepage
  Optional short bridge copy (only if needed)
  PageCta
```

Prefer composing existing sections over rewriting them. Allow small props later (e.g. `compact`) only if a section’s homepage chrome fights the inner-page layout.

### Content map

| Route | Hero (intent) | Body modules |
|---|---|---|
| `/about` | Built for intentional growth | `About` (+ light Why Us tie-in if space allows without clutter) |
| `/services` | Everything needed to move forward | `Services` + `Solutions` |
| `/why-us` | You focus on vision; we strengthen the engine | `WhyUs` |
| `/process` | A simple path to smarter growth | `Process` |
| `/who-we-help` | Small teams. Big ambitions. | `Audience` |
| `/contact` | Ready to make growth feel less complicated | Dedicated contact panel: email CTA, who it’s for, what to expect next — no backend form |

Copy should reuse existing homepage language where possible. Do not invent metrics or customer results.

### Navigation wiring

**Header links**

- About → `/about`
- Services → `/services`
- Why Us → `/why-us`
- How It Works → `/process`
- Who We Help → `/who-we-help`
- Workflows → `/#workflows` (homepage section; no dedicated route in this phase)
- Let’s Talk → `/contact` (or mailto; prefer `/contact` for a real page)

**Footer**

- Explore: About, Services, Why Us, Process → matching routes
- For You: Agencies / Freelancers → `/who-we-help` (anchors optional `#agencies` / `#freelancers` if Audience exposes ids)
- FAQs → `/#faq`
- Connect → `/contact` + existing email

## Visual design

### Direction

- Continue current AG360 system: deep charcoal backgrounds, lime accent `#c4f55d`, Manrope + DM Sans, glass header.
- Avoid purple gradients, cream/serif “AI brochure” tropes, and dense card grids in heroes.
- One job per section; cards only where interaction or existing section design already requires them.
- Imagery: local `/public/images` assets via `FrameImage` (`object-fit: cover`, no stretch).

### PageHero specifics

- Dark atmospheric plane (radial lime wash + deep base), not a flat slab.
- Headline hierarchy matches home (`premium-heading` / display scale).
- Emphasized phrase uses lime accent (same as other headings).
- Desktop: generous vertical padding; mobile: stacked, full-width CTA.

### Motion

- Reuse `SiteShell` + `.reveal` / hero entrance patterns.
- Respect `prefers-reduced-motion`.
- Do not put competing transforms on the services carousel track.

## Technical notes

- App Router routes under `app/about/page.tsx`, `app/services/page.tsx`, etc.
- Shared components under `components/site/` (e.g. `PageHero.tsx`, `PageShell.tsx`).
- Optional `lib/pages.ts` for hero copy + metadata per route (keeps pages thin).
- Export `metadata` (or `generateMetadata`) per page for SEO titles.
- Contact uses `CONTACT_EMAIL` / `mail()` only — no server actions in this phase.
- Typecheck + visual check of each route on desktop and mobile widths.

## Success criteria

- All six routes render with premium hero + body + CTA.
- Header/footer navigate correctly; active state is clear.
- Visual language matches homepage (dark/lime, typography, spacing).
- No invented stats; contact works via mailto.
- Homepage remains intact; Workflows/FAQ still reachable from home/footer as needed.

## Non-goals reminder

This phase does not add a CMS, blog, auth, or server-backed contact form.

## Approval

- [ ] Spec reviewed and approved for implementation planning
