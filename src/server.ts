import { redirectLocale } from "./middleware/redirectLocale.js";
import { router } from "./pages/router.js";
import nunjucks = require ("nunjucks");
import express = require ("express");

const port = 80
const app = express ()

try {
  app.use (express.static ("static"))

  nunjucks
    .configure ("src/views", {
      autoescape: true,
      watch: true,
      express: app,
    })

  app.set("view engine", "njk");

  app.use (redirectLocale)
  app.use (router)

  app.listen (port, () => console.log ("Server started on port %i.", port))
}
catch (err) {
  console.error ("Server error", err)
}

export default app
