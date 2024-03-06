import { loginPropType } from "./types";
import { instance } from "./instance";
import { path } from "./path";

export const login = async (data: loginPropType) => {
  return await instance.post(`${path.user}/login`, data);
};

export const simple = async () => {
  return await instance.get(`${path.user}/simple`);
};

export const details = async () => {
  return await instance.get(`${path.user}/details`);
};
