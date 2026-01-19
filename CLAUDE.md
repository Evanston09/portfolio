# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with Astro and three.js, featuring an interactive 3D business card using WebGL rendering.

## Development Commands

```bash
# Start development server
npm run dev
# or
npm start

# Build for production (includes type checking)
npm run build

# Preview production build
npm run preview

# Format code with Prettier
npx prettier --write .
```

## Architecture

### Tech Stack
- **Framework**: Astro (Static Site Generator)
- **3D Graphics**: three.js with OrbitControls
- **Styling**: Scoped CSS in Astro components
- **TypeScript**: Strict mode enabled
- **Font**: JetBrains Mono Variable

### Project Structure

```
src/
├── assets/        # Images, icons, logos, and textures
├── components/    # Astro components (Hero, ProjectCard, BusinessCard, etc.)
├── layouts/       # Layout wrapper (defines global styles, navbar)
├── pages/         # Routes (index.astro, 404.astro)
public/            # Static assets (resume.pdf)
```

### Import Aliases

TypeScript path aliases are configured in `tsconfig.json`:
- `@components/*` → `src/components/*`
- `@assets/*` → `src/assets/*`
- `@layouts/*` → `src/layouts/*`

### Key Components

**BusinessCard.astro**: Complex three.js component with:
- 3D card using BoxGeometry with texture maps (front, back, normal)
- OrbitControls for user interaction (auto-rotate, disable zoom/pan)
- Custom loading manager with progress indicator
- Responsive sizing based on viewport
- Scroll-based rotation effect
- Data attributes pattern for passing props to `<script>` tag

**Layout.astro**:
- Defines CSS custom properties (color scheme)
- Includes global styles and NavBar
- Uses JetBrains Mono Variable font

**Pages**:
- Single-page layout with sections: Hero, About, Projects, Contact, Footer
- Projects displayed in a flex grid layout

### Styling Conventions

- CSS custom properties defined in `:root` in Layout.astro:
  - `--oxford-blue`, `--midnight-blue`, `--pacific-cyan`, `--light`, etc.
- Scoped styles per component
- Global styles only in Layout.astro
- Responsive design with media queries (breakpoint at 768px)

### three.js Implementation Details

- Uses WebGL renderer with alpha and antialiasing
- Loading manager tracks texture loading progress
- Camera positioned using custom `fitCameraToObject()` function
- Materials use PBR (Physically Based Rendering) with roughness/metalness
- Normal maps applied to all box faces for realistic lighting
- Event listeners for cursor changes and mobile touch interactions

## Development Notes

- When passing variables from Astro frontmatter to `<script>` tags, use `data-*` attributes on elements (see BusinessCard.astro:21-23, :46-50)
- Canvas sizing is calculated in JavaScript rather than CSS due to three.js requirements
- three.js imports use standard three package plus addons (OrbitControls from `three/addons/`)
- SVG icons can be imported as raw strings with `?raw` suffix for inline usage
