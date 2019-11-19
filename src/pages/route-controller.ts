import { Middleware } from "@koa/router"
import Debug from "debug"
import { Context, State } from "../server.js"

const debug = Debug ("app:pages:routectrl")

export const home: Middleware<State, Context> = async (ctx, next) => {
  debug ("GET /")

  await ctx.render ("home", { title: "Home", mainClass: "home", lang: "en" })

  await next ()
}

export const download: Middleware<State, Context> = async (ctx, next) => {
  debug ("GET /download")

  await ctx.render ("download", { title: "Download", mainClass: "download", lang: "en" })

  await next ()
}

export const about: Middleware<State, Context> = async (ctx, next) => {
  debug ("GET /about")

  await ctx.render ("about", { title: "About", mainClass: "about", lang: "en" })

  await next ()
}
