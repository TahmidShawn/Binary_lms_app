import { useContext, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { toast } from "sonner";
import { AuthContext } from "@/provider/AuthProvider";

const useAuth = () => {
	const axiosPublic = useAxiosPublic();
	const [loading, setLoading] = useState(false);

	const {
		setAuthState,
		authState: { isAuthenticated, user },
	} = useContext(AuthContext);

	// register user
	const registerUser = async (userData, reset) => {
		setLoading(true);
		try {
			const response = await axiosPublic?.post("/api/v1/register", userData);
			setAuthState({
				isAuthenticated: true,
				user: response.data.user,
			});
			toast.success(response?.data?.message || "Operation successful");
			reset();
		} catch (error) {
			toast.error(error.response?.data?.message || "Operation error");
		} finally {
			setLoading(false);
		}
	};

	// login user
	const loginUser = async (credentials) => {
		setLoading(true);
		try {
			const response = await axiosPublic.post("/api/v1/login", credentials);
			setAuthState({
				isAuthenticated: true,
				user: response.data.user,
			});
		} catch (error) {
			toast.error(error.response?.data?.message || "Operation error");
		} finally {
			setLoading(false);
		}
	};

	// logout user
	const logoutUser = async () => {
		setLoading(true);
		try {
			await axiosPublic.get("/api/v1/logout");
			setAuthState({
				isAuthenticated: false,
				user: null,
			});
		} catch (error) {
			toast.error(error.response?.data?.message || "Operation error");
		} finally {
			setLoading(false);
		}
	};

	return {
		isAuthenticated,
		user,
		loading,
		registerUser,
		loginUser,
		logoutUser,
	};
};

export default useAuth;
