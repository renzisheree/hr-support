import { Router } from "express";

const router = Router();
import { Login, Register } from "../controllers/user.controller.js";
import {
  validateLoginInput,
  validateRegisterInput,
} from "../middleware/validationMiddleware.js";

router.post("/register", validateRegisterInput, Register);
router.post("/login", validateLoginInput, Login);

export default router;
