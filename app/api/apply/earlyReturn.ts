import { ReturnPropType } from "../types";
import { instance } from "../instance";
import { path } from "../path";

export const applyReturn = async (data: ReturnPropType) => {
  return await instance.post(`${path.earlyReturn}/create`, data);
};

export const getReturn = async () => {
  return await instance.get(`${path.earlyReturn}/my`);
};
