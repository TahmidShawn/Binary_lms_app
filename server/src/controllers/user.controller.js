import User from "../models/user.model.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import ErrorHandler from "../utils/errorHandler.js";
import sendToken from "../utils/sendToken.js";

export const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;
	if (!email || !password || !name) {
		throw new ErrorHandler("Please Enter Valid information", 400);
	}
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

export const loginUser = asyncHandler(async (req, res, next) => {
	const { email, password } = req.body;
	// checking information
	if (!email || !password) {
		throw new ErrorHandler("Please Enter Email & password", 400);
	}

	const user = await User.findOne({ email }).select("+password");

	if (!user) {
		throw new ErrorHandler("Invalid Email or password", 401);
	}
	const isPasswordMatched = await user.comparePassword(password);

	if (!isPasswordMatched) {
		throw new ErrorHandler("Invalid Email or password", 401);
	}
	sendToken(user, 200, res, "Login successful. You are now logged in.");
});

export const logout = asyncHandler(async (req, res, next) => {
	res.cookie("token", null, {
		expires: new Date(Date.now()),
		httpOnly: true,
	});

	res.status(200).json({
		success: true,
		message: "Logged Out successfully",
	});
});
