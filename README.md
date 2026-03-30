# Danyu Rajbahak — Portfolio

Personal portfolio site built with Next.js 16, TypeScript, and Tailwind CSS. Deployed to GitHub Pages via GitHub Actions.

**Live:** [rajbahakdanyu.github.io](https://rajbahakdanyu.github.io)

## Tech Stack

- **Framework:** Next.js 16 (static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Linting/Formatting:** Biome
- **Deployment:** GitHub Pages via GitHub Actions

## Getting Started

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/          # Next.js app router (layout, page, globals)
components/   # Section and UI components
lib/          # Data, animations, hooks, utilities
public/       # Static assets
types/        # Global TypeScript declarations
```

## Deployment

Pushes to `main` automatically trigger a GitHub Actions build and deploy to GitHub Pages.

To trigger manually:

```bash
bun run deploy
```

## Local Commands

| Command | Description |
|---|---|
| `bun dev` | Start dev server with Turbopack |
| `bun run build` | Production build |
| `bun run lint` | Lint with Biome |
| `bun run format` | Format with Biome |
| `bun run deploy` | Trigger GitHub Actions deploy |
