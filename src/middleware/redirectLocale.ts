import { RequestHandler } from "express"

export const SUPPORTED_LANGUAGES = ["de", "en"]

export const redirectLocale: RequestHandler = (req, res, next) => {

  const lang = req.originalUrl.split("/")[1]

  if (SUPPORTED_LANGUAGES.includes (lang)) {
    next ()
  }
  else {
    const accepted_langs = req.acceptsLanguages ()

    if (typeof accepted_langs === "boolean") {
      res.redirect (`/en${req.originalUrl}`)
    }
    else {
      const inferred_lang = accepted_langs .find (e => SUPPORTED_LANGUAGES .includes (e))

      if (inferred_lang !== undefined) {
        res.redirect (`/${inferred_lang}${req.originalUrl}`)
      }
      else {
        res.redirect (`/en${req.originalUrl}`)
      }
    }
  }
}
