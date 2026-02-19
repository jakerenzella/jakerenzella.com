# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio / link-hub website for Dr Jake Renzella (Senior Lecturer, UNSW Sydney). Built with Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS 4. Uses shadcn/ui (New York style) for the component library.

## Commands

```bash
npm run dev      # Dev server at localhost:3000
npm run build    # Production build (note: TypeScript errors are ignored via next.config.mjs)
npm run start    # Serve production build
npm run lint     # ESLint
```

pnpm is also available (pnpm-lock.yaml is tracked).

## Architecture

- **Single-page static site** — one route (`app/page.tsx`) with all content hardcoded
- **App Router** — `app/layout.tsx` sets up fonts (Inter + Source Serif 4), metadata, ThemeProvider, and Vercel Analytics
- **Custom components** live in `components/` — `link-card.tsx`, `social-links.tsx`, `theme-toggle.tsx`, `theme-provider.tsx`
- **shadcn/ui components** in `components/ui/` — added via the shadcn CLI, configured in `components.json`
- **Styling** — Tailwind CSS 4 with CSS variables and OKLCH colors defined in `app/globals.css`; dark mode via `next-themes` with class strategy
- **Path alias** — `@/*` maps to the project root

## Key Patterns

- Always use shadcn/ui components (`components/ui/`) instead of native HTML elements (e.g. `<Button>` not `<button>`, `<Input>` not `<input>`, `<Dialog>` not a hand-rolled modal!)
- `cn()` from `lib/utils.ts` (clsx + tailwind-merge) for conditional class names
- Lucide React for icons: `<IconName className="h-5 w-5" />`
- External links use plain `<a>` tags with `target="_blank" rel="noopener noreferrer"`
- No testing framework, no CI/CD, no backend/database
- Image optimization is disabled (`images.unoptimized: true` in next.config.mjs)
