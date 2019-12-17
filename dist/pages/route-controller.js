"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = require("debug");
const debug = debug_1.default("app:pages:routectrl");
exports.home = async (ctx, next) => {
    debug(`GET /; Locale = ${ctx.params.locale}`);
    await ctx.render(`${ctx.params.locale}/home`, {});
    await next();
};
exports.download = async (ctx, next) => {
    debug(`GET /download; Locale = ${ctx.params.locale}`);
    await ctx.render(`${ctx.params.locale}/download`, {});
    await next();
};
exports.imprint = async (ctx, next) => {
    debug(`GET /imprint; Locale = ${ctx.params.locale}`);
    await ctx.render(`${ctx.params.locale}/imprint`, {});
    await next();
};
exports.thirdpartylicenses = async (ctx, next) => {
    debug(`GET /thirdpartylicenses; Locale = ${ctx.params.locale}`);
    await ctx.render(`${ctx.params.locale}/thirdpartylicenses`, {});
    await next();
};
exports.privacy = async (ctx, next) => {
    debug(`GET /privacy; Locale = ${ctx.params.locale}`);
    await ctx.render(`${ctx.params.locale}/privacy`, {});
    await next();
};
