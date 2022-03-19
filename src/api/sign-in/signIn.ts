import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../services/token.service";
import { useUser } from "../../services/user.context";
import { request } from "../../utils/axios";

export const useSignIn = () => {
  const navigate = useNavigate();
  const { addUser } = useUser();
  const handleSignIn = (data: { email: string; password: string }) => {
    return request({ url: "/signin", method: "post", data });
  };
  return useMutation(handleSignIn, {
    onSuccess: ({ data }) => {
      addUser(data.user);
      navigate("/dashboard");
    },
  });
};
