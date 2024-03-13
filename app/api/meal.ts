import { instance } from "./instance";
import { path } from "./path";

export const mealAtDate = async (date: {}) => {
  const _date = Object.values(date)
    .map((i) => i.toString().padStart(2, "0"))
    .join("-");

  return await instance.get(`${path.meal}/date?date=${_date}`);
};
