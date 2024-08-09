import { createBrowserRouter } from "react-router-dom";
import Root from "@/layout/root/Root";
import Home from "@/pages/home/home/Home";
import Register from "@/pages/authentication/register/Register";
import Login from "@/pages/authentication/login/Login";
import Error from "@/pages/error/Error";
import ResetPassword from "@/pages/authentication/resetPassword/ResetPassword";
import Dashboard from "@/pages/dashboard/dashboard/Dashboard";
import MyPurchasedCourses from "@/pages/dashboard/students/myPurchasedCourses/MyPurchasedCourses";
import MyTeachers from "@/pages/dashboard/students/myTeachers/MyTeachers";
import Category from "@/pages/category/category/Category";

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
			{
				path: "/category",
				element: <Category />,
			},
		],
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
		children: [
			{
				path: "purchased-courses",
				element: <MyPurchasedCourses />,
			},
			{
				path: "my-teachers",
				element: <MyTeachers />,
			},
		],
	},
]);

export default Routes;
