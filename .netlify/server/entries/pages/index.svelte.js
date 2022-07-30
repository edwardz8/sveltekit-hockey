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
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_67075ed5 = require("../../_app/immutable/chunks/index-67075ed5.js");
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-1bgohwt{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1}h1.svelte-1bgohwt{width:100%}",
  map: null
};
const Routes = (0, import_index_67075ed5.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Home</title>`, ""}<meta name="${"description"}" content="${"Svelte Hockey Application"}" data-svelte="svelte-zvi59y">`, ""}

<section class="${"svelte-1bgohwt"}"><h1 class="${"svelte-1bgohwt"}">Rotorink Hockey 
	</h1>


</section>`;
});
