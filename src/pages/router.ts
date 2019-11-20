import Router = require ("@koa/router");
import { Context, State } from "../server.js";
import { about, download, home, Locale } from "./route-controller.js";

export const router = new Router<State, Context> ()

router
  .get ("/", ctx => ctx.redirect ("/en"))
  .get ("/download", ctx => ctx.redirect ("/en/download"))
  .get ("/about", ctx => ctx.redirect ("/en/about"))
  .get ("/en", home (Locale.en))
  .get ("/en/download", download (Locale.en))
  .get ("/en/about", about (Locale.en))
  .get ("/de", home (Locale.de))
  .get ("/de/download", download (Locale.de))
  .get ("/de/about", about (Locale.de))
