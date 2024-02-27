import { getToken } from "@/utils/token";
import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_BASE_URL,
  timeout: 3000,
});

instance.interceptors.request.use(
  async (res) => {
    const { accessToken } = await getToken();
    if (accessToken) {
      res.headers["Authorization"] = "Bearer " + accessToken;
    }
    return res;
  },
  (err) => {
    return err;
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
