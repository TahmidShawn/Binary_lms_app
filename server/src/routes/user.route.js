import Router from "express";
import {
	forgotPassword,
	getUserDetails,
	loginUser,
	logout,
	registerUser,
	resetPassword,
} from "../controllers/user.controller.js";
import { isAuthenticatedUser } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/me").get(isAuthenticatedUser, getUserDetails);

export default router;
