import Debug from "debug"
import { RequestHandler } from "express"
import { SUPPORTED_LANGUAGES } from "../middleware/redirectLocale"

const debug = Debug ("app:pages:routectrl")

export const home: RequestHandler = async (req, res, next) => {
  debug (`GET /; Locale = ${req.params.locale}`)

  if (SUPPORTED_LANGUAGES.includes (req.params.locale)) {
    res.render (`${req.params.locale}/home`, {})
  }
  else {
    next ()
  }
}

export const download: RequestHandler = async (req, res) => {
  debug (`GET /download; Locale = ${req.params.locale}`)

  res.render (`${req.params.locale}/download`, {})
}

export const imprint: RequestHandler = async (req, res) => {
  debug (`GET /imprint; Locale = ${req.params.locale}`)

  res.render (`${req.params.locale}/imprint`, {})
}

export const thirdpartylicenses: RequestHandler = async (req, res) => {
  debug (`GET /thirdpartylicenses; Locale = ${req.params.locale}`)

  res.render (`${req.params.locale}/thirdpartylicenses`, {})
}

export const privacy: RequestHandler = async (req, res) => {
  debug (`GET /privacy; Locale = ${req.params.locale}`)

  res.render (`${req.params.locale}/privacy`, {})
}

export const notFound: RequestHandler = async (req, res) => {
  debug (`*; Locale = ${req.params.locale}`)

  res.status (404)
  res.render (`${req.params.locale}/notfound`, {})
}
