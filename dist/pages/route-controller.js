"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = require("debug");
const redirectLocale_1 = require("../middleware/redirectLocale");
const debug = debug_1.default("app:pages:routectrl");
exports.home = async (req, res, next) => {
    debug(`GET /; Locale = ${req.params.locale}`);
    if (redirectLocale_1.SUPPORTED_LANGUAGES.includes(req.params.locale)) {
        res.render(`${req.params.locale}/home`, {});
    }
    else {
        next();
    }
};
exports.download = async (req, res) => {
    debug(`GET /download; Locale = ${req.params.locale}`);
    res.render(`${req.params.locale}/download`, {});
};
exports.imprint = async (req, res) => {
    debug(`GET /imprint; Locale = ${req.params.locale}`);
    res.render(`${req.params.locale}/imprint`, {});
};
exports.thirdpartylicenses = async (req, res) => {
    debug(`GET /thirdpartylicenses; Locale = ${req.params.locale}`);
    res.render(`${req.params.locale}/thirdpartylicenses`, {});
};
exports.privacy = async (req, res) => {
    debug(`GET /privacy; Locale = ${req.params.locale}`);
    res.render(`${req.params.locale}/privacy`, {});
};
exports.notFound = async (req, res) => {
    debug(`*; Locale = ${req.params.locale}`);
    res.status(404);
    res.render(`${req.params.locale}/notfound`, {});
};
