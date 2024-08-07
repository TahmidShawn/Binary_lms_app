import { Link } from "react-router-dom";
import registerImg from "../../../assets/register.png";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FiEye } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
// import useFormSubmit from "@/hooks/useFormSubmit";
import useAuth from "@/hooks/useAuth";

const Register = () => {
	const { registerUser } = useAuth();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		await registerUser(data, reset);
	};

	return (
		<div className="max-w-screen-lg mx-auto px-2 mt-10">
			<div className="grid lg:grid-cols-2 md:grid-cols-2 items-center gap-4">
				<div className="max-md:order-1 h-screen min-h-full">
					<img
						src={registerImg}
						className="w-full h-full object-cover"
						alt="login-image"
					/>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="max-w-xl w-full p-6 mx-auto"
				>
					<div className="mb-12">
						<h3 className="text-gray-800 text-4xl font-extrabold">Register</h3>
						<p className="text-gray-800 text-sm mt-6">
							Already have an account
							<Link
								to="/auth/login"
								className="text-blue-600 font-semibold hover:underline ml-1 text-xl whitespace-nowrap"
							>
								Login here
							</Link>
						</p>
					</div>

					{/* Name Field */}
					<div>
						<label className="text-gray-800 text-sm block mb-2">Name</label>
						<div className="relative flex items-center">
							<input
								{...register("name", { required: "Name is required" })}
								type="text"
								className="w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
								placeholder="Enter your name here"
							/>
							<FaRegUser className="w-[18px] h-[18px] absolute right-2" />
						</div>
						{errors.name && (
							<p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
						)}
					</div>
					{/* Email Field  */}
					<div className="mt-8">
						<label className="text-gray-800 text-sm block mb-2">Email</label>
						<div className="relative flex items-center">
							<input
								{...register("email", {
									required: "Email is required",
									pattern: {
										value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
										message: "Email is invalid",
									},
								})}
								type="email"
								className="w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
								placeholder="Enter email"
							/>
							<HiOutlineMail className="w-[18px] h-[18px] absolute right-2" />
						</div>
						{errors.email && (
							<p className="text-red-600 text-sm mt-1">
								{errors.email.message}
							</p>
						)}
					</div>
					{/* Password Field */}
					<div className="mt-8">
						<label className="text-gray-800 text-sm block mb-2">Password</label>
						<div className="relative flex items-center">
							<input
								{...register("password", {
									required: "Password is required",
									minLength: {
										value: 8,
										message: "Password must be at least 8 characters long",
									},
								})}
								type="password"
								className="w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
								placeholder="Enter password"
							/>
							<FiEye className="w-[18px] h-[18px] absolute right-2 cursor-pointer" />
							{/* <FiEyeOff className="w-[18px] h-[18px] absolute right-2 cursor-pointer"/> */}
						</div>
						{errors.password && (
							<p className="text-red-600 text-sm mt-1">
								{errors.password.message}
							</p>
						)}
					</div>

					<div className="mt-12">
						<button
							type="submit"
							className="w-full py-2.5 px-4 text-sm tracking-wide rounded-md bg-blue-600 hover:bg-blue-700 text-white focus:outline-none"
						>
							Register
						</button>
					</div>

					<div className="my-6 flex items-center gap-4">
						<hr className="w-full border-gray-300" />
						<p className="text-sm text-gray-800 text-center">or</p>
						<hr className="w-full border-gray-300" />
					</div>

					<button
						type="button"
						className="w-full flex items-center justify-center gap-4 py-2.5 px-4 text-sm tracking-wide text-gray-800 border border-gray-300 rounded-md bg-transparent hover:bg-gray-50 focus:outline-none"
					>
						<FcGoogle className="text-2xl" />
						Continue with Google
					</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
