import { instance } from "../instance";
import { OutPropType } from "../types";
import { path } from "../path";

export const applyOut = async (data: OutPropType) => {
  return await instance.post(`${path.out}/`, data);
};

export const getOut = async () => {
  return await instance.get(`${path.out}/my`);
};
