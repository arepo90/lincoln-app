

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.TQW5yvpY.js","_app/immutable/chunks/scheduler.BFCLGYpV.js","_app/immutable/chunks/index.3Yk8ZqK3.js"];
export const stylesheets = ["_app/immutable/assets/2.CC06Gc4P.css"];
export const fonts = [];
