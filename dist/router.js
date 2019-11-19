import Router from "@koa/router";
export const router = new Router();
router
    .get("/", list)
    .get("/about", add);
