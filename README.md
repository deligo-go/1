# VIRUZVERSE Company Website

A modern, responsive company website showcasing VIRUZVERSE's products, services, and team. Built with React, Vite, and static data for optimal performance.

## Features

- 🎨 Modern UI with responsive design
- 📦 Product showcase with detailed views
- 👥 Team profiles and information
- 🔍 Search and filtering capabilities
- 📱 Mobile-optimized experience
- ⚡ Fast loading with static data
- 🌟 3D graphics and animations

## Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Routing**: Wouter
- **State Management**: TanStack Query
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber
- **Icons**: Lucide React, React Icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd comanywebsite
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run check` - TypeScript type checking

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom hooks
│   │   ├── lib/            # Utilities and API
│   │   ├── data/           # Static data
│   │   └── assests/        # Images and assets
│   ├── public/             # Public assets
│   └── index.html          # HTML template
├── dist/                   # Build output
├── vercel.json             # Vercel configuration
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies and scripts
```

## Deployment

### Vercel (Recommended)

This project is optimized for Vercel deployment:

1. **Via Vercel CLI**:
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Via Git Integration**:
   - Push your code to GitHub/GitLab/Bitbucket
   - Connect your repository to Vercel
   - Vercel will automatically deploy on every push

3. **Manual Upload**:
   ```bash
   npm run build
   # Upload the `dist` folder to your hosting provider
   ```

### Environment Variables

No environment variables are required as this is a static site with embedded data.

### Build Configuration

The project uses:
- Build command: `npm run build`
- Output directory: `dist`
- Node version: 18+

## Customization

### Adding Products

Edit `client/src/data/staticData.js` to add, modify, or remove products:

```javascript
export const products = [
  {
    id: 'unique-id',
    title: 'Product Name',
    slug: 'product-slug',
    description: 'Product description',
    // ... other fields
  }
];
```

### Updating Team Information

Edit the team data in `client/src/pages/Teams.jsx` to update team member information.

### Styling

- Tailwind CSS classes can be customized in `tailwind.config.js`
- Global styles are in `client/src/index.css`
- Component-specific styles use CSS modules or inline styles

## Performance Optimizations

- Code splitting with dynamic imports
- Image optimization
- Bundle size optimization with manual chunks
- Static data for fast loading
- Responsive images

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Contact

For questions or support, contact the VIRUZVERSE team at admin@viruzverse.com.
