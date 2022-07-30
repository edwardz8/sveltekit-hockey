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
var import_database_67e80463 = require("../../../_app/immutable/chunks/database-67e80463.js");
var import_client = require("@prisma/client");
async function getPlayers() {
  const players = await import_database_67e80463.p.player.findMany({
    orderBy: { name: "desc" }
  });
  return players.map((p) => {
    return {
      id: p.playerId,
      content: p.content,
      name: p.name,
      url: p.url,
      pos: p.pos,
      goals: p.goals,
      assists: p.assists,
      blocks: p.blocks,
      hits: p.hits,
      price: p.price,
      likes: p.likes
    };
  });
}
const GET = async () => {
  const players = await getPlayers();
  if (!players) {
    return { status: 400 };
  }
  return {
    headers: { "Content-Type": "application/json" },
    status: 200,
    body: { players }
  };
};
