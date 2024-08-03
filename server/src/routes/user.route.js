import Router from "express";
import {
	forgotPassword,
	loginUser,
	logout,
	registerUser,
} from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/password/forgot").post(forgotPassword);

export default router;
