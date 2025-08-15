import express from "express";
import {
  login,
  logout,
  signup,
  updateProfile,
} from "../controllers/user.controllers.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { upload } from "../middlewares/multer.js";

const router = express.Router();

router.post("/signup", upload, signup);
router.post("/login", login);
router.post("/profile/update", isAuthenticated, upload, updateProfile);
router.get("/logout", logout);

export default router;
