import { instance } from "../instance";
import { path } from "../path";

export const weekendMeal = async (id: string) => {
  return await instance.patch(`${path.weekendMeal}/my-status?status=${id}`);
};

export const weekendMealMy = async () => {
  return await instance.get(`${path.weekendMeal}/my`);
};
