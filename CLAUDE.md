# CLAUDE.md — Mandiri Alumunium Company Profile

This file defines how Claude Code and coding agents must work in this repository.

Project: Mandiri Alumunium Company Profile  
Product scope: static-first company profile website  
Approved target stack: Next.js App Router, TypeScript, TailwindCSS, shadcn/ui, Vercel  
Primary conversion: WhatsApp  
Secondary conversion: Google Maps  
Hard constraint: no backend, no database, no CMS, no ecommerce, no checkout, no payment.

---

## 1. Startup Instructions

Before changing any file, read these files in order:

1. `context.md`
2. `PRD.md`
3. `DESIGN.md`
4. `TASK.md`
5. `AGENTS.md`
6. `CLAUDE.md`

Treat `context.md` as the business source, `PRD.md` as product scope, `DESIGN.md` as visual contract, `TASK.md` as implementation roadmap, and `AGENTS.md` as workflow contract.

Current repository state at documentation time: only `context.md` and `IDEA.md` existed before documentation generation. No package manifest was present. Any command listed here is a planned command after project scaffold unless the corresponding script exists in `package.json`.

## 2. Coding Standards

### 2.1 TypeScript

- Use TypeScript for all application code.
- Prefer explicit domain types for services, portfolio items, SEO config, and site config.
- Avoid `any`. Use precise types or `unknown` with validation/conversion at boundaries.
- Keep types close to the data they describe unless reused across multiple modules.
- Use readonly data structures for static content where practical.
- Do not create broad generic abstractions before duplication exists.

### 2.2 React and JSX

- Server Components by default.
- Client Components only when required for interaction, browser APIs, analytics event handlers, or theme behavior.
- Keep components small and content-driven.
- Do not define components inside components.
- Avoid prop drilling through many layers; use composition first.
- Do not introduce global state management for v1.0.

### 2.3 Styling

- Use TailwindCSS as the primary styling system.
- Use shadcn/ui selectively as accessible component primitives, not as a default visual identity.
- Follow `DESIGN.md` tokens for color, spacing, typography, radius, and motion.
- Keep responsive classes readable and minimal.
- Do not use custom CSS unless Tailwind cannot express the design cleanly.

### 2.4 Naming

- Use descriptive names based on function, not task IDs.
- File names should describe their purpose.
- Components use PascalCase.
- Utility functions use camelCase.
- Route slugs use lowercase Indonesian SEO terms with hyphens.

## 3. Project Principles

1. Static-first wins.
2. WhatsApp conversion is the main business outcome.
3. Local SEO matters more than decorative effects.
4. Real portfolio photos beat generic visuals.
5. Keep v1.0 company-profile only.
6. No backend until a real requirement proves it.
7. No CMS until content update frequency proves it.
8. No ecommerce patterns.
9. Performance and accessibility are acceptance criteria, not polish.
10. Build the smallest maintainable solution that satisfies the PRD.

## 4. Architecture Rules

### 4.1 Approved Architecture

- Next.js App Router.
- Static pages and static metadata wherever possible.
- Local data files for services, portfolio, site config, service areas, and SEO.
- Vercel deployment.
- Google Analytics and Vercel Analytics only after IDs/config exist.
- No server runtime dependency for normal page rendering.

### 4.2 Data Rules

- Services must be stored once in a local typed data source.
- Portfolio must be stored once in a local typed data source.
- Site config must centralize business facts: name, owner, established year, experience, area, WhatsApp, Maps URL, and analytics IDs.
- Do not duplicate service lists across components.
- Do not invent missing business facts.
- Missing contact data must be represented as a pre-launch blocker, not silently faked.

### 4.3 Route Rules

Approved v1.0 routes are defined in `PRD.md`.

- Use Indonesian slugs for Local SEO.
- Keep routes short and descriptive.
- Generate service detail pages statically from local data.
- Do not publish thin location/service pages with shallow content.
- Metadata must be unique per public route.

### 4.4 Component Architecture

- Prefer simple feature folders or route-local components.
- Shared components belong in a small shared UI/component directory only after they are reused.
- Avoid barrel exports if they increase bundle ambiguity.
- Keep data, presentation, and analytics concerns separated.
- CTA behavior should be centralized enough to keep WhatsApp message formatting consistent.

## 5. Next.js Best Practices

### 5.1 App Router

- Use App Router conventions.
- Use route metadata APIs for title, description, canonical, OpenGraph, and robots behavior.
- Use static rendering by default.
- Use dynamic behavior only when required and explicitly justified.
- Keep layouts lightweight.

### 5.2 Server and Client Boundaries

- Keep static content rendering on the server.
- Move only interactive pieces to client components.
- Avoid passing large serialized data into client components.
- Avoid module-level mutable request state.
- Hoist static constants that do not depend on request/user state.

### 5.3 Performance Patterns

- Avoid waterfalls. Start independent async work early and resolve in parallel when async work exists.
- Use direct imports where possible.
- Dynamically import heavy optional components only if they are introduced and justified.
- Defer analytics scripts so they do not block primary content.
- Keep external dependencies small.

### 5.4 Images and Fonts

- Use optimized image delivery compatible with Next.js and Vercel.
- Portfolio images must have stable dimensions/aspect ratios to avoid CLS.
- Use `next/font` or equivalent framework-supported font loading.
- Use maximum two font families.
- Do not load decorative font weights that are not used.

## 6. Performance Rules

Targets come from `PRD.md`:

- Lighthouse Performance ≥95.
- Lighthouse Accessibility 100.
- Lighthouse SEO 100.
- Lighthouse Best Practices 100.
- LCP <2.5s.
- CLS <0.1.
- INP <200ms after field data exists.

Rules:

- No parallax.
- No loading screen.
- No cursor animation.
- No heavy animation library unless the design cannot be achieved with CSS and the decision is documented.
- No client-side rendering for static content.
- No large unoptimized hero image.
- No layout shift from images, fonts, sticky CTA, or dynamic content.
- Measure performance after production build, not only in dev mode.

## 7. SEO Rules

### 7.1 Required SEO Assets

- Unique metadata for every public route.
- OpenGraph metadata and image.
- Sitemap.
- Robots.
- LocalBusiness structured data when sufficient official business data exists.
- Search Console verification support.

### 7.2 Local SEO Rules

- Use natural Indonesian copy.
- Include Bekasi, Jakarta, and JABODETABEK where relevant.
- Do not keyword-stuff.
- Do not publish location pages without unique content.
- Do not invent address, opening hours, ratings, reviews, certifications, or project counts.
- Use internal links between homepage, services, portfolio, area, and contact.

### 7.3 Structured Data Rules

- Use only verified business data.
- If address, phone, or opening hours are unavailable, omit those fields rather than guessing.
- Keep service catalog aligned with `context.md`.
- Validate structured data before launch.

## 8. Accessibility Rules

- Use semantic HTML.
- One H1 per page.
- Heading order must be logical.
- All interactive controls need visible focus states.
- Touch targets minimum 44x44px.
- Mobile navigation must be keyboard accessible.
- CTA links must have clear accessible names.
- Decorative visuals must not be announced by screen readers.
- Portfolio images need meaningful alt text.
- Respect reduced motion.
- Validate dark theme contrast.

## 9. Verification Workflow

Do not claim completion without running the relevant checks and reporting real output.

### 9.1 Before Scaffold

If `package.json` does not exist, do not pretend commands are available. Documentation tasks can be verified through file reads, heading checks, and content audits.

### 9.2 After Scaffold

Expected stable scripts after implementation setup:

- `npm run lint`
- `npm run typecheck`
- `npm run build`
- `npm run test`
- `npm run test:e2e`
- `npm run test:visual` if visual tests are configured
- `npm run lighthouse` if Lighthouse automation is configured

If a script does not exist, either add it as part of the approved setup task or state that it is not available.

### 9.3 Required Verification by Task Type

| Task Type | Minimum Verification |
|---|---|
| Static content/data | Typecheck, affected page render/smoke |
| Component | Typecheck, lint, responsive visual check |
| Page | Build, route smoke, metadata check |
| SEO | Metadata inspection, sitemap/robots check, structured data validation |
| Analytics | Click event manual/smoke verification, no blocking script behavior |
| Accessibility | Keyboard path, contrast, Lighthouse/accessibility scan |
| Performance | Production build and Lighthouse/Web Vitals check |
| Deployment | Vercel preview URL, route smoke, console check |

## 10. Task Completion Checklist

A task is complete only when all applicable items pass:

- Requirement traced to `TASK.md` ID.
- Scope matches `PRD.md`.
- Visual output matches `DESIGN.md`.
- No forbidden feature introduced.
- No duplicated static data.
- Mobile layout checked.
- Keyboard/focus behavior checked for interactive elements.
- Metadata updated for new route/page.
- Tests/checks run and output reviewed.
- Documentation updated if behavior, route, command, or decision changed.
- Git diff reviewed before commit.
- Commit follows project Git rules if git is active.

## 11. Code Quality Rules

- Prefer boring code.
- Prefer deletion over abstraction.
- Do not add helpers until a real reuse case exists.
- Do not create provider trees for v1.0 unless required.
- Do not add global state library.
- Do not add form library unless forms enter approved scope.
- Keep components accessible by default.
- Keep visual variants limited and intentional.
- Do not silence TypeScript or lint errors without root-cause fix.
- Do not leave debug logs in production code.
- Do not create dead files, unused components, or unused routes.

## 12. Dependency Rules

### 12.1 Approved Baseline

- Next.js.
- React.
- TypeScript.
- TailwindCSS.
- shadcn/ui dependencies required by selected components.
- Analytics packages required for GA4/Vercel Analytics if used.
- Playwright for browser testing.

### 12.2 Dependency Constraints

- Use npm as default package manager unless a lockfile proves another manager is already active.
- Do not mix package managers.
- Do not add CMS, database client, ORM, auth library, payment library, cart library, or backend framework for v1.0.
- Do not add animation library unless CSS cannot satisfy `DESIGN.md` and the decision is documented.
- Do not add icon packs if a small inline/icon subset is enough.
- Prefer framework/native features before third-party packages.
- Every new dependency must have a reason tied to a requirement.

## 13. Git Rules

Repository was not initialized at documentation time. If git is initialized later, follow these rules:

- Use a separate branch for each logical scope or feature.
- One logical task equals one commit.
- Conventional commit subject maximum 72 characters.
- Subject format: `type: subject`.
- Allowed types: `feat`, `fix`, `refactor`, `docs`, `chore`, `test`, `style`.
- Do not mix unrelated changes in one commit.
- Rename-only changes get separate commits from content changes.
- Run relevant checks before commit.
- Do not commit secrets, `.env` files with private values, or generated build output.
- Merge to main only after quality gates pass and user approval is clear.

## 14. Documentation Rules

- Update `PRD.md` when product scope, goals, requirements, routes, or acceptance criteria change.
- Update `DESIGN.md` when tokens, visual direction, component rules, or brand decisions change.
- Update `TASK.md` when task status, dependencies, acceptance criteria, or verification changes.
- Update `AGENTS.md` when workflow, roles, source-of-truth order, or verification policy changes.
- Update `CLAUDE.md` when coding standards, architecture, commands, or forbidden practices change.
- Do not document completed implementation that has not been verified.
- Do not mark roadmap tasks complete without real checks.
- Keep docs concise but complete enough for a new agent to continue work.

## 15. Forbidden Practices

- Generating source code before an approved implementation task.
- Adding backend, database, CMS, ecommerce, checkout, payment, auth, or admin dashboard in v1.0.
- Using Google images or unlicensed images as portfolio.
- Presenting AI-generated images as real portfolio.
- Inventing testimonials, ratings, addresses, opening hours, certifications, project counts, or client names.
- Adding parallax, loading screen, cursor animation, or heavy decorative motion.
- Creating thin SEO pages with duplicated content.
- Hiding missing business data with fake filler values.
- Shipping inaccessible navigation or CTA.
- Ignoring mobile-first behavior.
- Adding dependencies without clear requirement.
- Claiming tests passed without running them.
- Leaving console errors unresolved.
- Overriding `PRD.md` or `DESIGN.md` decisions without updating docs and getting approval.

## 16. Decision Hierarchy

When instructions conflict, follow this order:

1. User's explicit latest instruction.
2. `context.md` business facts.
3. `PRD.md` product scope and requirements.
4. `DESIGN.md` visual and UX rules.
5. `TASK.md` approved roadmap and task status.
6. `AGENTS.md` workflow and verification policy.
7. `CLAUDE.md` coding and implementation rules.
8. Existing code patterns after implementation begins.
9. General framework best practices.

If a lower-level instruction conflicts with a higher-level source, stop and resolve the conflict before changing code.

## 17. Implementation Bias

Use the smallest maintainable implementation that satisfies the approved requirement. Do not build future infrastructure for hypothetical admin, CMS, pricing, booking, or ecommerce features. Future improvements belong in `PRD.md` and `TASK.md`, not hidden in v1.0 code.
