# AGENTS.md — Mandiri Alumunium Agent Workflow

Project: Mandiri Alumunium Company Profile  
Workflow purpose: coordinate planning, design, implementation, review, QA, and documentation without scope creep.  
Hard rule: agents must not write source code before the relevant task is approved and ready.

---

## 1. Roles

### 1.1 Planner

Responsibilities:

- Convert product scope into ordered tasks.
- Maintain `TASK.md` IDs, dependencies, priorities, and status.
- Prevent scope creep beyond company profile v1.0.
- Identify missing prerequisites before implementation starts.
- Keep roadmap aligned with `PRD.md`.

Outputs:

- Updated task plan.
- Dependency map.
- Blocker list.
- Ready/not-ready decision.

### 1.2 Architect

Responsibilities:

- Define technical structure for static-first Next.js App Router implementation.
- Enforce no backend, no database, no CMS, no ecommerce in v1.0.
- Choose the simplest maintainable architecture.
- Define data model for services, portfolio, site config, SEO config, and service areas.
- Review dependency decisions.

Outputs:

- Architecture decision notes.
- Route/data/component boundaries.
- Dependency approval or rejection.
- Technical risk mitigation.

### 1.3 Designer

Responsibilities:

- Apply `DESIGN.md` brand direction and tokens.
- Keep visual output premium, modern, industrial, minimal, professional, and mobile-first.
- Prevent generic template aesthetics.
- Enforce photography and iconography rules.
- Review responsive behavior and dark theme.

Outputs:

- Component/page design direction.
- Visual acceptance notes.
- Accessibility-related design fixes.
- Asset requirements.

### 1.4 Frontend Engineer

Responsibilities:

- Build approved tasks using Next.js App Router, TypeScript, TailwindCSS, and shadcn/ui.
- Implement static-first pages and local data models.
- Keep components small, accessible, and performant.
- Run required verification before claiming completion.
- Avoid unapproved dependencies and abstractions.

Outputs:

- Working implementation.
- Verification output.
- Known limitations.
- Documentation changes for implemented behavior.

### 1.5 Reviewer

Responsibilities:

- Review diffs against `PRD.md`, `DESIGN.md`, `CLAUDE.md`, and `TASK.md`.
- Find blockers only: scope violations, broken acceptance criteria, security/performance/accessibility regressions, or maintainability problems.
- Reject invented business claims or fake portfolio content.
- Ensure implementation remains static-first.

Outputs:

- Blocker list.
- Required fixes.
- Approval/rejection decision.

### 1.6 QA

Responsibilities:

- Execute verification workflow.
- Test key routes, CTA behavior, responsive layout, keyboard navigation, SEO assets, and performance targets.
- Verify WhatsApp and Maps links when official data exists.
- Confirm no console errors on critical pages.

Outputs:

- Test report.
- Failed checks with reproduction steps.
- Pass/fail recommendation.

### 1.7 Documentation Writer

Responsibilities:

- Keep `PRD.md`, `DESIGN.md`, `CLAUDE.md`, `AGENTS.md`, and `TASK.md` synchronized.
- Document only verified implementation status.
- Record open decisions without fake filler values.
- Keep docs implementation-ready and concise.

Outputs:

- Updated docs.
- Changelog notes if needed.
- Cross-document consistency check.

## 2. Workflow

### 2.1 Standard Flow

1. Planner selects next task from `TASK.md`.
2. Planner checks Definition of Ready.
3. Architect reviews architecture impact.
4. Designer reviews visual impact if UI-facing.
5. Frontend Engineer implements only approved scope.
6. Frontend Engineer runs required verification.
7. Reviewer audits diff for blockers.
8. QA runs relevant checks.
9. Documentation Writer updates docs if behavior/scope/status changed.
10. Task status changes only after verification passes.

### 2.2 Documentation-First Flow

For product, design, architecture, or workflow changes:

1. Update docs first.
2. Validate headings, scope, contradictions, and missing decisions.
3. Get approval if change affects product scope or architecture.
4. Only then implement.

### 2.3 Hotfix Flow

Use only after implementation begins and a verified breakage exists.

1. Identify exact failing behavior.
2. Patch smallest root-cause fix.
3. Run targeted verification plus regression check.
4. Update docs only if behavior or command changes.

## 3. Task Lifecycle

| Status | Meaning | Allowed Action |
|---|---|---|
| Pending | Task exists but not started | Clarify dependencies, refine acceptance criteria |
| Ready | Definition of Ready satisfied | Implementation may start |
| In Progress | One agent is actively working | Do not duplicate work in parallel unless explicitly coordinated |
| Review | Implementation complete, waiting review | Reviewer/QA checks only |
| Blocked | Missing data, failed dependency, or unresolved decision | Escalate or resolve blocker before coding continues |
| Completed | Acceptance criteria and verification passed | Update docs/status and move to next task |
| Cancelled | No longer in scope | Record reason and remove downstream dependency |

Status changes must be backed by evidence, not assumption.

## 4. Definition of Ready

A task is Ready only if all applicable items are true:

- Task has an ID in `TASK.md`.
- Objective is clear.
- Dependencies are satisfied or explicitly waived.
- Deliverables are listed.
- Acceptance criteria are testable.
- Required business data exists or missing data is handled explicitly.
- Relevant design rules are available in `DESIGN.md`.
- Relevant product requirement exists in `PRD.md`.
- Verification method is defined.
- Scope does not require backend, database, CMS, ecommerce, checkout, payment, or admin dashboard.

If any item fails, status must remain Pending or Blocked.

## 5. Definition of Done

A task is Done only if all applicable items are true:

- Deliverables exist and match the objective.
- Acceptance criteria pass.
- Required verification commands/checks were run.
- No new TypeScript, lint, build, accessibility, or console errors.
- Mobile and desktop behavior checked for UI tasks.
- SEO metadata checked for route/page tasks.
- CTA behavior checked for conversion tasks.
- No forbidden practices introduced.
- Documentation updated if the task changed behavior, routes, commands, dependencies, or decisions.
- Reviewer has no unresolved blockers.
- QA has no unresolved P0/P1 failures.

## 6. Skill Routing

Agents should load relevant procedural skills before work. Use these routes:

| Work Type | Required/Relevant Skill |
|---|---|
| Product docs, PRD, CLAUDE, AGENTS | `project-product-documentation` |
| Visual direction, UI design, design critique | `frontend-design` |
| React/Next.js performance and App Router practices | `vercel-react-best-practices` |
| Minimal maintainable implementation | `ponytail` |
| Concise direct reporting | `caveman` |
| Anti-generic writing/copy | `stop-slop` |
| Test/build verification gate | `verify-gate` when implementation exists |
| Systematic debugging | `systematic-debugging` when root cause is unclear |
| Code review | `requesting-code-review` or project-specific review workflow when available |

If a skill conflicts with `context.md`, `PRD.md`, or user instruction, higher-level project sources win.

## 7. Priority Rules

Priority order for implementation:

1. P0 conversion and trust: homepage, WhatsApp CTA, services, portfolio, contact.
2. P0 technical foundation: scaffold, build, lint, typecheck, static data.
3. P0 SEO foundations: metadata, sitemap, robots, structured data basics.
4. P0 mobile accessibility and performance.
5. P1 polish: dark theme, Maps CTA, analytics, service details.
6. P2 enhancements: filters, FAQ, case studies, before/after gallery.

If two tasks conflict, choose the one that protects launch readiness and conversion first.

## 8. Conflict Resolution

### 8.1 Source Conflict

Use this order:

1. User's latest explicit instruction.
2. `context.md`.
3. `PRD.md`.
4. `DESIGN.md`.
5. `TASK.md`.
6. `CLAUDE.md`.
7. `AGENTS.md`.
8. Existing implementation.
9. General best practices.

### 8.2 Product vs Technical Conflict

- If product requires a forbidden architecture item, stop and escalate.
- If technical optimization harms conversion clarity, choose conversion unless performance/accessibility target fails.
- If design polish harms performance, reduce polish.
- If SEO wants many thin pages, reject thin pages and keep fewer useful pages.

### 8.3 Design vs Accessibility Conflict

Accessibility wins. Adjust color, contrast, motion, layout, or typography until usable.

### 8.4 Speed vs Maintainability Conflict

Choose the smallest maintainable solution. Do not create shortcuts that hide known launch blockers.

## 9. Escalation Rules

Escalate to the user when:

- WhatsApp number is missing before production CTA finalization.
- Google Maps URL or business profile is missing before Maps CTA / LocalBusiness structured data finalization.
- Portfolio photos are missing but launch expects a portfolio section.
- User requests backend, CMS, admin, ecommerce, checkout, or payment inside v1.0.
- A design request conflicts with accessibility or performance targets.
- A requested SEO claim lacks evidence.
- A new dependency materially changes architecture or bundle weight.
- Production deployment needs domain/DNS/account access not available to the agent.

Do not escalate for low-risk implementation choices with an obvious default. Pick the maintainable default and document it.

## 10. Source of Truth

| Source | Owns |
|---|---|
| `context.md` | Business facts and hard constraints from user |
| `PRD.md` | Product requirements, scope, goals, acceptance criteria |
| `DESIGN.md` | Brand, visual system, layout, components, design tokens |
| `TASK.md` | Implementation roadmap, dependencies, status, verification |
| `CLAUDE.md` | Coding standards, technical rules, verification workflow |
| `AGENTS.md` | Agent roles, workflow, DoR/DoD, escalation |
| Future implementation files | Actual built behavior after verification |

Business facts must not be invented in implementation files if absent from `context.md` or user-supplied assets.

## 11. Subagent Rules

### 11.1 When to Use Subagents

Use subagents for independent review, design critique, SEO audit, accessibility audit, or QA checks when the task is complex enough to benefit from isolated evaluation.

### 11.2 Subagent Context Package

Every subagent must receive:

- Project name and scope.
- Relevant task ID from `TASK.md`.
- Relevant excerpts or file paths: `context.md`, `PRD.md`, `DESIGN.md`, `CLAUDE.md`, `AGENTS.md`.
- Explicit constraint: no backend, no database, no CMS, no ecommerce.
- Expected output format.
- Verification expectations.

### 11.3 Subagent Limits

- Subagents must not ask the user questions.
- Subagents must not make external side effects unless explicitly assigned.
- Subagents must not claim success without verifiable evidence.
- Subagents must return blockers, risks, and exact file/path references when reviewing.
- Parent agent must verify any subagent claim before reporting success.

### 11.4 Parallel Review Rule

For substantial implementation changes after coding begins, use independent review before marking a task complete when practical:

- One reviewer checks product/scope alignment.
- One reviewer checks design/accessibility.
- One reviewer checks technical/performance risk.

If review findings require code changes, rerun relevant verification after fixes.

## 12. Mandatory Verification

### 12.1 Documentation Tasks

Verification required:

- Required headings present.
- No unresolved template markers.
- No contradiction between docs.
- No invented business data.
- Required files written to project root.

### 12.2 Implementation Tasks

Verification required after scaffold exists:

- Typecheck.
- Lint.
- Production build.
- Route smoke test.
- Responsive visual check for affected pages.
- Accessibility check for affected interactive UI.
- SEO metadata check for affected route.
- Console check for browser-facing work.

### 12.3 Deployment Tasks

Verification required:

- Vercel preview deployment succeeds.
- Homepage loads.
- Key routes load.
- WhatsApp CTA works with official number.
- Maps CTA works if official URL exists.
- Sitemap and robots load.
- No critical console errors.
- Lighthouse targets checked on deployed or production-equivalent build.

## 13. Mandatory Documentation Update

Update documentation when any of these change:

| Change | Required Doc Update |
|---|---|
| Product scope or feature behavior | `PRD.md` |
| Route structure | `PRD.md`, `TASK.md`, `CLAUDE.md` if rules change |
| Design tokens or visual rules | `DESIGN.md` |
| Implementation task status | `TASK.md` |
| Architecture or dependency policy | `CLAUDE.md` |
| Workflow, role, verification, escalation | `AGENTS.md` |
| Business facts from owner | `context.md` or approved business source, then dependent docs |
| Analytics event taxonomy | `PRD.md`, `CLAUDE.md` |
| SEO strategy or structured data fields | `PRD.md`, `CLAUDE.md` |

Do not update documentation to say something is complete until verification passes.

## 14. Review Severity

| Severity | Meaning | Action |
|---|---|---|
| Blocker | Violates scope, breaks build, breaks CTA, fails accessibility/performance target, invents business claim | Must fix before completion |
| High | Significant UX, SEO, or maintainability issue | Fix before launch unless explicitly deferred |
| Medium | Quality issue with workaround | Fix if cheap; otherwise document deferral |
| Low | Minor polish | Defer unless it affects brand quality |

## 15. Agent Reporting Format

When reporting work, use this format:

- Task ID.
- Files changed.
- What changed.
- Verification run and result.
- Remaining blockers or open decisions.
- Next recommended task.

Keep reports factual. No invented test results, no vague “should work”.
