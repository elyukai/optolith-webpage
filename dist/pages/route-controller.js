"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = require("debug");
const debug = debug_1.default("app:pages:routectrl");
const SUPPORTED_LANGUAGES = ["de", "en"];
exports.redirectLocale = (redirectRoute) => ctx => {
    const accepted_langs = ctx.request.acceptsLanguages();
    if (typeof accepted_langs === "boolean") {
        ctx.redirect(`/en${redirectRoute}`);
    }
    else {
        const inferred_lang = accepted_langs.find(e => SUPPORTED_LANGUAGES.includes(e));
        if (inferred_lang !== undefined) {
            ctx.redirect(`/${inferred_lang}${redirectRoute}`);
        }
        else {
            ctx.redirect(`/en${redirectRoute}`);
        }
    }
};
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
