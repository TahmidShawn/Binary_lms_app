import Navbar from "@/components/shared/navbar/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
	return (
		<main>
			<Navbar />
			<Outlet />
		</main>
	);
};

export default Root;
