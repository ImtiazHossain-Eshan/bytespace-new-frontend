<div align="center">
  <img src="docs/bytespace-readme-banner.svg" alt="ByteSpace learning platform" width="100%" />
  <h1>ByteSpace</h1>
  <hr />
  <p><strong>A responsive learning platform for curious learners and independent creators.</strong><br />Explore practical courses, follow creators, and build skills at your own pace.</p>
  <p>
    <img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" alt="Next.js 16" />
    <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white" alt="TypeScript 5.9" />
    <img src="https://img.shields.io/badge/Poppins-Local-6C4AB6" alt="Poppins font" />
    <img src="https://img.shields.io/badge/Deploy-Vercel-000?logo=vercel" alt="Deployed on Vercel" />
  </p>
  <p>
    <a href="https://bytespace-new-frontend.vercel.app">Live demo</a> ·
    <a href="#features">Features</a> ·
    <a href="#run-locally">Get started</a> ·
    <a href="#checks">Checks</a>
  </p>
  <sub>Designed and built for the Doin Tech Jr. Software Engineer (Frontend) assessment.</sub>
</div>

## Live demo

[bytespace-new-frontend.vercel.app](https://bytespace-new-frontend.vercel.app)

## Design

[ByteSpace New Figma file](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website?node-id=0-1&p=f&t=eQOrqJmq6rMG5b6L-0). The supplied PDF export was used to inspect all nine frames, including the landing page, auth pages, course catalog, course detail states, creator profile, and branded 404. Images embedded in that export were extracted, optimized as WebP, and stored locally in `public/assets`.

## Stack

Next.js App Router, React, TypeScript, Tailwind CSS 4, component CSS, Poppins, and Lucide icons. The landing page and auth page shells are Server Components; interactive search, filters, navigation, forms, and footer controls are small Client Components.

## Features

- Complete landing page: hero, partner strip, featured courses, learning paths, learner and creator sections, creator call to action, testimonials, and footer.
- Course catalog with URL based search, category, sort, and pagination state, including honest empty results.
- Course detail route with About, Lessons, and Reviews tabs, preview dialog, share behavior, creator profile link, and signup enrollment handoff.
- Creator profile with follow state, sorting, course links, and responsive catalog.
- Branded 404 page connected to the app router.
- Search and category filters with URL based state, including honest empty results.
- Responsive navigation and layouts for phone, tablet, and desktop.
- Login and registration pages with labels, autocomplete, validation, keyboard submission, and password visibility controls.
- Accessible focus indicators, semantic landmarks, reduced motion support, and locally hosted optimized images and font files.

The assessment provides no authentication or newsletter API. Forms validate locally and explicitly state that data was not sent. Social sign in controls are disabled for the same reason.

## Run locally

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`. No environment variables are required.

## Checks

```bash
npm run lint
npm run typecheck
npm run test
npm run build
npm run format:check
```

## Structure

- `src/app`: routes, metadata, and responsive styles
- `src/components`: reusable UI and interactive controls
- `src/data`: course categories and source design content
- `src/lib`: form validation
- `public/assets`: local images extracted from the supplied design export
- `tests`: focused validation tests

## Deployment

Deploy the repository to Vercel with the default Next.js settings. The site does not require environment variables or backend services.
