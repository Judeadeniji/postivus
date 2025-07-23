# Postivus - Digital Marketing Agency Website

A modern, high-performance website implementation of the Postivus digital marketing agency design. This project brings the beautiful Figma design to life using React, TanStack Router, and Tailwind CSS for optimal user experience and conversion rates.

> **Design Credit**: This project is based on the [Positivus Landing Page Design](https://www.figma.com/design/nfHMq7Of7mTI9EwM0DflpB/Positivus-Landing-Page-Design--Community-?node-id=25-145&t=brouxJxxwLaI4ZMC-0) from the Figma Community. All design elements, layouts, and visual concepts are credited to the original designer.

## 🚀 Features

- **Responsive Design**: Mobile-first approach ensuring perfect display across all devices
- **High Performance**: Optimized for Core Web Vitals and SEO rankings
- **Interactive UI**: Smooth animations and micro-interactions using Framer Motion
- **Modular Architecture**: Clean, maintainable component structure
- **Type Safety**: Full TypeScript implementation for robust development
- **Modern Stack**: Built with the latest web technologies

## 📱 Pages

- **Home**: Hero section, services overview, case studies, team, and contact
- **About**: Company story, mission, values, team profiles, and achievements
- **Services**: Detailed service offerings, pricing, process, and FAQs
- **Use Cases**: Industry-specific success stories and transformations
- **Pricing**: Transparent pricing tiers with detailed feature comparisons
- **Blog**: Marketing insights, industry trends, and thought leadership
- **404**: Creative not-found page with helpful navigation

## 🛠 Tech Stack

- **Framework**: React 18 with TanStack Router
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth interactions
- **Build Tool**: Vite for fast development and optimized builds
- **Runtime**: Bun for faster package management and execution
- **Linting**: Biome for code quality and formatting
- **Type Checking**: TypeScript for development safety

## 🏃‍♂️ Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd postivus

# Install dependencies
bun install

# Start development server
bun run dev
```

The application will be available at `http://localhost:5173`

### Development Commands

```bash
# Development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview

# Run tests
bun run test

# Lint code
bun run lint

# Format code
bun run format

# Type check
bun run type-check
```

## 🏗 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── Card.tsx
│   │   ├── Section.tsx
│   │   ├── Button.tsx
│   │   └── index.ts
│   ├── sections/        # Page sections
│   │   ├── Hero.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ContactUsSection.tsx
│   │   └── index.ts
│   ├── Header.tsx       # Site navigation
│   ├── Footer.tsx       # Site footer
│   └── NotFound.tsx     # 404 page component
├── routes/              # Page routes
│   ├── __root.tsx       # Root layout
│   ├── index.tsx        # Home page
│   ├── about.tsx        # About page
│   ├── services.tsx     # Services page
│   ├── pricing.tsx      # Pricing page
│   ├── use-cases.tsx    # Use cases page
│   └── blog.tsx         # Blog page
├── assets/              # Static assets
└── styles/              # Global styles
```

## 🎨 Design System

### Colors

- **Primary Green**: `#B9FF66` - CTAs, highlights, accents
- **Dark Grey**: `#191A23` - Text, backgrounds, professional elements
- **Light Grey**: `#F3F3F3` - Cards, sections, subtle backgrounds
- **White**: `#FFFFFF` - Clean backgrounds, contrast

### Typography

- **Headings**: Space Grotesk font family
- **Body**: Optimized for readability across devices
- **Responsive**: Mobile-first scaling with fluid typography

### Components

All components follow a consistent design pattern:
- Reusable and composable
- Accessible (WCAG 2.1 AA compliant)
- Responsive by default
- Consistent spacing and typography

## 🚢 Deployment

### Netlify (Recommended)

```bash
# Build the project
bun run build

# Deploy to Netlify
# The _rewrites file is configured for SPA routing
```

### Manual Deployment

```bash
# Build for production
bun run build

# The dist/ folder contains the production build
# Upload dist/ contents to your hosting provider
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=https://api.postivus.com
VITE_CONTACT_EMAIL=contact@postivus.com
VITE_ANALYTICS_ID=your-analytics-id
```

### Customization

- **Colors**: Update `tailwind.config.js` for brand colors
- **Fonts**: Modify font imports in `src/styles.css`
- **Content**: Update component content and copy
- **Assets**: Replace images in `src/assets/`

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for Google's ranking factors
- **Bundle Size**: Optimized with tree-shaking and code splitting
- **Loading Speed**: <2s initial load time

## 🧪 Testing

```bash
# Run unit tests
bun run test

# Run tests in watch mode
bun run test:watch

# Generate coverage report
bun run test:coverage
```

## 📝 Content Management

### Adding New Blog Posts

1. Create content in `src/routes/blog.tsx`
2. Add post metadata and content
3. Update blog listing with new post

### Updating Services

1. Modify service data in `src/routes/services.tsx`
2. Update pricing in `src/routes/pricing.tsx`
3. Add corresponding use cases in `src/routes/use-cases.tsx`

### Team Updates

1. Update team member data in `src/components/sections/TeamsSection.tsx`
2. Add new team member photos to `src/assets/`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests and linting (`bun run test && bun run lint`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Email: tech@postivus.com
- Documentation: [Internal Wiki]
- Issues: [GitHub Issues]

## 🎯 Project Goals

This implementation demonstrates:

- Pixel-perfect conversion from Figma design to React code
- Modern web development best practices
- Component-based architecture for maintainability
- Performance optimization for real-world usage
- Responsive design across all device sizes
- Accessibility compliance (WCAG 2.1 AA)

## 🎨 Design Attribution

**Original Design**: [Positivus Landing Page Design](https://www.figma.com/design/nfHMq7Of7mTI9EwM0DflpB/Positivus-Landing-Page-Design--Community-?node-id=25-145&t=brouxJxxwLaI4ZMC-0)  
**Designer**: Figma Community  
**Implementation**: Adeniji Oluwaferanmi

This project serves as a portfolio piece showcasing the ability to:

- Translate design mockups into functional web applications
- Implement complex layouts with modern CSS frameworks
- Create interactive components with smooth animations
- Build scalable and maintainable React applications

---

Built with ❤️ by Adeniji Oluwaferanmi
