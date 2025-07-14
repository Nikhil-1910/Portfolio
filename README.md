# Nikhil's Modern Portfolio

[![View Portfolio](https://img.shields.io/badge/View%20Live-Portfolio-green?style=for-the-badge)](https://Nikhil-1910.github.io/Portfolio/)

A modern, responsive portfolio website built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, and **shadcn-ui**. Easily customizable and deployable to GitHub Pages.

---

## 🚀 Features
- Fast, modern React + Vite setup
- Beautiful UI with shadcn-ui and Tailwind CSS
- Responsive design for all devices
- Project, skills, about, and contact sections
- Easy deployment to GitHub Pages

---

## 🛠️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation
```bash
# Clone the repository
git clone https://github.com/<your-username>/Portfolio.git
cd Portfolio

# Install dependencies
npm install
```

### Development
```bash
npm run dev
```
Visit [http://localhost:8080](http://localhost:8080) to view the app.

---

## 📦 Building for Production
```bash
npm run build
```
The production-ready files will be in the `dist/` folder.

---

## 🌐 Deploying to GitHub Pages
1. **Update the Vite base path** (already set to `/Portfolio/` in `vite.config.ts`).
2. **Deploy:**
   ```bash
   npm run deploy
   ```
   This will build the project and push the `dist/` folder to the `gh-pages` branch.
3. **Configure GitHub Pages:**
   - Go to your repo on GitHub
   - Settings > Pages
   - Set source to `gh-pages` branch, root folder
   - Your site will be live at: `https://<your-username>.github.io/Portfolio/`

---

## 📝 Customization
- Edit content in `src/components/` and `src/pages/` to personalize your site.
- Update images and assets in the `public/` folder.
- Change theme and styles via Tailwind and shadcn-ui components.

---

## 🙏 Credits
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)

---

## 📄 License
MIT

