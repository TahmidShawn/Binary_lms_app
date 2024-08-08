import { useForm } from "react-hook-form";
import useAuth from "@/hooks/useAuth";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

const ForgotPassword = () => {
	const { forgotPassword, loading } = useAuth();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit = async (data) => {
		await forgotPassword(data.email);
		reset();
	};

	return (
		<div>
			<Dialog>
				<DialogTrigger>
					<button className="text-blue-600 font-semibold text-sm hover:underline">
						Forgot Password?
					</button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Forgot Password?</DialogTitle>
						<DialogDescription>
							Please enter your email address to reset your password.
						</DialogDescription>
						<form onSubmit={handleSubmit(onSubmit)} className="mt-4">
							<div className="mt-4">
								<label className="text-gray-800 text-sm block mb-2">
									Email
								</label>
								<input
									{...register("email", {
										required: "Email is required",
										pattern: {
											value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
											message: "Email is invalid",
										},
									})}
									type="email"
									className="w-full text-sm text-gray-800 border border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
									placeholder="Enter your email"
								/>
								{errors.email && (
									<p className="text-red-600 text-sm mt-1">
										{errors.email.message}
									</p>
								)}
							</div>
							<button
								type="submit"
								className="w-full py-2.5 px-4 mt-4 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
								disabled={loading}
							>
								{loading ? "Sending..." : "Send Reset Link"}
							</button>
						</form>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default ForgotPassword;
