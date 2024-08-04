import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/root/Root";
import Home from "../pages/home/home/Home";

const Routes = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
		],
	},
]);

export default Routes;
