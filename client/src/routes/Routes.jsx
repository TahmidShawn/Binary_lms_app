import { createBrowserRouter } from "react-router-dom";
import Root from "@/layout/root/Root";
import Home from "@/pages/home/home/Home";
import Register from "@/pages/authentication/register/Register";
import Login from "@/pages/authentication/login/Login";
import Error from "@/pages/error/Error";
import ResetPassword from "@/pages/authentication/resetPassword/ResetPassword";

const Routes = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/auth/register",
				element: <Register />,
			},
			{
				path: "/auth/login",
				element: <Login />,
			},
			{
				path: "/password/reset/:token",
				element: <ResetPassword />,
			},
		],
	},
]);

export default Routes;
