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
  default: () => Protected,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_67075ed5 = require("../../../_app/immutable/chunks/index-67075ed5.js");
const load = ({ session }) => {
  if (!session.user) {
    return { status: 302, redirect: "/auth/login" };
  }
  return {
    status: 200,
    props: { user: session.user.username }
  };
};
const Protected = (0, import_index_67075ed5.c)(($$result, $$props, $$bindings, slots) => {
  let { user } = $$props;
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  return `<h1>Protected Index Route</h1>

<p>Welcome ${(0, import_index_67075ed5.e)(user)}!</p>

<p>Thanks for signing up!</p>

<p>View the players page but routing for an individual player is broken at the moment. being able to like a player and comment on the player card is coming soon.</p>`;
});
