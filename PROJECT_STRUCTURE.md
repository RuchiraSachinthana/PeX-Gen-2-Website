# PEX Solutions - Project Structure

## 📁 Directory Structure

```
pex-gen-2/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with providers
│   ├── page.tsx                 # Home page (PEX Food)
│   ├── globals.css              # Global styles with Tailwind
│   ├── about/page.tsx           # About page
│   ├── blog/page.tsx            # Blog page
│   ├── contact/page.tsx         # Contact page
│   ├── features/page.tsx        # Features page
│   ├── pex-food/page.tsx        # PEX Food dedicated page
│   ├── pex-gen/page.tsx         # PEX Gen page
│   └── pex-quality/page.tsx     # PEX Quality page
│
├── components/                   # React components
│   ├── Navbar.tsx               # Main navigation with dropdown
│   ├── LanguageButton.tsx       # Language selector
│   └── PageWrapper.tsx          # Page transition wrapper
│
├── context/                      # React Context providers
│   └── LanguageProvider.tsx     # i18n context (5 languages)
│
├── lib/                          # Utility libraries
│   └── translations.ts          # Translation strings
│
├── public/                       # Static assets
│   ├── logo.webp                # PEX logo
│   ├── pex_food_header.webp     # Hero background image
│   └── [other assets]
│
└── [config files]               # Next.js, TypeScript, Tailwind configs
```

## 🏗️ Architecture Principles

### **Modern Next.js 16 App Router**

- ✅ Server Components by default
- ✅ Client Components with `"use client"` directive
- ✅ File-based routing
- ✅ Layouts and nested routing

### **Styling Approach**

- ✅ Tailwind CSS v4 with `@import "tailwindcss"`
- ✅ Glassmorphism design (`backdrop-blur-md`, `bg-white/10`)
- ✅ Responsive design (mobile-first)
- ✅ CSS variables for theming

### **State Management**

- ✅ React Context API for global state (language)
- ✅ Component-level state with `useState`
- ✅ Memoization with `useMemo` for performance

### **Animation**

- ✅ Framer Motion for smooth transitions
- ✅ Page transitions with `PageWrapper`
- ✅ Micro-interactions (hover, dropdown animations)

### **Internationalization**

- ✅ 5 languages: English, Spanish, French, German, Japanese
- ✅ Context-based translation system
- ✅ Language switcher with flag emojis

### **TypeScript**

- ✅ Strict type checking
- ✅ Interface definitions for props
- ✅ Path aliases (`@/` for root)

## 📄 Page Structure

### Home Page (`/`)

- **Purpose**: Landing page showcasing PEX Food
- **Features**: Hero section, animated background, logo, CTA button
- **Content**: Full-screen hero with zoom animation

### PEX Product Pages

- **PEX Food** (`/pex-food`): Food technology solutions
- **PEX Gen** (`/pex-gen`): Next-generation solutions
- **PEX Quality** (`/pex-quality`): Quality assurance

### Static Pages

- **About** (`/about`): Company information
- **Features** (`/features`): Product features
- **Blog** (`/blog`): News and updates
- **Contact** (`/contact`): Contact form

## 🎨 Design System

### Colors

- **Primary**: Teal (`teal-600`, `teal-900`)
- **Secondary**: Cyan (`cyan-400`)
- **Neutral**: Gray scale
- **Overlay**: White with opacity (`white/10`, `white/20`)

### Typography

- **Headings**: Bold, large sizes (6xl, 7xl)
- **Body**: Medium weight, readable sizes
- **Fonts**: Geist Sans, Geist Mono

### Spacing

- **Container**: `max-w-4xl` for content
- **Padding**: Responsive (`px-4`, `py-20`)
- **Gaps**: Consistent spacing (`space-x-6`, `gap-2`)

## 🔧 Component Patterns

### Client Components

All interactive components use `"use client"`:

- Pages with hooks (`useTranslation`, `usePathname`)
- Components with animations (Framer Motion)
- Context providers

### Server Components

- Root layout (until providers)
- Metadata generation
- Static content (when applicable)

### Reusable Components

- **NavLink**: Consistent navigation item style
- **PageWrapper**: Standardized page transitions
- **LanguageButton**: Centralized language selection

## 🚀 Performance Optimizations

1. **Memoization**: `useMemo` for expensive computations
2. **Image Optimization**: Next.js `<Image>` component
3. **Code Splitting**: Automatic with App Router
4. **Lazy Loading**: Dynamic imports when needed
5. **CSS Optimization**: Tailwind JIT compilation

## 📱 Responsive Design

- **Mobile**: Dropdown and optimized layouts
- **Tablet**: Enhanced spacing and layouts
- **Desktop**: Full navigation, side-by-side content

## 🌐 SEO Optimization

- ✅ Metadata API for title, description
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy

## 🔄 Navigation Flow

```
Home (/) → Dropdown → [PEX Gen, PEX Quality, PEX Food]
         → Top Nav → [About, Features, Blog, Contact]
         → Language Button → [EN, ES, FR, DE, JP]
```

## 🛠️ Development Guidelines

### Adding New Pages

1. Create `app/[route]/page.tsx`
2. Add `"use client"` if using hooks
3. Wrap in `<PageWrapper>` for transitions
4. Add translations to `lib/translations.ts`
5. Update navbar if needed

### Adding New Languages

1. Add language object to `lib/translations.ts`
2. Add flag emoji to `LanguageButton.tsx`
3. Update language array in provider

### Styling Best Practices

- Use Tailwind utility classes
- Follow glassmorphism pattern
- Maintain consistent spacing
- Use responsive utilities (`sm:`, `md:`, `lg:`)

## 📦 Dependencies

### Core

- **Next.js**: 16.0.1 (App Router)
- **React**: 19.2.0
- **TypeScript**: 5.x

### Styling

- **Tailwind CSS**: 4.1.16
- **PostCSS**: 8.5.6

### Animation

- **Framer Motion**: 12.23.24

## ✅ Code Quality

- ✅ TypeScript strict mode enabled
- ✅ ESLint configured
- ✅ Consistent file naming conventions
- ✅ Proper component structure
- ✅ Clean imports organization

## 🐛 Known Limitations

- Mobile navigation could be enhanced with hamburger menu
- No backend/API integration yet
- Static translation system (no CMS)
- Limited accessibility features (can be improved)

## 🎯 Future Enhancements

1. Add mobile hamburger menu
2. Implement dark mode toggle
3. Add animation presets/themes
4. Connect to CMS for translations
5. Add more page content sections
6. Implement form validation
7. Add loading states
8. Enhance accessibility (ARIA labels)
9. Add unit tests
10. Set up CI/CD pipeline
