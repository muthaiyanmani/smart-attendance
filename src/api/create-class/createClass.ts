import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import { request } from "../../utils/axios";

export const useClass = () => {
  const navigate = useNavigate();

  const handleCreateClass = (data: {
    name: string;
    teacher: string;
    section: string;
    year: string;
  }) => {
    return request({ url: "/class", method: "post", data });
  };

  return useMutation(handleCreateClass, {
    onSuccess: ({ data }) => {
      navigate("/dashboard/admissions");
    },
  });
};
