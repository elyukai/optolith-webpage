"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = require("debug");
const debug = debug_1.default("app:pages:routectrl");
exports.home = async (ctx, next) => {
    debug("GET /");
    await ctx.render("home", { title: "Home", mainClass: "home", lang: "en" });
    await next();
};
exports.download = async (ctx, next) => {
    debug("GET /download");
    await ctx.render("download", { title: "Download", mainClass: "download", lang: "en" });
    await next();
};
exports.about = async (ctx, next) => {
    debug("GET /about");
    await ctx.render("about", { title: "About", mainClass: "about", lang: "en" });
    await next();
};
