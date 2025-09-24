<template>
  <Layout>
    <!-- Top Ad Slot -->
    <template #doc-before>
      <div v-if="showTopAd" class="ad-container top-ad">
        <AdSense 
          :ad-client="adClient"
          :ad-slot="topAdSlot"
          ad-format="horizontal"
        />
      </div>
    </template>

    <!-- Bottom Ad Slot -->
    <template #doc-after>
      <div v-if="showBottomAd" class="ad-container bottom-ad">
        <AdSense 
          :ad-client="adClient"
          :ad-slot="bottomAdSlot"
          ad-format="rectangle"
        />
      </div>
    </template>

    <!-- Sidebar Ad Slot -->
    <template #aside-ads-before>
      <div v-if="showSidebarAd" class="ad-container sidebar-ad">
        <AdSense 
          :ad-client="adClient"
          :ad-slot="sidebarAdSlot"
          ad-format="vertical"
        />
      </div>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import AdSense from './AdSense.vue'

const { Layout } = DefaultTheme

const { frontmatter, page } = useData()

// AdSense Configuration
const adClient = 'ca-pub-YOUR_PUBLISHER_ID' // Replace with your AdSense publisher ID
const topAdSlot = 'YOUR_TOP_AD_SLOT_ID'
const bottomAdSlot = 'YOUR_BOTTOM_AD_SLOT_ID'
const sidebarAdSlot = 'YOUR_SIDEBAR_AD_SLOT_ID'

// Control ad visibility based on frontmatter or page type
const showTopAd = computed(() => {
  return frontmatter.value?.ads !== false && !page.value.isNotFound
})

const showBottomAd = computed(() => {
  return frontmatter.value?.ads !== false && !page.value.isNotFound
})

const showSidebarAd = computed(() => {
  return frontmatter.value?.sidebarAds !== false && !page.value.isNotFound
})
</script>

<style scoped>
.ad-container {
  margin: 20px 0;
  text-align: center;
}

.top-ad {
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 20px;
  margin-bottom: 30px;
}

.bottom-ad {
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 20px;
  margin-top: 30px;
}

.sidebar-ad {
  margin: 20px 0;
  padding: 15px;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
}

/* Mobile responsive */
@media (max-width: 768px) {
  .sidebar-ad {
    display: none;
  }
  
  .ad-container {
    margin: 15px 0;
  }
}
</style>