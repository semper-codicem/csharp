<template>
  <div class="adsense-container">
    <!-- Google AdSense Ad Unit -->
    <ins class="adsbygoogle"
         style="display:block"
         :data-ad-client="adClient"
         :data-ad-slot="adSlot"
         :data-ad-format="adFormat"
         :data-full-width-responsive="fullWidthResponsive">
    </ins>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// Extend Window interface for AdSense
declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

interface Props {
  adClient?: string
  adSlot?: string
  adFormat?: string
  fullWidthResponsive?: string
}

const props = withDefaults(defineProps<Props>(), {
  adClient: 'ca-pub-2312024156935185', // Your AdSense publisher ID
  adSlot: '1234567890', // Placeholder ad slot ID - replace with real one from AdSense
  adFormat: 'auto',
  fullWidthResponsive: 'true'
})

onMounted(() => {
  try {
    // Initialize AdSense ads
    if (window.adsbygoogle) {
      window.adsbygoogle.push({})
    }
  } catch (error) {
    console.error('AdSense loading error:', error)
  }
})
</script>

<style scoped>
.adsense-container {
  margin: 20px 0;
  text-align: center;
}

.adsbygoogle {
  display: block;
  margin: 0 auto;
}

/* Responsive styling */
@media (max-width: 768px) {
  .adsense-container {
    margin: 15px 0;
  }
}
</style>