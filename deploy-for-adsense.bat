@echo off
echo 🚀 Building VitePress site for AdSense testing...
call npm run docs:build

echo.
echo 📁 Built files are in docs\.vitepress\dist\
echo.
echo 🌐 Deployment Options:
echo.
echo 1. Netlify Drop:
echo    - Go to https://app.netlify.com/drop
echo    - Drag the 'docs\.vitepress\dist' folder
echo    - Get your URL (e.g., amazing-site-123.netlify.app)
echo.
echo 2. Vercel:
echo    - Run: npx vercel --prod
echo    - Follow the prompts
echo.
echo 3. GitHub Pages:
echo    - Push your code to GitHub
echo    - Enable Pages in repo settings
echo.
echo 📋 Next Steps for AdSense:
echo 1. Use the deployed URL in AdSense site verification
echo 2. Create ad units in AdSense dashboard  
echo 3. Replace placeholder ad slot IDs in your components
echo 4. Wait for AdSense approval (can take 1-7 days)
echo.
echo 💡 Remember: Real ads only show on approved domains with real traffic!
echo.
pause