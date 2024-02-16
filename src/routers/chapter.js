import express from "express";
import { create, getAll, getById, remove, update } from "../controllers/comic.js";

const router = express.Router()

// router.get('/', getAll)
// router.get('/:id', getById)
// router.post('/add', create)
// router.delete('/remove/:id', remove)
// router.put('/update/:id', update)

export default router