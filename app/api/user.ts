import { loginPropType } from "./types";
import { instance } from "./instance";
import { path } from "./path";
import { getToken } from "@/utils";
import axios from "axios";

export const login = async (data: loginPropType) => {
  return await instance.post(`${path.user}/login`, data);
};

export const simple = async () => {
  return await instance.get(`${path.user}/simple`);
};

export const details = async () => {
  return await instance.get(`${path.user}/details`);
};

export const refresh = async () => {
  const { refreshToken } = await getToken();
  return await axios.put(
    `${process.env.EXPO_PUBLIC_BASE_URL}${path.user}/refresh`,
    {},
    {
      headers: {
        "X-Refresh-Token": refreshToken,
      },
    }
  );
};
