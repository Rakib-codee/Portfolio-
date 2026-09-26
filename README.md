# Md Mahfujur Rahman Rakib · Portfolio

Academic-first portfolio for a Software Engineering student: research, case studies, a printable CV and an honest skills map, wrapped in a modern, animated interface.

Live: https://portfolio-alpha-orpin-15.vercel.app/

## Stack

- Next.js 16 (App Router, Server Actions, ISR) · React 19 · TypeScript
- Tailwind CSS 4 with a token-based dark/light theme
- Framer Motion (scroll reveal, kinetic type, magnetic buttons; respects `prefers-reduced-motion`)
- React Three Fiber hero scene (hero only, DPR capped at 1.5, paused off-screen, static gradient on mobile / low-power / reduced motion)
- Lenis smooth scroll · cmdk command palette (⌘K / Ctrl+K)
- Resend for the contact form (falls back to a `mailto:` link when no API key is set)

## Routes

| Route | Purpose |
| --- | --- |
| `/` | One-page site: Hero, About (bento), Research, Projects, Skills, Activities, GitHub, Contact |
| `/projects/[slug]` | Case study: Problem → My role → Architecture → Key decisions → Results → Links → What I learned |
| `/cv` | Printable academic CV generated from the same content data |
| `/opengraph-image` | Dynamic Open Graph image |
| `/sitemap.xml`, `/robots.txt` | Generated from content |

## Content model

All facts live in `src/content/` and nothing else is rendered as fact:

| File | Holds |
| --- | --- |
| `profile.ts` | Name, positioning, links, bio, research interests, languages, "now" |
| `education.ts` | Degrees |
| `research.ts` | Publications, with status copied verbatim (e.g. "Under review") |
| `projects.ts` | Projects and their case studies |
| `skills.ts` | Skills grouped, marked `proficient` or `familiar` |
| `activities.ts` | Leadership, community, content, competitions |

Any missing fact is marked `TODO(PROFILE.md)` in the data and rendered as a visible placeholder card so nothing is silently invented. Placeholders are hidden when printing the CV.

## Getting started

```bash
npm install
cp .env.example .env.local   # optional: Resend key, site URL, GitHub token
npm run dev
```

`npm run lint` and `npm run build` must pass with zero errors before deploying.

## Environment variables

See `.env.example`. None are required for a working build.

## License

MIT © Md Mahfujur Rahman Rakib
