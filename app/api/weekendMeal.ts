import { instance } from "./instance";

const path = "/weekend-meal";

export const weekendMeal = async (id: string) => {
  return await instance.patch(`${path}/status`, id);
};
