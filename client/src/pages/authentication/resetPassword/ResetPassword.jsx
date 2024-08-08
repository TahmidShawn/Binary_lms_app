import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "@/hooks/useAuth"; // update the import path if needed

const ResetPassword = () => {
	const { token } = useParams();
	const navigate = useNavigate();
	const { resetPassword } = useAuth();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		const success = await resetPassword(token, data);
		if (success) {
			navigate("/auth/login");
		}
	};

	const password = watch("password");

	return (
		<div className="max-w-sm mx-auto mt-10">
			<h2 className="text-2xl font-bold mb-10">Reset Password</h2>
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
				<div>
					<label
						htmlFor="password"
						className="text-gray-800 text-sm block mb-2"
					>
						New Password
					</label>
					<input
						type="password"
						id="password"
						{...register("password", {
							required: "Password is required",
							minLength: {
								value: 8,
								message: "Password must be at least 8 characters",
							},
						})}
						className="w-full text-sm text-gray-800 border border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
					/>
					{errors.password && (
						<p className="text-red-500 text-xs">{errors.password.message}</p>
					)}
				</div>
				<div>
					<label
						htmlFor="confirmPassword"
						className="text-gray-800 text-sm block mb-2"
					>
						Confirm Password
					</label>
					<input
						type="password"
						id="confirmPassword"
						{...register("confirmPassword", {
							required: "Please confirm your password",
							validate: (value) =>
								value === password || "Passwords do not match",
						})}
						className="w-full text-sm text-gray-800 border border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
					/>
					{errors.confirmPassword && (
						<p className="text-red-500 text-xs">
							{errors.confirmPassword.message}
						</p>
					)}
				</div>
				<button
					type="submit"
					className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700"
				>
					Reset Password
				</button>
			</form>
		</div>
	);
};

export default ResetPassword;
