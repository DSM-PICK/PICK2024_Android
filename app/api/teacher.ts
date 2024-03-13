import { instance } from "./instance";
import { path } from "./path";
import { DatePropType } from "./types";

export const today = async (date: {}) => {
  const _date = Object.values(date)
    .map((i) => i.toString().padStart(2, "0"))
    .join("-");

  return await instance.get(`${path.selfStudy}/today?date=${_date}`);
};
