# Inner Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship six premium inner routes (`/about`, `/services`, `/why-us`, `/process`, `/who-we-help`, `/contact`) that reuse homepage sections behind a shared page shell.

**Architecture:** Add `PageShell`, `PageHero`, and page copy/metadata in `lib/pages.ts`. Compose existing section components per route. Retarget Header/Footer/Brand to real paths with active-state awareness.

**Tech Stack:** Next.js App Router, React 19, Bootstrap 5 utilities, existing site CSS + GSAP `SiteShell`, local images via `FrameImage`.

## Global Constraints

- Visual language: dark charcoal + lime `#c4f55d`, Manrope/DM Sans — no purple/cream AI brochure look
- No invented stats, testimonials, or fake case results
- Contact is mailto only — no backend form
- No `/workflows` or `/faq` standalone routes in this phase
- Do not commit unless the user asks
- Prefer composing existing sections over rewriting them

## File map

| File | Responsibility |
|---|---|
| `lib/pages.ts` | Hero copy + metadata for each inner route |
| `components/site/PageShell.tsx` | Header + main + Footer inside SiteShell |
| `components/site/PageHero.tsx` | Premium atmospheric page hero |
| `components/site/PageCta.tsx` | Bottom conversation CTA (mailto) |
| `components/site/ContactPanel.tsx` | Contact-only body panel |
| `app/{about,services,why-us,process,who-we-help,contact}/page.tsx` | Route pages |
| `components/site/Header.tsx` | Path-based nav + active state |
| `components/site/Footer.tsx` | Path-based explore/for-you/connect links |
| `components/site/Brand.tsx` | Logo → `/` |
| `app/globals.css` | PageHero / ContactPanel styles |

---

### Task 1: Shared page primitives + content map

**Files:**
- Create: `lib/pages.ts`
- Create: `components/site/PageShell.tsx`
- Create: `components/site/PageHero.tsx`
- Create: `components/site/PageCta.tsx`
- Modify: `app/globals.css` (append page-hero / page-cta styles)

**Interfaces:**
- Produces: `getPage(slug)`, `PageShell`, `PageHero`, `PageCta`

- [ ] **Step 1:** Add `lib/pages.ts` with slug keys and `{ title, description, kicker, headline, accent, lead, ctaLabel, ctaHref }` for all six routes
- [ ] **Step 2:** Implement `PageShell` wrapping `SiteShell` → Header → main → Footer
- [ ] **Step 3:** Implement `PageHero` (kicker, headline+accent, lead, CTA) with atmospheric CSS
- [ ] **Step 4:** Implement `PageCta` using `mail()` (adapt ConversationCta pattern)
- [ ] **Step 5:** Verify primitives render by temporarily visiting a stub route or Story-less smoke via creating first page in Task 2

---

### Task 2: Six App Router pages

**Files:**
- Create: `app/about/page.tsx`
- Create: `app/services/page.tsx`
- Create: `app/why-us/page.tsx`
- Create: `app/process/page.tsx`
- Create: `app/who-we-help/page.tsx`
- Create: `app/contact/page.tsx`
- Create: `components/site/ContactPanel.tsx`

**Interfaces:**
- Consumes: `PageShell`, `PageHero`, `PageCta`, `getPage`, existing sections
- Produces: six working routes with metadata

- [ ] **Step 1:** Build `/about` → PageHero + `About` + PageCta + metadata
- [ ] **Step 2:** Build `/services` → PageHero + `Services` + `Solutions` + PageCta
- [ ] **Step 3:** Build `/why-us` → PageHero + `WhyUs` + PageCta
- [ ] **Step 4:** Build `/process` → PageHero + `Process` + PageCta
- [ ] **Step 5:** Build `/who-we-help` → PageHero + `Audience` + PageCta
- [ ] **Step 6:** Build `/contact` → PageHero + `ContactPanel` + PageCta
- [ ] **Step 7:** Run `npx tsc --noEmit` and fix errors

---

### Task 3: Navigation wiring + active states

**Files:**
- Modify: `components/site/Brand.tsx`
- Modify: `components/site/Header.tsx`
- Modify: `components/site/Footer.tsx`
- Modify: `app/globals.css` (active nav link)

**Interfaces:**
- Consumes: `usePathname` (client header)

- [ ] **Step 1:** Brand `href="/"`
- [ ] **Step 2:** Header links to routes; Workflows → `/#workflows`; Let’s Talk → `/contact`; mark active via pathname
- [ ] **Step 3:** Footer Explore/For You/Connect updated to routes; FAQs → `/#faq`
- [ ] **Step 4:** Browser-check home + each inner route for nav and layout

---

### Task 4: Visual polish + verification

**Files:**
- Modify: `app/globals.css` as needed for spacing under fixed header
- Adjust section top padding on inner pages if double-hero spacing feels heavy

- [ ] **Step 1:** Ensure PageHero clears fixed header; sections don’t feel double-spaced
- [ ] **Step 2:** Desktop + mobile smoke for all six routes
- [ ] **Step 3:** Confirm no invented stats; contact mailto works
