const sendToken = (user, statusCode, res, message) => {
	const token = user.getJWTToken();

	// options for cookie
	const options = {
		expires: new Date(
			Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
		),
		httpOnly: true,
		sameSite: "None",
		secure: true,
	};
	// extract password from response
	const { password, ...rest } = user._doc;
	res.status(statusCode).cookie("token", token, options).json({
		success: true,
		message,
		user: rest,
	});
};

export default sendToken;
