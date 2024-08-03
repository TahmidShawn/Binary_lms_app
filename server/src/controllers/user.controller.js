import User from "../models/user.model.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import ErrorHandler from "../utils/errorHandler.js";
import sendToken from "../utils/sendToken.js";
import sendEmail from "../utils/sendEmail.js";
import crypto from "crypto";

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

// reset password

export const resetPassword = asyncHandler(async (req, res, next) => {
	const resetPasswordToken = crypto
		.createHash("sha256")
		.update(req.params.token)
		.digest("hex");
	const user = await User.findOne({
		resetPasswordToken,
		resetPasswordExpire: { $gt: Date.now() },
	});
	if (!user) {
		throw new ErrorHandler(
			"Reset password token is invalid or has been expired",
			400
		);
	}
	if (req.body.password !== req.body.confirmPassword) {
		throw new ErrorHandler("Password does not match", 400);
	}
	user.password = req.body.password;
	user.resetPasswordToken = undefined;
	user.resetPasswordExpire = undefined;

	await user.save();
	sendToken(user, 200, res, "Password reset successful. You are now logged in");
});

// get get User Details

export const getUserDetails = asyncHandler(async (req, res, next) => {
	const user = await User.findById(req.user.id);
	sendToken(user, 200, res, "User found");
});

// Update user password

export const updatePassword = asyncHandler(async (req, res, next) => {
	const user = await User.findById(req.user.id).select("+password");

	const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

	if (!isPasswordMatched) {
		throw new ErrorHandler("Old password is incorrect", 401);
	}

	if (req.body.newPassword !== req.body.confirmPassword) {
		throw new ErrorHandler("password does not matched", 401);
	}

	user.password = req.body.newPassword;
	await user.save();

	sendToken(user, 200, res, "Password update successfully");
});

// Update user Profile

export const updateProfile = asyncHandler(async (req, res, next) => {
	const {
		name,
		role,
		description,
		image,
		socialLinks,
		numberOfStudents,
		experience,
	} = req.body;

	// Validate the role
	if (role && role !== "user" && role !== "teacher") {
		throw new ErrorHandler("Invalid role.", 400);
	}

	const newUserData = {
		name,
	};

	if (role === "teacher") {
		newUserData.role = "teacher";
		newUserData.teacherInfo = {
			description,
			image,
			socialLinks,
			numberOfStudents,
			experience,
		};
	}

	const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
		new: true,
		runValidators: true,
		useFindAndModify: false,
	});

	if (!user) {
		return next(new ErrorHandler("User not found", 404));
	}

	res.status(200).json({
		success: true,
		message: "User profile updated successfully",
		user,
	});
});

// get all User -- admin
export const getAllUser = asyncHandler(async (req, res) => {
	const users = await User.find();
	res.status(200).json({
		success: true,
		users,
	});
});

// get single User -- admin
export const getSingleUser = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id);
	if (!user) {
		throw new ErrorHandler(`user does not exist with id${req.params.id}`, 404);
	}
	res.status(200).json({
		success: true,
		user,
	});
});

// Update user Role -- admin

export const updateUserRole = asyncHandler(async (req, res, next) => {
	const newUserData = {
		name: req.body.name,
		email: req.body.email,
		role: req.body.role,
	};
	// will add avatar details later

	const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
		new: true,
		runValidators: true,
		useFindAndModify: false,
	});

	res.status(200).json({
		success: true,
		user,
	});
});

// Delete a user -- admin

export const deleteUser = asyncHandler(async (req, res, next) => {
	const user = await User.findById(req.params.id);
	// we will remove avatar
	if (!user) {
		throw new ErrorHandler(`user does not exist with id${req.params.id}`, 404);
	}
	await user.deleteOne();
	res.status(200).json({
		success: true,
		message: "user delete successfully",
	});
});
