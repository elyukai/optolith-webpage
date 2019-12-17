import Router = require ("@koa/router");
import { Context, State } from "../server.js";
import { download, home, imprint, privacy, thirdpartylicenses } from "./route-controller.js";

export const router = new Router<State, Context> ()

router
  .get ("/", ctx => ctx.redirect ("/en/"))
  .get ("/download/", ctx => ctx.redirect ("/en/download"))
  .get ("/imprint/", ctx => ctx.redirect ("/en/imprint"))
  .get ("/thirdpartylicenses/", ctx => ctx.redirect ("/en/thirdpartylicenses"))
  .get ("/privacy/", ctx => ctx.redirect ("/en/privacy"))
  .get ("/:locale/", home)
  .get ("/:locale/download/", download)
  .get ("/:locale/imprint/", imprint)
  .get ("/:locale/thirdpartylicenses/", thirdpartylicenses)
  .get ("/:locale/privacy/", privacy)
