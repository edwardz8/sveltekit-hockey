var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Players
});
module.exports = __toCommonJS(stdin_exports);
var import_index_67075ed5 = require("../../../_app/immutable/chunks/index-67075ed5.js");
const css = {
  code: ".player-container.svelte-9xpwkm:hover{background-color:var(--color-bg-secondary)}.player-container.svelte-9xpwkm{display:grid;gap:2;padding:var(--spacing-16) var(--spacing-24);transition:all 0.3s}.player-container.svelte-9xpwkm:not(:last-child){border-bottom:1px solid var(--color-border-primary)}.player-details.svelte-9xpwkm{display:flex;justify-content:space-between}.user.svelte-9xpwkm{font-weight:700;text-transform:capitalize}.user.svelte-9xpwkm:hover{text-decoration:underline}.content.svelte-9xpwkm{font-size:var(--font-16)}",
  map: null
};
const Player = (0, import_index_67075ed5.c)(($$result, $$props, $$bindings, slots) => {
  let { player } = $$props;
  if ($$props.player === void 0 && $$bindings.player && player !== void 0)
    $$bindings.player(player);
  $$result.css.add(css);
  return `<article class="${"player-container svelte-9xpwkm"}"><div class="${"player-details svelte-9xpwkm"}"><div><a href="${"/player/" + (0, import_index_67075ed5.e)(player.id, true)}" class="${"user svelte-9xpwkm"}">${(0, import_index_67075ed5.e)(player.name)}</a>
			</div>

		<div class="${"player"}"><div class="${"content svelte-9xpwkm"}">${(0, import_index_67075ed5.e)(player.content)}</div>

			</div></div>
</article>`;
});
const Players = (0, import_index_67075ed5.c)(($$result, $$props, $$bindings, slots) => {
  let { players = [] } = $$props;
  if ($$props.players === void 0 && $$bindings.players && players !== void 0)
    $$bindings.players(players);
  return `${$$result.head += `${$$result.title = `<title>Players</title>`, ""}`, ""}

<h1>Ottawa Senators</h1>

${(0, import_index_67075ed5.d)(players, (player) => {
    return `${(0, import_index_67075ed5.v)(Player, "Player").$$render($$result, { player }, {}, {})}`;
  })}`;
});
