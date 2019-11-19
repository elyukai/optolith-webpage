"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nunjucksAsync = require("koa-nunjucks-async");
const nunjucksOptions = {
    opts: {
        autoescape: true,
        watch: true
    },
    ext: ".njk"
};
exports.nunjucks = (relativePath) => nunjucksAsync(relativePath, nunjucksOptions);
