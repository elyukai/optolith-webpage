"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("@koa/router");
const route_controller_js_1 = require("./route-controller.js");
exports.router = new Router();
exports.router
    .get("/", route_controller_js_1.redirectLocale("/"))
    .get("/download/", route_controller_js_1.redirectLocale("/download"))
    .get("/imprint/", route_controller_js_1.redirectLocale("/imprint"))
    .get("/thirdpartylicenses/", route_controller_js_1.redirectLocale("/thirdpartylicenses"))
    .get("/privacy/", route_controller_js_1.redirectLocale("/privacy"))
    .get("/:locale/", route_controller_js_1.home)
    .get("/:locale/download/", route_controller_js_1.download)
    .get("/:locale/imprint/", route_controller_js_1.imprint)
    .get("/:locale/thirdpartylicenses/", route_controller_js_1.thirdpartylicenses)
    .get("/:locale/privacy/", route_controller_js_1.privacy);
