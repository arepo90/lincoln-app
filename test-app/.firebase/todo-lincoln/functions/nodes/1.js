

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.CYKaMmeb.js","_app/immutable/chunks/scheduler.BAntfB-d.js","_app/immutable/chunks/index.DGCUrOzw.js","_app/immutable/chunks/entry.CMb3ERCd.js"];
export const stylesheets = [];
export const fonts = [];
