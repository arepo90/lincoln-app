

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.C0H0jcyR.js","_app/immutable/chunks/scheduler.D4TwVaDg.js","_app/immutable/chunks/index.2CvYi1og.js"];
export const stylesheets = [];
export const fonts = [];
