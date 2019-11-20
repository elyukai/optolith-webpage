"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("@koa/router");
const route_controller_js_1 = require("./route-controller.js");
exports.router = new Router();
exports.router
    .get("/", ctx => ctx.redirect("/en"))
    .get("/download", ctx => ctx.redirect("/en/download"))
    .get("/about", ctx => ctx.redirect("/en/about"))
    .get("/en", route_controller_js_1.home(route_controller_js_1.Locale.en))
    .get("/en/download", route_controller_js_1.download(route_controller_js_1.Locale.en))
    .get("/en/about", route_controller_js_1.about(route_controller_js_1.Locale.en))
    .get("/de", route_controller_js_1.home(route_controller_js_1.Locale.de))
    .get("/de/download", route_controller_js_1.download(route_controller_js_1.Locale.de))
    .get("/de/about", route_controller_js_1.about(route_controller_js_1.Locale.de));
