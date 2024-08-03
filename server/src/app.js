import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import errorMiddleware from "./middlewares/error.js";

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
app.use("/api/v1/users", userRouter);

// middleware for errors
app.use(errorMiddleware);

export default app;
