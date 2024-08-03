import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import errorMiddleware from "./middlewares/error.middleware.js";
import ErrorHandler from "./utils/errorHandler.js";

const app = express();

app.use(
	cors({
		origin: process.env.CORS_ORIGIN,
		credentials: true,
	})
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// routes import
import userRouter from "./routes/user.route.js";

// routes declaration
app.use("/api/v1", userRouter);

// catch undefined route
app.use((req, res, next) => {
	next(new ErrorHandler(`Cannot ${req.method} ${req.originalUrl}`, 404));
});
// middleware for errors
app.use(errorMiddleware);

export default app;
