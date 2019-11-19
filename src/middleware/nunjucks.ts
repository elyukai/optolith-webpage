import nunjucksAsync = require ("koa-nunjucks-async");
import { Context, State } from "../server";

const nunjucksOptions: nunjucksAsync.Options = {
  opts: {
    autoescape: true,
    watch: true
  },
  ext: ".njk"
}

export const nunjucks = (relativePath: string) => nunjucksAsync<State, Context> (relativePath, nunjucksOptions)
