import Debug from "debug";
import Koa from "koa";
import serve from "koa-static";
import { nunjucks } from "./middleware/nunjucks.js";
import { router } from "./pages/router.js";
const debug = Debug("app:main");
const port = 80;
const app = new Koa();
const main = async () => {
    try {
        app.on("error", async (err, ctx) => {
            console.error("Server error", err, ctx);
        });
        app.use(serve("static"));
        app.use(nunjucks("static/views"));
        app.use(router.routes());
        app.listen(port);
        debug("Server started on port %i.", port);
    }
    catch (err) {
        console.error("Server error", err);
    }
};
main();
export default app;
