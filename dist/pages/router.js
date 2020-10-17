"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const route_controller_1 = require("./route-controller");
exports.router = express.Router();
exports.router.get("/:locale/", route_controller_1.home);
exports.router.get("/:locale/download/", route_controller_1.download);
exports.router.get("/:locale/imprint/", route_controller_1.imprint);
exports.router.get("/:locale/thirdpartylicenses/", route_controller_1.thirdpartylicenses);
exports.router.get("/:locale/privacy/", route_controller_1.privacy);
exports.router.get("/:locale/*", route_controller_1.notFound);
