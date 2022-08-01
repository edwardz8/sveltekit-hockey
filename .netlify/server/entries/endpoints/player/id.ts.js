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
  GET: () => GET
});
module.exports = __toCommonJS(stdin_exports);
var import_prisma_5b2709a1 = require("../../../_app/immutable/chunks/prisma-5b2709a1.js");
var import_database_67e80463 = require("../../../_app/immutable/chunks/database-67e80463.js");
var import_client = require("@prisma/client");
const GET = async ({ params }) => {
  const player = await (0, import_prisma_5b2709a1.a)(params);
  if (!player) {
    return { status: 400 };
  }
  return {
    headers: { "Content-Type": "application/json" },
    status: 200,
    body: { player }
  };
};
