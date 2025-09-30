// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { createMermaidRenderer } from "vitepress-mermaid-renderer";
import "vitepress-mermaid-renderer/dist/style.css";
import './style.css'
import AdSense from './components/AdSense.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // Register AdSense component globally
    /// app.component('AdSense', AdSense)
    const mermaidRenderer = createMermaidRenderer({
      theme: "dark", // 'default', 'dark', 'forest', 'neutral'
      startOnLoad: false,
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
      },
      sequence: {
        diagramMarginX: 50,
        diagramMarginY: 10,
      },
      // Any other Mermaid configuration options
    });
    mermaidRenderer.initialize();
  }
} satisfies Theme
