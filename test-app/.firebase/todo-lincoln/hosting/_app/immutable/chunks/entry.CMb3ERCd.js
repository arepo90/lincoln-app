import{n as le,s as _t,t as wt}from"./scheduler.BAntfB-d.js";new URL("sveltekit-internal://");function mt(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function yt(e){return e.split("%25").map(decodeURI).join("%25")}function vt(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}function fe({href:e}){return e.split("#")[0]}const bt=["href","pathname","search","toString","toJSON"];function kt(e,n,t){const r=new URL(e);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return s=>(t(s),a[o](s));n();const i=Reflect.get(a,o);return typeof i=="function"?i.bind(a):i}}),enumerable:!0,configurable:!0});for(const a of bt)Object.defineProperty(r,a,{get(){return n(),e[a]},enumerable:!0,configurable:!0});return Et(r),r}function Et(e){Object.defineProperty(e,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const St="/__data.json",At=".html__data.json";function Rt(e){return e.endsWith(".html")?e.replace(/\.html$/,At):e.replace(/\/$/,"")+St}function It(...e){let n=5381;for(const t of e)if(typeof t=="string"){let r=t.length;for(;r;)n=n*33^t.charCodeAt(--r)}else if(ArrayBuffer.isView(t)){const r=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let a=r.length;for(;a;)n=n*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function Pt(e){const n=atob(e),t=new Uint8Array(n.length);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t.buffer}let we=0;const Ge=window.fetch;function $t(){we+=1}function xt(){we-=1}{let e=!1;(async()=>{e=new Error().stack.includes("check_stack_trace")})(),window.fetch=(t,r)=>{const a=t instanceof Request?t.url:t.toString(),o=new Error().stack.split(`
`),i=o.findIndex(h=>h.includes("load@")||h.includes("at load")),s=o.slice(0,i+2).join(`
`),c=e?s.includes("src/runtime/client/client.js"):we,l=r==null?void 0:r.__sveltekit_fetch__;return c&&!l&&console.warn(`Loading ${a} using \`window.fetch\`. For best results, use the \`fetch\` that is passed to your \`load\` function: https://kit.svelte.dev/docs/load#making-fetch-requests`),(t instanceof Request?t.method:(r==null?void 0:r.method)||"GET")!=="GET"&&z.delete(me(t)),Ge(t,r)}}const z=new Map;function Lt(e,n){const t=me(e,n),r=document.querySelector(t);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&z.set(t,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Pt(a)),Promise.resolve(new Response(a,o))}return Me(e,n)}function Tt(e,n,t){if(z.size>0){const r=me(e,t),a=z.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(a.body,a.init);z.delete(r)}}return Me(n,t)}function Me(e,n){const t={...n};return Object.defineProperty(t,"__sveltekit_fetch__",{value:!0,writable:!0,configurable:!0}),window.fetch(e,t)}function me(e,n){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const a=[];n.headers&&a.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&a.push(n.body),r+=`[data-hash="${It(...a)}"]`}return r}const Ot=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function jt(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Nt(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return ue(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return ue(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const u=Ot.exec(c),[,h,p,d,w]=u;return n.push({name:d,matcher:w,optional:!!h,rest:!!p,chained:p?l===1&&i[0]==="":!1}),p?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return ue(c)}).join("")}).join("")}/?$`),params:n}}function Ut(e){return!/^\([^)]+\)$/.test(e)}function Nt(e){return e.slice(1).split("/").filter(Ut)}function Ct(e,n,t){const r={},a=e.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let l=a[s-i];if(c.chained&&c.rest&&i&&(l=a.slice(s-i,s+1).filter(u=>u).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||t[c.matcher](l)){r[c.name]=l;const u=n[s+1],h=a[s+1];u&&!u.rest&&u.optional&&h&&c.chained&&(i=0),!u&&!h&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function ue(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Dt({nodes:e,server_loads:n,dictionary:t,matchers:r}){const a=new Set(n);return Object.entries(t).map(([s,[c,l,u]])=>{const{pattern:h,params:p}=jt(s),d={id:s,exec:w=>{const f=h.exec(w);if(f)return Ct(f,p,r)},errors:[1,...u||[]].map(w=>e[w]),layouts:[0,...l||[]].map(i),leaf:o(c)};return d.errors.length=d.layouts.length=Math.max(d.errors.length,d.layouts.length),d});function o(s){const c=s<0;return c&&(s=~s),[c,e[s]]}function i(s){return s===void 0?s:[a.has(s),e[s]]}}function Ke(e,n=JSON.parse){try{return n(sessionStorage[e])}catch{}}function Te(e,n,t=JSON.stringify){const r=t(n);try{sessionStorage[e]=r}catch{}}const j=[];function ye(e,n=le){let t;const r=new Set;function a(s){if(_t(e,s)&&(e=s,t)){const c=!j.length;for(const l of r)l[1](),j.push(l,e);if(c){for(let l=0;l<j.length;l+=2)j[l][0](j[l+1]);j.length=0}}}function o(s){a(s(e))}function i(s,c=le){const l=[s,c];return r.add(l),r.size===1&&(t=n(a,o)||le),s(e),()=>{r.delete(l),r.size===0&&t&&(t(),t=null)}}return{set:a,update:o,subscribe:i}}var ze;const $=((ze=globalThis.__sveltekit_z7muzd)==null?void 0:ze.base)??"";var He;(He=globalThis.__sveltekit_z7muzd)==null||He.assets;const Be="sveltekit:snapshot",Je="sveltekit:scroll",We="sveltekit:states",qt="sveltekit:pageurl",C="sveltekit:history",G="sveltekit:navigation",W={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},B=location.origin;function Ye(e){if(e instanceof URL)return e;let n=document.baseURI;if(!n){const t=document.getElementsByTagName("base");n=t.length?t[0].href:document.URL}return new URL(e,n)}function ve(){return{x:pageXOffset,y:pageYOffset}}const Oe=new WeakSet,je={"preload-code":["","off","false","tap","hover","viewport","eager"],"preload-data":["","off","false","tap","hover"],keepfocus:["","true","off","false"],noscroll:["","true","off","false"],reload:["","true","off","false"],replacestate:["","true","off","false"]};function U(e,n){const t=e.getAttribute(`data-sveltekit-${n}`);return Ft(e,n,t),t}function Ft(e,n,t){t!==null&&!Oe.has(e)&&!je[n].includes(t)&&(console.error(`Unexpected value for ${n} — should be one of ${je[n].map(r=>JSON.stringify(r)).join(", ")}`,e),Oe.add(e))}const Ue={...W,"":W.hover};function Xe(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Ze(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Xe(e)}}function pe(e,n){let t;try{t=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,a=!t||!!r||re(t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(t==null?void 0:t.origin)===B&&e.hasAttribute("download");return{url:t,external:a,target:r,download:o}}function Y(e){let n=null,t=null,r=null,a=null,o=null,i=null,s=e;for(;s&&s!==document.documentElement;)r===null&&(r=U(s,"preload-code")),a===null&&(a=U(s,"preload-data")),n===null&&(n=U(s,"keepfocus")),t===null&&(t=U(s,"noscroll")),o===null&&(o=U(s,"reload")),i===null&&(i=U(s,"replacestate")),s=Xe(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Ue[r??"off"],preload_data:Ue[a??"off"],keepfocus:c(n),noscroll:c(t),reload:c(o),replace_state:c(i)}}function Ne(e){const n=ye(e);let t=!0;function r(){t=!0,n.update(i=>i)}function a(i){t=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||t&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}function Vt(){const{set:e,subscribe:n}=ye(!1);return{subscribe:n,check:async()=>!1}}function re(e,n){return e.origin!==B||!e.pathname.startsWith(n)}const zt=-1,Ht=-2,Gt=-3,Mt=-4,Kt=-5,Bt=-6;function Jt(e,n){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,r=Array(t.length);function a(o,i=!1){if(o===zt)return;if(o===Gt)return NaN;if(o===Mt)return 1/0;if(o===Kt)return-1/0;if(o===Bt)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=t[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=n==null?void 0:n[c];if(l)return r[o]=l(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const u=new Set;r[o]=u;for(let d=1;d<s.length;d+=1)u.add(a(s[d]));break;case"Map":const h=new Map;r[o]=h;for(let d=1;d<s.length;d+=2)h.set(a(s[d]),a(s[d+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const p=Object.create(null);r[o]=p;for(let d=1;d<s.length;d+=2)p[s[d]]=a(s[d+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let l=0;l<s.length;l+=1){const u=s[l];u!==Ht&&(c[l]=a(u))}}else{const c={};r[o]=c;for(const l in s){const u=s[l];c[l]=a(u)}}return r[o]}return a(0)}function Wt(e){function n(t,r){if(t)for(const a in t){if(a[0]==="_"||e.has(a))continue;const o=[...e.values()],i=Yt(a,r==null?void 0:r.slice(r.lastIndexOf(".")))??`valid exports are ${o.join(", ")}, or anything with a '_' prefix`;throw new Error(`Invalid export '${a}'${r?` in ${r}`:""} (${i})`)}}return n}function Yt(e,n=".js"){const t=[];if(be.has(e)&&t.push(`+layout${n}`),Qe.has(e)&&t.push(`+page${n}`),et.has(e)&&t.push(`+layout.server${n}`),Xt.has(e)&&t.push(`+page.server${n}`),Zt.has(e)&&t.push(`+server${n}`),t.length>0)return`'${e}' is a valid export in ${t.slice(0,-1).join(", ")}${t.length>1?" or ":""}${t.at(-1)}`}const be=new Set(["load","prerender","csr","ssr","trailingSlash","config"]),Qe=new Set([...be,"entries"]),et=new Set([...be]),Xt=new Set([...et,"actions","entries"]),Zt=new Set(["GET","POST","PATCH","PUT","DELETE","OPTIONS","HEAD","fallback","prerender","trailingSlash","config","entries"]),Qt=Wt(Qe);function en(e){return e.filter(n=>n!=null)}class ae{constructor(n,t){this.status=n,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class tt{constructor(n,t){this.status=n,this.location=t}}class ke extends Error{constructor(n,t,r){super(r),this.status=n,this.text=t}}function tn(e,n){const t=/^(moz-icon|view-source|jar):/.exec(n);t&&console.warn(`${e}: Calling \`depends('${n}')\` will throw an error in Firefox because \`${t[1]}\` is a special URI scheme`)}const de="x-sveltekit-invalidated",nn="x-sveltekit-trailing-slash";function X(e){return e instanceof ae||e instanceof ke?e.status:500}function rn(e){return e instanceof ke?e.text:"Internal Error"}const O=Ke(Je)??{},M=Ke(Be)??{};{let e=!1;const n=import.meta.url.split("?")[0],t=()=>{var i,s;if(e)return;let o=(i=new Error().stack)==null?void 0:i.split(`
`);o&&(!o[0].includes("https:")&&!o[0].includes("http:")&&(o=o.slice(1)),o=o.slice(2),!((s=o[0])!=null&&s.includes(n))&&(e=!0,console.warn("Avoid using `history.pushState(...)` and `history.replaceState(...)` as these will conflict with SvelteKit's router. Use the `pushState` and `replaceState` imports from `$app/navigation` instead.")))},r=history.pushState;history.pushState=(...o)=>(t(),r.apply(history,o));const a=history.replaceState;history.replaceState=(...o)=>(t(),a.apply(history,o))}const L={url:Ne({}),page:Ne({}),navigating:ye(null),updated:Vt()};function Ee(e){O[e]=ve()}function an(e,n){let t=e+1;for(;O[t];)delete O[t],t+=1;for(t=n+1;M[t];)delete M[t],t+=1}function q(e){return location.href=e.href,new Promise(()=>{})}function Ce(){}let oe,ge,Z,x,_e,F;const nt=[],Q=[];let R=null;const rt=[],on=[];let N=[],m={branch:[],error:null,url:null},Se=!1,ee=!1,De=!0,K=!1,V=!1,at=!1,Ae=!1,Re,S,P,I,te;const H=new Set;async function wn(e,n,t){var a,o;n===document.body&&console.warn(`Placing %sveltekit.body% directly inside <body> is not recommended, as your app may break for users who have certain browser extensions installed.

Consider wrapping it in an element:

<div style="display: contents">
  %sveltekit.body%
</div>`),document.URL!==location.href&&(location.href=location.href),F=e,oe=Dt(e),x=document.documentElement,_e=n,ge=e.nodes[0],Z=e.nodes[1],ge(),Z(),S=(a=history.state)==null?void 0:a[C],P=(o=history.state)==null?void 0:o[G],S||(S=P=Date.now(),history.replaceState({...history.state,[C]:S,[G]:P},""));const r=O[S];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),t?await pn(_e,t):dn(location.href,{replaceState:!0}),hn()}function sn(){nt.length=0,Ae=!1}function ot(e){Q.some(n=>n==null?void 0:n.snapshot)&&(M[e]=Q.map(n=>{var t;return(t=n==null?void 0:n.snapshot)==null?void 0:t.capture()}))}function st(e){var n;(n=M[e])==null||n.forEach((t,r)=>{var a,o;(o=(a=Q[r])==null?void 0:a.snapshot)==null||o.restore(t)})}function qe(){Ee(S),Te(Je,O),ot(P),Te(Be,M)}async function it(e,n,t,r){return J({type:"goto",url:Ye(e),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:t,nav_token:r,accept:()=>{n.invalidateAll&&(Ae=!0)}})}async function cn(e){if(e.id!==(R==null?void 0:R.id)){const n={};H.add(n),R={id:e.id,token:n,promise:lt({...e,preload:n}).then(t=>(H.delete(n),t.type==="loaded"&&t.state.error&&(R=null),t))}}return R.promise}async function he(e){const n=oe.find(t=>t.exec(ft(e)));n&&await Promise.all([...n.layouts,n.leaf].map(t=>t==null?void 0:t[1]()))}function ct(e,n,t){var o;if(e.state.error&&document.querySelector("vite-error-overlay"))return;m=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),I=e.props.page,Re=new F.root({target:n,props:{...e.props,stores:L,components:Q},hydrate:t}),st(P);const a={from:null,to:{params:m.params,route:{id:((o=m.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};N.forEach(i=>i(a)),ee=!0}async function ne({url:e,params:n,branch:t,status:r,error:a,route:o,form:i}){let s="never";if($&&(e.pathname===$||e.pathname===$+"/"))s="always";else for(const d of t)(d==null?void 0:d.slash)!==void 0&&(s=d.slash);e.pathname=mt(e.pathname,s),e.search=e.search;const c={type:"loaded",state:{url:e,params:n,branch:t,error:a,route:o},props:{constructors:en(t).map(d=>d.node.component),page:I}};i!==void 0&&(c.props.form=i);let l={},u=!I,h=0;for(let d=0;d<Math.max(t.length,m.branch.length);d+=1){const w=t[d],f=m.branch[d];(w==null?void 0:w.data)!==(f==null?void 0:f.data)&&(u=!0),w&&(l={...l,...w.data},u&&(c.props[`data_${h}`]=l),h+=1)}return(!m.url||e.href!==m.url.href||m.error!==a||i!==void 0&&i!==I.form||u)&&(c.props.page={error:a,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(e),form:i??null,data:u?l:I.data}),c}async function Ie({loader:e,parent:n,url:t,params:r,route:a,server_data_node:o}){var u,h,p;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if(Qt(l.universal),(u=l.universal)!=null&&u.load){let d=function(...f){for(const _ of f){tn(a.id,_);const{href:b}=new URL(_,t);c.dependencies.add(b)}};const w={route:new Proxy(a,{get:(f,_)=>(s&&(c.route=!0),f[_])}),params:new Proxy(r,{get:(f,_)=>(s&&c.params.add(_),f[_])}),data:(o==null?void 0:o.data)??null,url:kt(t,()=>{s&&(c.url=!0)},f=>{s&&c.search_params.add(f)}),async fetch(f,_){let b;f instanceof Request?(b=f.url,_={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:f.headers,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,..._}):b=f;const A=new URL(b,t);return s&&d(A.href),A.origin===t.origin&&(b=A.href.slice(t.origin.length)),ee?Tt(b,A.href,_):Lt(b,_)},setHeaders:()=>{},depends:d,parent(){return s&&(c.parent=!0),n()},untrack(f){s=!1;try{return f()}finally{s=!0}}};try{if($t(),i=await l.universal.load.call(null,w)??null,i!=null&&Object.getPrototypeOf(i)!==Object.prototype)throw new Error(`a load function related to route '${a.id}' returned ${typeof i!="object"?`a ${typeof i}`:i instanceof Response?"a Response object":Array.isArray(i)?"an array":"a non-plain object"}, but must return a plain object at the top level (i.e. \`return {...}\`)`)}finally{xt()}}return{node:l,loader:e,server:o,universal:(h=l.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((p=l.universal)==null?void 0:p.trailingSlash)??(o==null?void 0:o.slash)}}function Fe(e,n,t,r,a,o){if(Ae)return!0;if(!a)return!1;if(a.parent&&e||a.route&&n||a.url&&t)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==m.params[i])return!0;for(const i of a.dependencies)if(nt.some(s=>s(new URL(i))))return!0;return!1}function Pe(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}function ln(e,n){if(!e)return new Set(n.searchParams.keys());const t=new Set([...e.searchParams.keys(),...n.searchParams.keys()]);for(const r of t){const a=e.searchParams.getAll(r),o=n.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&t.delete(r)}return t}function Ve({error:e,url:n,route:t,params:r}){return{type:"loaded",state:{error:e,url:n,route:t,params:r,branch:[]},props:{page:I,constructors:[]}}}async function lt({id:e,invalidating:n,url:t,params:r,route:a,preload:o}){if((R==null?void 0:R.id)===e)return H.delete(R.token),R.promise;const{errors:i,layouts:s,leaf:c}=a,l=[...s,c];i.forEach(g=>g==null?void 0:g().catch(()=>{})),l.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let u=null;const h=m.url?e!==m.url.pathname+m.url.search:!1,p=m.route?a.id!==m.route.id:!1,d=ln(m.url,t);let w=!1;const f=l.map((g,v)=>{var T;const k=m.branch[v],E=!!(g!=null&&g[0])&&((k==null?void 0:k.loader)!==g[1]||Fe(w,p,h,d,(T=k.server)==null?void 0:T.uses,r));return E&&(w=!0),E});if(f.some(Boolean)){try{u=await ht(t,f)}catch(g){const v=await D(g,{url:t,params:r,route:{id:e}});return H.has(o)?Ve({error:v,url:t,params:r,route:a}):se({status:X(g),error:v,url:t,route:a})}if(u.type==="redirect")return u}const _=u==null?void 0:u.nodes;let b=!1;const A=l.map(async(g,v)=>{var ie;if(!g)return;const k=m.branch[v],E=_==null?void 0:_[v];if((!E||E.type==="skip")&&g[1]===(k==null?void 0:k.loader)&&!Fe(b,p,h,d,(ie=k.universal)==null?void 0:ie.uses,r))return k;if(b=!0,(E==null?void 0:E.type)==="error")throw E;return Ie({loader:g[1],url:t,params:r,route:a,parent:async()=>{var Le;const xe={};for(let ce=0;ce<v;ce+=1)Object.assign(xe,(Le=await A[ce])==null?void 0:Le.data);return xe},server_data_node:Pe(E===void 0&&g[0]?{type:"skip"}:E??null,g[0]?k==null?void 0:k.server:void 0)})});for(const g of A)g.catch(()=>{});const y=[];for(let g=0;g<l.length;g+=1)if(l[g])try{y.push(await A[g])}catch(v){if(v instanceof tt)return{type:"redirect",location:v.location};if(H.has(o))return Ve({error:await D(v,{params:r,url:t,route:{id:a.id}}),url:t,params:r,route:a});let k=X(v),E;if(_!=null&&_.includes(v))k=v.status??k,E=v.error;else if(v instanceof ae)E=v.body;else{if(await L.updated.check())return await q(t);E=await D(v,{params:r,url:t,route:{id:a.id}})}const T=await fn(g,y,i);return T?await ne({url:t,params:r,branch:y.slice(0,T.idx).concat(T.node),status:k,error:E,route:a}):await dt(t,{id:a.id},E,k)}else y.push(void 0);return await ne({url:t,params:r,branch:y,status:200,error:null,route:a,form:n?void 0:null})}async function fn(e,n,t){for(;e--;)if(t[e]){let r=e;for(;!n[r];)r-=1;try{return{idx:r+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function se({status:e,error:n,url:t,route:r}){const a={};let o=null;if(F.server_loads[0]===0)try{const l=await ht(t,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(t.origin!==B||t.pathname!==location.pathname||Se)&&await q(t)}const s=await Ie({loader:ge,url:t,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Pe(o)}),c={node:await Z(),loader:Z,universal:null,server:null,data:null};return await ne({url:t,params:a,branch:[s,c],status:e,error:n,route:null})}function $e(e,n){if(!e||re(e,$))return;let t;try{t=F.hooks.reroute({url:new URL(e)})??e.pathname}catch(a){{console.error(a);debugger}return}const r=ft(t);for(const a of oe){const o=a.exec(r);if(o)return{id:e.pathname+e.search,invalidating:n,route:a,params:vt(o),url:e}}}function ft(e){return yt(e.slice($.length)||"/")}function ut({url:e,type:n,intent:t,delta:r}){let a=!1;const o=gt(m,t,e,n);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return K||rt.forEach(s=>s(i)),a?null:o}async function J({type:e,url:n,popped:t,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=Ce,block:u=Ce}){const h=$e(n,!1),p=ut({url:n,type:e,delta:t==null?void 0:t.delta,intent:h});if(!p){u();return}const d=S,w=P;l(),K=!0,ee&&L.navigating.set(p.navigation),te=c;let f=h&&await lt(h);if(!f){if(re(n,$))return await q(n);f=await dt(n,{id:null},await D(new ke(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,te!==c)return p.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(s>=20)f=await se({status:500,error:await D(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return it(new URL(f.location,n).href,{},s+1,c),!1;else f.props.page.status>=400&&await L.updated.check()&&await q(n);if(sn(),Ee(d),ot(w),f.props.page.url.pathname!==n.pathname&&(n.pathname=f.props.page.url.pathname),i=t?t.state:i,!t){const y=o?0:1,g={[C]:S+=y,[G]:P+=y,[We]:i};(o?history.replaceState:history.pushState).call(history,g,"",n),o||an(S,P)}if(R=null,f.props.page.state=i,ee){m=f.state,f.props.page&&(f.props.page.url=n);const y=(await Promise.all(on.map(g=>g(p.navigation)))).filter(g=>typeof g=="function");if(y.length>0){let g=function(){N=N.filter(v=>!y.includes(v))};y.push(g),N.push(...y)}Re.$set(f.props),at=!0}else ct(f,_e,!1);const{activeElement:_}=document;await wt();const b=t?t.scroll:a?ve():null;if(De){const y=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));b?scrollTo(b.x,b.y):y?y.scrollIntoView():scrollTo(0,0)}const A=document.activeElement!==_&&document.activeElement!==document.body;!r&&!A&&gn(),De=!0,f.props.page&&(I=f.props.page),K=!1,e==="popstate"&&st(P),p.fulfil(void 0),N.forEach(y=>y(p.navigation)),L.navigating.set(null)}async function dt(e,n,t,r){if(e.origin===B&&e.pathname===location.pathname&&!Se)return await se({status:r,error:t,url:e,route:n});if(r!==404){console.error("An error occurred while loading the page. This will cause a full page reload. (This message will only appear during development.)");debugger}return await q(e)}function un(){let e;x.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(e),e=setTimeout(()=>{r(i,2)},20)});function n(o){r(o.composedPath()[0],1)}x.addEventListener("mousedown",n),x.addEventListener("touchstart",n,{passive:!0});const t=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(he(i.target.href),t.unobserve(i.target))},{threshold:0});function r(o,i){const s=Ze(o,x);if(!s)return;const{url:c,external:l,download:u}=pe(s,$);if(l||u)return;const h=Y(s);if(!h.reload)if(i<=h.preload_data){const p=$e(c,!1);p&&cn(p).then(d=>{d.type==="loaded"&&d.state.error&&console.warn(`Preloading data for ${p.url.pathname} failed with the following error: ${d.state.error.message}
If this error is transient, you can ignore it. Otherwise, consider disabling preloading for this route. This route was preloaded due to a data-sveltekit-preload-data attribute. See https://kit.svelte.dev/docs/link-options for more info`)})}else i<=h.preload_code&&he(c.pathname)}function a(){t.disconnect();for(const o of x.querySelectorAll("a")){const{url:i,external:s,download:c}=pe(o,$);if(s||c)continue;const l=Y(o);l.reload||(l.preload_code===W.viewport&&t.observe(o),l.preload_code===W.eager&&he(i.pathname))}}N.push(a),a()}function D(e,n){if(e instanceof ae)return e.body;console.warn("The next HMR update will cause the page to reload");const t=X(e),r=rn(e);return F.hooks.handleError({error:e,event:n,status:t,message:r})??{message:r}}function dn(e,n={}){return e=Ye(e),e.origin!==B?Promise.reject(new Error(`Cannot use \`goto\` with an external URL. Use \`window.location = "${e}"\` instead`)):it(e,n,0)}function hn(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let r=!1;if(qe(),!K){const a=gt(m,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};rt.forEach(i=>i(o))}r?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&qe()}),(n=navigator.connection)!=null&&n.saveData||un(),x.addEventListener("click",t=>{var p;if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const r=Ze(t.composedPath()[0],x);if(!r)return;const{url:a,external:o,target:i,download:s}=pe(r,$);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=Y(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;if(o||c.reload){ut({url:a,type:"link"})?K=!0:t.preventDefault();return}const[u,h]=a.href.split("#");if(h!==void 0&&u===fe(location)){const[,d]=m.url.href.split("#");if(d===h){t.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(p=r.ownerDocument.getElementById(h))==null||p.scrollIntoView();return}if(V=!0,Ee(S),e(a),!c.replace_state)return;V=!1}t.preventDefault(),J({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),x.addEventListener("submit",t=>{if(t.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const i=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(re(i,$))return;const s=t.target,c=Y(s);if(c.reload)return;t.preventDefault(),t.stopPropagation();const l=new FormData(s),u=a==null?void 0:a.getAttribute("name");u&&l.append(u,(a==null?void 0:a.getAttribute("value"))??""),i.search=new URLSearchParams(l).toString(),J({type:"form",url:i,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??i.href===location.href})}),addEventListener("popstate",async t=>{var r;if((r=t.state)!=null&&r[C]){const a=t.state[C];if(te={},a===S)return;const o=O[a],i=t.state[We]??{},s=new URL(t.state[qt]??location.href),c=t.state[G],l=fe(location)===fe(m.url);if(c===P&&(at||l)){e(s),O[S]=ve(),o&&scrollTo(o.x,o.y),i!==I.state&&(I={...I,state:i},Re.$set({page:I})),S=a;return}const h=a-S;await J({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{S=a,P=c},block:()=>{history.go(-h)},nav_token:te})}else if(!V){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{V&&(V=!1,history.replaceState({...history.state,[C]:++S,[G]:P},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&L.navigating.set(null)});function e(t){m.url=t,L.page.set({...I,url:t}),L.page.notify()}}async function pn(e,{status:n=200,error:t,node_ids:r,params:a,route:o,data:i,form:s}){Se=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=$e(c,!1)||{});let l;try{const u=r.map(async(d,w)=>{const f=i[w];return f!=null&&f.uses&&(f.uses=pt(f.uses)),Ie({loader:F.nodes[d],url:c,params:a,route:o,parent:async()=>{const _={};for(let b=0;b<w;b+=1)Object.assign(_,(await u[b]).data);return _},server_data_node:Pe(f)})}),h=await Promise.all(u),p=oe.find(({id:d})=>d===o.id);if(p){const d=p.layouts;for(let w=0;w<d.length;w++)d[w]||h.splice(w,0,void 0)}l=await ne({url:c,params:a,branch:h,status:n,error:t,form:s,route:p??null})}catch(u){if(u instanceof tt){await q(new URL(u.location,location.href));return}l=await se({status:X(u),error:await D(u,{url:c,params:a,route:o}),url:c,route:o})}l.props.page&&(l.props.page.state={}),ct(l,e,!0)}async function ht(e,n){var a;const t=new URL(e);if(t.pathname=Rt(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(nn,"1"),e.searchParams.has(de))throw new Error(`Cannot used reserved query parameter "${de}"`);t.searchParams.append(de,n.map(o=>o?"1":"0").join(""));const r=await Ge(t.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new ae(r.status,o)}return new Promise(async o=>{var h;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function l(p){return Jt(p,{Promise:d=>new Promise((w,f)=>{i.set(d,{fulfil:w,reject:f})})})}let u="";for(;;){const{done:p,value:d}=await s.read();if(p&&!u)break;for(u+=!d&&u?`
`:c.decode(d,{stream:!0});;){const w=u.indexOf(`
`);if(w===-1)break;const f=JSON.parse(u.slice(0,w));if(u=u.slice(w+1),f.type==="redirect")return o(f);if(f.type==="data")(h=f.nodes)==null||h.forEach(_=>{(_==null?void 0:_.type)==="data"&&(_.uses=pt(_.uses),_.data=l(_.data))}),o(f);else if(f.type==="chunk"){const{id:_,data:b,error:A}=f,y=i.get(_);i.delete(_),A?y.reject(l(A)):y.fulfil(l(b))}}}})}function pt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function gn(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,t=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),t!==null?n.setAttribute("tabindex",t):n.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function gt(e,n,t,r){var c,l;let a,o;const i=new Promise((u,h)=>{a=u,o=h});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:t&&{params:(n==null?void 0:n.params)??null,route:{id:((l=n==null?void 0:n.route)==null?void 0:l.id)??null},url:t},willUnload:!n,type:r,complete:i},fulfil:a,reject:o}}{const e=console.warn;console.warn=function(...t){t.length===1&&/<(Layout|Page|Error)(_[\w$]+)?> was created (with unknown|without expected) prop '(data|form)'/.test(t[0])||e(...t)}}export{wn as a,L as s};
