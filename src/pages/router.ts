import Router = require ("@koa/router");
import { Context, State } from "../server.js";
import { about, download, home } from "./route-controller.js";

export const router = new Router<State, Context> ()

router
  .get ("/", home)
  .get ("/download", download)
  .get ("/about", about)
