import express from "express";
import userAuth from "../middelwares/authmiddleware.js";
import {
  createJobController,
  deleteJobContoller,
  getAllJobsController,
  jobStatsController,
  updatejobController,
} from "../controllers/jobsController.js";

const router = express.Router();

//routes
//CREATE JOB || POST
router.post("/create-job", userAuth, createJobController);

//GET JOBS || GET
router.get("/get-job", userAuth, getAllJobsController);

//UPDATE JOBS || PUT || PATCH
router.patch("/update-job/:id", userAuth, updatejobController);

//UPDATE JOBS || DELETE
router.delete("/delete-job/:id", userAuth, deleteJobContoller);

// JOBS STATS FILTER || GER
router.get("/job-stats", userAuth, jobStatsController);

export default router;
