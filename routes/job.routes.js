import { Router } from "express";
import { checkForTestUser } from "../middleware/authMiddleware.js";
const router = Router();
import {
  getJobs,
  getJob,
  deleteJob,
  updateJob,
  createJob,
  showStats,
} from "../controllers/job.controller.js";
import {
  validateJobInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";

router
  .route("/")
  .get(getJobs)
  .post(checkForTestUser, validateJobInput, createJob);

router.route("/stats").get(showStats);

router
  .route("/:id")
  .get(validateIdParam, getJob)
  .delete(checkForTestUser, validateIdParam, deleteJob)
  .patch(checkForTestUser, validateIdParam, validateJobInput, updateJob);

export default router;
