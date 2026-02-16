#!/bin/bash

echo "🚀 FSP App - GitHub Deployment Script"
echo "======================================"
echo ""

# Check if GitHub username is provided
if [ -z "$1" ]; then
  echo "❌ Error: Please provide your GitHub username"
  echo "Usage: ./deploy-to-github.sh YOUR_GITHUB_USERNAME"
  echo ""
  echo "Example: ./deploy-to-github.sh johndoe"
  exit 1
fi

GITHUB_USERNAME=$1
REPO_NAME="fsp-mobile-app"

echo "📋 Configuration:"
echo "   GitHub Username: $GITHUB_USERNAME"
echo "   Repository Name: $REPO_NAME"
echo ""
echo "⚠️  IMPORTANT: Make sure you've created the repository on GitHub first!"
echo "   Go to: https://github.com/new"
echo "   Repository name: $REPO_NAME"
echo "   Do NOT initialize with README"
echo ""
read -p "Press Enter when ready to continue..."

echo ""
echo "🔗 Adding remote repository..."
git remote add origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git" 2>/dev/null || echo "Remote already exists, updating..."
git remote set-url origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"

echo "🌿 Renaming branch to main..."
git branch -M main

echo "📤 Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
  echo ""
  echo "✅ SUCCESS! Code pushed to GitHub!"
  echo ""
  echo "🌐 Your repository: https://github.com/$GITHUB_USERNAME/$REPO_NAME"
  echo ""
  echo "📦 Next Step: Deploy to Vercel"
  echo "   1. Go to https://vercel.com"
  echo "   2. Sign in with GitHub"
  echo "   3. Click 'Add New' → 'Project'"
  echo "   4. Import '$REPO_NAME'"
  echo "   5. Framework: Vite"
  echo "   6. Click 'Deploy'"
  echo ""
  echo "   Your app will be live at: https://$REPO_NAME.vercel.app"
else
  echo ""
  echo "❌ Push failed. Please check:"
  echo "   1. Repository exists on GitHub"
  echo "   2. You have push access"
  echo "   3. Your GitHub credentials are configured"
  echo ""
  echo "   Run: git config --global user.name \"Your Name\""
  echo "   Run: git config --global user.email \"your.email@example.com\""
fi
