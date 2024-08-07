/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import useAxiosPublic from "@/hooks/useAxiosPublic";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const axiosPublic = useAxiosPublic();
	const [authState, setAuthState] = useState({
		isAuthenticated: false,
		user: null,
		loading: false,
	});

	const checkAuthStatus = async () => {
		try {
			const response = await axiosPublic.get("/api/v1/me");
			setAuthState({
				isAuthenticated: true,
				user: response.data.user,
				loading: true,
			});
		} catch (error) {
			setAuthState({
				isAuthenticated: false,
				user: null,
				loading: false,
			});
		}
	};

	useEffect(() => {
		checkAuthStatus();
	}, []);

	return (
		<AuthContext.Provider value={{ authState, setAuthState }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
