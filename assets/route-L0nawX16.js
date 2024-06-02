import{r as S,j as p,b as Qe}from"./jsx-runtime-CbkKSL4Y.js";import{c as Ce,a as L,T as N,d as I,t as x,I as ke,H as ue,B as ce,b as Ze,n as de}from"./heading-DOZD3MDR.js";import{D as et}from"./decoder-text-BvFLenye.js";import{D as tt}from"./divider-CELHoyFx.js";import{b as rt,S as nt,F as at}from"./meta-DgQo3lxv.js";import{o as st,F as T,G as Z,H as ot,I as Te,J as je,K as J,N as it,P,Q as A,U as G,T as lt,i as $,V as De,W as ee,X as ut,Y as ct,Z as dt,$ as ft,a0 as fe,a1 as ht,a2 as he,E as mt,a3 as pt,a4 as gt,a5 as yt,a6 as wt,a7 as Me,a8 as _t,a9 as bt,aa as St,A as vt,ab as xt}from"./components-r4J6YuSM.js";import"./config-o8qSC8aY.js";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var Rt=kt,Et=Tt,Ct=Object.prototype.toString,F=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function kt(e,t){if(typeof e!="string")throw new TypeError("argument str must be a string");for(var r={},n=t||{},a=n.decode||jt,o=0;o<e.length;){var i=e.indexOf("=",o);if(i===-1)break;var s=e.indexOf(";",o);if(s===-1)s=e.length;else if(s<i){o=e.lastIndexOf(";",i-1)+1;continue}var l=e.slice(o,i).trim();if(r[l]===void 0){var c=e.slice(i+1,s).trim();c.charCodeAt(0)===34&&(c=c.slice(1,-1)),r[l]=Ht(c,a)}o=s+1}return r}function Tt(e,t,r){var n=r||{},a=n.encode||Dt;if(typeof a!="function")throw new TypeError("option encode is invalid");if(!F.test(e))throw new TypeError("argument name is invalid");var o=a(t);if(o&&!F.test(o))throw new TypeError("argument val is invalid");var i=e+"="+o;if(n.maxAge!=null){var s=n.maxAge-0;if(isNaN(s)||!isFinite(s))throw new TypeError("option maxAge is invalid");i+="; Max-Age="+Math.floor(s)}if(n.domain){if(!F.test(n.domain))throw new TypeError("option domain is invalid");i+="; Domain="+n.domain}if(n.path){if(!F.test(n.path))throw new TypeError("option path is invalid");i+="; Path="+n.path}if(n.expires){var l=n.expires;if(!Mt(l)||isNaN(l.valueOf()))throw new TypeError("option expires is invalid");i+="; Expires="+l.toUTCString()}if(n.httpOnly&&(i+="; HttpOnly"),n.secure&&(i+="; Secure"),n.partitioned&&(i+="; Partitioned"),n.priority){var c=typeof n.priority=="string"?n.priority.toLowerCase():n.priority;switch(c){case"low":i+="; Priority=Low";break;case"medium":i+="; Priority=Medium";break;case"high":i+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(n.sameSite){var u=typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite;switch(u){case!0:i+="; SameSite=Strict";break;case"lax":i+="; SameSite=Lax";break;case"strict":i+="; SameSite=Strict";break;case"none":i+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return i}function jt(e){return e.indexOf("%")!==-1?decodeURIComponent(e):e}function Dt(e){return encodeURIComponent(e)}function Mt(e){return Ct.call(e)==="[object Date]"||e instanceof Date}function Ht(e,t){try{return t(e)}catch{return e}}/**
 * @remix-run/server-runtime v2.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const me={};function He(e,t){!e&&!me[t]&&(me[t]=!0,console.warn(t))}/**
 * @remix-run/server-runtime v2.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const At=({sign:e,unsign:t})=>(r,n={})=>{let{secrets:a=[],...o}={path:"/",sameSite:"lax",...n};return Ut(r,o.expires),{get name(){return r},get isSigned(){return a.length>0},get expires(){return typeof o.maxAge<"u"?new Date(Date.now()+o.maxAge*1e3):o.expires},async parse(i,s){if(!i)return null;let l=Rt(i,{...o,...s});return r in l?l[r]===""?"":await Ft(t,l[r],a):null},async serialize(i,s){return Et(r,i===""?"":await Ot(e,i,a),{...o,...s})}}},te=e=>e!=null&&typeof e.name=="string"&&typeof e.isSigned=="boolean"&&typeof e.parse=="function"&&typeof e.serialize=="function";async function Ot(e,t,r){let n=Nt(t);return r.length>0&&(n=await e(n,r[0])),n}async function Ft(e,t,r){if(r.length>0){for(let n of r){let a=await e(t,n);if(a!==!1)return pe(a)}return null}return pe(t)}function Nt(e){return btoa(Pt(encodeURIComponent(JSON.stringify(e))))}function pe(e){try{return JSON.parse(decodeURIComponent(It(atob(e))))}catch{return{}}}function It(e){let t=e.toString(),r="",n=0,a,o;for(;n<t.length;)a=t.charAt(n++),/[\w*+\-./@]/.exec(a)?r+=a:(o=a.charCodeAt(0),o<256?r+="%"+ge(o,2):r+="%u"+ge(o,4).toUpperCase());return r}function ge(e,t){let r=e.toString(16);for(;r.length<t;)r="0"+r;return r}function Pt(e){let t=e.toString(),r="",n=0,a,o;for(;n<t.length;){if(a=t.charAt(n++),a==="%"){if(t.charAt(n)==="u"){if(o=t.slice(n+1,n+5),/^[\da-f]{4}$/i.exec(o)){r+=String.fromCharCode(parseInt(o,16)),n+=5;continue}}else if(o=t.slice(n,n+2),/^[\da-f]{2}$/i.exec(o)){r+=String.fromCharCode(parseInt(o,16)),n+=2;continue}}r+=a}return r}function Ut(e,t){He(!t,`The "${e}" cookie has an "expires" property set. This will cause the expires value to not be updated when the session is committed. Instead, you should set the expires value when serializing the cookie. You can use \`commitSession(session, { expires })\` if using a session storage object, or \`cookie.serialize("value", { expires })\` if you're using the cookie directly.`)}function q(e){const t=unescape(encodeURIComponent(e));return Uint8Array.from(t,(r,n)=>t.charCodeAt(n))}function Lt(e){const t=String.fromCharCode.apply(null,e);return decodeURIComponent(escape(t))}function U(...e){const t=new Uint8Array(e.reduce((n,a)=>n+a.length,0));let r=0;for(const n of e)t.set(n,r),r+=n.length;return t}function $t(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}function ye(e){return e instanceof Uint8Array?t=>e[t]:e}function B(e,t,r,n,a){const o=ye(e),i=ye(r);for(let s=0;s<a;++s)if(o(t+s)!==i(n+s))return!1;return!0}function qt(e){const t=new Array(256).fill(e.length);if(e.length>1)for(let r=0;r<e.length-1;r++)t[e[r]]=e.length-1-r;return t}const R=Symbol("Match");class re{constructor(t){this._lookbehind=new Uint8Array,typeof t=="string"?this._needle=t=q(t):this._needle=t,this._lastChar=t[t.length-1],this._occ=qt(t)}feed(t){let r=0,n;const a=[];for(;r!==t.length;)[r,...n]=this._feed(t,r),a.push(...n);return a}end(){const t=this._lookbehind;return this._lookbehind=new Uint8Array,t}_feed(t,r){const n=[];let a=-this._lookbehind.length;if(a<0){for(;a<0&&a<=t.length-this._needle.length;){const o=this._charAt(t,a+this._needle.length-1);if(o===this._lastChar&&this._memcmp(t,a,this._needle.length-1))return a>-this._lookbehind.length&&n.push(this._lookbehind.slice(0,this._lookbehind.length+a)),n.push(R),this._lookbehind=new Uint8Array,[a+this._needle.length,...n];a+=this._occ[o]}if(a<0)for(;a<0&&!this._memcmp(t,a,t.length-a);)a++;if(a>=0)n.push(this._lookbehind),this._lookbehind=new Uint8Array;else{const o=this._lookbehind.length+a;return o>0&&(n.push(this._lookbehind.slice(0,o)),this._lookbehind=this._lookbehind.slice(o)),this._lookbehind=Uint8Array.from(new Array(this._lookbehind.length+t.length),(i,s)=>this._charAt(t,s-this._lookbehind.length)),[t.length,...n]}}for(a+=r;a<=t.length-this._needle.length;){const o=t[a+this._needle.length-1];if(o===this._lastChar&&t[a]===this._needle[0]&&B(this._needle,0,t,a,this._needle.length-1))return a>r&&n.push(t.slice(r,a)),n.push(R),[a+this._needle.length,...n];a+=this._occ[o]}if(a<t.length){for(;a<t.length&&(t[a]!==this._needle[0]||!B(t,a,this._needle,0,t.length-a));)++a;a<t.length&&(this._lookbehind=t.slice(a))}return a>0&&n.push(t.slice(r,a<t.length?a:t.length)),[t.length,...n]}_charAt(t,r){return r<0?this._lookbehind[this._lookbehind.length+r]:t[r]}_memcmp(t,r,n){return B(this._charAt.bind(this,t),r,this._needle,0,n)}}class Vt{constructor(t,r){this._readableStream=r,this._search=new re(t)}async*[Symbol.asyncIterator](){const t=this._readableStream.getReader();try{for(;;){const n=await t.read();if(n.done)break;yield*this._search.feed(n.value)}const r=this._search.end();r.length&&(yield r)}finally{t.releaseLock()}}}const zt=Function.prototype.apply.bind(U,void 0),Ae=q("--"),H=q(`\r
`);function Xt(e){const t=e.split(";").map(n=>n.trim());if(t.shift()!=="form-data")throw new Error('malformed content-disposition header: missing "form-data" in `'+JSON.stringify(t)+"`");const r={};for(const n of t){const a=n.split("=",2);if(a.length!==2)throw new Error("malformed content-disposition header: key-value pair not found - "+n+" in `"+e+"`");const[o,i]=a;if(i[0]==='"'&&i[i.length-1]==='"')r[o]=i.slice(1,-1).replace(/\\"/g,'"');else if(i[0]!=='"'&&i[i.length-1]!=='"')r[o]=i;else if(i[0]==='"'&&i[i.length-1]!=='"'||i[0]!=='"'&&i[i.length-1]==='"')throw new Error("malformed content-disposition header: mismatched quotations in `"+e+"`")}if(!r.name)throw new Error("malformed content-disposition header: missing field name in `"+e+"`");return r}function Bt(e){const t=[];let r=!1,n;for(;typeof(n=e.shift())<"u";){const a=n.indexOf(":");if(a===-1)throw new Error("malformed multipart-form header: missing colon");const o=n.slice(0,a).trim().toLowerCase(),i=n.slice(a+1).trim();switch(o){case"content-disposition":r=!0,t.push(...Object.entries(Xt(i)));break;case"content-type":t.push(["contentType",i])}}if(!r)throw new Error("malformed multipart-form header: missing content-disposition");return Object.fromEntries(t)}async function Kt(e,t){let r=!0,n=!1;const a=[[]],o=new re(H);for(;;){const i=await e.next();if(i.done)throw new Error("malformed multipart-form data: unexpected end of stream");if(r&&i.value!==R&&$t(i.value.slice(0,2),Ae))return[void 0,new Uint8Array];let s;if(i.value!==R)s=i.value;else if(!n)s=t;else throw new Error("malformed multipart-form data: unexpected boundary");if(!s.length)continue;r&&(r=!1);const l=o.feed(s);for(const[c,u]of l.entries()){const f=u===R;if(!(!f&&!u.length)){if(n&&f)return l.push(o.end()),[a.filter(g=>g.length).map(zt).map(Lt),U(...l.slice(c+1).map(g=>g===R?H:g))];(n=f)?a.push([]):a[a.length-1].push(u)}}}}async function*Wt(e,t){const r=U(Ae,q(t)),n=new Vt(r,e)[Symbol.asyncIterator]();for(;;){const o=await n.next();if(o.done)return;if(o.value===R)break}const a=new re(H);for(;;){let c=function(h){const d=[];for(const y of a.feed(h))l&&d.push(H),(l=y===R)||d.push(y);return U(...d)};const[o,i]=await Kt(n,r);if(!o)return;async function s(){const h=await n.next();if(h.done)throw new Error("malformed multipart-form data: unexpected end of stream");return h}let l=!1,u=!1;async function f(){const h=await s();let d;if(h.value!==R)d=h.value;else if(!l)d=H;else return u=!0,{value:a.end()};return{value:c(d)}}const g=[{value:c(i)}];for(yield{...Bt(o),data:{[Symbol.asyncIterator](){return this},async next(){for(;;){const h=g.shift();if(!h)break;if(h.value.length>0)return h}for(;;){if(u)return{done:u,value:void 0};const h=await f();if(h.value.length>0)return h}}}};!u;)g.push(await f())}}/**
 * @remix-run/server-runtime v2.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jt(...e){return async t=>{for(let r of e){let n=await r(t);if(typeof n<"u"&&n!==null)return n}}}async function Gt(e,t){let r=e.headers.get("Content-Type")||"",[n,a]=r.split(/\s*;\s*boundary=/);if(!e.body||!a||n!=="multipart/form-data")throw new TypeError("Could not parse content as FormData.");let o=new FormData,i=Wt(e.body,a);for await(let s of i){if(s.done)break;typeof s.filename=="string"&&(s.filename=s.filename.split(/[/\\]/).pop());let l=await t(s);typeof l<"u"&&l!==null&&o.append(s.name,l)}return o}/**
 * @remix-run/server-runtime v2.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yt(e){return Object.keys(e).reduce((t,r)=>(t[r]=e[r].module,t),{})}var V={exports:{}},D={decodeValues:!0,map:!1,silent:!1};function Y(e){return typeof e=="string"&&!!e.trim()}function Q(e,t){var r=e.split(";").filter(Y),n=r.shift(),a=Qt(n),o=a.name,i=a.value;t=t?Object.assign({},D,t):D;try{i=t.decodeValues?decodeURIComponent(i):i}catch(l){console.error("set-cookie-parser encountered an error while decoding a cookie with value '"+i+"'. Set options.decodeValues to false to disable this feature.",l)}var s={name:o,value:i};return r.forEach(function(l){var c=l.split("="),u=c.shift().trimLeft().toLowerCase(),f=c.join("=");u==="expires"?s.expires=new Date(f):u==="max-age"?s.maxAge=parseInt(f,10):u==="secure"?s.secure=!0:u==="httponly"?s.httpOnly=!0:u==="samesite"?s.sameSite=f:s[u]=f}),s}function Qt(e){var t="",r="",n=e.split("=");return n.length>1?(t=n.shift(),r=n.join("=")):r=e,{name:t,value:r}}function Oe(e,t){if(t=t?Object.assign({},D,t):D,!e)return t.map?{}:[];if(e.headers)if(typeof e.headers.getSetCookie=="function")e=e.headers.getSetCookie();else if(e.headers["set-cookie"])e=e.headers["set-cookie"];else{var r=e.headers[Object.keys(e.headers).find(function(a){return a.toLowerCase()==="set-cookie"})];!r&&e.headers.cookie&&!t.silent&&console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."),e=r}if(Array.isArray(e)||(e=[e]),t=t?Object.assign({},D,t):D,t.map){var n={};return e.filter(Y).reduce(function(a,o){var i=Q(o,t);return a[i.name]=i,a},n)}else return e.filter(Y).map(function(a){return Q(a,t)})}function Zt(e){if(Array.isArray(e))return e;if(typeof e!="string")return[];var t=[],r=0,n,a,o,i,s;function l(){for(;r<e.length&&/\s/.test(e.charAt(r));)r+=1;return r<e.length}function c(){return a=e.charAt(r),a!=="="&&a!==";"&&a!==","}for(;r<e.length;){for(n=r,s=!1;l();)if(a=e.charAt(r),a===","){for(o=r,r+=1,l(),i=r;r<e.length&&c();)r+=1;r<e.length&&e.charAt(r)==="="?(s=!0,r=i,t.push(e.substring(n,o)),n=r):r=o+1}else r+=1;(!s||r>=e.length)&&t.push(e.substring(n,e.length))}return t}V.exports=Oe;V.exports.parse=Oe;V.exports.parseString=Q;var er=V.exports.splitCookiesString=Zt;/**
 * @remix-run/server-runtime v2.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tr(e,t){let r=t.errors?t.matches.findIndex(o=>t.errors[o.route.id]):-1,n=r>=0?t.matches.slice(0,r+1):t.matches,a;if(r>=0){let{actionHeaders:o,actionData:i,loaderHeaders:s,loaderData:l}=t;t.matches.slice(r).some(c=>{let u=c.route.id;return o[u]&&(!i||i[u]===void 0)?a=o[u]:s[u]&&l[u]===void 0&&(a=s[u]),a!=null})}return n.reduce((o,i,s)=>{let{id:l}=i.route,c=e.routes[l].module,u=t.loaderHeaders[l]||new Headers,f=t.actionHeaders[l]||new Headers,g=a!=null&&s===n.length-1,h=g&&a!==u&&a!==f;if(c.headers==null){let y=new Headers(o);return h&&E(a,y),E(f,y),E(u,y),y}let d=new Headers(c.headers?typeof c.headers=="function"?c.headers({loaderHeaders:u,parentHeaders:o,actionHeaders:f,errorHeaders:g?a:void 0}):c.headers:void 0);return h&&E(a,d),E(f,d),E(u,d),E(o,d),d},new Headers)}function E(e,t){let r=e.get("Set-Cookie");r&&er(r).forEach(a=>{t.append("Set-Cookie",a)})}/**
 * @remix-run/server-runtime v2.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function we(e,t){if(e===!1||e===null||typeof e>"u")throw console.error("The following error is a bug in Remix; please open an issue! https://github.com/remix-run/remix/issues/new"),new Error(t)}/**
 * @remix-run/server-runtime v2.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _e(e,t,r){let n=st(e,t,r);return n?n.map(a=>({params:a.params,pathname:a.pathname,route:a.route})):null}/**
 * @remix-run/server-runtime v2.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */async function rr({loadContext:e,action:t,params:r,request:n,routeId:a,singleFetch:o,response:i}){let s=await t({request:Ne(Fe(n)),context:e,params:r,response:i});if(s===void 0)throw new Error(`You defined an action for route "${a}" but didn't return anything from your \`action\` function. Please return a value or \`null\`.`);return o||T(s)?s:Z(s)}async function nr({loadContext:e,loader:t,params:r,request:n,routeId:a,singleFetch:o,response:i}){let s=await t({request:Ne(Fe(n)),context:e,params:r,response:i});if(s===void 0)throw new Error(`You defined a loader for route "${a}" but didn't return anything from your \`loader\` function. Please return a value or \`null\`.`);return ot(s)?s.init&&Te(s.init.status||200)?je(new Headers(s.init.headers).get("Location"),s.init):s:o||T(s)?s:Z(s)}function Fe(e){let t=new URL(e.url),r=t.searchParams.getAll("index");t.searchParams.delete("index");let n=[];for(let o of r)o&&n.push(o);for(let o of n)t.searchParams.append("index",o);let a={method:e.method,body:e.body,headers:e.headers,signal:e.signal};return a.body&&(a.duplex="half"),new Request(t.href,a)}function Ne(e){let t=new URL(e.url);t.searchParams.delete("_data");let r={method:e.method,body:e.body,headers:e.headers,signal:e.signal};return r.body&&(r.duplex="half"),new Request(t.href,r)}/**
 * @remix-run/server-runtime v2.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ie(e){let t={};return Object.values(e).forEach(r=>{let n=r.parentId||"";t[n]||(t[n]=[]),t[n].push(r)}),t}function Pe(e,t="",r=Ie(e)){return(r[t]||[]).map(n=>({...n,children:Pe(e,n.id,r)}))}function Ue(e,t,r="",n=Ie(e)){return(n[r]||[]).map(a=>{let o={hasErrorBoundary:a.id==="root"||a.module.ErrorBoundary!=null,id:a.id,path:a.path,loader:a.module.loader?(i,s)=>nr({request:i.request,params:i.params,loadContext:i.context,loader:a.module.loader,routeId:a.id,singleFetch:t.unstable_singleFetch===!0,response:s==null?void 0:s.response}):void 0,action:a.module.action?(i,s)=>rr({request:i.request,params:i.params,loadContext:i.context,action:a.module.action,routeId:a.id,singleFetch:t.unstable_singleFetch===!0,response:s==null?void 0:s.response}):void 0,handle:a.module.handle};return a.index?{index:!0,...o}:{caseSensitive:a.caseSensitive,children:Ue(e,t,a.id,n),...o}})}/**
 * @remix-run/server-runtime v2.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const ar={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},sr=/[&><\u2028\u2029]/g;function or(e){return e.replace(sr,t=>ar[t])}/**
 * @remix-run/server-runtime v2.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function be(e){return or(JSON.stringify(e))}var ir={};/**
 * @remix-run/server-runtime v2.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */async function lr(e,t){if(t??(t=ir.REMIX_DEV_ORIGIN),!t)throw Error("Dev server origin not set");let r=new URL(t);r.pathname="ping";let n=await fetch(r.href,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({buildHash:e.assets.version})}).catch(a=>{throw console.error(`Could not reach Remix dev server at ${r}`),a});if(!n.ok)throw console.error(`Could not reach Remix dev server at ${r} (${n.status})`),Error(await n.text())}function ur(e){console.log(`[REMIX DEV] ${e.assets.version} ready`)}const Le="__remix_devServerHooks";function cr(e){globalThis[Le]=e}function Se(){return globalThis[Le]}/**
 * @remix-run/server-runtime v2.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ve(e,t){var r,n;let a=Pe(e.routes),o=Ue(e.routes,e.future),i=yt(t)?t:A.Production,s=wt(o,{basename:e.basename,future:{v7_relativeSplatPath:((r=e.future)===null||r===void 0?void 0:r.v3_relativeSplatPath)===!0,v7_throwAbortReason:((n=e.future)===null||n===void 0?void 0:n.v3_throwAbortReason)===!0}}),l=e.entry.module.handleError||((c,{request:u})=>{i!==A.Test&&!u.signal.aborted&&console.error($(c)&&c.error?c.error:c)});return{routes:a,dataRoutes:o,serverMode:i,staticHandler:s,errorHandler:l}}const dr=(e,t)=>{let r,n,a,o,i;return async function(l,c={}){if(r=typeof e=="function"?await e():e,t??(t=r.mode),typeof e=="function"){let m=ve(r,t);n=m.routes,a=m.serverMode,o=m.staticHandler,i=m.errorHandler}else if(!n||!a||!o||!i){let m=ve(r,t);n=m.routes,a=m.serverMode,o=m.staticHandler,i=m.errorHandler}let u=new URL(l.url),f=_e(n,u.pathname,r.basename),g=f&&f.length>0?f[0].params:{},h=m=>{if(t===A.Development){var v,_;(v=Se())===null||v===void 0||(_=v.processRequestError)===null||_===void 0||_.call(v,m)}i(m,{context:c,params:g,request:l})},d;if(u.searchParams.has("_data")){r.future.unstable_singleFetch&&h(new Error("Warning: Single fetch-enabled apps should not be making ?_data requests, this is likely to break in the future"));let m=u.searchParams.get("_data");d=await fr(a,r,o,m,l,c,h),r.entry.module.handleDataRequest&&(d=await r.entry.module.handleDataRequest(d,{context:c,params:g,request:l}),J(d)&&(d=Ve(d,r.basename)))}else if(r.future.unstable_singleFetch&&u.pathname.endsWith(".data")){let m=new URL(l.url);m.pathname=m.pathname.replace(/\.data$/,"").replace(/^\/_root$/,"/");let v=_e(n,m.pathname,r.basename);if(d=await hr(a,r,o,l,m,c,h),r.entry.module.handleDataRequest&&(d=await r.entry.module.handleDataRequest(d,{context:c,params:v?v[0].params:{},request:l}),J(d))){let _=it(d.status,d.headers);l.method==="GET"&&(_={[Me]:_});let M=new Headers(d.headers);return M.set("Content-Type","text/x-turbo"),new Response(P(_,l.signal,r.entry.module.streamTimeout,a),{status:200,headers:M})}}else if(f&&f[f.length-1].route.module.default==null&&f[f.length-1].route.module.ErrorBoundary==null)d=await pr(a,o,f.slice(-1)[0].route.id,l,c,h);else{var y,b;let m=t===A.Development?await((y=Se())===null||y===void 0||(b=y.getCriticalCss)===null||b===void 0?void 0:b.call(y,r,u.pathname)):void 0;d=await mr(a,r,o,l,c,h,m)}return l.method==="HEAD"?new Response(null,{headers:d.headers,status:d.status,statusText:d.statusText}):d}};async function fr(e,t,r,n,a,o,i){try{let s=await r.queryRoute(a,{routeId:n,requestContext:o});if(J(s))return Ve(s,t.basename);if(G in s){let l=s[G],c=lt(l,a.signal,e),u=l.init||{},f=new Headers(u.headers);return f.set("Content-Type","text/remix-deferred"),f.set("X-Remix-Response","yes"),u.headers=f,new Response(c,u)}return s.headers.set("X-Remix-Response","yes"),s}catch(s){if(T(s))return s.headers.set("X-Remix-Catch","yes"),s;if($(s))return i(s),$e(s,e);let l=s instanceof Error||s instanceof DOMException?s:new Error("Unexpected Server Error");return i(l),De(ee(l,e),{status:500,headers:{"X-Remix-Error":"yes"}})}}async function hr(e,t,r,n,a,o,i){let{result:s,headers:l,status:c}=n.method!=="GET"?await ut(e,r,n,a,o,i):await ct(e,r,n,a,o,i),u=new Headers(l);return u.set("X-Remix-Response","yes"),u.set("Content-Type","text/x-turbo"),new Response(P(s,n.signal,t.entry.module.streamTimeout,e),{status:c||200,headers:u})}async function mr(e,t,r,n,a,o,i){let s,l=dt();try{s=await r.query(n,{requestContext:a,unstable_dataStrategy:t.future.unstable_singleFetch?ft(l):void 0})}catch(d){return o(d),new Response(null,{status:500})}if(T(s))return s;s.errors&&(Object.values(s.errors).forEach(d=>{(!$(d)||d.error)&&o(d)}),s.errors=fe(s.errors,e));let c,u;if(t.future.unstable_singleFetch){let d=ht(s,l);if(c=d.statusCode,u=d.headers,Te(c)&&u.has("Location"))return new Response(null,{status:c,headers:u})}else c=s.statusCode,u=tr(t,s);let f={loaderData:s.loaderData,actionData:s.actionData,errors:he(s.errors,e)},g={manifest:t.assets,routeModules:Yt(t.routes),staticHandlerContext:s,criticalCss:i,serverHandoffString:be({url:s.location.pathname,basename:t.basename,criticalCss:i,future:t.future,isSpaMode:t.isSpaMode,...t.future.unstable_singleFetch?null:{state:f}}),...t.future.unstable_singleFetch?{serverHandoffStream:P(f,n.signal,t.entry.module.streamTimeout,e),renderMeta:{}}:null,future:t.future,isSpaMode:t.isSpaMode,serializeError:d=>ee(d,e)},h=t.entry.module.default;try{return await h(n,c,u,g,a)}catch(d){o(d);let y=d;if(T(d))try{let m=await gr(d);y=new mt(d.status,d.statusText,m)}catch{}s=pt(r.dataRoutes,s,y),s.errors&&(s.errors=fe(s.errors,e));let b={loaderData:s.loaderData,actionData:s.actionData,errors:he(s.errors,e)};g={...g,staticHandlerContext:s,serverHandoffString:be({url:s.location.pathname,basename:t.basename,future:t.future,isSpaMode:t.isSpaMode,...t.future.unstable_singleFetch?null:{state:b}}),...t.future.unstable_singleFetch?{serverHandoffStream:P(b,n.signal,t.entry.module.streamTimeout,e),renderMeta:{}}:null};try{return await h(n,s.statusCode,u,g,a)}catch(m){return o(m),qe(m,e)}}}async function pr(e,t,r,n,a,o){try{let i=await t.queryRoute(n,{routeId:r,requestContext:a});return typeof i=="object"&&we(!(G in i),`You cannot return a \`defer()\` response from a Resource Route.  Did you forget to export a default UI component from the "${r}" route?`),we(T(i),"Expected a Response to be returned from queryRoute"),i}catch(i){return T(i)?(i.headers.set("X-Remix-Catch","yes"),i):$(i)?(i&&o(i),$e(i,e)):(o(i),qe(i,e))}}function $e(e,t){return De(ee(e.error||new Error("Unexpected Server Error"),t),{status:e.status,statusText:e.statusText,headers:{"X-Remix-Error":"yes"}})}function qe(e,t){let r="Unexpected Server Error";return t!==A.Production&&(r+=`

${String(e)}`),new Response(r,{status:500,headers:{"Content-Type":"text/plain"}})}function gr(e){let t=e.headers.get("Content-Type");return t&&/\bapplication\/json\b/.test(t)?e.body==null?null:e.json():e.text()}function Ve(e,t){let r=new Headers(e.headers),n=r.get("Location");return r.set("X-Remix-Redirect",t&&gt(n,t)||n),r.set("X-Remix-Status",String(e.status)),r.delete("Location"),e.headers.get("Set-Cookie")!==null&&r.set("X-Remix-Revalidate","yes"),new Response(null,{status:204,headers:r})}/**
 * @remix-run/server-runtime v2.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function K(e){return`__flash_${e}__`}const ne=(e={},t="")=>{let r=new Map(Object.entries(e));return{get id(){return t},get data(){return Object.fromEntries(r)},has(n){return r.has(n)||r.has(K(n))},get(n){if(r.has(n))return r.get(n);let a=K(n);if(r.has(a)){let o=r.get(a);return r.delete(a),o}},set(n,a){r.set(n,a)},flash(n,a){r.set(K(n),a)},unset(n){r.delete(n)}}},yr=e=>e!=null&&typeof e.id=="string"&&typeof e.data<"u"&&typeof e.has=="function"&&typeof e.get=="function"&&typeof e.set=="function"&&typeof e.flash=="function"&&typeof e.unset=="function",wr=e=>({cookie:t,createData:r,readData:n,updateData:a,deleteData:o})=>{let i=te(t)?t:e((t==null?void 0:t.name)||"__session",t);return ze(i),{async getSession(s,l){let c=s&&await i.parse(s,l),u=c&&await n(c);return ne(u||{},c||"")},async commitSession(s,l){let{id:c,data:u}=s,f=(l==null?void 0:l.maxAge)!=null?new Date(Date.now()+l.maxAge*1e3):(l==null?void 0:l.expires)!=null?l.expires:i.expires;return c?await a(c,u,f):c=await r(u,f),i.serialize(c,l)},async destroySession(s,l){return await o(s.id),i.serialize("",{...l,maxAge:void 0,expires:new Date(0)})}}};function ze(e){He(e.isSigned,`The "${e.name}" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server. See https://remix.run/utils/cookies#signing-cookies for more information.`)}/**
 * @remix-run/server-runtime v2.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const _r=e=>({cookie:t}={})=>{let r=te(t)?t:e((t==null?void 0:t.name)||"__session",t);return ze(r),{async getSession(n,a){return ne(n&&await r.parse(n,a)||{})},async commitSession(n,a){let o=await r.serialize(n.data,a);if(o.length>4096)throw new Error("Cookie length will exceed browser maximum. Length: "+o.length);return o},async destroySession(n,a){return r.serialize("",{...a,maxAge:void 0,expires:new Date(0)})}}};/**
 * @remix-run/server-runtime v2.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const br=e=>({cookie:t}={})=>{let r=new Map;return e({cookie:t,async createData(n,a){let o=Math.random().toString(36).substring(2,10);return r.set(o,{data:n,expires:a}),o},async readData(n){if(r.has(n)){let{data:a,expires:o}=r.get(n);if(!o||o>new Date)return a;o&&r.delete(n)}return null},async updateData(n,a,o){r.set(n,{data:a,expires:o})},async deleteData(n){r.delete(n)}})};/**
 * @remix-run/server-runtime v2.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */class Xe extends Error{constructor(t,r){super(`Field "${t}" exceeded upload size of ${r} bytes.`),this.field=t,this.maxBytes=r}}/**
 * @remix-run/server-runtime v2.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sr({filter:e,maxPartSize:t=3e6}={}){return async({filename:r,contentType:n,name:a,data:o})=>{if(e&&!await e({filename:r,contentType:n,name:a}))return;let i=0,s=[];for await(let l of o){if(i+=l.byteLength,i>t)throw new Xe(a,t);s.push(l)}return typeof r=="string"?new File(s,r,{type:n}):await new Blob(s,{type:n}).text()}}/**
 * @remix-run/server-runtime v2.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const vr=Object.freeze(Object.defineProperty({__proto__:null,MaxPartSizeExceededError:Xe,UNSAFE_SingleFetchRedirectSymbol:Me,broadcastDevReady:lr,createCookieFactory:At,createCookieSessionStorageFactory:_r,createMemorySessionStorageFactory:br,createRequestHandler:dr,createSession:ne,createSessionStorageFactory:wr,defer:_t,isCookie:te,isSession:yr,json:Z,logDevReady:ur,redirect:je,redirectDocument:bt,unstable_composeUploadHandlers:Jt,unstable_createMemoryUploadHandler:Sr,unstable_parseMultipartFormData:Gt,unstable_setDevServerHooks:cr},Symbol.toStringTag,{value:"Module"}));function xe(e=""){const[t,r]=S.useState(e),[n,a]=S.useState(),[o,i]=S.useState(!1);return{value:t,error:n,onChange:u=>{r(u.target.value),i(!0),n&&u.target.checkValidity()&&a(null)},onBlur:u=>{o&&u.target.checkValidity()},onInvalid:u=>{u.preventDefault(),a(u.target.validationMessage)}}}const xr="_textarea_1ly3z_2",Rr={textarea:xr},Er=({className:e,resize:t="none",value:r,onChange:n,minRows:a=1,maxRows:o,...i})=>{const[s,l]=S.useState(a),[c,u]=S.useState(),f=S.useRef();S.useEffect(()=>{const h=getComputedStyle(f.current),d=parseInt(h.lineHeight,10),y=parseInt(h.paddingTop,10)+parseInt(h.paddingBottom,10);u({lineHeight:d,paddingHeight:y})},[]);const g=h=>{n(h);const{lineHeight:d,paddingHeight:y}=c,b=h.target.rows;h.target.rows=a;const m=~~((h.target.scrollHeight-y)/d);m===b&&(h.target.rows=m),o&&m>=o&&(h.target.rows=o,h.target.scrollTop=h.target.scrollHeight),l(o&&m>o?o:m)};return p.jsx("textarea",{className:Ce(Rr.textarea,e),ref:f,onChange:g,style:L({resize:t}),rows:s,value:r,...i})},Cr="_container_1ukhq_2",kr="_content_1ukhq_16",Tr="_input_1ukhq_21",jr="_root_1ukhq_1",Dr="_underline_1ukhq_55",Mr="_label_1ukhq_73",Hr="_error_1ukhq_95",Ar="_errorMessage_1ukhq_111",C={container:Cr,content:kr,input:Tr,root:jr,underline:Dr,label:Mr,error:Hr,errorMessage:Ar},W=({id:e,label:t,value:r,multiline:n,className:a,style:o,error:i,onBlur:s,autoComplete:l,required:c,maxLength:u,type:f,onChange:g,name:h,...d})=>{const[y,b]=S.useState(!1),m=S.useId(),v=S.useRef(),_=e||`${m}input`,M=`${_}-label`,ie=`${_}-error`,Je=n?Er:"input",Ge=O=>{b(!1),s&&s(O)};return p.jsxs("div",{className:Ce(C.container,a),"data-error":!!i,style:o,...d,children:[p.jsxs("div",{className:C.content,children:[p.jsx("label",{className:C.label,"data-focused":y,"data-filled":!!r,id:M,htmlFor:_,children:t}),p.jsx(Je,{className:C.input,id:_,"aria-labelledby":M,"aria-describedby":i?ie:void 0,onFocus:()=>b(!0),onBlur:Ge,value:r,onChange:g,autoComplete:l,required:c,maxLength:u,type:f,name:h}),p.jsx("div",{className:C.underline,"data-focused":y})]}),p.jsx(N,{unmount:!0,in:i,timeout:I(x.base.durationM),children:({visible:O,nodeRef:Ye})=>{var le;return p.jsx("div",{ref:Ye,className:C.error,"data-visible":O,id:ie,role:"alert",style:L({height:O?(le=v.current)==null?void 0:le.getBoundingClientRect().height:0}),children:p.jsxs("div",{className:C.errorMessage,ref:v,children:[p.jsx(ke,{icon:"error"}),i]})})}})]})};var Or={},ae={},j={};const Be=Qe(vr);var z={};/**
 * @remix-run/cloudflare v2.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */Object.defineProperty(z,"__esModule",{value:!0});const se=new TextEncoder,Fr=async(e,t)=>{let r=await Ke(t,["sign"]),n=se.encode(e),a=await crypto.subtle.sign("HMAC",r,n),o=btoa(String.fromCharCode(...new Uint8Array(a))).replace(/=+$/,"");return e+"."+o},Nr=async(e,t)=>{let r=e.lastIndexOf("."),n=e.slice(0,r),a=e.slice(r+1),o=await Ke(t,["verify"]),i=se.encode(n),s=Ir(atob(a));return await crypto.subtle.verify("HMAC",o,s,i)?n:!1};async function Ke(e,t){return await crypto.subtle.importKey("raw",se.encode(e),{name:"HMAC",hash:"SHA-256"},!1,t)}function Ir(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}z.sign=Fr;z.unsign=Nr;/**
 * @remix-run/cloudflare v2.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */Object.defineProperty(j,"__esModule",{value:!0});var X=Be,Re=z;const oe=X.createCookieFactory({sign:Re.sign,unsign:Re.unsign}),Pr=X.createCookieSessionStorageFactory(oe),We=X.createSessionStorageFactory(oe),Ur=X.createMemorySessionStorageFactory(We);j.createCookie=oe;j.createCookieSessionStorage=Pr;j.createMemorySessionStorage=Ur;j.createSessionStorage=We;/**
 * @remix-run/cloudflare v2.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */Object.defineProperty(ae,"__esModule",{value:!0});var Lr=j;function $r({cookie:e,kv:t}){return Lr.createSessionStorage({cookie:e,async createData(r,n){for(;;){let a=new Uint8Array(8);crypto.getRandomValues(a);let o=[...a].map(i=>i.toString(16).padStart(2,"0")).join("");if(!await t.get(o,"json"))return await t.put(o,JSON.stringify(r),{expiration:n?Math.round(n.getTime()/1e3):void 0}),o}},async readData(r){let n=await t.get(r);return n?JSON.parse(n):null},async updateData(r,n,a){await t.put(r,JSON.stringify(n),{expiration:a?Math.round(a.getTime()/1e3):void 0})},async deleteData(r){await t.delete(r)}})}ae.createWorkersKVSessionStorage=$r;/**
 * @remix-run/cloudflare v2.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=ae,r=j,n=Be;e.createWorkersKVSessionStorage=t.createWorkersKVSessionStorage,e.createCookie=r.createCookie,e.createCookieSessionStorage=r.createCookieSessionStorage,e.createMemorySessionStorage=r.createMemorySessionStorage,e.createSessionStorage=r.createSessionStorage,Object.defineProperty(e,"MaxPartSizeExceededError",{enumerable:!0,get:function(){return n.MaxPartSizeExceededError}}),Object.defineProperty(e,"broadcastDevReady",{enumerable:!0,get:function(){return n.broadcastDevReady}}),Object.defineProperty(e,"createRequestHandler",{enumerable:!0,get:function(){return n.createRequestHandler}}),Object.defineProperty(e,"createSession",{enumerable:!0,get:function(){return n.createSession}}),Object.defineProperty(e,"defer",{enumerable:!0,get:function(){return n.defer}}),Object.defineProperty(e,"isCookie",{enumerable:!0,get:function(){return n.isCookie}}),Object.defineProperty(e,"isSession",{enumerable:!0,get:function(){return n.isSession}}),Object.defineProperty(e,"json",{enumerable:!0,get:function(){return n.json}}),Object.defineProperty(e,"logDevReady",{enumerable:!0,get:function(){return n.logDevReady}}),Object.defineProperty(e,"redirect",{enumerable:!0,get:function(){return n.redirect}}),Object.defineProperty(e,"redirectDocument",{enumerable:!0,get:function(){return n.redirectDocument}}),Object.defineProperty(e,"unstable_composeUploadHandlers",{enumerable:!0,get:function(){return n.unstable_composeUploadHandlers}}),Object.defineProperty(e,"unstable_createMemoryUploadHandler",{enumerable:!0,get:function(){return n.unstable_createMemoryUploadHandler}}),Object.defineProperty(e,"unstable_parseMultipartFormData",{enumerable:!0,get:function(){return n.unstable_parseMultipartFormData}})})(Or);const qr="_contact_xvg9q_1",Vr="_form_xvg9q_18",zr="_title_xvg9q_30",Xr="_divider_xvg9q_60",Br="_input_xvg9q_98",Kr="_botkiller_xvg9q_140",Wr="_button_xvg9q_144",Jr="_complete_xvg9q_204",Gr="_completeTitle_xvg9q_215",Yr="_completeText_xvg9q_234",Qr="_completeButton_xvg9q_253",Zr="_formError_xvg9q_279",en="_formErrorContent_xvg9q_291",tn="_formErrorMessage_xvg9q_295",rn="_formErrorIcon_xvg9q_303",nn="_footer_xvg9q_308",w={contact:qr,form:Vr,title:zr,divider:Xr,input:Br,botkiller:Kr,button:Wr,complete:Jr,completeTitle:Gr,completeText:Yr,completeButton:Qr,formError:Zr,formErrorContent:en,formErrorMessage:tn,formErrorIcon:rn,footer:nn},hn=()=>rt({title:"Contact",description:"Send me a message if you’re interested in discussing a project or if you just want to say hi"}),Ee=512,an=4096,mn=()=>{const e=S.useRef(),t=xe(""),r=xe(""),n=x.base.durationS,a=St(),{state:o}=vt(),i=o==="submitting";return p.jsxs(nt,{className:w.contact,children:[p.jsx(N,{unmount:!0,in:!(a!=null&&a.success),timeout:1600,children:({status:s,nodeRef:l})=>p.jsxs(xt,{unstable_viewTransition:!0,className:w.form,method:"post",ref:l,children:[p.jsx(ue,{className:w.title,"data-status":s,level:3,as:"h1",style:k(x.base.durationXS,n,.3),children:p.jsx(et,{text:"Say hello",start:s!=="exited",delay:300})}),p.jsx(tt,{className:w.divider,"data-status":s,style:k(x.base.durationXS,n,.4)}),p.jsx(W,{className:w.botkiller,label:"Name",name:"name",maxLength:Ee}),p.jsx(W,{required:!0,className:w.input,"data-status":s,style:k(x.base.durationXS,n),autoComplete:"email",label:"Your email",type:"email",name:"email",maxLength:Ee,...t}),p.jsx(W,{required:!0,multiline:!0,className:w.input,"data-status":s,style:k(x.base.durationS,n),autoComplete:"off",label:"Message",name:"message",maxLength:an,...r}),p.jsx(N,{unmount:!0,in:!i&&(a==null?void 0:a.errors),timeout:I(x.base.durationM),children:({status:c,nodeRef:u})=>{var f,g,h;return p.jsx("div",{className:w.formError,ref:u,"data-status":c,style:L({height:c?(f=e.current)==null?void 0:f.offsetHeight:0}),children:p.jsx("div",{className:w.formErrorContent,ref:e,children:p.jsxs("div",{className:w.formErrorMessage,children:[p.jsx(ke,{className:w.formErrorIcon,icon:"error"}),(g=a==null?void 0:a.errors)==null?void 0:g.email,(h=a==null?void 0:a.errors)==null?void 0:h.message]})})})}}),p.jsx(ce,{className:w.button,"data-status":s,"data-sending":i,style:k(x.base.durationM,n),disabled:i,loading:i,loadingText:"Sending...",icon:"send",type:"submit",children:"Send message"})]})}),p.jsx(N,{unmount:!0,in:a==null?void 0:a.success,children:({status:s,nodeRef:l})=>p.jsxs("div",{className:w.complete,"aria-live":"polite",ref:l,children:[p.jsx(ue,{level:3,as:"h3",className:w.completeTitle,"data-status":s,children:"Message Sent"}),p.jsx(Ze,{size:"l",as:"p",className:w.completeText,"data-status":s,style:k(x.base.durationXS),children:"I’ll get back to you within a couple days, sit tight"}),p.jsx(ce,{secondary:!0,iconHoverShift:!0,className:w.completeButton,"data-status":s,style:k(x.base.durationM),href:"/",icon:"chevron-right",children:"Back to homepage"})]})}),p.jsx(at,{className:w.footer})]})};function k(e,t=de(0),r=1){const n=I(e)*r;return L({delay:de((I(t)+n).toFixed(0))})}export{mn as default,hn as meta};
