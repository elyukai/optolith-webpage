"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nunjucks = require("nunjucks");
const nunjucksOptions = {
    autoescape: true,
    watch: true,
};
exports.useNunjucks = (app, relativePath) => () => {
    nunjucks.configure(relativePath, {
        ...nunjucksOptions,
        express: app,
    });
};
