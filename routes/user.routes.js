import { Router } from "express";

const router = Router();
import { Login, Register } from "../controllers/user.controller.js";
import { validateRegisterInput } from "../middleware/validationMiddleware.js";

router.post("/register", validateRegisterInput, Register);
router.post("/login", Login);

export default router;
