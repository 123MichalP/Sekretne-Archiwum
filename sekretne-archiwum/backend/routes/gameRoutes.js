import express from "express";
import { getGameState, saveGameState, endGame, getBestTime } from "../controllers/gameController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/state", verifyToken, getGameState);
router.post("/state", verifyToken, saveGameState);
router.post("/end", verifyToken, endGame);
router.get("/best-time", verifyToken, getBestTime);

export default router;
