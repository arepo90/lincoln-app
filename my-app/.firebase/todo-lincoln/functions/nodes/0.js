

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DHESl7yY.js","_app/immutable/chunks/scheduler.BFCLGYpV.js","_app/immutable/chunks/index.3Yk8ZqK3.js"];
export const stylesheets = [];
export const fonts = [];
