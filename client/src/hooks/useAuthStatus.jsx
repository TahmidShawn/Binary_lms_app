import { useState, useEffect } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useAuthStatus = () => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const axiosPublic = useAxiosPublic();

	useEffect(() => {
		const fetchAuthStatus = async () => {
			try {
				const response = await axiosPublic.get("/api/v1/me", {
					withCredentials: true,
				});
				console.log("Response data:", response.data);
				if (response.data.success) {
					setUser(response.data.user);
				} else {
					setUser(null);
				}
			} catch (error) {
				setUser(null);
			} finally {
				setLoading(false);
			}
		};

		fetchAuthStatus();
	}, [axiosPublic]);

	return { user, loading };
};

export default useAuthStatus;
