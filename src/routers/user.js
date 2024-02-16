import express from "express";
import { remove, signin, signup, update } from "../controllers/user.js";

const router = express.Router()

router.post('/signin', signin)
router.post('/signup', signup)
router.delete('/remove/:id', remove)
router.put('/update/:id', update)

export default router