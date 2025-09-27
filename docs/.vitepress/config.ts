import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CSharp",
  description: "Learn CSharp",
  lang: 'en-US',
  base: '/csharp',
  ignoreDeadLinks: true,
  // head: [
  //   // Google AdSense
  //   ['script', { 
  //     async: '', 
  //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2312024156935185',
  //     crossorigin: 'anonymous'
  //   }]
  // ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Plans', link: '/plan/index' }
    ],

    sidebar:{
      '/': [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    '/plan/':[
      {
        text:"Plans",
        items:[
          {text:"What To Learn", link:"/plan/what_to_learn"},
          {text:"Learning Plan", link:"/plan/learning_plan"},
          {text:"Roadmap", link:"/plan/mastery_roadmap2"},
          {text:"Excercises", link:"/plan/exercises"},
          {text:"Chart", link:"/plan/learning-roadmap-chart"}
        ]
      }
    ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
