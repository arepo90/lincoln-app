import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `import ${escape(firebaseConfig)} from &quot;$lib/firebaseConfig&quot;;
    import ${escape(initializeApp)} from &quot;firebase/app&quot;;

    const app = initializeApp(firebaseConfig);

<h1 data-svelte-h="svelte-yyjjjs">Welcome to SvelteKit</h1> <p>Visit <a href="https://kit.svelte.dev" data-svelte-h="svelte-r2hwjt">kit.svelte.dev</a> to read the documentation</p>`;
});
export {
  Page as default
};
