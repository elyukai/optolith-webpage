"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = require("debug");
const debug = debug_1.default("app:pages:routectrl");
exports.home = async (ctx, next) => {
    debug("GET /");
    await ctx.render("home", { title: "Home", lang: "en" });
    await next();
};
exports.about = async (ctx, next) => {
    debug("GET /about");
    await ctx.render("about", { title: "About", lang: "en" });
    await next();
};
