import express from "express";
import comicRouter from "./comic.js"
import chapterRouter from "./chapter.js"
import uploadRouter from "./upload.js"
import userRouter from "./user.js"

const router = express.Router()

router.use("/comic", comicRouter)
router.use("/chapter", chapterRouter)
router.use("/upload", uploadRouter)
router.use("/user", userRouter)

export default router