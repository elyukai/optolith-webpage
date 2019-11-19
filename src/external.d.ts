declare module 'koa-nunjucks-async' {
  import Application from "koa";
  import { ConfigureOptions } from "nunjucks";

  export interface KoaNunjucksOptions {
    opts: ConfigureOptions
    ext: string
  }

  export default function <StateT = Application.DefaultState, CustomT = Application.DefaultContext> (
    path: string,
    nunjucks_options: KoaNunjucksOptions
  ): Application.Middleware<StateT, CustomT>
}
