import { instance } from "../instance";
import { path } from "../path";
import { months } from "@/constants";

export const getSchedule = async (year: number, month: number) => {
  return await instance.get(
    `${path.schedule}/month?year=${year}&month=${months[month - 1]}`
  );
};
