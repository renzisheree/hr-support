import { Router } from "express";

const router = Router();
import {
  getJobs,
  getJob,
  deleteJob,
  updateJob,
  createJob,
} from "../controllers/job.controller.js";
import {
  validateJobInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";

router.route("/").get(getJobs).post(validateJobInput, createJob);

router
  .route("/:id")
  .get(validateIdParam, getJob)
  .delete(validateIdParam, deleteJob)
  .patch(validateIdParam, validateJobInput, updateJob);

export default router;
