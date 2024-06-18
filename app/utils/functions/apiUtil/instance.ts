import * as Sentry from "@sentry/react-native";
import axios from "axios";
import { getToken } from "@/utils";

export const instance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_BASE_URL,
  timeout: 3000,
});

export const loginInstance = axios.create({
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
    Sentry.captureException(err);
    throw err;
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    throw err.response;
  }
);
