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
  default: () => Register,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_67075ed5 = require("../../../../_app/immutable/chunks/index-67075ed5.js");
var import_stores_a06e66cb = require("../../../../_app/immutable/chunks/stores-a06e66cb.js");
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".error.svelte-1inscdf{color:orange}",
  map: null
};
const load = ({ session: session2, props }) => {
  if (session2.user) {
    return { status: 302, redirect: "/protected" };
  }
  return { props };
};
const Register = (0, import_index_67075ed5.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_session;
  $$unsubscribe_session = (0, import_index_67075ed5.a)(import_stores_a06e66cb.s, (value) => value);
  let { error } = $$props;
  let { success } = $$props;
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.success === void 0 && $$bindings.success && success !== void 0)
    $$bindings.success(success);
  $$result.css.add(css);
  $$unsubscribe_session();
  return `<form method="${"post"}"><div><label for="${"username"}">Username</label>
    <input id="${"username"}" name="${"username"}" type="${"text"}" required></div>

  <div><label for="${"password"}">Password</label>
    <input id="${"password"}" name="${"password"}" type="${"password"}" required></div>

  ${error ? `<p class="${"error svelte-1inscdf"}">${(0, import_index_67075ed5.e)(error)}</p>` : ``}

  <button type="${"submit"}">Sign Up</button>
</form>`;
});
