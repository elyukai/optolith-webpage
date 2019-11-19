import Router from "@koa/router";
import { Context, State } from "../server.js";
import { about, home } from "./route-controller.js";

export const router = new Router<State, Context> ()

router
  .get ("/", home)
  .get ("/about", about)
