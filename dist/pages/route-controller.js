import Debug from "debug";
const debug = Debug("app:pages:routectrl");
export const home = async (ctx, next) => {
    debug("GET /");
    await ctx.render("home", { title: "Home", lang: "en" });
    await next();
};
export const about = async (ctx, next) => {
    debug("GET /about");
    await ctx.render("about", { title: "About", lang: "en" });
    await next();
};
