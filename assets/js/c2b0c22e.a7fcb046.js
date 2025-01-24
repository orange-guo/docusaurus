"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["82225"],{27053:function(e,s,n){n.d(s,{Z:function(){return r}});let r=n.p+"assets/images/social-card-5214adcb56c496fa6afc571fb4d378f6.png"},85662:function(e,s,n){n.d(s,{Z:function(){return r}});let r=n.p+"assets/images/rsdoctor-36963a4eaca95f83538208463e62eae2.jpg"},36812:function(e,s,n){n.d(s,{Z:function(){return r}});let r=n.p+"assets/images/social-card-5214adcb56c496fa6afc571fb4d378f6.png"},41873:function(e,s,n){n.r(s),n.d(s,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return l},metadata:function(){return r},toc:function(){return d}});var r=n(19896),t=n(85893),i=n(80980),a=n(15398),o=n(58636);let l={title:"Docusaurus 3.6",authors:["slorber"],tags:["release"],image:"./img/social-card.png",date:new Date("2024-11-04T00:00:00.000Z")},c=void 0,u={image:n(27053).Z,authorsImageUrls:[void 0]},d=[{value:"Highlights",id:"highlights",level:2},{value:"Docusaurus Faster",id:"docusaurus-faster",level:2},{value:"Impacts",id:"impacts",level:3},{value:"Build Time",id:"build-time",level:4},{value:"Memory Consumption",id:"memory-consumption",level:4},{value:"Other Impacts",id:"other-impacts",level:4},{value:"Adoption Strategy",id:"adoption-strategy",level:3},{value:"Plugins",id:"plugins",level:4},{value:"Next Steps",id:"next-steps",level:3},{value:"Rsdoctor plugin",id:"rsdoctor-plugin",level:2},{value:"Mermaid",id:"mermaid",level:2},{value:"Translations",id:"translations",level:2},{value:"Other changes",id:"other-changes",level:2}];function h(e){let s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["We are happy to announce ",(0,t.jsx)(s.strong,{children:"Docusaurus 3.6"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Docusaurus is now \u26A1\uFE0F\u26A1\uFE0F\u26A1\uFE0F ",(0,t.jsx)(s.strong,{children:"much faster"})," to build your site."]}),"\n",(0,t.jsxs)(s.p,{children:["Upgrading should be easy. Our ",(0,t.jsx)(s.a,{href:"/community/release-process",children:"release process"})," respects ",(0,t.jsx)(s.a,{href:"https://semver.org/",children:"Semantic Versioning"}),". Minor versions do not include any breaking changes."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Docusaurus blog post social card",src:n(36812).Z+"",width:"1200",height:"600"})}),"\n","\n",(0,t.jsx)(s.h2,{id:"highlights",children:"Highlights"}),"\n",(0,t.jsxs)(s.p,{children:["This release has been mostly focused on build performance through the ",(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/issues/10556",children:"Docusaurus Faster"})," project."]}),"\n",(0,t.jsx)(s.h2,{id:"docusaurus-faster",children:"Docusaurus Faster"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/issues/10556",children:"Docusaurus Faster"})," project's goal is to reduce the build times and memory consumption."]}),"\n",(0,t.jsx)(s.p,{children:"We have worked on multiple optimizations and modernized our infrastructure to use faster Rust-based tools, notably:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\uD83E\uDD80 ",(0,t.jsx)(s.a,{href:"https://rspack.dev/",children:"Rspack"}),": Fast Rust-based web bundler, almost drop-in replacement for ",(0,t.jsx)(s.a,{href:"https://webpack.js.org/",children:"webpack"})]}),"\n",(0,t.jsxs)(s.li,{children:["\uD83E\uDD80 ",(0,t.jsx)(s.a,{href:"https://swc.rs/",children:"SWC"}),": Speedy Web Compiler, Rust-based platform for the Web (HTML, CSS, JS)"]}),"\n",(0,t.jsxs)(s.li,{children:["\uD83E\uDD80 ",(0,t.jsx)(s.a,{href:"https://lightningcss.dev/",children:"Lightning CSS"}),": An extremely fast CSS parser, transformer, bundler, and minifier"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"impacts",children:"Impacts"}),"\n",(0,t.jsx)(s.p,{children:"Adopting a new infrastructure can have various impacts. It's impossible to list them all exhaustively, so let's focus on the major ones."}),"\n",(0,t.jsxs)(s.p,{children:["To help you adopt it easily, we have been fairly conservative in terms of expected static site output and ",(0,t.jsx)(s.a,{href:"/docs/browser-support",children:"browser support"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"build-time",children:"Build Time"}),"\n",(0,t.jsxs)(s.p,{children:["Benchmarks on community site show that you can expect your production site to build \u26A1\uFE0F",(0,t.jsx)(s.strong,{children:"2 to 4 times faster"}),"! \uD83D\uDD25:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/facebook/react-native-website/pull/4268",children:"React Native website"}),": 3.04x faster \uD83D\uDD25"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/babel/website/pull/2997",children:"Babel website"}),": 3.27x faster \uD83D\uDD25"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/facebook/lexical/pull/6761",children:"Lexical website"}),": 2x faster \uD83D\uDD25"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/issues/10556#issuecomment-2407671873",children:"How to benchmark"})}),"\n",(0,t.jsx)(s.admonition,{title:"About rebuilds",type:"note",children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://rspack.dev/misc/planning/roadmap#persistent-cache",children:"Rspack doesn't support persistent caching yet"}),", but it's on the roadmap and should be implemented soon. We think it's not a problem for the adoption of Rspack considering a cold Rspack build is usually as fast as a warm Webpack build using persistent caching."]})}),"\n",(0,t.jsx)(s.h4,{id:"memory-consumption",children:"Memory Consumption"}),"\n",(0,t.jsx)(s.p,{children:"You should also notice an improvement in memory consumption:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"The new infrastructure consumes less memory overall"}),"\n",(0,t.jsxs)(s.li,{children:["We fixed an important ",(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10599",children:"memory leak"})," that affects in particular i18n sites"]}),"\n",(0,t.jsxs)(s.li,{children:["We added ",(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10601",children:"CI checks"})," to ensure that we don't regress, and that our site and init template can both build in a memory-constrained environments"]}),"\n",(0,t.jsxs)(s.li,{children:["We added ",(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10590",children:"internal tooling"})," to better understand which step of a build consumes memory"]}),"\n",(0,t.jsxs)(s.li,{children:["We ",(0,t.jsxs)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10410",children:["removed a ",(0,t.jsx)(s.code,{children:"process.exit(0)"})]})," that can hide memory leaks in your own code and third-party plugins"]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"other-impacts",children:"Other Impacts"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["The HTML minifier now ",(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/discussions/10580",children:"emits warnings in case of invalid HTML markup"})]}),"\n",(0,t.jsxs)(s.li,{children:["The static HTML output is ",(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10554",children:"~5% smaller"})]}),"\n",(0,t.jsx)(s.li,{children:"Some bugs are automatically fixed by the new infrastructure"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"adoption-strategy",children:"Adoption Strategy"}),"\n",(0,t.jsx)(s.p,{children:"This new infrastructure is a breaking change, but it is opt-in and does not require a new major version of Docusaurus."}),"\n",(0,t.jsx)(s.p,{children:"Before using Docusaurus Faster, add this new package:"}),"\n",(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(o.Z,{value:"npm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"npm install @docusaurus/faster\n"})})}),(0,t.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"yarn add @docusaurus/faster\n"})})}),(0,t.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"pnpm add @docusaurus/faster\n"})})})]}),"\n",(0,t.jsxs)(s.p,{children:["To help you ",(0,t.jsx)(s.strong,{children:"adopt it incrementally under Docusaurus v3"}),", we're introducing a set of feature flags that you can activate progressively."]}),"\n",(0,t.jsx)(s.p,{children:"We recommend turning them on all at once with this simple boolean shortcut:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"const config = {\n  future: {\n    experimental_faster: true,\n  },\n};\n"})}),"\n",(0,t.jsx)(s.p,{children:"In case one of the flags does not work for your site, it's possible to turn feature flags on independently:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:"const config = {\n  future: {\n    experimental_faster: {\n      swcJsLoader: true,\n      swcJsMinimizer: true,\n      swcHtmlMinimizer: true,\n      lightningCssMinimizer: true,\n      rspackBundler: true,\n      mdxCrossCompilerCache: true,\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10435",children:(0,t.jsx)(s.code,{children:"swcJsLoader"})}),": Use ",(0,t.jsx)(s.a,{href:"https://swc.rs/",children:"SWC"})," to transpile JS (instead of ",(0,t.jsx)(s.a,{href:"https://babeljs.io/",children:"Babel"}),")"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10441",children:(0,t.jsx)(s.code,{children:"swcJsMinimizer"})}),": Use ",(0,t.jsx)(s.a,{href:"https://swc.rs/",children:"SWC"})," to minify JS (instead of ",(0,t.jsx)(s.a,{href:"https://github.com/terser/terser",children:"Terser"}),")"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10554",children:(0,t.jsx)(s.code,{children:"swcHtmlMinimizer "})}),": Use ",(0,t.jsx)(s.a,{href:"https://swc.rs/",children:"SWC"})," to minify HTML and inlined JS/CSS (instead of ",(0,t.jsx)(s.a,{href:"https://github.com/terser/html-minifier-terser",children:"html-minifier-terser"}),")"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10522",children:(0,t.jsx)(s.code,{children:"lightningCssMinimizer"})}),": Use ",(0,t.jsx)(s.a,{href:"https://lightningcss.dev/",children:"Lightning CSS"})," to minify CSS (instead of ",(0,t.jsx)(s.a,{href:"https://github.com/cssnano/cssnano",children:"cssnano"})," and ",(0,t.jsx)(s.a,{href:"https://github.com/clean-css/clean-css",children:"clean-css"}),")"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10402",children:(0,t.jsx)(s.code,{children:"rspackBundler"})}),": Use ",(0,t.jsx)(s.a,{href:"https://rspack.dev/",children:"Rspack"})," to bundle your app (instead of ",(0,t.jsx)(s.a,{href:"https://webpack.js.org/",children:"webpack"}),")"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10479",children:(0,t.jsx)(s.code,{children:"mdxCrossCompilerCache"})}),": Compile MDX files once for both browser/Node.js environments instead of twice"]}),"\n"]}),"\n",(0,t.jsxs)(s.admonition,{title:"Experimental but safe",type:"tip",children:[(0,t.jsx)(s.p,{children:"Don't be afraid to turn this feature on. What's experimental is the config options."}),(0,t.jsxs)(s.p,{children:["The new infrastructure is robust and well-tested by our CI pipeline. The ",(0,t.jsx)(s.a,{href:"https://docusaurus.io/",children:"Docusaurus site"})," already uses it in production, and we plan to use it on other Meta docs sites as well."]})]}),"\n",(0,t.jsx)(s.h4,{id:"plugins",children:"Plugins"}),"\n",(0,t.jsxs)(s.p,{children:["The new infrastructure uses ",(0,t.jsx)(s.a,{href:"https://rspack.dev/",children:"Rspack"}),". By chance, Rspack is almost 100% compatible with ",(0,t.jsx)(s.a,{href:"https://webpack.js.org/",children:"webpack"}),", and Rspack shouldn't break our plugin ecosystem."]}),"\n",(0,t.jsxs)(s.p,{children:["Most Docusaurus plugins should work out of the box with Rspack, even those implementing ",(0,t.jsx)(s.a,{href:"/docs/api/plugin-methods/lifecycle-apis#configureWebpack",children:(0,t.jsx)(s.code,{children:"configureWebpack"})}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["However, some of them will require small modifications to make them compatible with Rspack. The general idea is to avoid importing ",(0,t.jsx)(s.code,{children:"webpack"}),' directly, and use the "dynamically provided" webpack instance instead:']}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-diff",children:"-import webpack from 'webpack';\n\nexport default function (context, options) {\n  return {\n    name: 'custom-docusaurus-plugin',\n-   configureWebpack(config, isServer) {\n+   configureWebpack(config, isServer, {currentBundler}) {\n      return {\n        plugins: [\n-         new webpack.DefinePlugin({}),\n+         new currentBundler.instance.DefinePlugin({}),\n        ]\n      };\n    },\n  };\n}\n"})}),"\n",(0,t.jsx)(s.admonition,{title:"For plugins authors",type:"tip",children:(0,t.jsxs)(s.p,{children:["Check the ",(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/issues/10572",children:"dedicated issue"})," for guidelines and support."]})}),"\n",(0,t.jsx)(s.h3,{id:"next-steps",children:"Next Steps"}),"\n",(0,t.jsxs)(s.p,{children:["It's only the beginning: we will continue working on the ",(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/issues/10556",children:"Docusaurus Faster"})," project and already have a few more performance improvements planned."]}),"\n",(0,t.jsxs)(s.p,{children:["Depending on ",(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/issues/10556",children:"your feedback"}),", we plan to make this new infrastructure the default in an upcoming major version of Docusaurus."]}),"\n",(0,t.jsxs)(s.p,{children:["\uD83D\uDE4F We'd like to thank the authors of all these great tools that already helped us make Docusaurus much faster than before. In particular the ",(0,t.jsx)(s.a,{href:"https://rspack.dev/misc/team/core-team",children:"Rspack team"})," that supported us along the way, handled our feedback very quickly and implemented all the missing features we needed to make it happen. \uD83D\uDC4F"]}),"\n",(0,t.jsx)(s.h2,{id:"rsdoctor-plugin",children:"Rsdoctor plugin"}),"\n",(0,t.jsxs)(s.p,{children:["In ",(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10588",children:"#10588"}),", we created a Docusaurus plugin for ",(0,t.jsx)(s.a,{href:"https://rsdoctor.dev/",children:"Rsdoctor"}),". It analyzes the bundling phase of Docusaurus and helps you figure out what slows down the bundler in terms of loaders, plugins and minimizers. It works for both webpack and Rspack."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Loader timeline example",src:n(85662).Z+"",width:"1436",height:"690"})}),"\n",(0,t.jsxs)(s.p,{children:["To use it, install the new ",(0,t.jsx)(s.a,{href:"/docs/api/plugins/@docusaurus/plugin-rsdoctor",children:(0,t.jsx)(s.code,{children:"@docusaurus/plugin-rsdoctor"})})," package, and then use the plugin in your config:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",metastring:'title="docusaurus.config.js"',children:"export default {\n  plugins: [\n    [\n      'rsdoctor',\n      {\n        /* options */\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,t.jsxs)(s.admonition,{type:"tip",children:[(0,t.jsx)(s.p,{children:"Turn it on conditionally, based on an environment variable:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",metastring:'title="docusaurus.config.js"',children:"export default {\n  plugins: [\n    process.env.RSDOCTOR === 'true' && [\n      'rsdoctor',\n      {\n        /* options */\n      },\n    ],\n  ],\n};\n"})}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"# Build without Rsdoctor\nnpm run build\n\n# Build with Rsdoctor\nRSDOCTOR=true npm run build\n"})})]}),"\n",(0,t.jsx)(s.h2,{id:"mermaid",children:"Mermaid"}),"\n",(0,t.jsxs)(s.p,{children:["In ",(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10510",children:"#10510"}),", we relaxed our ",(0,t.jsx)(s.a,{href:"https://mermaid.js.org/",children:"Mermaid diagrams"})," dependency range to allow newer major versions of Mermaid. We now support both Mermaid 10/11, and expect upcoming versions to be compatible, letting you upgrade on your own terms."]}),"\n",(0,t.jsxs)(s.p,{children:["This unlocks new types of diagrams, such as ",(0,t.jsx)(s.a,{href:"https://mermaid.js.org/syntax/architecture",children:"Architecture Diagrams"}),":"]}),"\n",(0,t.jsx)(s.mermaid,{value:"architecture-beta\n    group api(cloud)[API]\n\n    service db(database)[Database] in api\n    service disk1(disk)[Storage] in api\n    service disk2(disk)[Storage] in api\n    service server(server)[Server] in api\n\n    db:L -- R:server\n    disk1:T -- B:server\n    disk2:T -- B:db"}),"\n",(0,t.jsx)(s.h2,{id:"translations",children:"Translations"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\uD83C\uDDF8\uD83C\uDDEE ",(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10551",children:"#10551"}),": Improve Slovenian theme translations."]}),"\n",(0,t.jsxs)(s.li,{children:["\uD83C\uDDFB\uD83C\uDDF3 ",(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10507",children:"#10507"}),": Improve Vietnamese theme translations."]}),"\n",(0,t.jsxs)(s.li,{children:["\uD83C\uDDEA\uD83C\uDDF8 ",(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10413",children:"#10413"}),": Improve Spanish theme translations."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,t.jsx)(s.p,{children:"Other notable changes include:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10586",children:"#10586"}),": Blog support for ",(0,t.jsx)(s.code,{children:"frontMatter.title_meta"})," to override ",(0,t.jsx)(s.code,{children:"frontMatter.title"})," for SEO reason."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10600",children:"#10600"}),": ",(0,t.jsx)(s.code,{children:"docusaurus build"})," and ",(0,t.jsx)(s.code,{children:"docusaurus deploy"})," now support multiple ",(0,t.jsx)(s.code,{children:"--locale"})," CLI args."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10454",children:"#10454"}),": ",(0,t.jsx)(s.code,{children:"docusaurus-remark-plugin-npm2yarn"})," upgrades to ",(0,t.jsxs)(s.a,{href:"https://github.com/nebrelbug/npm-to-yarn/releases/tag/v3.0.0",children:[(0,t.jsx)(s.code,{children:"npm-to-yarn"})," v3"]})," and can convert ",(0,t.jsx)(s.code,{children:"npx"})," commands."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10612",children:"#10612"}),": Canary releases will use ",(0,t.jsx)(s.code,{children:"3.5.2-canary-<number>"})," instead of ",(0,t.jsx)(s.code,{children:"0.0.0-canary-<number>"})," to respect plugins ",(0,t.jsx)(s.code,{children:"peerDependency"})," constraints."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10547",children:"#10547"}),": ",(0,t.jsx)(s.code,{children:"@docusaurus/tsconfig"})," upgrades to ",(0,t.jsx)(s.code,{children:"target: 'es2022'"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10514",children:"#10514"}),": Remove ",(0,t.jsx)(s.code,{children:"babel.config.js"})," from Docusaurus init templates to discourage customizing Babel."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Check the ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.a,{href:"/changelog/3.6.0",children:"3.6.0 changelog entry"})})," for an exhaustive list of changes."]})]})}function p(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},58636:function(e,s,n){n.d(s,{Z:()=>i});var r=n("85893");n("67294");var t=n("90496");function i(e){let{children:s,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.Z)("tabItem_pnkT",i),hidden:n,children:s})}},15398:function(e,s,n){n.d(s,{Z:()=>b});var r=n("85893"),t=n("67294"),i=n("90496"),a=n("54947"),o=n("3620"),l=n("844"),c=n("97486"),u=n("32263"),d=n("16971");function h(e){return t.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||t.isValidElement(e)&&function(e){let{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:s,tabValues:n}=e;return n.some(e=>e.value===s)}var m=n("71607");function f(e){let{className:s,block:n,selectedValue:t,selectValue:o,tabValues:l}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),d=e=>{let s=e.currentTarget,n=l[c.indexOf(s)].value;n!==t&&(u(s),o(n))},h=e=>{let s=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let n=c.indexOf(e.currentTarget)+1;s=c[n]??c[0];break}case"ArrowLeft":{let n=c.indexOf(e.currentTarget)-1;s=c[n]??c[c.length-1]}}s?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},s),children:l.map(e=>{let{value:s,label:n,attributes:a}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:t===s?0:-1,"aria-selected":t===s,ref:e=>{c.push(e)},onKeyDown:h,onClick:d,...a,className:(0,i.Z)("tabs__item","tabItem_AQgk",a?.className,{"tabs__item--active":t===s}),children:n??s},s)})})}function g(e){let{lazy:s,children:n,selectedValue:a}=e,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){let e=o.find(e=>e.props.value===a);return e?(0,t.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:o.map((e,s)=>(0,t.cloneElement)(e,{key:s,hidden:e.props.value!==a}))})}function x(e){let s=function(e){let{defaultValue:s,queryString:n=!1,groupId:r}=e,i=function(e){let{values:s,children:n}=e;return(0,t.useMemo)(()=>{let e=s??h(n).map(e=>{let{props:{value:s,label:n,attributes:r,default:t}}=e;return{value:s,label:n,attributes:r,default:t}});return!function(e){let s=(0,u.lx)(e,(e,s)=>e.value===s.value);if(s.length>0)throw Error(`Docusaurus error: Duplicate values "${s.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[s,n])}(e),[a,m]=(0,t.useState)(()=>(function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!p({value:s,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}let r=n.find(e=>e.default)??n[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:s,tabValues:i})),[f,g]=function(e){let{queryString:s=!1,groupId:n}=e,r=(0,o.k6)(),i=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,c._X)(i),(0,t.useCallback)(e=>{if(!i)return;let s=new URLSearchParams(r.location.search);s.set(i,e),r.replace({...r.location,search:s.toString()})},[i,r])]}({queryString:n,groupId:r}),[x,b]=function(e){let{groupId:s}=e,n=s?`docusaurus.tab.${s}`:null,[r,i]=(0,d.Nk)(n);return[r,(0,t.useCallback)(e=>{n&&i.set(e)},[n,i])]}({groupId:r}),j=(()=>{let e=f??x;return p({value:e,tabValues:i})?e:null})();return(0,l.Z)(()=>{j&&m(j)},[j]),{selectedValue:a,selectValue:(0,t.useCallback)(e=>{if(!p({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);m(e),g(e),b(e)},[g,b,i]),tabValues:i}}(e);return(0,r.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList_Qoir"),children:[(0,r.jsx)(f,{...s,...e}),(0,r.jsx)(g,{...s,...e})]})}function b(e){let s=(0,m.Z)();return(0,r.jsx)(x,{...e,children:h(e.children)},String(s))}},80980:function(e,s,n){n.d(s,{Z:function(){return o},a:function(){return a}});var r=n(67294);let t={},i=r.createContext(t);function a(e){let s=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:s},e.children)}},19896:function(e){e.exports=JSON.parse('{"permalink":"/blog/releases/3.6","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/releases/3.6/index.mdx","source":"@site/blog/releases/3.6/index.mdx","title":"Docusaurus 3.6","description":"We are happy to announce Docusaurus 3.6.","date":"2024-11-04T00:00:00.000Z","tags":[{"inline":false,"label":"Release","permalink":"/blog/tags/release","description":"Blog posts about Docusaurus\' new releases"}],"readingTime":5.91,"hasTruncateMarker":true,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer, This Week In React editor","url":"https://thisweekinreact.com","page":{"permalink":"/blog/authors/slorber"},"description":"A freelance React and React-Native developer near Paris and Docusaurus maintainer. Also runs ThisWeekInReact.com, a newsletter to stay updated with the React ecosystem.","socials":{"bluesky":"https://bsky.app/profile/sebastienlorber.com","x":"https://x.com/sebastienlorber","linkedin":"https://www.linkedin.com/in/sebastienlorber/","github":"https://github.com/slorber","instagram":"https://www.instagram.com/thisweekinreact","newsletter":"https://thisweekinreact.com"},"imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"title":"Docusaurus 3.6","authors":["slorber"],"tags":["release"],"image":"./img/social-card.png","date":"2024-11-04T00:00:00.000Z"},"unlisted":false,"lastUpdatedAt":1737536713000,"lastUpdatedBy":"dependabot[bot]","prevItem":{"title":"Docusaurus 3.7","permalink":"/blog/releases/3.7"},"nextItem":{"title":"Docusaurus 3.5","permalink":"/blog/releases/3.5"}}')}}]);