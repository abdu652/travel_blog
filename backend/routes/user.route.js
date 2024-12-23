import { Router } from "express";
import getAllUser, { signup } from '../controllers/user.controller.js'
const router = Router();
router.get("/",getAllUser);
router.post("/signup",signup);

export default router;