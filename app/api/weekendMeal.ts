import { instance } from "./instance";

const path = "/weekend-meal";

export const weekendMeal = async (id: string) => {
  return await instance.patch(`${path}/status?status=${id}`);
};

export const weekendMealMy = async () => {
  return await instance.get(`${path}/my`);
};
