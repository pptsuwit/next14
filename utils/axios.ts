import axios from "axios";

import { deleteCookie, getCookie } from "cookies-next";

axios.defaults.headers.common["accept"] = "application/json";
// axios.defaults.headers.common["authorization"] = `Bearer ${localStorage.getItem(process.env.TOKEN_NAME as string) || ""}`;
axios.defaults.headers.common["authorization"] = `Bearer ${getCookie(process.env.TOKEN_NAME as string) || ""}`;

const httpService = axios.create({
  baseURL: `${process.env.API_URL}${process.env.API_URL_VERSION}`,
  headers: {
    accept: "application/json",
  },
});
httpService.interceptors.response.use(
  (response) => {
    return response?.data;
  },
  (error) => {
    console.log(error);
    if (error.code === "ERR_NETWORK") return Promise.reject(error.message);
    const { response } = error;
    const errorMessage = response?.data?.message || response?.data;
    if (axios.isAxiosError(error)) {
      if (response?.status === 401) {
        localStorage.removeItem(process.env.TOKEN_NAME as string);
        deleteCookie(process.env.TOKEN_NAME as string);
      }
    }
    return Promise.reject(errorMessage);
  }
);

export default httpService;
