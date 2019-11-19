import nunjucksAsync from "koa-nunjucks-async";
const nunjucksOptions = {
    opts: {
        autoescape: true,
        watch: true
    },
    ext: ".njk"
};
export const nunjucks = (relativePath) => nunjucksAsync(relativePath, nunjucksOptions);
