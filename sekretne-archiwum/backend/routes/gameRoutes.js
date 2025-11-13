import express from "express";
import { getGameState, saveGameState } from "../controllers/gameController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/state", verifyToken, getGameState);
router.post("/state", verifyToken, saveGameState);

export default router;
