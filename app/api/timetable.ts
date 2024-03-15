import { instance } from "./instance";
import { path } from "./path";

export const todayTimeTable = async () => {
  return await instance.get(`${path.timeTable}/today`);
};

export const weekTimeTable = async () => {
  return await instance.get(`${path.timeTable}/week`);
};
