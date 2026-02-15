# FSP - Future of Sports 🏆

A premium mobile-first sports challenge and wagering app built with React and Vite.

![FSP App](https://img.shields.io/badge/Mobile-First-0EA5E9?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite)

## ✨ Features

### 📱 12 Complete Screens
- **Splash Screen** - Animated logo with diagonal slash effect
- **Login/Signup** - User onboarding with form validation
- **Sport Selection** - Pick primary and secondary sports (searchable)
- **Home Screen** - Stories, hero challenges, wager strip, trending pools
- **Play/Camera** - Live challenge with timer, rules modal, sport selector
- **Post-Session** - Score display, share functionality, challenge friends
- **Profile** - Stats, leaderboards, sports badges
- **Pools Discovery** - Trending pools with join functionality
- **Earn/Shop** - Golden tickets, FSP score, brand deals, travel offers
- **Challenge Friend** - Wager setup with Apple Pay integration

### 🎨 Design System
- **Accent Color**: Electric cyan-blue (#0EA5E9)
- **Glass Morphism**: Blur effects with semi-transparent panels
- **Typography**: Chakra Petch headings + Inter body
- **Animations**: Smooth transitions and hover effects
- **Mobile-First**: 480px max-width, centered on desktop

### 🔧 Technical Highlights
- ⚡ Built with Vite for lightning-fast HMR
- 🎯 React Router for seamless navigation
- 📐 Component-based architecture
- 🎭 Reusable UI components (Button, InputField, PoolCard, etc.)
- 📱 PWA-ready with mobile app meta tags
- 🚫 No text selection, pull-to-refresh disabled for native feel

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📂 Project Structure

```
fsp-app/
├── src/
│   ├── components/
│   │   ├── layout/          # AppHeader, NavBar
│   │   ├── ui/              # Button, InputField, PoolCard, SportTile, etc.
│   │   └── features/        # Feature-specific components
│   ├── pages/               # All 12 screen components
│   │   ├── SplashScreen.jsx
│   │   ├── LoginScreen.jsx
│   │   ├── HomeScreen.jsx
│   │   └── ...
│   ├── App.jsx              # Main app with routing
│   ├── index.css            # Global styles & design system
│   └── main.jsx             # Entry point
├── public/                  # Static assets
└── index.html               # HTML template with PWA meta tags
```

## 🎯 Routing

```
/                    → Splash Screen
/login               → Login/Signup
/onboarding/primary  → Pick Primary Sport
/onboarding/secondary → Pick Other Sports (max 4)
/home                → Home Screen
/play                → Play/Camera Screen
/post-session        → Post-Session Results
/profile             → User Profile
/pools               → Pools Discovery
/earn                → FI Earn/Shop
/challenge           → Challenge Friend
```

## 🎨 Design Tokens

```css
/* Colors */
--color-accent: #0EA5E9;      /* Primary blue */
--color-red: #EE3524;          /* Secondary red */
--color-bg: #0a0a0a;           /* Background */
--color-text-white: #FFFFFF;   /* White text */
--color-text-gray: #A0A0A0;    /* Gray text */

/* Typography */
--font-heading: 'Chakra Petch', sans-serif;
--font-body: 'Inter', sans-serif;

/* Effects */
--shadow-glow: 0 0 20px rgba(14, 165, 233, 0.3);
```

## 📱 Mobile-First Features

- Max-width: 480px (mobile device width)
- Centered on desktop with shadow frame
- No pinch-zoom (user-scalable=no)
- Full-screen capable on mobile
- No text selection (except inputs)
- No pull-to-refresh
- Tap highlight disabled

## 🌐 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions to GitHub and Vercel.

## 🛠️ Tech Stack

- **Framework**: React 18.3
- **Build Tool**: Vite 5.4
- **Routing**: React Router DOM 7.1
- **Styling**: CSS Modules + Custom Properties
- **Fonts**: Google Fonts (Chakra Petch, Inter)

## 📄 License

Built for FSP - Future of Sports

---

**Made with 🏆 by Claude Sonnet 4.5**
