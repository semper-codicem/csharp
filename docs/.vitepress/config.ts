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
      { text: 'Plan', link: '/plan/index' },
      { text:'Language Spec', link:'/language-spec'},
      { text:'Tricks', link:'/tricks'}
    ],

    sidebar:{
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
    ],
    '/language-spec/':[
      {
        text:"Advanced",
        items:[
          {text:"Generics And Constraints", link:"/language-spec/generics_and_constraints"},
          {text:"Boxing And Unboxing", link:"/language-spec/boxing_and_unboxing"},
          {text:"Covariance And Contravariance", link:"/language-spec/covariance_and_contravariance"},
          {text:"Enumerable Interface", link:"/language-spec/IEnumerable"},
          {text:"Null Safity Oeprators", link:"/language-spec/null_safity_operators"},
          {text:"Strings", link:"/language-spec/strings"},
          {text:"LINQ", link:"/language-spec/linq"}
        ]
      }
    ],
    '/tricks/':[
      {
        text:"Tricks And Tips",
        items:[
          {text:"Setup Tools", link:"/tricks/setup_tools"},
          {text:"CLI", link:"/tricks/important_cli"}
        ]
      }

    ]
  },

  socialLinks: [
    { icon: 'github', link: 'https://github.com/semper-codicem/csharp' }
  ]
  }
})
