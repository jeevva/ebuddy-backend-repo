import { Router } from "express";
import { fetchUserData, updateUserData } from "../controller/api";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

router.put("/update-user-data", authMiddleware, updateUserData);
router.get("/fetch-user-data/:email", authMiddleware, fetchUserData);

export { router as userRoutes };
