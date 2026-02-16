@echo off
echo ========================================
echo FSP App - GitHub Deployment Script
echo ========================================
echo.

if "%1"=="" (
  echo ERROR: Please provide your GitHub username
  echo Usage: deploy-to-github.bat YOUR_GITHUB_USERNAME
  echo.
  echo Example: deploy-to-github.bat johndoe
  exit /b 1
)

set GITHUB_USERNAME=%1
set REPO_NAME=fsp-mobile-app

echo Configuration:
echo    GitHub Username: %GITHUB_USERNAME%
echo    Repository Name: %REPO_NAME%
echo.
echo IMPORTANT: Make sure you've created the repository on GitHub first!
echo    Go to: https://github.com/new
echo    Repository name: %REPO_NAME%
echo    Do NOT initialize with README
echo.
pause

echo.
echo Adding remote repository...
git remote add origin https://github.com/%GITHUB_USERNAME%/%REPO_NAME%.git 2>nul
git remote set-url origin https://github.com/%GITHUB_USERNAME%/%REPO_NAME%.git

echo Renaming branch to main...
git branch -M main

echo Pushing to GitHub...
git push -u origin main

if %errorlevel% equ 0 (
  echo.
  echo SUCCESS! Code pushed to GitHub!
  echo.
  echo Your repository: https://github.com/%GITHUB_USERNAME%/%REPO_NAME%
  echo.
  echo Next Step: Deploy to Vercel
  echo    1. Go to https://vercel.com
  echo    2. Sign in with GitHub
  echo    3. Click 'Add New' -^> 'Project'
  echo    4. Import '%REPO_NAME%'
  echo    5. Framework: Vite
  echo    6. Click 'Deploy'
  echo.
  echo    Your app will be live at: https://%REPO_NAME%.vercel.app
) else (
  echo.
  echo Push failed. Please check:
  echo    1. Repository exists on GitHub
  echo    2. You have push access
  echo    3. Your GitHub credentials are configured
)

pause
