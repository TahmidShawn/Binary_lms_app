import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please enter your name"],
		maxLength: [30, "Name cannot exceed 30 characters"],
		minLength: [4, "Name should have more than 4 characters"],
	},
	email: {
		type: String,
		required: [true, "Please enter your email"],
		unique: true,
		validate: [validator.isEmail, "Please enter a valid email"],
	},
	password: {
		type: String,
		required: [true, "Please enter your password"],
		minLength: [8, "Password should have a minimum of 8 characters"],
		select: false,
	},
	role: {
		type: String,
		enum: ["user", "teacher"],
		default: "user",
	},
	teacherInfo: {
		description: {
			type: String,
			required: function () {
				return this.role === "teacher";
			},
		},
		image: {
			type: String,
			required: function () {
				return this.role === "teacher";
			},
		},
		socialLinks: {
			type: Map,
			of: String,
			required: function () {
				return this.role === "teacher";
			},
		},
		numberOfStudents: {
			type: Number,
			required: function () {
				return this.role === "teacher";
			},
		},
		experience: {
			type: String,
			required: function () {
				return this.role === "teacher";
			},
		},
	},
	resetPasswordToken: String,
	resetPasswordExpire: Date,
});

userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) {
		next();
	}

	this.password = await bcrypt.hash(this.password, 10);
});

// JWT token generation
userSchema.methods.getJWTToken = function () {
	return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRE,
	});
};

// Compare password
userSchema.methods.comparePassword = async function (password) {
	return await bcrypt.compare(password, this.password);
};

// Generating reset password token
userSchema.methods.getResetPasswordToken = function () {
	const resetToken = crypto.randomBytes(20).toString("hex");

	this.resetPasswordToken = crypto
		.createHash("sha256")
		.update(resetToken)
		.digest("hex");

	this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

	return resetToken;
};

export default mongoose.model("User", userSchema);
