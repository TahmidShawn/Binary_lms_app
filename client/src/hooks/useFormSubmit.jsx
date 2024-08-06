import { useState } from "react";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { toast } from "sonner";

const useFormSubmit = (endpoint) => {
	const [loading, setLoading] = useState(false);
	const axiosPublic = useAxiosPublic();

	const submitForm = async (data, reset) => {
		setLoading(true);
		try {
			const response = await axiosPublic?.post(endpoint, data);
			toast.success(response?.data?.message || "Operation successful");
			if (reset) reset();
		} catch (error) {
			toast.error(error.response?.data?.message || "Operation error");
		} finally {
			setLoading(false);
		}
	};

	return { submitForm, loading };
};

export default useFormSubmit;
