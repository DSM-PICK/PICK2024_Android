import { MovePropType } from "../types";
import { instance } from "../instance";
import { path } from "../path";

export const moveClass = async (data: MovePropType) => {
  return await instance.post(`${path.classRoom}/move`, data);
};

export const returnClass = async () => {
  return await instance.delete(`${path.classRoom}/return`);
};

export const getClass = async () => {
  return await instance.get(`${path.classRoom}/move`);
};
