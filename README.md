# Gallery — Avant-Garde Personal Navigation Page

A personal gallery/navigation homepage built with [Astro](https://astro.build). Inspired by Russian Suprematism and Soviet Constructivism — geometric abstraction, bold red-black-gold palette, Cyrillic typography, and print-era texture.

> **Live:** [lsqkk.github.io](https://lsqkk.github.io)

## Features

- **Hero Section** — Fade-reveal entry with institutional meta, name, role, and call-to-action button
- **My Sites** — Curated project cards with featured spotlight, tags, and misregistration print effects
- **Open Source Repositories** — Live-fetched repos from GitHub API with language badges, star counts, and configurable exclude list
- **Profile Section** — Personal info block with typewriter-animated motto
- **Interactive Star Burst** — Click anywhere to trigger a firework of small stars in theme colors; stars burst, arc, and fade naturally
- **Fixed Top Bar** — Constructivist navigation bar with animated underline links and crop-mark details
- **Parallax Geometry** — Fixed suprematist composition (triangle, square, circle, diagonal lines) with scroll-driven parallax
- **Paper Texture Overlay** — Fixed noise grain for a screen-printed zine feel
- **Scroll Reveal** — Elements fade up on scroll via IntersectionObserver
- **Fully Responsive** — Adapts from desktop to mobile

## Architecture

```
src/
├── components/
│   ├── TopBar.astro        # Fixed navigation bar
│   ├── GeometricShapes.astro # Suprematist background composition
│   ├── Hero.astro          # Entry section (name, role, blog button)
│   ├── Projects.astro      # "My Sites" project cards
│   ├── OpenSource.astro    # GitHub repos (client-side API fetch)
│   ├── Profile.astro       # Personal info + typewriter motto
│   └── Footer.astro        # Footer with links and Cyrillic text
├── layouts/
│   └── BaseLayout.astro    # HTML shell + parallax + reveal + click FX
├── content/
│   └── site.yml            # All editable content (profile, projects, footer)
├── styles/
│   └── global.css          # Design tokens, reset, shared utilities
└── pages/
    └── index.astro         # Page composition
```

## Tech Stack

- **Framework:** [Astro](https://astro.build) 5 (static site generation)
- **Data:** YAML via `js-yaml`, external GitHub REST API
- **Styling:** Scoped CSS with custom properties (no framework)
- **Interactivity:** Vanilla JavaScript (no runtime framework)

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview the build
npm run preview
```

## Customization

Edit `src/content/site.yml` to update:

- Site title, description
- Profile name, institution, class, department, role, signature
- Project list (name, description, URL, tags, featured flag)
- Footer text and Cyrillic decoration

### Excluding Repositories

In `src/components/OpenSource.astro`, update the `EXCLUDED` array:

```js
var EXCLUDED = ['guide-vehicle', 'lsqkk.github.io', 'image', 'lsqkk', 'gallery'];
```

## Design System

| Token       | Value     | Usage                |
|-------------|-----------|----------------------|
| `--red`     | `#CC0000` | Accent, borders      |
| `--black`   | `#111111` | Text, borders        |
| `--gold`    | `#C4A44A` | Secondary accent     |
| `--white-off` | `#EDE8DD` | Page background    |
| `--font-display` | `Staatliches` | Headings, titles |

## Deployment

The site is deployed to GitHub Pages. Push to `main` and the [GitHub Actions workflow](.github/workflows/deploy.yml) handles the rest.

## License

MIT
