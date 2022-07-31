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
  getSession: () => getSession,
  handle: () => handle
});
module.exports = __toCommonJS(stdin_exports);
var cookie = __toESM(require("cookie"));
var import_database_2c99dac9 = require("./database-2c99dac9.js");
var import_client = require("@prisma/client");
const handle = async ({
  event,
  resolve
}) => {
  const cookieHeader = event.request.headers.get("cookie");
  const cookies = cookie.parse(cookieHeader != null ? cookieHeader : "");
  if (!cookies.session) {
    return await resolve(event);
  }
  const session = await import_database_2c99dac9.d.user.findUnique({
    where: { userAuthToken: cookies.session }
  });
  if (session) {
    event.locals.user = { username: session.username };
  }
  return await resolve(event);
};
const getSession = ({ locals }) => {
  if (!locals.user)
    return {};
  return {
    user: {
      username: locals.user.username
    }
  };
};
