import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import {
  getJob,
  postJob,
  getAdminJob,
  getJobById,
} from "../controllers/job.controllers.js";

const router = express.Router();

router.post("/postJob", isAuthenticated, postJob);
router.get("/getJob", isAuthenticated, getJob);
router.get("/getAdmin/:id", isAuthenticated, getAdminJob);
router.get("/getJob/:id", isAuthenticated, getJobById);

export default router;
