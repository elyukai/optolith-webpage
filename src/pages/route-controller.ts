import { Middleware } from "@koa/router"
import Debug from "debug"
import { Context, State } from "../server.js"

const debug = Debug ("app:pages:routectrl")

export enum Locale { de = "de-DE", en = "en-US" }

export const home = (locale: Locale): Middleware<State, Context> => async (ctx, next) => {
  debug (`GET /; Locale = ${locale}`)

  await ctx.render (`${locale}/home`, {})

  await next ()
}

export const download = (locale: Locale): Middleware<State, Context> => async (ctx, next) => {
  debug (`GET /download; Locale = ${locale}`)

  await ctx.render (`${locale}/download`, {})

  await next ()
}

export const about = (locale: Locale): Middleware<State, Context> => async (ctx, next) => {
  debug (`GET /about; Locale = ${locale}`)

  await ctx.render (`${locale}/about`, {})

  await next ()
}
