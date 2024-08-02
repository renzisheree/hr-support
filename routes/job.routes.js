import { Router } from "express";

const router = Router();
import {
  getJobs,
  getJob,
  deleteJob,
  updateJob,
  createJob,
} from "../controllers/job.controller.js";
import { validateJobInput } from "../middleware/validationMiddleware.js";

router.route("/").get(getJobs).post(validateJobInput, createJob);

router
  .route("/:id")
  .get(getJob)
  .delete(deleteJob)
  .patch(validateJobInput, updateJob);

export default router;
