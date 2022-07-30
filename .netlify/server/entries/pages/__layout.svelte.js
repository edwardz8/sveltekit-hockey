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
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_67075ed5 = require("../../_app/immutable/chunks/index-67075ed5.js");
var import_stores_a06e66cb = require("../../_app/immutable/chunks/stores-a06e66cb.js");
const logo = "/_app/immutable/assets/svelte-logo-87df40b8.svg";
const Header_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-t2wq17.svelte-t2wq17{display:flex;justify-content:space-between}.corner.svelte-t2wq17.svelte-t2wq17{width:3em;height:3em}.corner.svelte-t2wq17 a.svelte-t2wq17{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.corner.svelte-t2wq17 img.svelte-t2wq17{width:2em;height:2em;object-fit:contain}nav.svelte-t2wq17.svelte-t2wq17{display:flex;justify-content:center;--background:rgba(255, 255, 255, 0.7)}svg.svelte-t2wq17.svelte-t2wq17{width:2em;height:3em;display:block}path.svelte-t2wq17.svelte-t2wq17{fill:var(--background)}ul.svelte-t2wq17.svelte-t2wq17{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-t2wq17.svelte-t2wq17{position:relative;height:100%}li.active.svelte-t2wq17.svelte-t2wq17::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--accent-color)}nav.svelte-t2wq17 a.svelte-t2wq17{display:flex;height:100%;align-items:center;padding:0 1em;color:var(--heading-color);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-t2wq17.svelte-t2wq17:hover{color:var(--accent-color)}",
  map: null
};
const Header = (0, import_index_67075ed5.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $session, $$unsubscribe_session;
  $$unsubscribe_page = (0, import_index_67075ed5.a)(import_stores_a06e66cb.p, (value) => $page = value);
  $$unsubscribe_session = (0, import_index_67075ed5.a)(import_stores_a06e66cb.s, (value) => $session = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  $$unsubscribe_session();
  return `<header class="${"svelte-t2wq17"}"><div class="${"corner svelte-t2wq17"}"><a href="${"#"}" class="${"svelte-t2wq17"}"><img${(0, import_index_67075ed5.b)("src", logo, 0)} alt="${"SvelteKit"}" class="${"svelte-t2wq17"}"></a></div>

	<nav class="${"svelte-t2wq17"}"><svg viewBox="${"0 0 2 3"}" aria-hidden="${"true"}" class="${"svelte-t2wq17"}"><path d="${"M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"}" class="${"svelte-t2wq17"}"></path></svg>
		<ul class="${"svelte-t2wq17"}"><li class="${["svelte-t2wq17", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a href="${"/"}" class="${"svelte-t2wq17"}">Home</a></li>
			<li class="${["svelte-t2wq17", $page.url.pathname === "/about" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/about"}" class="${"svelte-t2wq17"}">About</a></li>
			${!$session.user ? `<li class="${["svelte-t2wq17", $page.url.pathname === "/auth/login" ? "active" : ""].join(" ").trim()}"><a href="${"/auth/login"}" class="${"svelte-t2wq17"}">Login</a></li>
			<li class="${["svelte-t2wq17", $page.url.pathname === "/auth/register" ? "active" : ""].join(" ").trim()}"><a href="${"/auth/register"}" class="${"svelte-t2wq17"}">Register</a></li>
			` : ``}

			${$session.user ? `<li class="${["svelte-t2wq17", $page.url.pathname === "/protected" ? "active" : ""].join(" ").trim()}"><a href="${"/protected"}" class="${"svelte-t2wq17"}">Admin</a></li>
			<li class="${["svelte-t2wq17", $page.url.pathname === "/protected" ? "active" : ""].join(" ").trim()}"><a href="${"/auth/logout"}" class="${"svelte-t2wq17"}">Log out</a></li>
			<li class="${["svelte-t2wq17", $page.url.pathname === "/players" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/players"}" class="${"svelte-t2wq17"}">Players</a></li>` : ``}
			</ul>
		<svg viewBox="${"0 0 2 3"}" aria-hidden="${"true"}" class="${"svelte-t2wq17"}"><path d="${"M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"}" class="${"svelte-t2wq17"}"></path></svg></nav>

	<div class="${"corner svelte-t2wq17"}"></div>
</header>`;
});
const global = "";
const _layout = (0, import_index_67075ed5.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_67075ed5.v)(Header, "Header").$$render($$result, {}, {}, {})}

<main>${slots.default ? slots.default({}) : ``}</main>

`;
});
