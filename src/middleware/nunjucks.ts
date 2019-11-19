import nunjucksAsync, { KoaNunjucksOptions } from "koa-nunjucks-async";
import { Context, State } from "../server";

const nunjucksOptions: KoaNunjucksOptions = {
  opts: {
    autoescape: true,
    watch: true
  },
  ext: ".njk"
}

export const nunjucks = (relativePath: string) => nunjucksAsync<State, Context> (relativePath, nunjucksOptions)
