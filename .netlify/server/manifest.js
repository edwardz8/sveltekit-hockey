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
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["favicon.png", "robots.txt", "svelte-welcome.png", "svelte-welcome.webp"]),
  mimeTypes: { ".png": "image/png", ".txt": "text/plain", ".webp": "image/webp" },
  _: {
    entry: { "file": "_app/immutable/start-ed7f5697.js", "imports": ["_app/immutable/start-ed7f5697.js", "_app/immutable/chunks/index-10167abb.js", "_app/immutable/chunks/index-b5bef26d.js"], "stylesheets": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/8.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js")))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        id: "about",
        pattern: /^\/about\/?$/,
        names: [],
        types: [],
        path: "/about",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        id: "players",
        pattern: /^\/players\/?$/,
        names: [],
        types: [],
        path: "/players",
        shadow: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/players/index.ts.js"))),
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        id: "protected",
        pattern: /^\/protected\/?$/,
        names: [],
        types: [],
        path: "/protected",
        shadow: null,
        a: [0, 5],
        b: [1]
      },
      {
        type: "page",
        id: "todos",
        pattern: /^\/todos\/?$/,
        names: [],
        types: [],
        path: "/todos",
        shadow: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/todos/index.ts.js"))),
        a: [0, 6],
        b: [1]
      },
      {
        type: "endpoint",
        id: "players/like",
        pattern: /^\/players\/like\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/players/like.ts.js")))
      },
      {
        type: "endpoint",
        id: "auth/logout",
        pattern: /^\/auth\/logout\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/auth/logout/index.ts.js")))
      },
      {
        type: "page",
        id: "auth/login",
        pattern: /^\/auth\/login\/?$/,
        names: [],
        types: [],
        path: "/auth/login",
        shadow: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/auth/login/index.ts.js"))),
        a: [0, 7],
        b: [1]
      },
      {
        type: "page",
        id: "auth/register",
        pattern: /^\/auth\/register\/?$/,
        names: [],
        types: [],
        path: "/auth/register",
        shadow: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/auth/register/index.ts.js"))),
        a: [0, 8],
        b: [1]
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
