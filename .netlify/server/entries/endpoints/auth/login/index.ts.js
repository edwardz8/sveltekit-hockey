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
  POST: () => POST
});
module.exports = __toCommonJS(stdin_exports);
var bcrypt = __toESM(require("bcrypt"));
var cookie = __toESM(require("cookie"));
var import_database_2c99dac9 = require("../../../../_app/immutable/chunks/database-2c99dac9.js");
var import_client = require("@prisma/client");
const POST = async ({ request }) => {
  const form = await request.formData();
  const username = form.get("username");
  const password = form.get("password");
  if (typeof username !== "string" || typeof password !== "string") {
    return {
      status: 400,
      body: {
        error: "Enter a valid username and password."
      }
    };
  }
  if (!username || !password) {
    return {
      status: 400,
      body: {
        error: "username and password are required."
      }
    };
  }
  const user = await import_database_2c99dac9.d.user.findUnique({
    where: { username }
  });
  const passwordMatch = user && await bcrypt.compare(password, user.passwordHash);
  if (!user || !passwordMatch) {
    return {
      status: 400,
      body: {
        error: "You entered the wrong credentials. Please try again."
      }
    };
  }
  return {
    status: 200,
    body: {
      user: { username },
      success: "Success!"
    },
    headers: {
      "Set-Cookie": cookie.serialize(
        "session",
        user.userAuthToken,
        {
          path: "/",
          httpOnly: true,
          sameSite: "strict",
          secure: process.env.NODE_ENV === "production",
          maxAge: 60 * 60 * 24 * 30
        }
      )
    }
  };
};
