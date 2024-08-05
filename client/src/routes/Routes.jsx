import { createBrowserRouter } from "react-router-dom";
import Root from "@/layout/root/Root";
import Home from "@/pages/home/home/Home";
import Register from "@/pages/authentication/register/Register";
import Login from "@/pages/authentication/login/Login";

const Routes = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
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
		],
	},
]);

export default Routes;
