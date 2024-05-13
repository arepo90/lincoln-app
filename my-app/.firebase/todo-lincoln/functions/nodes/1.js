

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BR6jLaIn.js","_app/immutable/chunks/scheduler.D4TwVaDg.js","_app/immutable/chunks/index.2CvYi1og.js","_app/immutable/chunks/entry.PtsySzz_.js"];
export const stylesheets = [];
export const fonts = [];
