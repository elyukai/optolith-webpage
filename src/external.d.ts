declare module 'koa-nunjucks-async' {
  import Koa from "koa";
  import { ConfigureOptions } from "nunjucks";

  interface KoaNunjucksOptions {
    opts: ConfigureOptions
    ext: string
  }

  function KoaNunjucksAsync <StateT = Koa.DefaultState, CustomT = Koa.DefaultContext> (
    path: string,
    nunjucks_options: KoaNunjucksOptions
  ): Koa.Middleware<StateT, CustomT>

  namespace KoaNunjucksAsync {
    export interface Options extends KoaNunjucksOptions { }
  }

  export = KoaNunjucksAsync
}
