import User from "../models/user.model.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import ErrorHandler from "../utils/errorHandler.js";
import sendToken from "../utils/sendToken.js";

export const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;
	// Check if user already exists
	const existedUser = await User.findOne({ email });
	if (existedUser) {
		throw new ErrorHandler(
			"An account with this email already exists. Please use a different email.",
			409
		);
	}
	const user = await User.create({
		name,
		email,
		password,
	});
	sendToken(user, 201, res, "Registration successful. You are now logged in.");
});
