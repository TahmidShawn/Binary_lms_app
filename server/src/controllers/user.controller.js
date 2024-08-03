import User from "../models/user.model.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import ErrorHandler from "../utils/errorHandler.js";
import sendToken from "../utils/sendToken.js";
import sendEmail from "../utils/sendEmail.js";

// Register User
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

// Login User
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

// Logout User
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

// Forgot Password
export const forgotPassword = asyncHandler(async (req, res, next) => {
	const user = await User.findOne({ email: req.body.email });
	if (!user) {
		throw new ErrorHandler("Invalid Email or password", 401);
	}
	// get reset password token
	const resetToken = user.getResetPasswordToken();
	await user.save({ validateBeforeSave: false });

	const resetPasswordUrl = `${req.protocol}://${req.get(
		"host"
	)}/api/v1/password/reset/${resetToken}`;

	const message = `your password reset token is :- \n\n ${resetPasswordUrl} \n\n If you have not requested this email then , please ignore it`;

	try {
		await sendEmail({
			email: user.email,
			subject: "Binary website password recovery",
			message,
		});

		res.status(200).json({
			success: true,
			message: `Email send to ${user.email} successfully`,
		});
	} catch (error) {
		user.resetPasswordToken = undefined;
		user.resetPasswordExpire = undefined;

		await user.save({ validateBeforeSave: false });
		throw new ErrorHandler(error.message, 500);
	}
});
