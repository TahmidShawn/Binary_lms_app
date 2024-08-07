import axios from "axios";
import useAxiosPublic from "./useAxiosPublic";
import { toast } from "sonner";
import useAuthContext from "./useAuthContext";

const useAuth = () => {
	const { setAuthState } = useAuthContext();
	const axiosPublic = useAxiosPublic();

	const login = async (credentials) => {
		try {
			const response = await axios.post("/api/v1/login", credentials);
			setAuthState({
				isAuthenticated: true,
				user: response.data.user,
				loading: true,
			});
		} catch (error) {
			console.error("Login failed", error);
		}
	};

	const logout = async () => {
		try {
			await axios.get("/api/v1/logout");
			setAuthState({
				isAuthenticated: false,
				user: null,
				loading: true,
			});
		} catch (error) {
			console.error("Logout failed", error);
		}
	};

	const registerUser = async (userData, reset) => {
		try {
			const response = await axiosPublic?.post("/api/v1/register", userData);
			setAuthState({
				isAuthenticated: true,
				user: response.data.user,
				loading: true,
			});
			toast.success(response?.data?.message || "Operation successful");
			reset();
		} catch (error) {
			console.error("Registration failed", error);
			toast.error(error.response?.data?.message || "Operation error");
		}
	};

	return { login, logout, registerUser };
};

export default useAuth;
