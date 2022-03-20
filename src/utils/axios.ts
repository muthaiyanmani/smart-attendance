import axios from "axios";
import { removeUser } from "src/services/token.service";
import { BASE_URL } from "../config/settings";

const client = axios.create({ baseURL: BASE_URL, withCredentials: true });

export const request = ({ ...options }) => {
  //  const token = localStorage.getItem("user") ?? { token: "" };
  // client.defaults.headers.common.Authorization = `Bearer ${user}`;
  const onSuccess = (response: any) => response;
  const onError = (error: any) => {
    removeUser();
    window.location.href = "/";
  };
  return client(options).then(onSuccess).catch(onError);
};
