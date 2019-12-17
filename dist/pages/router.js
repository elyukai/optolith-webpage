"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("@koa/router");
const route_controller_js_1 = require("./route-controller.js");
exports.router = new Router();
exports.router
    .get("/", ctx => ctx.redirect("/en/"))
    .get("/download/", ctx => ctx.redirect("/en/download"))
    .get("/imprint/", ctx => ctx.redirect("/en/imprint"))
    .get("/thirdpartylicenses/", ctx => ctx.redirect("/en/thirdpartylicenses"))
    .get("/privacy/", ctx => ctx.redirect("/en/privacy"))
    .get("/:locale/", route_controller_js_1.home)
    .get("/:locale/download/", route_controller_js_1.download)
    .get("/:locale/imprint/", route_controller_js_1.imprint)
    .get("/:locale/thirdpartylicenses/", route_controller_js_1.thirdpartylicenses)
    .get("/:locale/privacy/", route_controller_js_1.privacy);
