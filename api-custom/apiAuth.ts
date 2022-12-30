import axiosHttp from "../utils/axiosHttp";

export const apiLogin = () => {
  return axiosHttp.get("/login");
};

export const apiLogout = () => {
  return axiosHttp.get("/logout");
};
