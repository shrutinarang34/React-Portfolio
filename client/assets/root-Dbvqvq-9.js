import{r as n,j as e}from"./jsx-runtime-CbkKSL4Y.js";import{u as F,t as P,T as Q,G as X,b as Z}from"./image-BQOjAxbG.js";import{E as ee}from"./error-fCNTPC0J.js";import{V as te}from"./decoder-text-BvFLenye.js";import{c as se,B as G,I as L,m as ne,T as ae,d as R,a as oe,n as re,t as O}from"./heading-DOZD3MDR.js";import{u as ie,a as ce}from"./useWindowSize-C89979us.js";import{c as v}from"./config-o8qSC8aY.js";import{c as le,a as V,y as me,z as he,_ as ue,L as S,A as J,B as de,C as pe,M as W,D as q,O as ge,S as U,u as fe}from"./components-r4J6YuSM.js";/**
 * @remix-run/react v2.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let A="positions";function Y({getKey:t,...s}){let{isSpaMode:a}=le(),i=V(),r=me();he({getKey:t,storageKey:A});let l=n.useMemo(()=>{if(!t)return null;let o=t(i,r);return o!==i.key?o:null},[]);if(a)return null;let m=((o,f)=>{if(!window.history.state||!window.history.state.key){let x=Math.random().toString(32).slice(2);window.history.replaceState({key:x},"")}try{let k=JSON.parse(sessionStorage.getItem(o)||"{}")[f||window.history.state.key];typeof k=="number"&&window.scrollTo(0,k)}catch(x){console.error(x),sessionStorage.removeItem(o)}}).toString();return n.createElement("script",ue({},s,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${m})(${JSON.stringify(A)}, ${JSON.stringify(l)})`}}))}const ve="_monogram_1mxlb_2",xe="_highlight_1mxlb_7",_e={monogram:ve,highlight:xe},je=n.forwardRef(({highlight:t,className:s,...a},i)=>(n.useId(),e.jsx("svg",{"aria-hidden":!0,className:se(_e.monogram,s),width:"200",height:"200",viewBox:"0 0 48 29",ref:i,...a,children:e.jsx("image",{width:"48",height:"29",href:"/Transparentlogo.png"})}))),be="_toggle_1lvbt_2",ke="_inner_1lvbt_17",ye="_icon_1lvbt_25",N={toggle:be,inner:ke,icon:ye},Ne=({menuOpen:t,...s})=>e.jsx(G,{iconOnly:!0,className:N.toggle,"aria-label":"Menu","aria-expanded":t,...s,children:e.jsxs("div",{className:N.inner,children:[e.jsx(L,{className:N.icon,"data-menu":!0,"data-open":t,icon:"menu"}),e.jsx(L,{className:N.icon,"data-close":!0,"data-open":t,icon:"close"})]})}),we="_toggle_1phd7_2",Te="_circle_1phd7_29",Se="_mask_1phd7_54",Le="_path_1phd7_72",_={toggle:we,circle:Te,mask:Se,path:Le},H=({isMobile:t,...s})=>{const a=n.useId(),{toggleTheme:i}=F(),r=`${a}theme-toggle-mask`;return e.jsx(G,{iconOnly:!0,className:_.toggle,"data-mobile":t,"aria-label":"Toggle theme",onClick:()=>i(),...s,children:e.jsxs("svg",{"aria-hidden":!0,className:_.svg,width:"38",height:"38",viewBox:"0 0 38 38",children:[e.jsx("defs",{children:e.jsxs("mask",{id:r,children:[e.jsx("circle",{className:_.circle,"data-mask":!0,cx:"19",cy:"19",r:"13"}),e.jsx("circle",{className:_.mask,cx:"25",cy:"14",r:"9"})]})}),e.jsx("path",{className:_.path,d:"M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5"}),e.jsx("circle",{className:_.circle,mask:`url(#${r})`,cx:"19",cy:"19",r:"12"})]})})},B=[{label:"Projects",pathname:"/#project-1"},{label:"About me",pathname:"/#details"},{label:"Uses",pathname:"/uses"},{label:"Ventures",pathname:"/other-projects"},{label:"Contact",pathname:"/contact"}],Ie=[{label:"Instagram",url:`https://instagram.com/${v.instagram}`,icon:"instagram"},{label:"Linkedin",url:`https://www.linkedin.com/in/${v.linkedin}`,icon:"linkedin"},{label:"Github",url:`https://github.com/${v.github}`,icon:"github"}],Me="_navbar_1cpvi_2",$e="_logo_1cpvi_27",Ce="_nav_1cpvi_2",Ee="_navList_1cpvi_52",Re="_navLink_1cpvi_60",Oe="_navIcons_1cpvi_103",Ae="_navIconLink_1cpvi_127",He="_navIcon_1cpvi_103",Be="_mobileNav_1cpvi_148",De="_mobileNavLink_1cpvi_178",p={navbar:Me,logo:$e,nav:Ce,navList:Ee,navLink:Re,navIcons:Oe,navIconLink:Ae,navIcon:He,mobileNav:Be,mobileNavLink:De},ze=()=>{const[t,s]=n.useState(),[a,i]=n.useState(!1),[r,l]=n.useState(),{theme:m}=F(),o=V(),f=ie(),x=n.useRef(),k=f.width<=ne.mobile||f.height<=696,I=ce();n.useEffect(()=>{s(`${o.pathname}${o.hash}`)},[o]),n.useEffect(()=>{!r||o.pathname!=="/"||(s(`${o.pathname}${r}`),I(r,()=>l(null)))},[o.pathname,I,r]),n.useEffect(()=>{const c=document.querySelectorAll("[data-navbar-item]"),h=m==="dark"?"light":"dark",{innerHeight:y}=window;let j=[],b=[];const K=(d,g,u)=>!(d.bottom-u<g.top||d.top-u>g.bottom),E=()=>{for(const d of b)d.element.dataset.theme=""},w=()=>{const d=document.querySelectorAll(`[data-theme='${h}'][data-invert]`);if(!d)return;j=Array.from(d).map(u=>({element:u,top:u.offsetTop,bottom:u.offsetTop+u.offsetHeight}));const{scrollY:g}=window;E();for(const u of j)if(!(u.top-g>y||u.bottom-g<0))for(const T of b)K(u,T,g)?T.element.dataset.theme=h:T.element.dataset.theme=""};return m==="light"&&(b=Array.from(c).map(d=>{const g=d.getBoundingClientRect();return{element:d,top:g.top,bottom:g.bottom}}),document.addEventListener("scroll",w),w()),()=>{document.removeEventListener("scroll",w),E()}},[m,f,o.key]);const M=(c="")=>{const h=t!=null&&t.endsWith("/")?t==null?void 0:t.slice(0,-1):t;return c===h?"page":""},$=c=>{const h=c.currentTarget.href.split("#")[1];l(null),h&&o.pathname==="/"&&(l(`#${h}`),c.preventDefault())},C=c=>{$(c),a&&i(!1)};return e.jsxs("header",{className:p.navbar,ref:x,children:[e.jsx(S,{unstable_viewTransition:!0,prefetch:"intent",to:o.pathname==="/"?"/#intro":"/","data-navbar-item":!0,className:p.logo,"aria-label":`${v.name}, ${v.role}`,onClick:C,children:e.jsx(je,{highlight:!0})}),e.jsx(Ne,{onClick:()=>i(!a),menuOpen:a}),e.jsxs("nav",{className:p.nav,children:[e.jsx("div",{className:p.navList,children:B.map(({label:c,pathname:h})=>e.jsx(S,{unstable_viewTransition:!0,prefetch:"intent",to:h,"data-navbar-item":!0,className:p.navLink,"aria-current":M(h),onClick:$,children:c},c))}),e.jsx(D,{desktop:!0})]}),e.jsx(ae,{unmount:!0,in:a,timeout:R(O.base.durationL),children:({visible:c,nodeRef:h})=>e.jsxs("nav",{className:p.mobileNav,"data-visible":c,ref:h,children:[B.map(({label:y,pathname:j},b)=>e.jsx(S,{unstable_viewTransition:!0,prefetch:"intent",to:j,className:p.mobileNavLink,"data-visible":c,"aria-current":M(j),onClick:C,style:oe({transitionDelay:re(Number(R(O.base.durationS))+b*50)}),children:y},y)),e.jsx(D,{}),e.jsx(H,{isMobile:!0})]})}),!k&&e.jsx(H,{"data-navbar-item":!0})]})},D=({desktop:t})=>e.jsx("div",{className:p.navIcons,children:Ie.map(({label:s,url:a,icon:i})=>e.jsx("a",{"data-navbar-item":t||void 0,className:p.navIconLink,"aria-label":s,href:a,target:"_blank",rel:"noopener noreferrer",children:e.jsx(L,{className:p.navIcon,icon:i})},s))}),Fe="_progress_3typo_2",Pe={progress:Fe};function Ge(){const[t,s]=n.useState(!1),[a,i]=n.useState(!1),{state:r}=J(),l=n.useRef(),m=n.useRef(0);return n.useEffect(()=>{clearTimeout(m.current),r!=="idle"?m.current=setTimeout(()=>{i(!0)},500):t&&(m.current=setTimeout(()=>{i(!1)},300))},[r,t]),n.useEffect(()=>{if(!l.current)return;const o=new AbortController;return r!=="idle"?s(!1):(Promise.all(l.current.getAnimations({subtree:!0}).map(f=>f.finished)).then(()=>{o.signal.aborted||s(!0)}),()=>{o.abort()})},[r]),e.jsx("div",{className:Pe.progress,"data-status":r,"data-visible":a,"data-complete":t,ref:l})}const Ve="_container_j3vhn_2",Je="_skip_j3vhn_12",z={container:Ve,skip:Je},et=()=>[{rel:"preload",href:X,as:"font",type:"font/woff2",crossOrigin:""},{rel:"preload",href:Z,as:"font",type:"font/woff2",crossOrigin:""},{rel:"manifest",href:"/manifest.json"},{rel:"icon",href:"/favicon.ico"},{rel:"icon",href:"/favicon.svg",type:"image/svg+xml"},{rel:"shortcut_icon",href:"/shortcut.png",type:"image/png",sizes:"64x64"},{rel:"apple-touch-icon",href:"/icon-256.png",sizes:"256x256"},{rel:"author",href:"/humans.txt",type:"text/plain"}];function tt(){var l;let{canonicalUrl:t,theme:s}=de();const a=pe(),{state:i}=J();(l=a.formData)!=null&&l.has("theme")&&(s=a.formData.get("theme"));function r(m){a.submit({theme:m||(s==="dark"?"light":"dark")},{action:"/api/set-theme",method:"post"})}return n.useEffect(()=>{console.info(`${v.ascii}
`,`Taking a peek huh? Check out the source code: ${v.repo}

`)},[]),e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx("meta",{name:"theme-color",content:s==="dark"?"#111":"#F2F2F2"}),e.jsx("meta",{name:"color-scheme",content:s==="light"?"light dark":"dark light"}),e.jsx("style",{dangerouslySetInnerHTML:{__html:P}}),e.jsx(W,{}),e.jsx(q,{}),e.jsx("link",{rel:"canonical",href:t})]}),e.jsxs("body",{"data-theme":s,children:[e.jsxs(Q,{theme:s,toggleTheme:r,children:[e.jsx(Ge,{}),e.jsx(te,{showOnFocus:!0,as:"a",className:z.skip,href:"#main-content",children:"Skip to main content"}),e.jsx(ze,{}),e.jsx("main",{id:"main-content",className:z.container,tabIndex:-1,"data-loading":i==="loading",children:e.jsx(ge,{})})]}),e.jsx(Y,{}),e.jsx(U,{})]})]})}function st(){const t=fe();return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx("meta",{name:"theme-color",content:"#111"}),e.jsx("meta",{name:"color-scheme",content:"dark light"}),e.jsx("style",{dangerouslySetInnerHTML:{__html:P}}),e.jsx(W,{}),e.jsx(q,{})]}),e.jsxs("body",{"data-theme":"dark",children:[e.jsx(ee,{error:t}),e.jsx(Y,{}),e.jsx(U,{})]})]})}export{st as ErrorBoundary,tt as default,et as links};
