"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = require("debug");
const nunjucks_js_1 = require("./middleware/nunjucks.js");
const router_js_1 = require("./pages/router.js");
const serve = require("koa-static");
const Koa = require("koa");
const debug = debug_1.default("app:main");
const port = 80;
const app = new Koa();
const main = async () => {
    try {
        app.on("error", async (err, ctx) => {
            console.error("Server error", err, ctx);
        });
        app.use(serve("static"));
        app.use(nunjucks_js_1.nunjucks("static/views"));
        app.use(router_js_1.router.routes());
        app.listen(port);
        debug("Server started on port %i.", port);
    }
    catch (err) {
        console.error("Server error", err);
    }
};
main();
exports.default = app;
