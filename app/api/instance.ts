import { getToken } from "@/utils";
import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_BASE_URL,
  timeout: 3000,
});

instance.interceptors.request.use(
  async (res) => {
    const { accessToken, refreshToken } = await getToken();
    if (accessToken && res.url !== "/user/refresh") {
      res.headers["Authorization"] = "Bearer " + accessToken;
    } else if (res.url === "/user/refresh") {
      res.headers["X-Refresh-Token"] = "Bearer" + refreshToken;
    }
    return res;
  },
  (err) => {
    throw err;
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    throw err;
  }
);
