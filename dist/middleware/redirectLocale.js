"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUPPORTED_LANGUAGES = ["de", "en"];
exports.redirectLocale = (req, res, next) => {
    const lang = req.originalUrl.split("/")[1];
    if (exports.SUPPORTED_LANGUAGES.includes(lang)) {
        next();
    }
    else {
        const accepted_langs = req.acceptsLanguages();
        if (typeof accepted_langs === "boolean") {
            res.redirect(`/en${req.originalUrl}`);
        }
        else {
            const inferred_lang = accepted_langs.find(e => exports.SUPPORTED_LANGUAGES.includes(e));
            if (inferred_lang !== undefined) {
                res.redirect(`/${inferred_lang}${req.originalUrl}`);
            }
            else {
                res.redirect(`/en${req.originalUrl}`);
            }
        }
    }
};
