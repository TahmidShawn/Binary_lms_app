import { useContext } from "react";
import { AuthContext } from "@/provider/AuthProvider";

const useAuthContext = () => {
	const { authState, setAuthState } = useContext(AuthContext);
	const { isAuthenticated, user, loading } = authState;

	return { isAuthenticated, user, loading, setAuthState, authState };
};

export default useAuthContext;
