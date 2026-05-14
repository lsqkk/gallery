# CLAUDE.md — Gallery Project Guide

## Project Overview

A personal gallery/navigation homepage inspired by Russian Suprematism and Soviet Constructivism. Built as a static site with Astro 5. All interactivity is vanilla JavaScript.

## Build Commands

- `npm run dev` — Start dev server (`astro dev`)
- `npm run build` — Build for production (`astro build`)
- `npm run preview` — Preview production build (`astro preview`)

## Architecture

### Component Tree

```
BaseLayout (layout + TopBar)
 └── index.astro (page composition)
      ├── GeometricShapes (fixed background shapes with parallax)
      ├── Hero (name, role, blog CTA button)
      ├── Projects ("我的网站" - project cards from YAML)
      ├── OpenSource ("开源仓库" - GitHub repos via client API)
      ├── Profile (personal info + typewriter signature)
      └── Footer (links + cyrillic text)
```

### Key Files

| File | Purpose |
|------|---------|
| `src/content/site.yml` | All editable content (YAML) |
| `src/styles/global.css` | Design tokens, reset, shared classes |
| `src/components/OpenSource.astro` | GitHub API fetch + repo cards |
| `src/components/Profile.astro` | Typewriter effect inline script |
| `src/layouts/BaseLayout.astro` | Parallax, reveal observer, click star FX |

## Data Flow

- Content is read from `site.yml` at build time in `index.astro` frontmatter
- Props are passed down to components via `Astro.props`
- GitHub repositories are fetched client-side in `OpenSource.astro`
- No runtime framework — all JS is vanilla inline `<script>` blocks

## Design System

### Colors (CSS custom properties in `:root`)

- `--red: #CC0000` — primary accent, borders, buttons
- `--red-dark: #8B0000`
- `--black: #111111` — text, borders
- `--black-soft: #222222`
- `--white-off: #EDE8DD` — page background
- `--white-warm: #F0EBE0` — card alternate background
- `--gold: #C4A44A` — secondary accent, decorative elements
- `--gold-dark: #8B7328`

### Typography

- `--font-display: 'Staatliches', 'Impact', sans-serif` — headings, nav, buttons
- `--font-body: 'Rubik', system-ui, sans-serif` — body text

### Spacing

- `--border-thick: 4px`
- `--border-thicker: 6px`
- `--border-thickest: 8px`
- `--section-padding: 120px 6vw`
- `--section-padding-mobile: 60px 5vw`

## Component Conventions

- **Naming:** BEM-like (`.block__element--modifier`)
- **Sections** use `.section` base class, `.section-alt` for alternate background
- **Section titles** use `.section-title` with red underline `::after`
- **Crop marks** use `.crop-mark--tl/tr/bl/br` for constructivist framing
- **Reveal animations** use `[data-reveal]` attribute + `.revealed` class
- **Parallax** use `[data-parallax="0.X"]` attribute (lower = slower)
- **Top bar offset:** `body { padding-top: 48px }` set by TopBar component

## Content Editing

Edit `src/content/site.yml` to update text content. The YAML structure is:

```yaml
site:
  title: "..."
  description: "..."

profile:
  name: "..."
  institution: "..."
  ...

projects:
  - name: "..."
    description: "..."
    url: "..."
    featured: true/false
    tags: ["tag1", "tag2"]

footer:
  text: "..."
  russian: "..."
```

## GitHub Repos Section

- `src/components/OpenSource.astro` fetches from `https://api.github.com/users/lsqkk/repos`
- Exclude list is hardcoded in the component: `['guide-vehicle', 'lsqkk.github.io', 'image', 'lsqkk', 'gallery']`
- Cards are styled with gold accent on hover (differentiated from the red-accented project cards)
- Loading state shows animated dots; error state shows fallback message

## Interactive Features

1. **Typewriter** — Profile signature types out, pauses 1.8s, backspaces, pauses 0.6s, loops
2. **Star Click FX** — 10-22 stars burst on click with varied velocity, gravity, rotation, and fade
3. **Scroll Reveal** — Elements fade+slide up via IntersectionObserver
4. **Parallax** — Background shapes move at different speeds on scroll

## Deployment

Deployed via GitHub Actions to GitHub Pages. Config in `.github/workflows/deploy.yml`. Base URL set in `astro.config.mjs` — currently `/` for custom domain, update to `/repo-name/` if using default Pages URL.

## Key Behaviors to Maintain

- The paper texture overlay (`.texture-overlay`) is at `z-index: 10000` and must remain the topmost visual layer
- Fixed background shapes (`.layer-fixed`) are at `z-index: 0` behind all content sections (`z-index: 1`)
- The TopBar is at `z-index: 9999` (above sections, below texture overlay)
- Click star FX creates elements at `z-index: 99999` (above texture)
- All interactive elements should check `e.target.tagName` to avoid triggering on A/BUTTON/INPUT/TEXTAREA
