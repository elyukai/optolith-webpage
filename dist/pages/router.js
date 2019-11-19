import Router from "@koa/router";
import { about, home } from "./route-controller.js";
export const router = new Router();
router
    .get("/", home)
    .get("/about", about);
