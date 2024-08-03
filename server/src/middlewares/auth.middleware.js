import ErrorHandler from "../utils/errorHandler.js";
import asyncHandler from "./asyncHandler.js";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const isAuthenticatedUser = asyncHandler(async (req, res, next) => {
	const { token } = req.cookies;

	if (!token) {
		throw new ErrorHandler("Please login to access this route", 401);
	}
	console.log(token);
	const decodedData = jwt.verify(token, process.env.JWT_SECRET);

	console.log("decoded", decodedData);
	req.user = await User.findById(decodedData.id);

	next();
});
