# Firebase Deployment Guide for C# Learning Site

## 📋 Configuration Summary

Your Firebase project is now configured with:

- **Project ID**: `semper-codicem`
- **App/Target**: `csharp`
- **Site ID**: `semper-codicem-csharp`
- **Build Directory**: `docs/.vitepress/dist`

## 🚀 Deployment Commands

### Build and Deploy
```bash
# Build your VitePress site
npm run docs:build

# Deploy to Firebase Hosting
firebase deploy --only hosting:csharp
```

### Quick Deploy Script
```bash
# Build and deploy in one command
npm run docs:build && firebase deploy --only hosting:csharp
```

## 📁 File Structure

```
├── .firebaserc          # Project and target configuration
├── firebase.json        # Hosting configuration
├── docs/
│   ├── .vitepress/
│   │   └── dist/        # Build output directory (auto-generated)
│   ├── index.md
│   └── plan/
└── package.json
```

## 🔧 Firebase Configuration Details

### .firebaserc
- Maps your local project to Firebase project `semper-codicem`
- Defines hosting target `csharp` → site `semper-codicem-csharp`

### firebase.json
- Points to VitePress build directory: `docs/.vitepress/dist`
- Optimized caching headers for static assets
- Clean URLs enabled (removes .html extensions)
- No trailing slashes

## 🌐 Your Site URLs

After deployment, your site will be available at:
- **Primary**: `https://semper-codicem-csharp.web.app`
- **Custom Domain**: `https://semper-codicem-csharp.firebaseapp.com`

## 🔄 Deployment Workflow

1. **Make changes** to your content in `docs/`
2. **Test locally**: `npm run docs:dev`
3. **Build**: `npm run docs:build`
4. **Deploy**: `firebase deploy --only hosting:csharp`
5. **Verify**: Check your live site

## 📊 AdSense Integration

Your Firebase-hosted site is perfect for AdSense:
- ✅ Public HTTPS URL
- ✅ Fast loading with CDN
- ✅ Clean URLs for SEO
- ✅ Proper caching headers

Add your Firebase hosting URL to AdSense verified sites:
`https://semper-codicem-csharp.web.app`

## 🛠️ Advanced Options

### Deploy with Preview Channel
```bash
firebase hosting:channel:deploy preview --only hosting:csharp
```

### Set Custom Domain
```bash
firebase hosting:sites:get semper-codicem-csharp
# Then add custom domain in Firebase Console
```

### Continuous Deployment
Consider setting up GitHub Actions for automatic deployment on push to main branch.

---

**Ready to deploy?** Run: `npm run docs:build && firebase deploy --only hosting:csharp`