# Google AdSense Integration Guide

This document explains how to use Google AdSense in your VitePress documentation.

## Setup Instructions

### 1. Get Your AdSense Publisher ID
1. Sign up for [Google AdSense](https://www.google.com/adsense/)
2. Get your Publisher ID (format: `ca-pub-XXXXXXXXXXXXXXXX`)
3. Create ad units and get their slot IDs

### 2. Update Configuration
Replace the placeholder values in your configuration:

**In `.vitepress/config.ts`:**
```typescript
// Replace YOUR_PUBLISHER_ID with your actual AdSense publisher ID
src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID'
```
**In AdSense component:**
- Replace `YOUR_PUBLISHER_ID` with your actual publisher ID
- Replace `YOUR_AD_SLOT_ID` with actual ad slot IDs

## Usage Examples

### Manual Ad Placement

You can manually place ads anywhere in your markdown content:

```vue
<AdSense 
  ad-client="ca-pub-YOUR_PUBLISHER_ID"
  ad-slot="1234567890"
  ad-format="auto"
/>
```

### Example Ad Placement

<AdSense 
    ad-client="ca-pub-YOUR_PUBLISHER_ID"
    ad-slot="1234567890"
    ad-format="rectangle"
/>

## Ad Types

### Banner Ads (Horizontal)
```vue
<AdSense 
  ad-client="ca-pub-YOUR_PUBLISHER_ID"
  ad-slot="1111111111"
  ad-format="horizontal"
/>
```

### Rectangle Ads
```vue
<AdSense 
  ad-client="ca-pub-YOUR_PUBLISHER_ID"
  ad-slot="2222222222"
  ad-format="rectangle"
/>
```

### Vertical Ads (Sidebar)
```vue
<AdSense 
  ad-client="ca-pub-YOUR_PUBLISHER_ID"
  ad-slot="3333333333"
  ad-format="vertical"
/>
```

## Disable Ads on Specific Pages

Add this to your frontmatter to disable ads on specific pages:

```yaml
---
ads: false
sidebarAds: false
---
```

## Best Practices

1. **Strategic Placement**: Place ads where they won't interrupt the learning flow
2. **Mobile Optimization**: Use responsive ad formats
3. **Content Quality**: Ensure ads complement your educational content
4. **Performance**: Monitor page load times with ads enabled
5. **User Experience**: Don't overwhelm users with too many ads

## Troubleshooting

### Ads Not Showing
1. Check console for JavaScript errors
2. Verify your publisher ID is correct
3. Ensure ad slot IDs match your AdSense account
4. Check if ad blockers are preventing display
5. Wait 24-48 hours for new AdSense accounts to be fully activated

### Performance Issues
1. Use `loading="lazy"` for ads below the fold
2. Consider using AdSense's experimental features for better performance
3. Monitor Core Web Vitals impact

---

*Remember: AdSense has policies about content quality and user experience. Make sure your educational content provides value to users.*