import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: process.env.BACKEND_URL ?? process.env.NEXT_PUBLIC_BACKEND_URL,
});
instance.interceptors.request.use(
  (config) => {
    if (!config.headers["Content-Type"]) {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.data && error.response.data.errors) {
      return Promise.reject(new Error(error.response.data.errors));
    }
    return Promise.reject(error);
  }
);
export default instance;
