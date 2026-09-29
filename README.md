# Mohamed Portfolio

Personal portfolio website for Mohamed Rafik Mellouk, a junior full-stack web developer. The site presents his skills, selected projects, practical experience, education, GitHub activity, and contact links in a responsive single-page interface.

## Overview

This project is a Next.js App Router application configured for static export. Portfolio content is stored in typed TypeScript data files, while interface text is available in English, French, and Arabic.

The portfolio website itself does not contain a backend, database, authentication system, or internal API routes. It makes one client-side request to the public GitHub API to display selected repositories from the `Mllkmoha` account. The other technologies mentioned in the portfolio describe the external projects showcased by the site; they are not implemented inside this repository.

## Features

- Single-page portfolio with section-based navigation
- Responsive desktop and mobile navigation
- Hero section with animated entrance effects
- Typewriter effect for rotating technology-focused messages
- About, skills, projects, GitHub activity, experience, education, and contact sections
- Downloadable CV at `/cv/CV-Mohamed.pdf`
- GitHub and LinkedIn profile links
- English, French, and Arabic interface translations
- Arabic right-to-left document direction support
- Locale persistence with browser `localStorage`
- Client-side GitHub repository activity display
- SEO metadata, canonical URL, Open Graph metadata, sitemap, robots configuration, and JSON-LD structured data
- Static export configuration for static hosting

## Tech Stack

### Core

- Next.js `16.3.6`
- React `19.2.8`
- React DOM `19.2.8`
- TypeScript `^5`
- `next-intl` `^4.14.7`

### Styling and UI

- Tailwind CSS `^4`
- `@tailwindcss/postcss` `^4`
- Geist and Geist Mono through `next/font/google`
- Motion `^13.4.4` for hero animations
- React Icons `^5.7.0`
- Lucide React `^1.48.0`

### Tooling

- ESLint `^9`
- `eslint-config-next` `16.3.6`
- npm with the committed `package-lock.json` lockfile

## Project Architecture

The application uses the Next.js App Router. The root page in `app/page.tsx` composes the portfolio from reusable components:

1. `Navbar`
2. `Hero`
3. `About`
4. `Skills`
5. `Projects`
6. `GitHubActivity`
7. `Experience`
8. `Education`
9. `Contact`
10. `Footer`

The root layout in `app/layout.tsx` provides global metadata, Geist fonts, global styles, the language provider, and profile structured data.

Static portfolio content is kept in `data/`, translation messages are kept in `messages/`, shared TypeScript models are defined in `types/`, and public files are stored in `public/`.

## Main Sections and Routes

The application has one main page:

- `/` - the complete portfolio page

The page uses anchor sections rather than separate portfolio routes:

- `#about`
- `#skills`
- `#projects`
- `#experience`
- `#education`
- `#contact`

SEO-related generated routes are also defined:

- `/robots.txt`
- `/sitemap.xml`

## Internationalization

Translations are stored in:

- `messages/en.json`
- `messages/fr.json`
- `messages/ar.json`

The client-side `LanguageProvider` supports the locales `en`, `fr`, and `ar`. It detects a French or Arabic browser language when no locale has been saved and otherwise falls back to English.

When a user changes language, the selected locale is stored in `localStorage` under the key `locale`. The provider also updates the document language and sets the document direction to `rtl` for Arabic or `ltr` for English and French.

The `i18n/request.ts` file configures `next-intl` request messages and validates supported locales. The application does not use locale-prefixed routes; language selection happens within the single-page interface.

## GitHub API Integration

`components/GitHubActivity.tsx` fetches public repositories from:

```text
https://api.github.com/users/Mllkmoha/repos?sort=pushed&direction=desc&per_page=6
```

The request runs in the browser and does not use an API key. The response is filtered to these repository names:

- `ShopZone`
- `nextlevel-food`
- `react-events`
- `food-ordering-app`

Displayed repository details include the name, description, primary language, star count, fork count, and GitHub URL. The component shows loading and empty states. If the request fails, it renders the empty state rather than exposing an error message.

## SEO

SEO configuration is defined in `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`, and `components/PersonSchema.tsx`.

The metadata includes:

- Default title: `Mohamed Rafik Mellouk | Junior Full-Stack Web Developer`
- Description and developer-focused keywords
- Author and creator information
- Canonical URL
- Open Graph title, description, URL, site name, locale, and image
- Google site verification metadata
- `/mohamed1.png` as the site icon and Open Graph image

The configured site URL is:

```text
https://mohamed-portfolio-b2d.pages.dev
```

The robots configuration allows all user agents and references the sitemap. The sitemap currently contains the root portfolio URL with monthly change frequency and priority `1`.

The application also injects JSON-LD structured data describing a profile page whose main entity is Mohamed Rafik Mellouk, including his job title, portfolio URL, GitHub profile, and LinkedIn profile.

## Responsive Design

The interface uses Tailwind CSS responsive utilities and constrained content containers.

Responsive behavior includes:

- Desktop navigation from the `md` breakpoint upward
- A toggleable mobile navigation menu below the `md` breakpoint
- Responsive typography and section spacing
- Responsive two-column and three-column content layouts
- Flexible project cards, skill tags, buttons, and social links
- Stacked mobile layouts for experience, education, and footer content
- Touch-friendly mobile menu controls

The global stylesheet also enables smooth scrolling and applies the Geist sans font to the document body.

## Animations and Interactions

The Hero component uses Motion to animate the role label, heading, typewriter area, description, call-to-action buttons, and social links into view with opacity and vertical-translation effects.

The `Typewriter` component types and deletes localized phrases in a loop. It pauses after completing each phrase and cleans up its timer when the component changes.

Other interactions include:

- Smooth anchor scrolling
- Mobile navigation open and close behavior
- Animated mobile hamburger/close icon
- Hover states for navigation links, cards, buttons, and social links
- Locale switching and persistence
- Downloading the CV through a static public asset

## Project Structure

```text
mohamed-portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── GitHubActivity.tsx
│   ├── Hero.tsx
│   ├── LanguageProvider.tsx
│   ├── Navbar.tsx
│   ├── PersonSchema.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── Typewriter.tsx
├── data/
│   ├── education.ts
│   ├── experience.ts
│   ├── projects.ts
│   └── skills.ts
├── i18n/
│   └── request.ts
├── messages/
│   ├── ar.json
│   ├── en.json
│   └── fr.json
├── public/
│   ├── cv/
│   │   └── CV-Mohamed.pdf
│   └── mohamed1.png
├── types/
│   └── index.ts
├── eslint.config.mjs
├── next.config.ts
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

## Installation

Prerequisites:

- Node.js
- npm

Install the project dependencies:

```bash
npm install
```

No environment variables are required by the current source code. The repository does not contain database credentials, authentication secrets, or API keys.

## Development Commands

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

Run ESLint:

```bash
npm run lint
```

Build the application:

```bash
npm run build
```

Run the declared Next.js production start command:

```bash
npm run start
```

The project does not define a test script, and no automated test suite is included in the repository.

## Build and Static Export

`next.config.ts` sets:

```ts
output: "export";
```

The `next-intl` plugin is also applied through the Next.js configuration. The build is therefore configured to generate a static export suitable for a static hosting environment.

The generated output directory is excluded from version control by `.gitignore`.

## Deployment Notes

The repository contains no deployment workflow, Docker configuration, hosting-provider configuration, or CI/CD pipeline.

Because the project uses Next.js static export, deployment should serve the generated static output using the configuration required by the selected static hosting provider.

The SEO metadata currently references this deployed URL:

```text
https://mohamed-portfolio-b2d.pages.dev
```

This URL is present in the application metadata, canonical URL, robots configuration, sitemap, and structured data. The repository itself does not include provider-specific deployment instructions.

## External Projects Showcased

The portfolio links to three external projects. Their descriptions and technology lists are stored in `data/projects.ts`; their source code is not part of this repository.

### ShopZone

- Full-stack e-commerce application
- JWT authentication
- Product management
- Redux Toolkit frontend
- Express 5 REST API
- MongoDB
- GitHub: [Mllkmoha/ShopZone](https://github.com/Mllkmoha/ShopZone)
- Live demo: [shop-zone-woad.vercel.app](https://shop-zone-woad.vercel.app/)

### NextLevel Food

- Food-sharing platform for discovering and sharing recipes
- Next.js 16
- React 19
- Supabase
- PostgreSQL
- Server Actions
- CSS Modules
- GitHub: [Mllkmoha/nextlevel-food](https://github.com/Mllkmoha/nextlevel-food)
- Live demo: [nextlevel-food-psi.vercel.app](https://nextlevel-food-psi.vercel.app/)

### Food Ordering App

- Full-stack food ordering application
- Meal discovery
- Cart management
- Checkout and order submission
- Loading states and API error handling
- React 19, Vite, Node.js, Express, Context API, and REST API
- GitHub: [Mllkmoha/food-ordering-app](https://github.com/Mllkmoha/food-ordering-app)
- Live demo: [food-ordering-app-l2kv.vercel.app](https://food-ordering-app-l2kv.vercel.app)

The technologies listed in this section describe the external projects. They do not represent backend, database, or authentication code implemented by this portfolio repository.

## Contact and Social Links

- Email: [m63866157@gmail.com](mailto:m63866157@gmail.com)
- GitHub: [github.com/Mllkmoha](https://github.com/Mllkmoha)
- LinkedIn: [Mohamed Mellouk](https://www.linkedin.com/in/mohamed-mellouk-a9114233a/)
- CV: [public/cv/CV-Mohamed.pdf](public/cv/CV-Mohamed.pdf)

## Author

**Mohamed Rafik Mellouk**

Junior Full-Stack Web Developer focused on React, Next.js, Node.js, TypeScript, responsive interfaces, APIs, databases, and practical web application development.
