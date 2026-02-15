# FSP App - Deployment Guide

## 🚀 Quick Deploy to GitHub + Vercel

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `fsp-mobile-app` (or your preferred name)
3. Description: "FSP - Future of Sports Mobile App"
4. Visibility: Public or Private
5. **DO NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

### Step 2: Push Code to GitHub

After creating the repository, run these commands from the `fsp-app` directory:

```bash
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/fsp-mobile-app.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel

#### Option A: Deploy via Vercel Website (Recommended)

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New..." → "Project"
4. Import your `fsp-mobile-app` repository
5. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click "Deploy"
7. Wait 1-2 minutes for deployment to complete
8. Copy your deployment URL (e.g., `https://fsp-mobile-app.vercel.app`)

#### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (run from fsp-app directory)
vercel --prod
```

## 📱 Your Live App

After deployment, your app will be available at:
- **Vercel URL**: `https://YOUR-PROJECT-NAME.vercel.app`

## 🎯 Features Deployed

- ✅ 12 Mobile screens (Splash, Login, Sport Selection, Home, Play, etc.)
- ✅ Mobile-first design (480px max-width)
- ✅ Blue accent theme (#0EA5E9)
- ✅ Glass morphism UI
- ✅ Animated interactions
- ✅ Responsive navigation
- ✅ PWA-ready meta tags

## 🔄 Future Updates

To deploy updates:

```bash
# Make your changes, then:
git add .
git commit -m "Your update message"
git push

# Vercel will auto-deploy from GitHub (if connected)
```

## 🌐 Share Your App

Once deployed, share your Vercel link:
- Desktop users will see a mobile frame (480px centered)
- Mobile users will see full-screen app experience
- Works on all modern browsers

---

Need help? Check:
- Vercel Docs: https://vercel.com/docs
- GitHub Docs: https://docs.github.com
