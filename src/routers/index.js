import express from "express";
import comicRouter from "./comic.js"
import chapterRouter from "./chapter.js"
import uploadRouter from "./upload.js"

const router = express.Router()

router.use("/comic", comicRouter)
router.use("/chapter", chapterRouter)
router.use("/upload", uploadRouter)

export default router