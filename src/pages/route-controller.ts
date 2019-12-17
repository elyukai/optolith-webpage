import { Middleware } from "@koa/router"
import Debug from "debug"
import { Context, State } from "../server.js"

const debug = Debug ("app:pages:routectrl")



export const home: Middleware<State, Context> = async (ctx, next) => {
  debug (`GET /; Locale = ${ctx.params.locale}`)

  await ctx.render (`${ctx.params.locale}/home`, {})

  await next ()
}

export const download: Middleware<State, Context> = async (ctx, next) => {
  debug (`GET /download; Locale = ${ctx.params.locale}`)

  await ctx.render (`${ctx.params.locale}/download`, {})

  await next ()
}

export const imprint: Middleware<State, Context> = async (ctx, next) => {
  debug (`GET /imprint; Locale = ${ctx.params.locale}`)

  await ctx.render (`${ctx.params.locale}/imprint`, {})

  await next ()
}

export const thirdpartylicenses: Middleware<State, Context> = async (ctx, next) => {
  debug (`GET /thirdpartylicenses; Locale = ${ctx.params.locale}`)

  await ctx.render (`${ctx.params.locale}/thirdpartylicenses`, {})

  await next ()
}

export const privacy: Middleware<State, Context> = async (ctx, next) => {
  debug (`GET /privacy; Locale = ${ctx.params.locale}`)

  await ctx.render (`${ctx.params.locale}/privacy`, {})

  await next ()
}
