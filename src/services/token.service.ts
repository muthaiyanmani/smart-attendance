import { User } from "./token.types";

const getUser = (): User | null => {
  const user =
    window.localStorage.getItem("user") ??
    JSON.parse(window.localStorage.getItem("user") ?? "{}");
  if (user) {
    return user;
  }
  return null;
};

const setUser = (user: User): void => {
  window.localStorage.setItem("user", JSON.stringify(user));
};

const removeUser = (): void => {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem("user");
  }
};

export { getUser, setUser, removeUser };
