import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTrigger,
} from "@/components/ui/sheet";
import { RiMenu2Line } from "react-icons/ri";

const Navbar = () => {
	const navLinks = (
		<>
			<li>Link 1</li>
			<li>Link 2</li>
			<li>Link 3</li>
			<li>Link 4</li>
		</>
	);
	const navSearch = (
		<>
			<input
				type="email"
				placeholder="Search Something..."
				className=" outline-none bg-white text-gray-600 text-sm px-4 py-2 w-full md:w-[200px] lg:w-[300px]"
			/>
			<button
				type="button"
				className="flex items-center justify-center bg-[#2d3024] px-5"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 192.904 192.904"
					width="16px"
					className="fill-white"
				>
					<path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
				</svg>
			</button>
		</>
	);
	return (
		<section className="sticky top-0 z-50 inset-x-0 py-3 md:py-3 border-b-[1px] bg-white">
			<nav className="max-w-screen-xl mx-auto">
				{/* for sm devices */}
				<div className="inline md:hidden">
					<Sheet>
						<div className="flex justify-between mx-3">
							<SheetTrigger className="text-2xl">
								<RiMenu2Line />
							</SheetTrigger>

							<div className="flex border-[1px] border-[#292b2e] overflow-hidden">
								{navSearch}
							</div>
							<button className="border-[1px] px-6 border-black">Login</button>
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
						<h1>Logo</h1>
					</div>
					<div className="flex gap-10">
						<ul className="flex gap-8 items-center">{navLinks}</ul>
						<div className="flex border-[1px] border-[#292b2e] overflow-hidden">
							{navSearch}
						</div>
					</div>
					<button className="border-[1px] px-6 py-1 border-black">Login</button>
				</div>
			</nav>
		</section>
	);
};

export default Navbar;
