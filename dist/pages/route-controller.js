"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = require("debug");
const debug = debug_1.default("app:pages:routectrl");
var Locale;
(function (Locale) {
    Locale["de"] = "de-DE";
    Locale["en"] = "en-US";
})(Locale = exports.Locale || (exports.Locale = {}));
exports.home = (locale) => async (ctx, next) => {
    debug(`GET /; Locale = ${locale}`);
    await ctx.render(`${locale}/home`, {});
    await next();
};
exports.download = (locale) => async (ctx, next) => {
    debug(`GET /download; Locale = ${locale}`);
    await ctx.render(`${locale}/download`, {});
    await next();
};
exports.about = (locale) => async (ctx, next) => {
    debug(`GET /about; Locale = ${locale}`);
    await ctx.render(`${locale}/about`, {});
    await next();
};
