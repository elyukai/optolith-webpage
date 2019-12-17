import Router = require ("@koa/router");
import { Context, State } from "../server.js";
import { download, home, imprint, privacy, redirectLocale, thirdpartylicenses } from "./route-controller.js";

export const router = new Router<State, Context> ()

router
  .get ("/", redirectLocale ("/"))
  .get ("/download/", redirectLocale ("/download"))
  .get ("/imprint/", redirectLocale ("/imprint"))
  .get ("/thirdpartylicenses/", redirectLocale ("/thirdpartylicenses"))
  .get ("/privacy/", redirectLocale ("/privacy"))
  .get ("/:locale/", home)
  .get ("/:locale/download/", download)
  .get ("/:locale/imprint/", imprint)
  .get ("/:locale/thirdpartylicenses/", thirdpartylicenses)
  .get ("/:locale/privacy/", privacy)
