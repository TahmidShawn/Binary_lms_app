import { LuHome } from "react-icons/lu";
import { TbUserEdit } from "react-icons/tb";
import { MdOutlineDashboard } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineFileDone } from "react-icons/ai";
import { SlPeople } from "react-icons/sl";
import { GoGraph } from "react-icons/go";
import { GoBell } from "react-icons/go";
import { FaRegUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";

import { Button } from "@/components/ui/button";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
	const navLinks = (
		<>
			<Link
				to="/"
				className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
			>
				<LuHome className="h-4 w-4" />
				Home
			</Link>
			<Link
				to="/dashboard"
				className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
			>
				<MdOutlineDashboard className="h-4 w-4" />
				Dashboard
			</Link>
			<Link
				to="/dashboard/edit-profile"
				className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
			>
				<TbUserEdit className="h-4 w-4" />
				Edit Profile
			</Link>
			<Link
				to="/dashboard/purchased-courses"
				className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
			>
				<FiShoppingCart className="h-4 w-4" />
				My Purchased Courses
			</Link>
			<Link
				to="/dashboard/published-courses"
				className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
			>
				<AiOutlineFileDone className="h-4 w-4" />
				My Published Courses
			</Link>
			<Link
				to="/dashboard/my-teachers"
				className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
			>
				<SlPeople className="h-4 w-4" />
				My Teachers
			</Link>
			<Link
				to="/dashboard/analytics"
				className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
			>
				<GoGraph className="h-4 w-4" />
				Analytics
			</Link>
		</>
	);
	return (
		<div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
			<div className="hidden border-r bg-muted/40 md:block">
				<div className="flex h-full max-h-screen flex-col gap-2">
					<div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
						<Link href="/" className="flex items-center gap-2 font-semibold">
							<span className="">Binary</span>
						</Link>
						<Button variant="outline" size="icon" className="ml-auto h-8 w-8">
							<GoBell className="h-4 w-4" />
							<span className="sr-only">Toggle notifications</span>
						</Button>
					</div>
					<div className="flex-1">
						<nav className="grid items-start px-2 text-sm font-medium lg:px-4">
							{navLinks}
						</nav>
					</div>
				</div>
			</div>
			<div className="flex flex-col">
				<header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
					<Sheet>
						<SheetTrigger asChild>
							<Button
								variant="outline"
								size="icon"
								className="shrink-0 md:hidden"
							>
								<FiMenu className="h-5 w-5" />
								<span className="sr-only">Toggle navigation menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="left" className="flex flex-col">
							<nav className="grid gap-2 text-lg font-medium">{navLinks}</nav>
						</SheetContent>
					</Sheet>
					<div className="w-full flex-1 ">
						<form className="flex-1">
							<div className="relative">
								<FiSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
								<Input
									type="search"
									placeholder="Search products..."
									className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
								/>
							</div>
						</form>
					</div>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="secondary" size="icon" className="rounded-full">
								<FaRegUserCircle className="h-5 w-5" />
								<span className="sr-only">Toggle user menu</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuLabel>My Account</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Settings</DropdownMenuItem>
							<DropdownMenuItem>Support</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Logout</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</header>
				<main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
					<div className="flex items-center">
						<h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
					</div>
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default Dashboard;
