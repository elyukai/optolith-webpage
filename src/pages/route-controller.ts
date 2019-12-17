import { Middleware } from "@koa/router"
import Debug from "debug"
import { Context, State } from "../server.js"

const debug = Debug ("app:pages:routectrl")

const SUPPORTED_LANGUAGES = ["de", "en"]

export const redirectLocale = (redirectRoute: string): Middleware<State, Context> => ctx => {
  const accepted_langs = ctx.request.acceptsLanguages ()
  if (typeof accepted_langs === "boolean") {
    ctx.redirect (`/en${redirectRoute}`)
  }
  else {
    const inferred_lang = accepted_langs .find (e => SUPPORTED_LANGUAGES .includes (e))

    if (inferred_lang !== undefined) {
      ctx.redirect (`/${inferred_lang}${redirectRoute}`)
    }
    else {
      ctx.redirect (`/en${redirectRoute}`)
    }
  }
}

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
