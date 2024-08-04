import Navbar from "@/components/shared/navbar/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
	return (
		<main className="px-3">
			<Navbar />
			<Outlet />
		</main>
	);
};

export default Root;
