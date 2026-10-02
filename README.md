# Nguyen Duc Anh Minh — Portfolio

A simple, responsive developer portfolio built with Next.js App Router, strict TypeScript, Tailwind CSS, and Lucide. The layout uses understated typography and compact project cards with expandable contributions. Content is server-rendered; mobile navigation and the theme toggle use client state. No database, CMS, or remote fonts are required.

The header includes a light/dark switch on desktop and mobile. On the first visit, the theme follows the system preference. An explicit choice is saved in local storage and applied before paint, including on project pages. Themes work without local storage, but the preference cannot persist when storage is blocked. Color tokens are in `src/app/globals.css`; initialization is in `src/lib/theme.ts`.

## Local setup

Use Node.js 20.9 or later and npm. The lockfile records compatible package versions.

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

## Editing content

Edit `src/data/portfolio.ts`. It contains the profile, six typed projects, employment, skills, education, certifications, and scholarships. All six projects have statically generated detail pages under `/projects/<slug>` and consistent Read more links. Enable a new detail page with `detail: true` and provide implementation content.

HomiePlace source was inspected on 2 October 2026 through its public GitHub repository: README, package files, `client/src/App.tsx`, `server/server.ts`, and authentication controllers. The client is a placeholder; registration and password-reset endpoints are mounted. Login, profile, and verification controllers exist but are unmounted. Discovery, uploads, and messaging are planned scope. Source inspection did not test backend runtime behavior. Professional contributions use the supplied descriptions; no metrics or product ownership claims were added.

The public copy deliberately omits a numeric years-of-experience claim pending confirmation. Availability for work, relocation, phone number, birth date, and gender are omitted. No portrait or project screenshots were supplied; project cards use real project descriptions with expandable contributions.

## CV

Place your real PDF at `public/cv.pdf`, then rebuild. Navigation detects that file at build time and enables Download CV. Without it, the action is omitted. Do not place a placeholder PDF there.

## SEO and deployment

`NEXT_PUBLIC_SITE_URL` should contain the actual public HTTPS origin. Copy `.env.example` to `.env.local` for local configuration. On Vercel, `VERCEL_PROJECT_PRODUCTION_URL` provides the assigned production hostname when no explicit URL is configured. Canonicals, Person JSON-LD, robots, and sitemap use that origin. Without a configured origin, canonicals are omitted and sitemap is empty rather than using a fictional domain. Open Graph imagery is generated locally at `/opengraph-image`; favicon is `/icon.svg`.

Deploy into a **new** Vercel project named `minh-nguyen-portfolio` unless an intended portfolio project has been identified. Do not overwrite an unrelated existing app. No GitHub connection is necessary for CLI deployment.

```sh
npx vercel login
npx vercel --prod
```

Select the intended account and create the new portfolio project with Next.js and npm defaults. If configuring a custom deployment origin, set `NEXT_PUBLIC_SITE_URL` in project environment variables and redeploy. Verify `/`, `/projects/homieplace`, `/projects/porta`, `/sitemap.xml`, and `/opengraph-image` after deployment. Never commit credentials or `.vercel`.

## Verification

```sh
npm run lint
npm run typecheck
npm run build
npx playwright install chromium
npm run test:e2e
```

Browser checks run against the production server. They cover project routes and missing-route behavior, SEO asset responses, desktop keyboard skip navigation, mobile menu keyboard/click behavior, email links, viewport overflow at 320/390/768/1440 pixels, reduced-motion mode, and automated axe checks. Full-page desktop, mobile, and detail screenshots are written to ignored `artifacts/`. Automated accessibility checks do not establish complete accessibility compliance or Lighthouse scores.

Review supplied external URLs separately: third-party availability and access requirements can change. DoveHero is labeled Website and may require authentication. No staging URLs or invented demos are published.

## Handoff status — 2 October 2026

After the simpler redesign, the production build (including TypeScript checking), ESLint, and all three Chromium browser tests passed. Automated axe checks reported no violations on the tested homepage and detail pages in light and dark themes. Desktop and mobile screenshots were visually reviewed in both themes. Saved theme preference was verified across reloads and project routes; no browser page errors were reported. No horizontal overflow was observed at the four tested widths. Supplied external link destinations are retained; third-party website availability was not independently verified. No credential material was added to source.

Deployment is blocked by Vercel authentication: `npx vercel whoami` reported **Logged out**. No public deployment URL is available yet. In this workspace, run `npx.cmd vercel login` and complete the browser login. Then run `npx.cmd vercel --prod`, selecting your intended account and a **new** `minh-nguyen-portfolio` project. After successful deployment, verify the homepage and project routes. No repository connection, paid service, or domain purchase is needed for this workflow.

## Portrait and header-free navigation

The page has no header or logo. A floating bottom control provides section shortcuts and the theme toggle on mobile and desktop. The hero supports a real portrait: place the supplied image at `public/portrait.jpg`, or change `profile.portrait` in `src/data/portfolio.ts` to another filename under `public/`, then rebuild. The photo uses Next.js Image optimization, a stable 4:5 frame, and descriptive alternative text. Adjust `.portrait-frame img` object-position in the stylesheet to change cropping. Until a real image is supplied, the existing CSS 3D sculpture remains visible; no fabricated portrait is shown.

The sculpture supports mouse tilt, a pause control, and reduced-motion preferences. Scroll reveals and card hover effects are also disabled under reduced motion. These effects use CSS and browser APIs without a 3D library.

## CV content reconciliation � 2 October 2026

Project details were reconciled against the supplied CV: Trekko team 7, DoveHero team 15, education ending December 2024, C1 certificate issued December 2024, and Anthropic courses dated October 2026. All six cards now link to their own detail pages, and Next project cycles through the complete list. The supplied phone number remains private; the original CV PDF was not copied into public assets. HomiePlace remains in development based on the previously inspected source. Earlier supplied scholarship semesters and Gemini expiry/credential details are retained because the CV does not replace them with conflicting values.

## Latest visual update

Typography now uses self-hosted Inter Variable. Projects use a single-column index with project names, descriptions, technologies, and consistent detail links rather than decorative cards. Dark mode uses a pure black background. Academic scholarships display only the user-confirmed total of 4; semester details are removed.

## Technical scene

The hero pairs the portrait with a mouse-responsive CSS 3D wireframe sphere and cube, animated SVG circuit paths, and floating code symbols. The scene has a pause/resume button; reduced-motion preferences stop animation and pointer tilt. Project rows use Lucide icons and hover underlines. No WebGL engine or external animation dependency is needed. The black dark background and six project detail routes are preserved.

The contact section now includes Gmail, GitHub, and LinkedIn SVG identities and working links. A staggered 3D letter entrance animates the hero title once. Decorative star points, orbit lines, and code symbols continue down the homepage, while the portrait uses additional layer depth. The scene pause button now pauses all ongoing CSS decorative animations on the homepage; reduced-motion mode removes the effects. Contact cards stack on smaller screens.

## CV download and updated information panels

The hero now has a Download CV action linking to `public/cv.pdf`, copied from the user-supplied 2026 CV. This is the original PDF, including its contact details; replace it with a redacted version if desired before public deployment. Replace that file to update the download. Typing phrases are editable in `profile.typingPhrases`. The typing animation has its own pause control, follows the global scene pause, and uses static text in reduced-motion mode. Skills now use perspective hover panels, with separate personal-project and learning panels. Education uses a degree panel, certificate list, and scholarship summary.

The background now carries five slow CSS 3D geometries through the lower page: wireframe spheres, a cube, and orbital rings. Moving dashed circuit paths connect the space motif. These decorations are noninteractive, hidden from assistive technology, lighter and clipped on mobile, and follow the existing global pause and reduced-motion controls.

The full-page decorative layer has been removed. Lower-section 3D animations now live entirely in small clipped areas to the right of their headings; they do not cross body copy or cards. The portrait scene remains independent, and Education retains its four-panel layout.
