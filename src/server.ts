import Debug from "debug";
import Koa, { DefaultContext, DefaultState } from "koa";
import serve from "koa-static";
import { nunjucks } from "./middleware/nunjucks.js";
import { router } from "./pages/router.js";

const debug = Debug ("app:main")

export interface State extends DefaultState { }

export interface Context extends DefaultContext {
  render: (template: string, data: any) => Promise<any>
}

const port = 3000
const app = new Koa<State, Context> ()

const main = async () => {
  try {
    app.on ("error", async (err, ctx) => {
      console.error ("Server error", err, ctx);
    })

    app.use (serve ("static"))

    app.use (nunjucks ("static/views"))

    app.use (router.routes ())

    app.listen (port)

    debug ("Server started on port %i.", port)
  }
  catch (err) {
    console.error ("Server error", err)
  }
}

main ()

export default app
