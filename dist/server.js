"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redirectLocale_js_1 = require("./middleware/redirectLocale.js");
const router_js_1 = require("./pages/router.js");
const nunjucks = require("nunjucks");
const express = require("express");
const port = 80;
const app = express();
try {
    app.use(express.static("static"));
    nunjucks
        .configure("src/views", {
        autoescape: true,
        watch: true,
        express: app,
    });
    app.set("view engine", "njk");
    app.use(redirectLocale_js_1.redirectLocale);
    app.use(router_js_1.router);
    app.listen(port, () => console.log("Server started on port %i.", port));
}
catch (err) {
    console.error("Server error", err);
}
exports.default = app;
