

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.C-WFuyE5.js","_app/immutable/chunks/scheduler.BAntfB-d.js","_app/immutable/chunks/index.DGCUrOzw.js"];
export const stylesheets = [];
export const fonts = [];
