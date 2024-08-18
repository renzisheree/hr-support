import { Router } from "express";
import upload from "../middleware/multerMiddleware.js";
const router = Router();
import {
  getApplicationStats,
  getCurrentUser,
  updateUser,
} from "../controllers/user.controller.js";
import {
  authenticateUser,
  checkForTestUser,
  authorizePermissions,
} from "../middleware/authMiddleware.js";
import { validateUpdateInput } from "../middleware/validationMiddleware.js";

router.get("/current-user", getCurrentUser);
router.get("/admin/app-stats", [
  authorizePermissions("admin"),
  getApplicationStats,
]);
router.patch(
  "/update-user",
  upload.single("avatar"),
  checkForTestUser,
  validateUpdateInput,
  updateUser
);
export default router;
