import { Router } from "express";

const router = Router();
import { Login, Logout, Register } from "../controllers/auth.controller.js";
import {
  validateLoginInput,
  validateRegisterInput,
} from "../middleware/validationMiddleware.js";

router.post("/register", validateRegisterInput, Register);
router.post("/login", validateLoginInput, Login);
router.get("/logout", Logout);
export default router;
