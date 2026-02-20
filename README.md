# Shards Inc | Enterprise AI Foundation Landing Page

A professional, enterprise-grade landing page for Shards Inc / Foundation, showcasing their AI orchestration, infrastructure, and autonomous systems portfolio.

## Overview

This landing page presents Shards' sophisticated three-tier architecture:

- **Kernel Layer**: Deterministic control planes with governance and integrity verification
- **Orchestration Layer**: Multi-LLM routing across 12+ families with intelligent fallback
- **Applications Layer**: Revenue engines, workflow hubs, and autonomous systems

The site features a **Sophisticated Technical Minimalism** design philosophy with:

- Asymmetric layouts and strategic whitespace
- Serif headlines paired with sans-serif body text
- Cyan accent color (#06b6d4) for technical vibrancy
- Smooth animations and interactive hover states
- Responsive design optimized for all devices

## Technology Stack

- **Frontend Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + custom CSS variables
- **UI Components**: shadcn/ui
- **Routing**: Wouter
- **Build Tool**: Vite
- **Deployment**: Vercel or GitHub Pages

## Project Structure

```
client/
  ├── public/          # Static assets
  ├── src/
  │   ├── pages/       # Page components (Home.tsx)
  │   ├── components/  # Reusable UI components
  │   ├── contexts/    # React contexts
  │   ├── lib/         # Utility functions
  │   ├── App.tsx      # Main app with routing
  │   ├── main.tsx     # React entry point
  │   └── index.css    # Global styles and design tokens
  └── index.html       # HTML template
server/               # Express server for production
shared/               # Shared types and constants
```

## Design System

### Color Palette

- **Primary Accent**: Cyan (`oklch(0.56 0.19 191)`) - Modern tech vibrancy
- **Background**: Deep slate (`oklch(0.10 0.01 280)` in dark mode)
- **Foreground**: Light gray (`oklch(0.95 0.01 280)` in dark mode)
- **Borders**: Subtle gray (`oklch(0.20 0.01 280)` in dark mode)

### Typography

- **Headlines**: Crimson Text (serif) - Bold, 600-700 weight
- **Body**: Inter (sans-serif) - Regular, 400-500 weight
- **Monospace**: System monospace - Code and technical labels

### Components

- Elevated cards with subtle shadows and hover effects
- Geometric accent lines connecting sections
- Smooth 300-400ms transitions on all interactions
- Staggered animations for list items (50ms delay)

## Getting Started

### Prerequisites

- Node.js 22+
- pnpm 10+

### Local Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Build static site
pnpm build

# Preview production build
pnpm preview
```

## Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel automatically detects Vite configuration
4. Deploy with zero configuration

```bash
# Or use Vercel CLI
vercel deploy
```

### Deploy to GitHub Pages

1. Push code to GitHub repository
2. GitHub Actions automatically builds and deploys on push to `main`
3. Enable GitHub Pages in repository settings (source: GitHub Actions)
4. Site deploys to `https://username.github.io/shards-landing-page`

#### Manual GitHub Pages Deployment

```bash
# Build the project
pnpm build

# Deploy dist/public to gh-pages branch
git subtree push --prefix dist/public origin gh-pages
```

### Environment Variables

The project uses Manus-provided environment variables automatically:

- `VITE_ANALYTICS_ENDPOINT` - Analytics service endpoint
- `VITE_ANALYTICS_WEBSITE_ID` - Analytics website ID
- `VITE_APP_ID` - Application identifier
- `VITE_APP_TITLE` - Application title

## Features

### Hero Section

- Asymmetric layout with text on left, visual on right
- Background with abstract tech visualization
- Statistics showcase (17 repos, 3 layers, 49+ connectors)
- Call-to-action buttons

### Architecture Overview

- Three-card layout showcasing kernel, orchestration, and applications layers
- Icon-based visual hierarchy
- Hover effects with accent color transitions

### Portfolio Section

- Featured projects grid (2-column on desktop)
- Project cards with category tags and star counts
- Direct links to GitHub repositories

### Features Section

- 6-column grid of core capabilities
- Icon + title + description layout
- Covers kernel oversight, multi-LLM orchestration, autonomous systems, MCP integration, scalability, and production readiness

### Footer

- Multi-column layout with resources, community, and legal links
- Brand information and copyright
- Responsive grid that stacks on mobile

## Customization

### Update Colors

Edit CSS variables in `client/src/index.css`:

```css
:root {
  --primary: oklch(0.56 0.19 191); /* Cyan accent */
  --background: oklch(0.99 0 0);   /* Light background */
  /* ... other variables */
}

.dark {
  --background: oklch(0.10 0.01 280); /* Dark background */
  /* ... other variables */
}
```

### Update Content

Edit `client/src/pages/Home.tsx` to modify:

- Hero section copy and CTAs
- Architecture layer descriptions
- Portfolio projects
- Features list
- Footer links

### Add New Sections

1. Create new component in `client/src/components/`
2. Import and add to Home.tsx
3. Style using Tailwind utilities and custom CSS classes

## Performance

- Optimized bundle size: ~566 KB (minified)
- Gzip compression: ~165 KB
- Fast build time: ~4.6 seconds
- Smooth animations with GPU acceleration
- Responsive images with lazy loading

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

This is a professional landing page maintained by the Shards team. For contributions or issues, please contact the development team.

## License

MIT License - See LICENSE file for details

## Contact

- **GitHub**: https://github.com/shards-foundation
- **Email**: shards-inc@engineer.com
- **Website**: https://shards.inc

---

**Built with precision for enterprise AI infrastructure.**
