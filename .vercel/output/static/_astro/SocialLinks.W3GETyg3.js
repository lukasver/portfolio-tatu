import{j as t}from"./jsx-runtime.7faW4zRM.js";import{r as a}from"./index.DhYZZe0J.js";import{c as l,b as u}from"./button.DtBJycAa.js";const p=[{title:"Linkedin",url:"https://linkedin.com/in/tania-geuna",icon:"Linkedin"},{title:"Twitter",url:"https://x.com/tania-geuna",icon:"Twitter"},{title:"Medium",url:"https://medium.com/@taniageuna",icon:"Medium"}];/**
 * @license lucide-react v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),c=(...e)=>e.filter((n,r,i)=>!!n&&i.indexOf(n)===r).join(" ");/**
 * @license lucide-react v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var k={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=a.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:r=2,absoluteStrokeWidth:i,className:o="",children:s,iconNode:d,...h},w)=>a.createElement("svg",{ref:w,...k,width:n,height:n,stroke:e,strokeWidth:i?Number(r)*24/Number(n):r,className:c("lucide",o),...h},[...d.map(([x,m])=>a.createElement(x,m)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=(e,n)=>{const r=a.forwardRef(({className:i,...o},s)=>a.createElement(C,{ref:s,iconNode:n,className:c(`lucide-${g(e)}`,i),...o}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=v("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]),L={Twitter:e=>t.jsxs("svg",{xmlns:"http://www.w3.org/1999/xlink",viewBox:"0 0 507.91 446.91",role:"none",width:"100%",height:"100%",strokeLinecap:"round",strokeLinejoin:"round",fill:"black",...e,children:[t.jsx("title",{children:"X"}),t.jsx("path",{xmlns:"http://www.w3.org/2000/svg",d:"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"})]}),Github:e=>t.jsx("svg",{viewBox:"0 0 32 32","aria-hidden":"true",width:"32px",height:"32px",...e,children:t.jsx("path",{fill:"currentColor",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})}),Linkedin:f,Medium:e=>t.jsx("svg",{width:"32px",height:"32px",viewBox:"0 0 256 146",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",preserveAspectRatio:"xMidYMid",...e,children:t.jsx("g",{children:t.jsx("path",{d:"M72.2009141,1.42108547e-14 C112.076502,1.42108547e-14 144.399375,32.5485469 144.399375,72.6964154 C144.399375,112.844284 112.074049,145.390378 72.2009141,145.390378 C32.327779,145.390378 0,112.844284 0,72.6964154 C0,32.5485469 32.325326,1.42108547e-14 72.2009141,1.42108547e-14 Z M187.500628,4.25836743 C207.438422,4.25836743 223.601085,34.8960455 223.601085,72.6964154 L223.603538,72.6964154 C223.603538,110.486973 207.440875,141.134463 187.503081,141.134463 C167.565287,141.134463 151.402624,110.486973 151.402624,72.6964154 C151.402624,34.9058574 167.562834,4.25836743 187.500628,4.25836743 Z M243.303393,11.3867175 C250.314,11.3867175 256,38.835526 256,72.6964154 C256,106.547493 250.316453,134.006113 243.303393,134.006113 C236.290333,134.006113 230.609239,106.554852 230.609239,72.6964154 C230.609239,38.837979 236.292786,11.3867175 243.303393,11.3867175 Z",fill:"#000000"})})})};function y({className:e}){return t.jsx("div",{className:l(e,"flex flex-row gap-4"),children:p.map(({title:n,icon:r,url:i})=>{const o=L[r];return t.jsxs("a",{href:i,target:"_blank",className:l("no-underlined",u({size:"lg",variant:"outline"})),children:[t.jsxs("span",{className:"sr-only",children:["Follow me on ",n]}),t.jsx(o,{className:"size-6"})]},i)})})}export{y as SocialLinks};
