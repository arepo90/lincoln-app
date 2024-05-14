

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DSNb73io.js","_app/immutable/chunks/scheduler.BAntfB-d.js","_app/immutable/chunks/index.DGCUrOzw.js"];
export const stylesheets = [];
export const fonts = [];
