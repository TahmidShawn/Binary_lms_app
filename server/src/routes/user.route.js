import Router from "express";
import {
	deleteUser,
	forgotPassword,
	getAllUser,
	getSingleUser,
	getUserDetails,
	loginUser,
	logout,
	registerUser,
	resetPassword,
	updatePassword,
	updateProfile,
	updateUserRole,
} from "../controllers/user.controller.js";
import {
	authorizeRoles,
	isAuthenticatedUser,
} from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/me").get(isAuthenticatedUser, getUserDetails);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);
router.route("/me/update").put(isAuthenticatedUser, updateProfile);
router
	.route("/admin/users")
	.get(isAuthenticatedUser, authorizeRoles("admin"), getAllUser);
router
	.route("/admin/user/:id")
	.get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUser)
	.put(isAuthenticatedUser, authorizeRoles("admin"), updateUserRole)
	.delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);

export default router;
