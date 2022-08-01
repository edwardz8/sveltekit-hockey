var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  file: () => file,
  imports: () => imports,
  index: () => index,
  module: () => module2,
  stylesheets: () => stylesheets
});
module.exports = __toCommonJS(stdin_exports);
var module2 = __toESM(require("../entries/pages/player/_id_.svelte.js"));
const index = 6;
const file = "_app/immutable/pages/player/_id_.svelte-e272cc83.js";
const imports = ["_app/immutable/pages/player/_id_.svelte-e272cc83.js", "_app/immutable/chunks/index-10167abb.js", "_app/immutable/chunks/stores-2237ea54.js"];
const stylesheets = ["_app/immutable/assets/player-4b9fd35e.css"];
