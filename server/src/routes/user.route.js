import Router from "express";
import {
	forgotPassword,
	getUserDetails,
	loginUser,
	logout,
	registerUser,
	resetPassword,
	updatePassword,
} from "../controllers/user.controller.js";
import { isAuthenticatedUser } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/me").get(isAuthenticatedUser, getUserDetails);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);

export default router;
