

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CO8So4wi.js","_app/immutable/chunks/scheduler.D4TwVaDg.js","_app/immutable/chunks/index.2CvYi1og.js"];
export const stylesheets = ["_app/immutable/assets/2.Cl4ufwy5.css"];
export const fonts = [];
