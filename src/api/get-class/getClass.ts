import { useQuery } from "react-query";
import { request } from "src/utils/axios";

export const useClassList = () => {
  const fetchClass = () => {
    return request({ url: "/class", method: "get" });
  };
  return useQuery("get-class-list", fetchClass, {
    staleTime: 50000,
    refetchOnWindowFocus: true,
    select: (data) => {
      const result = data?.data.data
        ? data?.data?.data.map((item: any) => item)
        : [];
      return result;
    },
  });
};
