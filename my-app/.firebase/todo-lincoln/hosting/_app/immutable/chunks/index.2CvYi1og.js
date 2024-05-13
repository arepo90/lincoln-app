var M=Object.defineProperty;var j=(e,t,n)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var m=(e,t,n)=>(j(e,typeof t!="symbol"?t+"":t,n),n);import{r as p,n as v,i as S,j as C,k as b,l as I,m as E,p as O,q as L,w as B,x as P,y as R,z as q}from"./scheduler.D4TwVaDg.js";let y=!1;function T(){y=!0}function z(){y=!1}function H(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function V(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const s=[];for(let c=0;c<t.length;c++){const u=t[c];u.claim_order!==void 0&&s.push(u)}t=s}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let s=0;s<t.length;s++){const c=t[s].claim_order,u=(r>0&&t[n[r]].claim_order<=c?r+1:H(1,r,h=>t[n[h]].claim_order,c))-1;i[s]=n[u]+1;const a=u+1;n[a]=s,r=Math.max(a,r)}const f=[],l=[];let o=t.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(f.push(t[s-1]);o>=s;o--)l.push(t[o]);o--}for(;o>=0;o--)l.push(t[o]);f.reverse(),l.sort((s,c)=>s.claim_order-c.claim_order);for(let s=0,c=0;s<l.length;s++){for(;c<f.length&&l[s].claim_order>=f[c].claim_order;)c++;const u=c<f.length?f[c]:null;e.insertBefore(l[s],u)}}function A(e,t){if(y){for(V(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function F(e,t,n){y&&!n?A(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function D(e){e.parentNode&&e.parentNode.removeChild(e)}function oe(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function U(e){return document.createElement(e)}function x(e){return document.createTextNode(e)}function fe(){return x(" ")}function ae(){return x("")}function W(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function G(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ue(e){return e.dataset.svelteH}function J(e){return Array.from(e.childNodes)}function K(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function N(e,t,n,i,r=!1){K(e);const f=(()=>{for(let l=e.claim_info.last_index;l<e.length;l++){const o=e[l];if(t(o)){const s=n(o);return s===void 0?e.splice(l,1):e[l]=s,r||(e.claim_info.last_index=l),o}}for(let l=e.claim_info.last_index-1;l>=0;l--){const o=e[l];if(t(o)){const s=n(o);return s===void 0?e.splice(l,1):e[l]=s,r?s===void 0&&e.claim_info.last_index--:e.claim_info.last_index=l,o}}return i()})();return f.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,f}function Q(e,t,n,i){return N(e,r=>r.nodeName===t,r=>{const f=[];for(let l=0;l<r.attributes.length;l++){const o=r.attributes[l];n[o.name]||f.push(o.name)}f.forEach(l=>r.removeAttribute(l))},()=>i(t))}function de(e,t,n){return Q(e,t,n,U)}function X(e,t){return N(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(t),!0)}function _e(e){return X(e," ")}function me(e,t){e.value=t??""}function he(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,"")}function $e(e,t,n){e.classList.toggle(t,!!n)}function Y(e,t,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:i})}const $=new Set;let _;function pe(){_={r:0,c:[],p:_}}function ye(){_.r||p(_.c),_=_.p}function Z(e,t){e&&e.i&&($.delete(e),e.i(t))}function ve(e,t,n,i){if(e&&e.o){if($.has(e))return;$.add(e),_.c.push(()=>{$.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function k(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function xe(e){e&&e.c()}function we(e,t){e&&e.l(t)}function ee(e,t,n){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,n),b(()=>{const f=e.$$.on_mount.map(B).filter(O);e.$$.on_destroy?e.$$.on_destroy.push(...f):p(f),e.$$.on_mount=[]}),r.forEach(b)}function te(e,t){const n=e.$$;n.fragment!==null&&(P(n.after_update),p(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ne(e,t){e.$$.dirty[0]===-1&&(R.push(e),q(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ge(e,t,n,i,r,f,l=null,o=[-1]){const s=I;E(e);const c=e.$$={fragment:null,ctx:[],props:f,update:v,not_equal:r,bound:S(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:S(),dirty:o,skip_bound:!1,root:t.target||s.$$.root};l&&l(c.root);let u=!1;if(c.ctx=n?n(e,t.props||{},(a,h,...w)=>{const g=w.length?w[0]:h;return c.ctx&&r(c.ctx[a],c.ctx[a]=g)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](g),u&&ne(e,a)),h}):[],c.update(),u=!0,p(c.before_update),c.fragment=i?i(c.ctx):!1,t.target){if(t.hydrate){T();const a=J(t.target);c.fragment&&c.fragment.l(a),a.forEach(D)}else c.fragment&&c.fragment.c();t.intro&&Z(e.$$.fragment),ee(e,t.target,t.anchor),z(),C()}E(s)}class ie{constructor(){m(this,"$$");m(this,"$$set")}$destroy(){te(this,1),this.$destroy=v}$on(t,n){if(!O(n))return v;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!L(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const se="4.2.16",re="4";function d(e,t){document.dispatchEvent(Y(e,{version:se,...t},{bubbles:!0}))}function Se(e,t){d("SvelteDOMInsert",{target:e,node:t}),A(e,t)}function be(e,t,n){d("SvelteDOMInsert",{target:e,node:t,anchor:n}),F(e,t,n)}function Ee(e){d("SvelteDOMRemove",{node:e}),D(e)}function Oe(e,t,n,i,r,f,l){const o=i===!0?["capture"]:i?Array.from(Object.keys(i)):[];r&&o.push("preventDefault"),f&&o.push("stopPropagation"),l&&o.push("stopImmediatePropagation"),d("SvelteDOMAddEventListener",{node:e,event:t,handler:n,modifiers:o});const s=W(e,t,n,i);return()=>{d("SvelteDOMRemoveEventListener",{node:e,event:t,handler:n,modifiers:o}),s()}}function Ae(e,t,n){G(e,t,n),n==null?d("SvelteDOMRemoveAttribute",{node:e,attribute:t}):d("SvelteDOMSetAttribute",{node:e,attribute:t,value:n})}function De(e,t){t=""+t,e.data!==t&&(d("SvelteDOMSetData",{node:e,data:t}),e.data=t)}function Ne(e){if(typeof e!="string"&&!(e&&typeof e=="object"&&"length"in e)&&!(typeof Symbol=="function"&&e&&Symbol.iterator in e))throw new Error("{#each} only works with iterable values.");return k(e)}function Me(e,t,n){for(const i of Object.keys(t))~n.indexOf(i)||console.warn(`<${e}> received an unexpected slot "${i}".`)}function je(e,t){const n="this={...} of <svelte:component> should specify a Svelte component.";try{const i=new e(t);if(!i.$$||!i.$set||!i.$on||!i.$destroy)throw new Error(n);return i}catch(i){const{message:r}=i;throw typeof r=="string"&&r.indexOf("is not a constructor")!==-1?new Error(n):i}}class Ce extends ie{constructor(n){if(!n||!n.target&&!n.$$inline)throw new Error("'target' is a required option");super();m(this,"$$prop_def");m(this,"$$events_def");m(this,"$$slot_def")}$destroy(){super.$destroy(),this.$destroy=()=>{console.warn("Component was already destroyed")}}$capture_state(){}$inject_state(){}}typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(re);export{Oe as A,Ne as B,ue as C,me as D,oe as E,$e as F,Ce as S,ve as a,x as b,de as c,d,U as e,J as f,X as g,Ee as h,ge as i,_e as j,be as k,Se as l,De as m,ae as n,ye as o,je as p,Ae as q,he as r,fe as s,Z as t,pe as u,Me as v,xe as w,we as x,ee as y,te as z};
