# Technical Specification
## Department of Genetic Engineering & Biotechnology Website

---

## Component Inventory

### shadcn/ui Components (Built-in)

| Component | Purpose | Customization |
|-----------|---------|---------------|
| Button | CTAs, navigation actions | Custom colors, sharp corners |
| Card | Program cards, news cards | Dark theme styling |
| Badge | Tags, labels | Cyan accent color |
| Separator | Section dividers | Subtle opacity |
| Sheet | Mobile navigation | Dark background |
| ScrollArea | Event lists | Custom scrollbar |

### Third-Party Registry Components

None required - all effects will be custom-built for maximum performance and design fidelity.

### Custom Components

| Component | Purpose | Location |
|-----------|---------|----------|
| ParticleCanvas | Hero background with DNA-inspired particles | `components/ParticleCanvas.tsx` |
| AnimatedText | Text reveal animations | `components/AnimatedText.tsx` |
| ScrollReveal | Scroll-triggered animations wrapper | `components/ScrollReveal.tsx` |
| CountUp | Animated number counter | `components/CountUp.tsx` |
| GradientText | Gradient text effect | `components/GradientText.tsx` |
| GlowCard | Card with glow hover effect | `components/GlowCard.tsx` |

---

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Particle Background | Canvas API + RAF | Custom canvas component with requestAnimationFrame, particle system with connections | High |
| Hero Text Reveal | Framer Motion | AnimatePresence + staggered children, word-by-word reveal | Medium |
| Scroll-Triggered Reveals | Framer Motion | useInView hook + motion variants | Medium |
| Nav Link Underline | CSS | Pseudo-element with transform scaleX | Low |
| Card Hover Effects | CSS + Framer Motion | Transform translateY, border-color transition | Low |
| Stats Counter | Custom Hook | useCountUp hook with requestAnimationFrame | Medium |
| Button Fill Animation | CSS | Background transition on hover | Low |
| Mobile Menu | Framer Motion | AnimatePresence + slide animation | Medium |
| Image Scale Hover | CSS | Transform scale with overflow hidden | Low |
| Scroll Indicator Bounce | CSS | Keyframe animation infinite | Low |
| Faculty Photo Grayscale | CSS | Filter transition on hover | Low |
| Section Parallax | Framer Motion | useScroll + useTransform for subtle parallax | Medium |

---

## Animation Library Choices

### Primary: Framer Motion
- **Rationale**: Best React integration, declarative API, excellent performance
- **Use for**: Component animations, scroll-triggered reveals, page transitions, stagger effects

### Secondary: CSS Animations
- **Rationale**: Maximum performance for simple effects
- **Use for**: Hover states, transitions, infinite animations (scroll indicator)

### Canvas API
- **Rationale**: Required for particle system performance
- **Use for**: Hero background particle animation

---

## Project File Structure

```
/mnt/okcomputer/output/app/
├── public/
│   ├── images/
│   │   ├── hero-bg.jpg
│   │   ├── dna-helix.png
│   │   ├── facilities/
│   │   │   ├── lab-1.jpg
│   │   │   ├── lab-2.jpg
│   │   │   └── lab-3.jpg
│   │   ├── faculty/
│   │   │   ├── faculty-1.jpg
│   │   │   ├── faculty-2.jpg
│   │   │   ├── faculty-3.jpg
│   │   │   └── faculty-4.jpg
│   │   └── news.jpg
│   └── logo.png
├── src/
│   ├── components/
│   │   ├── ui/                    # shadcn components
│   │   ├── ParticleCanvas.tsx     # Hero particle background
│   │   ├── AnimatedText.tsx       # Text reveal animations
│   │   ├── ScrollReveal.tsx       # Scroll-triggered wrapper
│   │   ├── CountUp.tsx            # Number counter
│   │   ├── GradientText.tsx       # Gradient text
│   │   ├── GlowCard.tsx           # Glow effect card
│   │   ├── Navigation.tsx         # Header navigation
│   │   ├── MobileMenu.tsx         # Mobile nav menu
│   │   └── Footer.tsx             # Footer component
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Programs.tsx
│   │   ├── Research.tsx
│   │   ├── Facilities.tsx
│   │   ├── Faculty.tsx
│   │   ├── NewsEvents.tsx
│   │   └── Contact.tsx
│   ├── hooks/
│   │   ├── useCountUp.ts          # Counter animation hook
│   │   ├── useScrollProgress.ts   # Scroll progress tracking
│   │   └── useMousePosition.ts    # Mouse position for particles
│   ├── lib/
│   │   └── utils.ts               # Utility functions
│   ├── types/
│   │   └── index.ts               # TypeScript types
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## Dependencies

### Core (Auto-installed by init)
- React 18+
- TypeScript
- Vite
- Tailwind CSS 3.4+
- shadcn/ui components

### Additional Required
```bash
npm install framer-motion lucide-react
```

### Optional (if needed)
```bash
npm install clsx tailwind-merge
```

---

## Implementation Notes

### Particle Canvas Performance
- Use `requestAnimationFrame` for smooth 60fps animation
- Limit particles to 80-100 for desktop, 40 for mobile
- Use `will-change: transform` on particles
- Implement connection limit (max 3 per particle)
- Use squared distance for performance (avoid sqrt)

### Scroll Animation Performance
- Use `transform` and `opacity` only
- Implement `useInView` with `once: true` for one-time triggers
- Add `will-change` to animated elements
- Respect `prefers-reduced-motion`

### Color System in Tailwind
Extend tailwind.config.js:
```javascript
colors: {
  background: {
    primary: '#0a0e1f',
    secondary: '#050811',
  },
  accent: {
    cyan: '#00d4ff',
    purple: '#7c3aed',
    green: '#10b981',
  },
  text: {
    primary: '#ffffff',
    secondary: '#94a3b8',
    muted: '#64748b',
  }
}
```

---

## Responsive Strategy

### Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1440px

### Mobile Optimizations
- Reduce particle count
- Simplify animations
- Stack grid layouts
- Hide decorative elements
- Increase touch targets

---

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus visible states
- `prefers-reduced-motion` support
- Color contrast compliance (WCAG AA)
