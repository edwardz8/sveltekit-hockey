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
  POST: () => POST
});
module.exports = __toCommonJS(stdin_exports);
const POST = async ({ request }) => {
  const form = await request.formData();
  const id = +form.get("id");
  const liked = await prisma.liked.count({
    where: { playerId: id }
  });
  if (liked === 1) {
    await prisma.liked.delete({ where: { playerId: id } });
    const count2 = await prisma.player.findUnique({
      where: { id },
      select: { likes: true }
    });
    await prisma.player.update({
      where: { id },
      data: { likes: count2.likes -= 1 }
    });
    return {
      status: 303,
      headers: {
        location: "/players"
      }
    };
  }
  await prisma.liked.create({
    data: {
      playerId: id,
      userId: id
    }
  });
  const count = await prisma.player.findUnique({
    where: { id },
    select: { likes: true }
  });
  await prisma.player.update({
    where: { id },
    data: { likes: count.likes += 1 }
  });
  return {
    status: 303,
    headers: { location: "/players" }
  };
};
