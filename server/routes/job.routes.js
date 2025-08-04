import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import {
  postJob,
  getAdminJob,
  getJobById,
  getAllJob,
} from "../controllers/job.controllers.js";

const router = express.Router();

router.post("/postjob", isAuthenticated, postJob);
router.get("/get", isAuthenticated, getAllJob);
router.get("/getadminjobs", isAuthenticated, getAdminJob);
router.get("/get/:id", isAuthenticated, getJobById);

export default router;
