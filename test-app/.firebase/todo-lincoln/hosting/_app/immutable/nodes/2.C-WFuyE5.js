import{s as D,b as C,n as x}from"../chunks/scheduler.BAntfB-d.js";import{S as E,i as O,d as z,v as R,b as r,e as g,s as V,c,f as $,g as S,h as q,j as B,k as a,l as H,m as p,n as j}from"../chunks/index.DGCUrOzw.js";const w="C:/Users/nabet/Desktop/lincoln-app/test-app/src/routes/+page.svelte";function k(h){let i,f,d,m,n,o,y="Welcome to SvelteKit",v,s,_,l,A="kit.svelte.dev",b;const P={c:function(){i=r("import "),f=r(firebaseConfig),d=r(` from "$lib/firebaseConfig";
    import `),m=r(initializeApp),n=r(` from "firebase/app";

    const app = initializeApp(firebaseConfig);

`),o=g("h1"),o.textContent=y,v=V(),s=g("p"),_=r("Visit "),l=g("a"),l.textContent=A,b=r(" to read the documentation"),this.h()},l:function(t){i=c(t,"import "),f=c(t,firebaseConfig),d=c(t,` from "$lib/firebaseConfig";
    import `),m=c(t,initializeApp),n=c(t,` from "firebase/app";

    const app = initializeApp(firebaseConfig);

`),o=$(t,"H1",{"data-svelte-h":!0}),S(o)!=="svelte-yyjjjs"&&(o.textContent=y),v=q(t),s=$(t,"P",{});var e=B(s);_=c(e,"Visit "),l=$(e,"A",{href:!0,"data-svelte-h":!0}),S(l)!=="svelte-r2hwjt"&&(l.textContent=A),b=c(e," to read the documentation"),e.forEach(a),this.h()},h:function(){C(o,w,5,0,157),H(l,"href","https://kit.svelte.dev"),C(l,w,6,9,196),C(s,w,6,0,187)},m:function(t,e){p(t,i,e),p(t,f,e),p(t,d,e),p(t,m,e),p(t,n,e),p(t,o,e),p(t,v,e),p(t,s,e),j(s,_),j(s,l),j(s,b)},p:x,i:x,o:x,d:function(t){t&&(a(i),a(f),a(d),a(m),a(n),a(o),a(v),a(s))}};return z("SvelteRegisterBlock",{block:P,id:k.name,type:"component",source:"",ctx:h}),P}function K(h,i){let{$$slots:f={},$$scope:d}=i;R("Page",f,[]);const m=[];return Object.keys(i).forEach(n=>{!~m.indexOf(n)&&n.slice(0,2)!=="$$"&&n!=="slot"&&console.warn(`<Page> was created with unknown prop '${n}'`)}),[]}class W extends E{constructor(i){super(i),O(this,i,K,k,D,{}),z("SvelteRegisterComponent",{component:this,tagName:"Page",options:i,id:k.name})}}export{W as component};
