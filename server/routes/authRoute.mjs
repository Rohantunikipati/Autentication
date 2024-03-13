import express from "express";
import { signup } from "../controllers/autthContoller.mjs";
const router = express.Router();

router.post("/signup",signup);

export default router;