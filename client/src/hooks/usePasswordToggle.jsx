import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const usePasswordToggle = () => {
	const [visible, setVisible] = useState(false);

	const PasswordToggleIcon = visible ? FiEyeOff : FiEye;

	const passwordInputType = visible ? "text" : "password";

	const togglePasswordVisibility = () => {
		setVisible(!visible);
	};

	return { passwordInputType, PasswordToggleIcon, togglePasswordVisibility };
};

export default usePasswordToggle;
