# TASK.md — Mandiri Alumunium Implementation Roadmap

Status: Draft for approval  
Scope: static-first company profile website  
Task ID prefix: CP  
Default status: Pending until implementation begins and verification passes

---

## Status Legend

| Status | Meaning |
|---|---|
| Pending | Not started |
| Ready | Dependencies satisfied and approved for implementation |
| In Progress | Currently being worked on |
| Review | Built, waiting review/QA |
| Blocked | Cannot proceed without decision/data/fix |
| Completed | Acceptance criteria and verification passed |
| Cancelled | Removed from scope |

## Complexity Legend

| Complexity | Meaning |
|---|---|
| S | Small, isolated, low risk |
| M | Moderate effort or cross-file work |
| L | Large feature or multi-page/system work |
| XL | High coordination or launch-critical work |

## Priority Legend

| Priority | Meaning |
|---|---|
| P0 | Required for v1.0 launch |
| P1 | Strongly recommended for v1.0 |
| P2 | Enhancement after launch-critical work |

---

## 1. Foundation

| ID | Objective | Dependencies | Deliverables | Acceptance Criteria | Estimated Complexity | Priority | Status | Verification |
|---|---|---|---|---|---|---|---|---|
| CP-001 | Approve documentation baseline before implementation | None | Approved `PRD.md`, `DESIGN.md`, `CLAUDE.md`, `AGENTS.md`, `TASK.md` | All required docs exist, required sections present, user approves implementation start | M | P0 | Completed | Read files, heading audit, user approval |
| CP-002 | Scaffold Next.js App Router project | CP-001 | Next.js project with TypeScript, App Router, TailwindCSS | Project boots locally; no Pages Router; no backend scaffold | M | P0 | Completed | `npm run build` local, browser smoke |
| CP-003 | Configure shadcn/ui baseline | CP-002 | shadcn/ui configuration and initial primitives | shadcn/ui works with Tailwind theme; no unnecessary components installed | S | P0 | Completed | Import/use one selected primitive, lint/build |
| CP-004 | Set up quality scripts | CP-002 | Scripts for lint, typecheck, build, test/e2e when configured | `package.json` exposes stable verification commands; commands do not conflict | M | P0 | Completed | Run lint/typecheck/build |
| CP-005 | Define project folder structure | CP-002 | Approved folders for app routes, components, data, lib, assets, tests | Structure is minimal, readable, and aligned with static-first architecture | S | P0 | Completed | File tree review |
| CP-006 | Create local site configuration model | CP-002 | Typed static config for business facts, contact, areas, analytics IDs | No duplicated business facts; missing WhatsApp/Maps represented safely | M | P0 | Pending | Typecheck, config usage review |
| CP-007 | Create local service data model | CP-006 | Typed service catalog containing all services from `context.md` | Every listed service exists exactly once; service slugs are SEO-friendly | M | P0 | Pending | Typecheck, service count/content audit |
| CP-008 | Create local portfolio data model | CP-006 | Typed portfolio schema and seed structure | Requires original photo metadata; no Google/AI portfolio entries | M | P0 | Pending | Typecheck, data audit |
| CP-009 | Configure environment variable policy | CP-002 | Documented public env names for analytics/contact config if needed | No secret required for v1.0; public values are clearly marked | S | P1 | Pending | Env docs review, build without private secrets |

## 2. Brand

| ID | Objective | Dependencies | Deliverables | Acceptance Criteria | Estimated Complexity | Priority | Status | Verification |
|---|---|---|---|---|---|---|---|---|
| CP-010 | Finalize visual direction in implementation terms | CP-001 | Design implementation notes derived from `DESIGN.md` | Premium modern industrial direction is clear; no neobrutalism/glass/parallax | M | P0 | Pending | Design review against `DESIGN.md` |
| CP-011 | Build logo/wordmark fallback | CP-010 | Text-based Mandiri Alumunium wordmark if official logo is unavailable | Header/footer/OG can render brand without fake logo | S | P0 | Pending | Visual review desktop/mobile |
| CP-012 | Define image asset policy | CP-008, CP-010 | Asset naming, compression, alt text, and portfolio authenticity rules | Portfolio accepts only original photos; fallback image policy is explicit | S | P0 | Pending | Asset audit checklist |
| CP-013 | Prepare OpenGraph brand visual direction | CP-010, CP-011 | OG image concept or static asset requirement | Link preview supports premium brand without false claims | M | P1 | Pending | OG preview check after asset exists |

## 3. Design System

| ID | Objective | Dependencies | Deliverables | Acceptance Criteria | Estimated Complexity | Priority | Status | Verification |
|---|---|---|---|---|---|---|---|---|
| CP-014 | Implement design tokens in Tailwind/theme | CP-002, CP-010 | Color, radius, spacing, typography tokens from `DESIGN.md` | Tokens match design document and support light/dark theme | M | P0 | Pending | Visual token audit, typecheck/build |
| CP-015 | Configure typography | CP-014 | Font loading and type scale | Maximum two font families; no layout shift; headings/body readable | M | P0 | Pending | Lighthouse/font inspection, visual check |
| CP-016 | Implement theme foundation | CP-014 | Light/dark theme support | Dark theme matches `DESIGN.md`; contrast meets WCAG AA | M | P1 | Pending | Contrast check, visual review |
| CP-017 | Create base layout primitives | CP-014 | Container, section, stack/grid primitives if needed | Primitives reduce duplication without over-abstraction | M | P0 | Pending | Component review, build |
| CP-018 | Define motion utilities | CP-014 | Lightweight transition/reveal rules | No parallax/loading/cursor animation; reduced motion respected | M | P1 | Pending | Reduced-motion check, visual review |

## 4. Components

| ID | Objective | Dependencies | Deliverables | Acceptance Criteria | Estimated Complexity | Priority | Status | Verification |
|---|---|---|---|---|---|---|---|---|
| CP-019 | Build header/navigation | CP-014, CP-017 | Responsive header with nav and CTA | Max 6 nav items; keyboard usable; mobile menu works | M | P0 | Pending | Keyboard test, responsive smoke, lint/build |
| CP-020 | Build footer | CP-014, CP-006, CP-007 | Footer with brand, services, area, contact shortcuts | Footer reflects business facts and does not invent missing data | M | P0 | Pending | Content audit, responsive check |
| CP-021 | Build hero component | CP-014, CP-017 | Hero with headline, trust facts, CTA WhatsApp/Maps | Value proposition and CTA visible on mobile; no fake claims | L | P0 | Pending | Visual review, mobile smoke |
| CP-022 | Build service card/grid components | CP-007, CP-014 | Service cards for highlighted and full service list | All service cards read from local data; CTA labels clear | M | P0 | Pending | Typecheck, service coverage audit |
| CP-023 | Build portfolio card/grid components | CP-008, CP-014 | Portfolio gallery components | Only original photos render as portfolio; alt text required | M | P0 | Pending | Data audit, image/responsive check |
| CP-024 | Build CTA components | CP-006, CP-014 | WhatsApp CTA, Maps CTA, final CTA, sticky mobile CTA | WhatsApp primary CTA works; sticky CTA does not block content | L | P0 | Pending | Click test, mobile check, accessibility check |
| CP-025 | Build trust/experience section | CP-006, CP-014 | Section for owner experience, founded year, area | Uses only verified facts from `context.md` | S | P1 | Pending | Content audit |
| CP-026 | Build FAQ/accordion primitive if needed | CP-014 | Accessible accordion for service FAQs | Only added if real FAQ content exists; keyboard accessible | M | P2 | Pending | Accessibility check, build |

## 5. Pages

| ID | Objective | Dependencies | Deliverables | Acceptance Criteria | Estimated Complexity | Priority | Status | Verification |
|---|---|---|---|---|---|---|---|---|
| CP-027 | Build homepage | CP-019, CP-020, CP-021, CP-022, CP-023, CP-024 | `/` page | Shows brand, services, portfolio preview, areas, owner trust, CTA | L | P0 | Pending | Route smoke, responsive review, Lighthouse sample |
| CP-028 | Build services overview page | CP-019, CP-020, CP-022, CP-024 | `/layanan` page | Lists every service from `context.md`; links to details/CTA | M | P0 | Pending | Service coverage audit, route smoke |
| CP-029 | Build priority service detail pages | CP-007, CP-022, CP-024 | Static pages for priority services | Each page has unique copy, H1, metadata, CTA, internal links | L | P0 | Pending | Route smoke, SEO metadata check |
| CP-030 | Build portfolio page | CP-023, CP-024 | `/portfolio` page | Portfolio displays original-photo items; empty/partial state is honest | M | P0 | Pending | Asset/data audit, route smoke |
| CP-031 | Build about page | CP-006, CP-025 | `/tentang` page | Explains owner, history, experience, business type, area without unsupported claims | M | P1 | Pending | Content audit, route smoke |
| CP-032 | Build service area page | CP-006, CP-024 | `/area-layanan` page | Covers Bekasi, Jakarta, JABODETABEK without thin local spam | M | P0 | Pending | SEO/content audit, route smoke |
| CP-033 | Build contact page | CP-006, CP-024 | `/kontak` page | WhatsApp/Maps/area content clear; missing official data blocks production finalization | M | P0 | Pending | CTA click test, route smoke |
| CP-034 | Build not-found page | CP-019, CP-020, CP-024 | Custom 404 page | Helps user return to services/contact; CTA available | S | P1 | Pending | Manual 404 route check |

## 6. SEO

| ID | Objective | Dependencies | Deliverables | Acceptance Criteria | Estimated Complexity | Priority | Status | Verification |
|---|---|---|---|---|---|---|---|---|
| CP-035 | Implement global metadata | CP-027 | Default title template, description, canonical base, OG defaults | Metadata exists and avoids fake business claims | M | P0 | Pending | Metadata inspection, build |
| CP-036 | Implement per-page metadata | CP-028, CP-029, CP-030, CP-031, CP-032, CP-033 | Unique metadata per public route | Every route has unique title/description and relevant local terms | M | P0 | Pending | Route metadata audit |
| CP-037 | Implement sitemap | CP-027 through CP-033 | `/sitemap.xml` | Includes all public v1.0 routes; excludes nonexistent/thin pages | S | P0 | Pending | Fetch sitemap, content audit |
| CP-038 | Implement robots | CP-027 | `/robots.txt` | Allows public crawling and references sitemap | S | P0 | Pending | Fetch robots, content audit |
| CP-039 | Implement structured data | CP-006, CP-007, CP-035 | LocalBusiness/service structured data | Uses verified fields only; omits unavailable address/hours/phone if missing | M | P0 | Pending | Rich Results/Schema validation |
| CP-040 | Implement OpenGraph image | CP-013, CP-035 | OG image asset and metadata | Link preview displays brand professionally | M | P1 | Pending | Social preview inspection |
| CP-041 | Prepare Search Console verification | CP-035 | Verification method support | Verification can be added without architecture change | S | P1 | Pending | Search Console verification check after deploy |

## 7. Performance

| ID | Objective | Dependencies | Deliverables | Acceptance Criteria | Estimated Complexity | Priority | Status | Verification |
|---|---|---|---|---|---|---|---|---|
| CP-042 | Optimize image pipeline | CP-023, CP-027, CP-030 | Image sizing/compression policy and implementation | No oversized images; stable aspect ratios; no CLS from images | M | P0 | Pending | Lighthouse, image audit |
| CP-043 | Minimize client JavaScript | CP-027 through CP-033 | Server-first component boundaries | Static content not shipped as unnecessary client JS | M | P0 | Pending | Bundle review/build analysis if available |
| CP-044 | Defer analytics scripts | CP-035, CP-041 | Non-blocking analytics integration | Analytics does not block main content or hurt Lighthouse target | M | P1 | Pending | Lighthouse, network inspection |
| CP-045 | Production performance pass | CP-027 through CP-044 | Performance fixes across key pages | Homepage Lighthouse Performance ≥95, no avoidable layout shift | L | P0 | Pending | Production build + Lighthouse |

## 8. Accessibility

| ID | Objective | Dependencies | Deliverables | Acceptance Criteria | Estimated Complexity | Priority | Status | Verification |
|---|---|---|---|---|---|---|---|---|
| CP-046 | Keyboard navigation audit | CP-019, CP-024, CP-027 | Fixes for nav, CTA, menu, interactive elements | Full keyboard path works; focus visible | M | P0 | Pending | Manual keyboard test, accessibility scan |
| CP-047 | Contrast and dark theme audit | CP-014, CP-016, CP-027 | Contrast fixes for light/dark themes | WCAG AA met; Lighthouse Accessibility 100 target supported | M | P0 | Pending | Contrast checker, Lighthouse |
| CP-048 | Alt text and semantic structure audit | CP-023, CP-027 through CP-033 | Heading/landmark/alt fixes | One H1 per page; meaningful alt text; decorative visuals hidden | M | P0 | Pending | Accessibility scan, manual DOM review |
| CP-049 | Reduced motion audit | CP-018, CP-027 | Reduced motion behavior | Motion disables/reduces for users who request it | S | P1 | Pending | Browser reduced-motion test |

## 9. Testing

| ID | Objective | Dependencies | Deliverables | Acceptance Criteria | Estimated Complexity | Priority | Status | Verification |
|---|---|---|---|---|---|---|---|---|
| CP-050 | Configure Playwright smoke tests | CP-004, CP-027 | Smoke tests for key routes | Tests cover homepage, services, portfolio, area, contact | M | P0 | Pending | `npm run test:e2e` |
| CP-051 | Add CTA behavior tests | CP-024, CP-050 | Tests for WhatsApp/Maps link behavior | CTA hrefs are valid when official data exists; missing data state is safe | M | P0 | Pending | Playwright test run |
| CP-052 | Add SEO asset tests | CP-035 through CP-039, CP-050 | Tests for metadata/sitemap/robots presence | Critical SEO assets exist and include expected routes | M | P0 | Pending | Playwright or node-based test run |
| CP-053 | Add visual smoke review | CP-027 through CP-033 | Screenshot or manual visual checklist | Major layout regressions caught across mobile/desktop | M | P1 | Pending | Visual screenshots/manual QA |
| CP-054 | Final quality gate | CP-045, CP-046, CP-047, CP-048, CP-050, CP-051, CP-052 | Consolidated verification report | Lint, typecheck, build, tests, Lighthouse, route smoke pass | L | P0 | Pending | Full command/report output |

## 10. Deployment

| ID | Objective | Dependencies | Deliverables | Acceptance Criteria | Estimated Complexity | Priority | Status | Verification |
|---|---|---|---|---|---|---|---|---|
| CP-055 | Prepare Vercel project | CP-002, CP-004 | Vercel project configuration | Project deploys as static-first Next.js app | M | P0 | Pending | Vercel preview build |
| CP-056 | Configure production environment values | CP-009, CP-055 | Public env/config values for contact/analytics | WhatsApp/Maps/analytics values correct; no secret exposed | S | P0 | Pending | Vercel env/config review |
| CP-057 | Deploy preview build | CP-054, CP-055 | Vercel preview URL | Preview loads homepage and key routes | M | P0 | Pending | Preview smoke test |
| CP-058 | Connect custom domain | CP-057 | Production domain connected | Domain resolves to Vercel and HTTPS works | M | P0 | Pending | DNS/HTTPS check |
| CP-059 | Production launch verification | CP-058 | Launch QA report | Production homepage, routes, CTA, sitemap, robots, metadata pass | L | P0 | Pending | Browser smoke, Lighthouse, Search Console checks |
| CP-060 | Submit sitemap to Search Console | CP-041, CP-059 | Sitemap submitted | Search Console accepts sitemap | S | P1 | Pending | Search Console status |

## 11. Post Launch

| ID | Objective | Dependencies | Deliverables | Acceptance Criteria | Estimated Complexity | Priority | Status | Verification |
|---|---|---|---|---|---|---|---|---|
| CP-061 | Monitor analytics and Web Vitals | CP-059 | First monitoring report | GA4/Vercel Analytics collect page views and CTA events | M | P1 | Pending | Analytics dashboard check |
| CP-062 | Review Search Console indexing | CP-060 | Indexing/query report | Core pages indexed or issues documented | M | P1 | Pending | Search Console inspection |
| CP-063 | Review conversion path | CP-059, CP-061 | CTA performance review | WhatsApp clicks are measurable; weak CTA locations identified | M | P1 | Pending | GA4 event review |
| CP-064 | Content refresh from real inquiries | CP-061, CP-063 | Updated FAQ/service copy candidates | FAQ/content additions are based on real customer questions | M | P2 | Pending | Content review, no invented claims |
| CP-065 | Portfolio expansion | CP-030, CP-059 | Additional original-photo portfolio items | New items use real photos, alt text, category, and optimized images | M | P2 | Pending | Asset audit, build |
| CP-066 | Evaluate future project split | CP-061, CP-063 | Recommendation for admin/CMS/dashboard if needed | Future system only proposed if update frequency or workflow proves need | M | P2 | Pending | Product review against PRD future improvements |

---

## Launch-Critical Dependency Summary

| Dependency | Blocks | Current Status |
|---|---|---|
| Official WhatsApp number | CP-024, CP-033, CP-051, CP-056, CP-059 | Missing from `context.md` |
| Official Google Maps URL / Business Profile | CP-024, CP-033, CP-039, CP-056, CP-059 | Missing from `context.md` |
| Original portfolio photos | CP-008, CP-023, CP-030, CP-042, CP-065 | Required; actual files not present at documentation time |
| Logo or brand mark | CP-011, CP-013, CP-040 | Optional; fallback wordmark allowed |
| Domain/DNS access | CP-058, CP-059 | Not available at documentation time |
| GA4 Measurement ID | CP-044, CP-056, CP-061 | Optional for launch, required for analytics completion |
| Search Console access | CP-041, CP-060, CP-062 | Required for post-launch SEO monitoring |

## Recommended First Implementation Batch

Start with this order after documentation approval:

1. CP-002 Scaffold Next.js App Router project.
2. CP-003 Configure shadcn/ui baseline.
3. CP-004 Set up quality scripts.
4. CP-006 Create local site configuration model.
5. CP-007 Create local service data model.
6. CP-014 Implement design tokens.
7. CP-019 Build header/navigation.
8. CP-020 Build footer.
9. CP-021 Build hero component.
10. CP-027 Build homepage.

Do not start portfolio-heavy or deployment tasks until official assets/contact data are available.
