import { Link } from "react-router-dom";
import loginImg from "../../../assets/login.png";
import { HiOutlineMail } from "react-icons/hi";
import { FiEye } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
	return (
		<div className="max-w-screen-lg mx-auto px-2 mt-10">
			<div className="grid lg:grid-cols-2 md:grid-cols-2 items-center gap-4">
				<div className="max-md:order-1 h-screen min-h-full">
					<img
						src={loginImg}
						className="w-full h-full object-cover"
						alt="login-image"
					/>
				</div>

				<form className="max-w-xl w-full p-6 mx-auto">
					<div className="mb-12">
						<h3 className="text-gray-800 text-4xl font-extrabold">Login</h3>
						<p className="text-gray-800 text-sm mt-6">
							Do not have an account
							<Link
								to="/auth/register"
								className="text-blue-600 font-semibold hover:underline ml-1 text-xl whitespace-nowrap"
							>
								Register here
							</Link>
						</p>
					</div>

					{/* Email Field  */}
					<div className="mt-8">
						<label className="text-gray-800 text-sm block mb-2">Email</label>
						<div className="relative flex items-center">
							<input
								name="email"
								type="text"
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
								name="password"
								type="password"
								required
								className="w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
								placeholder="Enter password"
							/>
							<FiEye className="w-[18px] h-[18px] absolute right-2 cursor-pointer" />
							{/* <FiEyeOff className="w-[18px] h-[18px] absolute right-2 cursor-pointer"/> */}
						</div>
					</div>

					<div className="flex flex-wrap items-center justify-between gap-4 mt-6">
						<div className="flex items-center">
							<input
								id="remember-me"
								name="remember-me"
								type="checkbox"
								className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
							/>
							<label
								htmlFor="remember-me"
								className="ml-3 block text-sm text-gray-800"
							>
								Remember me
							</label>
						</div>
						<div>
							<a
								href="jajvascript:void(0);"
								className="text-blue-600 font-semibold text-sm hover:underline"
							>
								Forgot Password?
							</a>
						</div>
					</div>

					<div className="mt-12">
						<button
							type="button"
							className="w-full py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
						>
							Login
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
						<FcGoogle className="text-2xl"/>
						Continue with google
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
