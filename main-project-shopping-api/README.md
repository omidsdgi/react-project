# 🛍️ Shopping App – Main Project

A modern, scalable e-commerce front-end built with **Next.js** and **React**, utilizing **hybrid rendering** (SSR + CSR), **Context API** for global state management, and integrated API communication. The app includes client-side shopping cart functionality and basic authentication handling.

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **UI Library**: [React](https://react.dev/)
- **Routing**: Next.js File-based Routing
- **Rendering**: Server-Side Rendering (SSR) + Client-Side Rendering (CSR)
- **State Management**: React Context API + useReducer
- **Authentication**: Basic client-side auth handling
- **Styling**: [e.g., Tailwind CSS, SCSS, CSS Modules]

## 📦 Features

- ✅ Hybrid SSR/CSR rendering for performance and SEO
- 🛒 Centralized shopping cart logic using Context API
- 🔐 Auth support (login state tracking on client side)
- 🔗 Integrated with external API for dynamic content
- ♻️ Reusable and scalable component structure

## 📁 Project Structure

main-project-shopping-api/
├── public/ # Static assets (icons, images, etc.)
├── src/
│ ├── components/ # Shared and reusable UI components
│ ├── context/ # App-wide Context providers (cart, auth, etc.)
│ ├── hooks/ # Custom reusable hooks
│ ├── pages/ # Next.js routing pages (home, product, login, etc.)
│ ├── services/ # API abstraction layer (Axios or Fetch-based)
│ ├── styles/ # Global and modular styles
│ └── utils/ # Utility functions
├── .gitignore
├── next.config.js
├── package.json
└── README.md


## Getting Started

git clone https://github.com/omidsdgi/react-project.git
cd react-project/main-project-shopping-api

Install Dependencies
npm run dev
# or
yarn dev

Start Development Server

npm run dev
# or
yarn dev

bun dev
```

🔧 Project Entry Points
Main page: You can start editing the UI from src/pages/index.tsx.
The app supports auto-refresh as you develop.

Routing: All pages inside src/pages/ are mapped to route URLs. For example:

src/pages/index.tsx → /

src/pages/about-us.tsx` → `/about-us`

src/pages/products/[slug].tsx → /products/my-product

 The `/about-us` route provides static content or team/company info. You can edit it in `src/pages/about-us.tsx`.

API Communication: External API requests are handled using helper functions in src/services/, abstracting fetch or Axios calls.

Shopping Cart: Implemented using React's useReducer and Context API, the global cart state is accessible throughout the app.

Authentication: Basic client-side login state is managed using authContext (stored in src/context/).

Global Styles: You can edit your global styling rules in src/styles/global.css or relevant SCSS/Tailwind/CSS Modules depending on your setup.

📂 API Routes (Optional)
Although this project is front-end-focused, the pages/api/ directory is available if you choose to add API routes. For example:

src/pages/api/hello.ts → http://localhost:3000/api/hello

You can remove or customize this directory if you're using an external API (e.g., Strapi, Express, or Firebase).

🖋 Font Optimization
This project uses next/font to automatically optimize and load custom fonts, improving performance and layout stability.

📦 Deployment
To deploy your app with ease, consider using Vercel, the official platform by the creators of Next.js:
