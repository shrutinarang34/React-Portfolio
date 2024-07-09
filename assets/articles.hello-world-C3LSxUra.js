import{R as i,j as t}from"./jsx-runtime-CbkKSL4Y.js";const a={},r=i.createContext(a);function o(n){const e=i.useContext(r);return i.useMemo(function(){return{...e,...n}},[e,n])}function s(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...o(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h2,{id:"how-it-all-started",children:"How it all started"}),`
`,t.jsxs(e.p,{children:[`Back in 2018 I needed to update my portfolio site (as designers are wont to do). I thought I'd steer away from current trends and build a site that tapped into the 80s and 90s Cyberpunk aesthetic. The genre contains some of my favorite movies like Ghost in the Shell (1995), The Matrix (1999), and Akira (1988). That's where I borrowed few visual motifs like the bold katakana lettering on the homepage and the text decoding effect as a homage to the Matrix's "Digital rain" effect, which was itself inspired by Ghost in the Shell's opening credits. There's even a nod to Ghost in the Shell on my `,t.jsx(e.a,{href:"/404",children:"404 page"}),"."]}),`
`,t.jsx(e.p,{children:t.jsx(e.img,{src:"/static/inspiration.png",alt:"A scene from Ghost in the Shell (1995) with the Major cloaking with thermoptic camouflage; the poster for Akira; The Matrix's digital rain effect",width:"1495",height:"1418"})}),`
`,t.jsx(e.h2,{id:"the-first-iteration",children:"The first iteration"}),`
`,t.jsx(e.p,{children:"I was learning React when I first built this website, and while overkill for a personal portfolio site, it was a great opportunity to learn and experiment with learning it. I've found the best way to learn is by actually making something that you intend to use and ship."}),`
`,t.jsx(e.p,{children:"The no-brainer choice at the time was Create React App. It served me well in getting things up and running without having to fuss about with config. On top of that, I was using Styled Components, Tween.js, and React Transition Group. I was also playing with some early Three.js effects like the displacement sphere that still resides on the homepage."}),`
`,t.jsxs(e.p,{children:["Since then I've used this website as a playground for experimenting with new tech and techniques, so over time I've overhauled pretty much everything. A big change along the way was replacing images of my work in static mockups with real-time rendered interactive 3D devices using models I created for the ",t.jsx(e.a,{href:"https://www.figma.com/community/plugin/819335598581469537/Clay-Mockups-3D",children:"Clay Mockups 3D Figma plugin"}),"."]}),`
`,t.jsx(e.p,{children:t.jsx(e.img,{src:"/static/clay-mockups.png",alt:"Thumbnail for my Clay Mockups 3D plugin",width:"1920",height:"960"})}),`
`,t.jsx(e.h2,{id:"migrating-to-nextjs",children:"Migrating to Next.js"}),`
`,t.jsx(e.p,{children:"With Create React App I was using a somewhat janky and unmaintained package to prerender the site as static HTML in Puppeteer. This worked okay for the most part, but I wanted a more robust solution for posting articles (like this one you're reading) using MDX. I had a half baked version of this lying dormant in the repo, but it never felt good enough to publish. I looked at a few options like Gatsby, Vite, and Parcel, and Remix, but Next.js stood out as the most suited to my needs."}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"The site is now based on Next.js. Is a much better fit than Create React App. For now I'm just using it to create a static export, but maybe I'll add some server rendered stuff in the future."}),`
`,t.jsx(e.li,{children:"Styling is now vanilla CSS with postcss to add support for the future native CSS nesting and custom media queries features. I'm using CSS modules instead of BEM syntax to avoid style conflicts."}),`
`,t.jsxs(e.li,{children:["For generating pages from ",t.jsx(e.code,{children:".mdx"})," files, I'm using Kent C Dodds' ",t.jsx(e.a,{href:"https://github.com/kentcdodds/mdx-bundler",children:"mdx-bundler"}),". In combination with Next.js it makes generating pages from ",t.jsx(e.code,{children:".mdx"})," files really quick and simple."]}),`
`,t.jsx(e.li,{children:"For animation I've moved from Tween.js and React Transition Group to just Framer Motion."}),`
`,t.jsxs(e.li,{children:["3D effects are still all using Three.js, but I've added ",t.jsx(e.code,{children:"three-stdlib"})," as a better maintained replacement for modules from Three's examples."]}),`
`]}),`
`,t.jsx(e.h2,{id:"not-all-smooth-sailing",children:"Not all smooth sailing"}),`
`,t.jsx(e.p,{children:"For the most part, the migration was pretty straight-forward. The way I has structured the site with React Router lent itself well to conforming with Next.js's file-based routing, and I was already using postcss for styling. I did, however, encounter a couple of problems:"}),`
`,t.jsx(e.h3,{id:"1-route-transitions",children:"1. Route transitions"}),`
`,t.jsxs(e.p,{children:["There was a bit of a conflict when it came to animated route transitions. Next.js will immediately yank out all of the styles for the previous page when navigating to a new one. This works great when you're not animating between pages because it cleans up any unused styles form hanging around. When you are animating the page transition though, all of a sudden the previous page becomes jarringly completely unstyled as it transitions out. This problem one of ",t.jsx(e.a,{href:"https://github.com/vercel/next.js/issues/17464",children:"the most commented and reacted to issues"})," on the Next.js repo, so hopefully there's a fix soon, but for now I've dropped in a ",t.jsx(e.a,{href:"https://github.com/vercel/next.js/issues/17464#issuecomment-796430107",children:"hack to fix things"})," from the issue's comments."]}),`
`,t.jsx(e.h3,{id:"2-scroll-restoration",children:"2. Scroll restoration"}),`
`,t.jsx(e.p,{children:"Somewhat related to the route transitions, I had to opt out of both Next.js's and the native browser's scroll restoration in order to prevent the browser immediately scrolling to the top when the page started transitioning out. Next.js also doesn't appear to handle shifting focus when linking to the id of an element within the page, so I added that in for accessibility."}),`
`,t.jsx(e.h2,{id:"looking-back-and-forward",children:"Looking back, and forward"}),`
`,t.jsx(e.p,{children:"It's been pretty neat to see how popular the site's been on Github, with 500 stars (as of writing this post). It's also neat seeing how people adapt it to their own style and modify it, which is part of the reason I made it open source. I want others to be able to take it apart and see how it's made, learn from and improve upon it. That's what inspect element used to be like on the web, but with modern sites compiling and minifying and injecting garbled strings into css classes that's not as simple these days. The next best thing I could do was to open source it."}),`
`,t.jsx(e.p,{children:"I look forward to continuing to use this site as a playground, and it'll be interesting to compare the next iteration to where it is today."}),`
`,t.jsx(e.h2,{id:"update-feb-2024",children:"Update: Feb 2024"}),`
`,t.jsxs(e.p,{children:[`I recently migrated the site to Remix now that they've got good support for CSS modules meaning I didn't need to convert all of my styling. It was mostly a process of deleting all of the hacks mentioned above in this post, and things just work and feel more "web standard". I'm now using the `,t.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API",children:"CSS view transitions API"})," to handle smoothly crossfading on route transitions, which is a feature baked into React Router (and as a result Remix). I don't need to do weird javascript hacks to try and set the correct theme (which still inevitably led to a flash of unthemed content) - I'm now storing the preferred theme in a session cookie which Remix makes really easy to do."]}),`
`,t.jsx(e.p,{children:"Overall I'm really happy with Remix, would totally recommend it. I would like to eventually replace a lot of animations triggered by Javascript with the upcoming scroll driven animations CSS API, but browser support isn't there yet, so maybe some time later this year."})]})}function l(n={}){const{wrapper:e}={...o(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(s,{...n})}):s(n)}export{l as default};