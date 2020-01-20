import express = require ("express");
import { download, home, imprint, notFound, privacy, thirdpartylicenses } from "./route-controller";

export const router = express.Router ()

router.get ("/:locale/", home)
router.get ("/:locale/download/", download)
router.get ("/:locale/imprint/", imprint)
router.get ("/:locale/thirdpartylicenses/", thirdpartylicenses)
router.get ("/:locale/privacy/", privacy)
router.get ("/:locale/*", notFound)
