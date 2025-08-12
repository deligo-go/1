# VIRUZVERSE - Futuristic Digital Solutions Platform

## Overview

VIRUZVERSE is a full-stack web application built as a futuristic digital solutions platform. The project showcases company solutions, VR/3D work, and features a dedicated products section for displaying developed applications. The application follows a modern stack architecture with React frontend, Express backend, and PostgreSQL database, all designed with a sleek dark theme and gradient-based UI.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: Radix UI components with shadcn/ui design system
- **Styling**: CSS-in-JS approach using CSS custom properties and Tailwind CSS
- **Typography**: Poppins font family from Google Fonts

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js with middleware for JSON parsing and CORS
- **API Design**: RESTful API with structured route handlers
- **Request Logging**: Custom middleware for API request/response logging
- **Error Handling**: Centralized error handling middleware
- **Development**: Hot reloading with Vite integration in development mode

### Database Layer
- **Database**: PostgreSQL (configured for production)
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema generation
- **Connection**: Neon Database serverless PostgreSQL for cloud deployment
- **Storage Abstraction**: Interface-based storage layer with in-memory implementation for development

### Data Models
- **Users**: Authentication and role-based access (id, username, email, password, role)
- **Categories**: Product categorization system (id, name, description, slug)
- **Products**: Core product entities with rich metadata (title, descriptions, category, tags, tech stack, images, URLs, status, metrics)

### Authentication & Authorization
- **Session Management**: Local storage-based user session persistence
- **Authentication Flow**: Login/register mutations with React Query
- **Role-Based Access**: User roles for different permission levels
- **Form Validation**: React Hook Form with Zod schema validation

### UI/UX Design System
- **Theme**: Dark mode with futuristic gradient accents
- **Color Palette**: Deep blacks (#0a0a0a) with gradient transitions from #a34b6e to #6e4bc3 to #45b7d1
- **Components**: Comprehensive set of reusable UI components (buttons, cards, forms, modals)
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Animations**: Smooth transitions and hover effects with CSS transforms

### Development Workflow
- **Build System**: Vite for fast development and optimized production builds
- **Type Safety**: Full TypeScript implementation across frontend and backend
- **Code Quality**: ESBuild for production bundling
- **Path Aliases**: Configured import aliases for clean module resolution

## External Dependencies

### Core Dependencies
- **Database**: Neon Database (PostgreSQL serverless)
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **UI Components**: Radix UI primitives for accessible component foundation
- **State Management**: TanStack React Query for server state synchronization
- **Form Handling**: React Hook Form with Hookform Resolvers
- **Validation**: Zod for runtime type validation and schema generation

### Styling & Design
- **CSS Framework**: Tailwind CSS for utility-first styling
- **Component Variants**: Class Variance Authority (CVA) for component styling variants
- **CSS Utilities**: clsx for conditional class composition
- **Fonts**: Google Fonts (Poppins) for typography

### Development Tools
- **Build Tool**: Vite with React plugin and runtime error overlay
- **TypeScript**: Full type checking and compilation
- **PostCSS**: CSS processing with Tailwind and Autoprefixer
- **Replit Integration**: Cartographer plugin for Replit environment support

### Runtime Libraries
- **Date Handling**: date-fns for date manipulation utilities
- **UI Enhancements**: 
  - Embla Carousel for image carousels
  - cmdk for command palette functionality
  - Lucide React for consistent iconography
- **Utilities**: nanoid for unique ID generation