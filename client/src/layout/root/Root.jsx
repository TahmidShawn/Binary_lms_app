import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

const Root = () => {
	return (
		<main>
			<Toaster position="bottom-center" richColors />
			<Navbar />
			<Outlet />
			<Footer />
		</main>
	);
};

export default Root;
