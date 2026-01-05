# MD Fardous - Developer Portfolio

A modern, responsive portfolio website showcasing my skills, experience, and projects as a web developer. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Navigation**: Smooth scrolling navigation with active section highlighting
- **Project Showcase**: Detailed project pages with live demos and source code links
- **Contact Form**: Functional contact form with validation
- **Social Integration**: Links to GitHub, LinkedIn, and other social profiles
- **Performance Optimized**: Fast loading with Next.js optimization
- **SEO Friendly**: Proper meta tags and structured data

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Vercel (recommended)

## 📋 Sections

1. **Navigation Bar**: Responsive navigation with smooth scrolling
2. **Hero Section**: Introduction with professional photo and resume download
3. **About Me**: Detailed personal and professional background
4. **Skills**: Visual representation of technical and soft skills
5. **Education**: Academic background and achievements
6. **Experience**: Professional experience and project-based learning
7. **Projects**: Showcase of 3+ featured projects with detailed pages
8. **Contact**: Contact information and message form
9. **Footer**: Additional links and information

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/mdfardous98/developer-portfolio.git
cd developer-portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── projects/
│       └── [id]/
│           └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── public/
│   └── (images and assets)
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎨 Customization

### Personal Information

Update the following files with your information:

- `components/Hero.tsx` - Name, title, and introduction
- `components/About.tsx` - Personal background and journey
- `components/Contact.tsx` - Contact information
- `components/Projects.tsx` - Your projects data
- `app/projects/[id]/page.tsx` - Detailed project information

### Styling

- Colors: Modify `tailwind.config.js` for custom color scheme
- Fonts: Update font imports in `app/globals.css`
- Animations: Customize Framer Motion animations in components

### Images

- Replace placeholder images with your actual photos
- Add project screenshots to showcase your work
- Optimize images for web performance

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for any environment-specific configurations:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### SEO Configuration

Update metadata in `app/layout.tsx`:

```typescript
export const metadata = {
  title: "Your Name - Web Developer Portfolio",
  description: "Your description here",
};
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with automatic builds on push

### Other Platforms

- **Netlify**: Drag and drop the `out` folder after `npm run build`
- **GitHub Pages**: Use `next export` for static deployment
- **Custom Server**: Use `npm run build && npm start`

## 📊 Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- Core Web Vitals: Optimized for LCP, FID, and CLS
- Image Optimization: Next.js automatic image optimization
- Code Splitting: Automatic with Next.js App Router

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**MD Fardous**

- Email: mdjfardous@gmail.com
- Phone: +8801688645882
- LinkedIn: [linkedin.com/in/mdfardous](https://www.linkedin.com/in/mdfardous)
- GitHub: [github.com/mdfardous98](https://github.com/mdfardous98)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- React Icons for the icon library
- Vercel for hosting and deployment

---

⭐ Star this repository if you found it helpful!
