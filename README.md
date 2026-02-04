<div align="center">

# ✨ Rakib's Developer Portfolio

### A Modern, Interactive Portfolio Experience

[![Next.js](https://img.shields.io/badge/Next.js-16.1.4-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-0.176-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

<br/>

[🌐 Live Demo](https://portfolio-alpha-orpin-15.vercel.app/) • [📧 Contact Me](mailto:rakibislam4913@gmail.com) • [💼 LinkedIn](https://www.linkedin.com/in/md-mahfujur-rahman-rakib-944057196/)

<br/>

<img src="https://i.ibb.co/bRsNdfCg/Screenshot-2026-01-25-at-6-08-10-AM.png" alt="Portfolio Preview" width="800" style="border-radius: 10px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);" />

</div>

---

## 🎯 Overview

A cutting-edge developer portfolio that showcases my work, skills, and passion for building exceptional digital experiences. Built with the latest web technologies, this portfolio features immersive 3D backgrounds, buttery-smooth animations, and a fully responsive design that adapts beautifully to any device.

<br/>

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎨 Design & UI
- **3D Interactive Background** - Immersive Three.js particle system
- **Smooth Animations** - Framer Motion page transitions
- **Dark/Light Mode** - Seamless theme switching
- **Responsive Design** - Perfect on all devices
- **Modern Typography** - Clean, readable fonts

</td>
<td width="50%">

### ⚡ Performance & Tech
- **Next.js 16** - Latest App Router with Turbopack
- **React 19** - Cutting-edge React features
- **TypeScript** - Full type safety
- **Tailwind CSS 4** - Utility-first styling
- **Optimized Images** - Next.js Image optimization

</td>
</tr>
</table>

<br/>

## 🛠️ Tech Stack

<div align="center">

| Category | Technologies |
|----------|-------------|
| **Frontend** | Next.js, React, TypeScript, Tailwind CSS |
| **Animation** | Framer Motion, Three.js, React Three Fiber |
| **Styling** | Tailwind CSS, CSS Variables, PostCSS |
| **Development** | ESLint, Turbopack, VS Code |
| **Deployment** | Vercel |

</div>

<br/>

## 📂 Project Structure

```
portfolio/
├── 📁 public/              # Static assets
├── 📁 src/
│   ├── 📁 app/             # Next.js App Router
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   └── coming-soon/    # Coming soon page
│   ├── 📁 components/      # React components
│   │   ├── 📁 sections/    # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── 📁 ui/          # Reusable UI components
│   │   ├── ThreeBackground.tsx
│   │   ├── PageTransition.tsx
│   │   ├── SoundProvider.tsx
│   │   └── ThemeProvider.tsx
│   ├── 📁 content/         # Content data
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── services.ts
│   │   ├── testimonials.ts
│   │   └── links.ts
│   ├── 📁 lib/             # Utility functions
│   │   └── variants.ts     # Animation variants
│   └── 📁 types/           # TypeScript types
├── eslint.config.mjs
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

<br/>

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0 or later
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rakib-codee/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) 🎉

### Build for Production

```bash
npm run build
npm run start
```

<br/>

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

<br/>

## 🎨 Customization

### Update Personal Information

Edit the content files in `src/content/`:

- **`links.ts`** - Social links, email, resume
- **`projects.ts`** - Project showcase data
- **`skills.ts`** - Technical skills
- **`services.ts`** - Services offered
- **`testimonials.ts`** - Client testimonials

### Modify Theme Colors

Update CSS variables in `src/app/globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --primary: #3b82f6;
  /* ... more variables */
}
```

<br/>

## 🌟 Featured Projects

<table>
<tr>
<td width="33%" align="center">
<img src="https://i.ibb.co/5hrWGtHg/Screenshot-2026-01-25-at-5-34-36-AM.png" width="200" style="border-radius: 8px"/>
<br/>
<strong>UrbanAI</strong>
<br/>
<sub>AI-Powered Smart Cities Platform</sub>
</td>
<td width="33%" align="center">
<img src="https://i.ibb.co/Q7MSp8VG/Picture1.jpg" width="200" style="border-radius: 8px"/>
<br/>
<strong>FaceNetGrid</strong>
<br/>
<sub>Distributed Face Recognition System</sub>
</td>
<td width="33%" align="center">
<img src="https://i.ibb.co/BHvZXptJ/Screenshot-2026-01-25-at-6-12-50-AM.png" width="200" style="border-radius: 8px"/>
<br/>
<strong>ReflectHub</strong>
<br/>
<sub>Life Lessons Community Platform</sub>
</td>
</tr>
</table>

<br/>

## 📊 Services Offered

- 🖥️ **Frontend Engineering** - React, Next.js, TypeScript
- ☕ **Java Development** - Spring Boot, Microservices
- 🐍 **Python Development** - Django, FastAPI, Flask
- 🔧 **Full-Stack Development** - End-to-end solutions
- 🎨 **UI/UX Design** - Figma, Design Systems
- 🗄️ **Database & DevOps** - PostgreSQL, Docker, AWS

<br/>

## 📞 Contact

<div align="center">

[![Email](https://img.shields.io/badge/Email-rakibislam4913%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:rakibislam4913@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/md-mahfujur-rahman-rakib-944057196/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Rakib-codee)

</div>

<br/>

## 📄 License

Copyright © 2026 **Md Mahfujur Rahman Rakib**

This project is open source and available under the [MIT License](LICENSE).

<br/>

---

<div align="center">

### ⭐ If you found this helpful, please give it a star!

Made with ❤️ by **Md Mahfujur Rahman Rakib**

<br/>

[![Portfolio](https://img.shields.io/badge/🌐_Visit_Portfolio-000000?style=for-the-badge)](https://portfolio-alpha-orpin-15.vercel.app/)

</div>
