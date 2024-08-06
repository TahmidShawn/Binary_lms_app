import { Link } from "react-router-dom";
import registerImg from "../../../assets/register.png";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FiEye } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useState } from "react";
import { toast } from "sonner";

const Register = () => {
	const { register, handleSubmit, reset } = useForm();
	const axiosPublic = useAxiosPublic();

	const [loading, setLoading] = useState(false);

	const onSubmit = async (data) => {
		setLoading(true);
		try {
			const response = await axiosPublic.post("/api/v1/register", data);
			const successMessage =
				response?.data?.message || "Registration successful";
			toast.success(successMessage);
			reset();
		} catch (error) {
			const errorMessage =
				error.response?.data?.message || "Registration error";
			toast.error(errorMessage);
		} finally {
			setLoading(false);
		}
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
								{...register("name")}
								type="text"
								required
								className="w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
								placeholder="Enter your name here"
							/>
							<FaRegUser className="w-[18px] h-[18px] absolute right-2" />
						</div>
					</div>
					{/* Email Field  */}
					<div className="mt-8">
						<label className="text-gray-800 text-sm block mb-2">Email</label>
						<div className="relative flex items-center">
							<input
								{...register("email")}
								type="email"
								required
								className="w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
								placeholder="Enter email"
							/>
							<HiOutlineMail className="w-[18px] h-[18px] absolute right-2" />
						</div>
					</div>
					{/* Password Field */}
					<div className="mt-8">
						<label className="text-gray-800 text-sm block mb-2">Password</label>
						<div className="relative flex items-center">
							<input
								{...register("password")}
								type="password"
								required
								className="w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
								placeholder="Enter password"
							/>
							<FiEye className="w-[18px] h-[18px] absolute right-2 cursor-pointer" />
							{/* <FiEyeOff className="w-[18px] h-[18px] absolute right-2 cursor-pointer"/> */}
						</div>
					</div>

					<div className="mt-12">
						{loading ? (
							<button
								type="submit"
								disabled={loading}
								className="w-full py-2.5 px-4 text-sm tracking-wide rounded-md  bg-blue-600 hover:bg-blue-700 text-white focus:outline-none"
							>
								<span className="flex justify-center items-center gap-3">
									<svg
										aria-hidden="true"
										className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
										viewBox="0 0 100 101"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
											fill="currentColor"
										/>
										<path
											d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
											fill="currentFill"
										/>
									</svg>
									Registering
								</span>
							</button>
						) : (
							<button
								type="submit"
								className="w-full py-2.5 px-4 text-sm tracking-wide rounded-md  bg-blue-600 hover:bg-blue-700 text-white focus:outline-none"
							>
								Register
							</button>
						)}
					</div>

					<div className="my-6 flex items-center gap-4">
						<hr className="w-full border-gray-300" />
						<p className="text-sm text-gray-800 text-center">or</p>
						<hr className="w-full border-gray-300" />
					</div>

					<button
						type="submit"
						className="w-full flex items-center justify-center gap-4 py-2.5 px-4 text-sm tracking-wide text-gray-800 border border-gray-300 rounded-md bg-transparent hover:bg-gray-50 focus:outline-none"
					>
						<FcGoogle className="text-2xl" />
						Continue with google
					</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
