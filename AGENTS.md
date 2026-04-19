# AGENTS.md

## Project Summary

- Portfolio site built with Next.js 15 App Router, React 19, and strict TypeScript.
- UI is primarily HeroUI components styled with Tailwind CSS.
- Data/content flows currently use tRPC, React Query, Sanity, React Hook Form, Zod, and React Email.

## Common Commands

- `pnpm install`
- `pnpm dev`
- `pnpm build`
- `pnpm lint`
- `pnpm email`

## Repository Layout

- `src/app`: App Router pages, layouts, route handlers, and route-local components.
- `src/app/_components`: shared UI used across routes.
- `src/app/_trpc`: client-side tRPC setup.
- `src/server`: server-side tRPC setup and routers.
- `src/sanity`: Sanity schema, env, and client helpers.
- `src/shared`: shared schemas and types reused across layers.
- `src/emails`: React Email templates.

## Working Conventions

- Use TypeScript and prefer the `@/*` alias for imports from `src`.
- Prefer Server Components; add `"use client"` only when hooks, browser APIs, or interactive handlers are required.
- Keep components close to the route or feature they belong to; only move them into shared locations once reuse is clear.
- Match the existing naming style: PascalCase for React components, camelCase for helpers/schema values, and lowercase route segments.
- Reuse shared Zod schemas for validation when both client and server need the same contract.
- When extending existing app data flows, prefer the established tRPC + React Query pattern over ad hoc fetch wrappers.
- Prefer HeroUI primitives and Tailwind utilities over custom styling abstractions unless there is a clear need.

## Quality Checks

- Run `pnpm lint` after substantive code changes.
- Keep imports and Tailwind classes formatter-friendly; Prettier plugins already sort both.
- Avoid editing `package.json` or `pnpm-lock.yaml` unless the task requires dependency changes.
