import express from "express";
import { singin, singnup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", singnup);
router.post("/signin", singin);

export default router;
