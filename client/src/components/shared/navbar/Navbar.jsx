import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTrigger,
} from "@/components/ui/sheet";
import { RiMenu2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
	const navLinks = (
		<>
			<li>Home</li>
			<li>About</li>
			<li>Categories</li>
			<li>Teacher</li>
		</>
	);

	return (
		<section className="sticky top-0 z-50 inset-x-0 py-3 md:py-3 border-b-[1px] bg-white">
			<nav className="max-w-screen-xl mx-auto px-2">
				{/* for sm devices */}
				<div className="inline md:hidden">
					<Sheet>
						<div className="flex justify-between mx-3">
							<SheetTrigger className="text-2xl">
								<RiMenu2Line />
							</SheetTrigger>

							<button className="border-[1px] px-6 py-1 border-black">
								Login
							</button>
						</div>
						<SheetContent>
							<SheetHeader>
								<div>
									<div className="list-none text-center space-y-5 mt-10 text-2xl font-semibold">
										{navLinks}
									</div>
								</div>
							</SheetHeader>
						</SheetContent>
					</Sheet>
				</div>

				{/* for md and lg devices */}
				<div className="hidden md:flex justify-between items-center">
					<div className="flex gap-28 items-center">
						<h1 className="text-2xl font-semibold">Binary</h1>
					</div>
					<div className="flex gap-10">
						<ul className="flex gap-8 items-center">{navLinks}</ul>
					</div>
					<Link
						to="/auth/register"
						className="border-[1px] px-6 py-1 border-black"
					>
						Login
					</Link>
				</div>
			</nav>
		</section>
	);
};

export default Navbar;
