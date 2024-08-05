import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useDataFetch = (endpoint) => {
	const axiosPublic = useAxiosPublic();

	const { data, isLoading, refetch } = useQuery({
		queryKey: [endpoint],
		queryFn: async () => {
			const res = await axiosPublic.get(endpoint);
			return res.data;
		},
	});

	return { data, isLoading, refetch };
};

export default useDataFetch;
