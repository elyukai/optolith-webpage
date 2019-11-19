"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("@koa/router");
const route_controller_js_1 = require("./route-controller.js");
exports.router = new Router();
exports.router
    .get("/", route_controller_js_1.home)
    .get("/download", route_controller_js_1.download)
    .get("/about", route_controller_js_1.about);
