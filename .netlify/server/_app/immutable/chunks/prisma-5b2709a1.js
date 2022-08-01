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
  a: () => getPlayer,
  g: () => getPlayers
});
module.exports = __toCommonJS(stdin_exports);
var import_database_67e80463 = require("./database-67e80463.js");
async function getPlayers() {
  const players = await import_database_67e80463.p.player.findMany({
    orderBy: { name: "desc" }
  });
  return players.map((p) => {
    return {
      id: p.playerId,
      content: p.content,
      name: p.name,
      team: p.team,
      url: p.url,
      pos: p.pos,
      goals: p.goals,
      assists: p.assists,
      blocks: p.blocks,
      hits: p.hits,
      price: p.price,
      fanpoints: p.fanpoints,
      likes: p.likes
    };
  });
}
async function getPlayer(params) {
  const player = await import_database_67e80463.p.player.findFirst({
    where: { url: params.playerId }
  });
  return {
    id: player == null ? void 0 : player.playerId,
    content: player == null ? void 0 : player.content,
    name: player == null ? void 0 : player.name,
    team: player == null ? void 0 : player.team,
    url: player == null ? void 0 : player.url,
    pos: player == null ? void 0 : player.pos,
    goals: player == null ? void 0 : player.goals,
    assists: player == null ? void 0 : player.assists,
    blocks: player == null ? void 0 : player.blocks,
    hits: player == null ? void 0 : player.hits,
    price: player == null ? void 0 : player.price,
    fanpoints: player == null ? void 0 : player.fanpoints,
    likes: player == null ? void 0 : player.likes
  };
}
