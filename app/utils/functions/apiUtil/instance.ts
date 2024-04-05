import axios from "axios";
import { getToken, setToken } from "@/utils";
import { refresh } from "./refresh";

export const instance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_BASE_URL,
  timeout: 3000,
});

instance.interceptors.request.use(
  async (res) => {
    const { accessToken } = await getToken();
    if (accessToken && res.url !== "/user/refresh") {
      res.headers["Authorization"] = "Bearer " + accessToken;
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
  async (err) => {
    if (err?.response.status === 401) {
      refresh().then((res) => {
        const { access_token, refresh_token } = res?.data;
        setToken(access_token, refresh_token);
      });
    }
    throw err;
  }
);
