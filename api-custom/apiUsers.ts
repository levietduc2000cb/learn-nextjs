import axiosHttp from "../utils/axiosHttp";

export const apiGetUsers = () => {
  return axiosHttp.get("/users");
};
