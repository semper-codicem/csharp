# AdSense Development & Testing Guide

## 🚨 Important: AdSense Localhost Limitations

**Google AdSense does NOT serve real ads on localhost** for policy and security reasons. You need a public URL for testing.

## 🔧 Development Setup Options

### Option 1: GitHub Pages / Netlify Deployment (Recommended)

Deploy to a free hosting service for real testing:

1. **Build your site**:
```bash
npm run docs:build
```

2. **Netlify Drop**:
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag the `docs/.vitepress/dist` folder
   - Get instant public URL

3. **GitHub Pages**:
```bash
# Push to GitHub and enable Pages in repository settings
git add .
git commit -m "Deploy for AdSense testing"
git push origin main
```

4. **Vercel**:
```bash
npx vercel --prod
```

## 📋 AdSense Account Setup Steps

### 1. Add Your Site to AdSense

1. Go to [AdSense Dashboard](https://www.google.com/adsense/)
2. Click **Sites** → **Add site**
3. Enter your domain (use ngrok URL or actual domain)
4. Verify ownership

### 2. Create Ad Units

1. Go to **Ads** → **By ad unit**
2. Create different ad units:
   - **Display ads** for general content
   - **In-feed ads** for article lists
   - **In-article ads** for within content

3. Copy the **Ad slot IDs** for each unit

### 3. Update Your AdSense Component

Replace the placeholder ad slot ID:

```vue
<AdSense 
  ad-client="ca-pub-2312024156935185"
  ad-slot="YOUR_ACTUAL_AD_SLOT_ID"
  ad-format="auto"
/>
```

## 🧪 Testing AdSense Integration

### Local Development Testing (No Real Ads)

```bash
# Terminal 1: Start VitePress
npm run docs:dev

# Terminal 2: Create public tunnel
ngrok http 5173
```

### What You'll See:
- **Localhost**: Ad containers but no actual ads
- **Production URL**: Real ads after site approval and content review

## 📝 Development Scripts

Your clean package.json scripts:

```json
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  }
}
```

## 🔍 Troubleshooting

### No Ads Showing?

1. **Check Console**: Look for AdSense errors
2. **Verify Publisher ID**: Ensure `ca-pub-2312024156935185` is correct
3. **Check Ad Slot IDs**: Must match your AdSense dashboard
4. **Site Status**: Your site needs AdSense approval
5. **Content Policy**: Ensure content meets AdSense guidelines

### Development vs Production

| Environment | Real Ads | Testing Purpose |
|-------------|----------|-----------------|
| localhost:5173 | ❌ No | Component integration |
| Production domain | ✅ Yes | Revenue generation |

## 🚀 Deployment for Real Testing

### Quick Netlify Deployment

1. Build your site:
```bash
npm run docs:build
```

2. The built files are in `docs/.vitepress/dist/`

3. Drag the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

4. Get your Netlify URL (e.g., `amazing-site-abc123.netlify.app`)

5. Add this URL to your AdSense verified sites

## 📊 AdSense Ad Unit Examples

### Banner Ad (Top of Page)
```vue
<AdSense 
  ad-client="ca-pub-2312024156935185"
  ad-slot="1111111111"
  ad-format="horizontal"
/>
```

### Rectangle Ad (Within Content)
```vue
<AdSense 
  ad-client="ca-pub-2312024156935185"
  ad-slot="2222222222"
  ad-format="rectangle"
/>
```

### Sidebar Ad
```vue
<AdSense 
  ad-client="ca-pub-2312024156935185"
  ad-slot="3333333333"
  ad-format="vertical"
/>
```

---

## ⚡ Quick Start for AdSense Testing

Simple development workflow:

```bash
# 1. Develop locally
npm run docs:dev

# 2. Build for deployment
npm run docs:build

# 3. Deploy to Netlify/Vercel/GitHub Pages
# 4. Add deployed URL to AdSense
# 5. Create ad units and replace slot IDs
```

**Remember**: Real AdSense revenue only comes from approved sites with genuine traffic!