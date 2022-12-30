import axios from "axios";

const axiosHttp = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 3000,
  headers: { "Content-Type": "application/json" },
});

// // Add a request interceptor
// axiosHttp.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

// Add a response interceptor
axiosHttp.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosHttp;
