import { Link } from "react-router-dom";
import loginImg from "../../../assets/login.png";
import { HiOutlineMail } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import useAuth from "@/hooks/useAuth";
import usePasswordToggle from "@/hooks/usePasswordToggle";
import ForgotPassword from "../forgotPassword/ForgotPassword";

const Login = () => {
	const { loginUser, loading } = useAuth();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const onSubmit = async (data) => {
		await loginUser(data, reset);
	};

	const { passwordInputType, PasswordToggleIcon, togglePasswordVisibility } =
		usePasswordToggle();

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

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="max-w-xl w-full p-6 mx-auto"
				>
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
								{...register("email", {
									required: "Email is required",
									pattern: {
										value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
										message: "Email is invalid",
									},
								})}
								type="text"
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
								type={passwordInputType}
								className="w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
								placeholder="Enter password"
							/>
							<PasswordToggleIcon
								className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
								onClick={togglePasswordVisibility}
							/>
						</div>
						{errors.password && (
							<p className="text-red-600 text-sm mt-1">
								{errors.password.message}
							</p>
						)}
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
						{/* <div>
							<a
								href="#"
								className="text-blue-600 font-semibold text-sm hover:underline"
							>
								Forgot Password?
							</a>
						</div> */}
						<ForgotPassword />
					</div>

					<div className="mt-12">
						<button
							type="submit"
							className="w-full py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
						>
							{loading ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="18px"
									fill="#fff"
									className="mr-2 inline animate-spin"
									viewBox="0 0 26.349 26.35"
								>
									<circle
										cx="13.792"
										cy="3.082"
										r="3.082"
										data-original="#000000"
									/>
									<circle
										cx="13.792"
										cy="24.501"
										r="1.849"
										data-original="#000000"
									/>
									<circle
										cx="6.219"
										cy="6.218"
										r="2.774"
										data-original="#000000"
									/>
									<circle
										cx="21.365"
										cy="21.363"
										r="1.541"
										data-original="#000000"
									/>
									<circle
										cx="3.082"
										cy="13.792"
										r="2.465"
										data-original="#000000"
									/>
									<circle
										cx="24.501"
										cy="13.791"
										r="1.232"
										data-original="#000000"
									/>
									<path
										d="M4.694 19.84a2.155 2.155 0 0 0 0 3.05 2.155 2.155 0 0 0 3.05 0 2.155 2.155 0 0 0 0-3.05 2.146 2.146 0 0 0-3.05 0z"
										data-original="#000000"
									/>
									<circle
										cx="21.364"
										cy="6.218"
										r=".924"
										data-original="#000000"
									/>
								</svg>
							) : (
								""
							)}
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
						<FcGoogle className="text-2xl" />
						Continue with google
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
