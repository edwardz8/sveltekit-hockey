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
  default: () => U5Bidu5D
});
module.exports = __toCommonJS(stdin_exports);
var import_index_67075ed5 = require("../../../_app/immutable/chunks/index-67075ed5.js");
var import_stores_a06e66cb = require("../../../_app/immutable/chunks/stores-a06e66cb.js");
const U5Bidu5D = (0, import_index_67075ed5.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_67075ed5.a)(import_stores_a06e66cb.p, (value) => $page = value);
  console.log($page.params);
  let { player } = $$props;
  if ($$props.player === void 0 && $$bindings.player && player !== void 0)
    $$bindings.player(player);
  $$unsubscribe_page();
  return `




${$$result.head += `${$$result.title = `<title>Player ${(0, import_index_67075ed5.e)(player.name)}</title>`, ""}`, ""}

<h1>Ottawa Senator</h1>

<p>${(0, import_index_67075ed5.e)(player.name)}</p>
<p>${(0, import_index_67075ed5.e)(player.goals)}</p>
`;
});
