import { instance } from "./instance";
import { path } from "./path";

export const today = async () => {
  return await instance.get(`${path.selfStudy}/today`);
};

export const date = async ({ date }: any) => {
  const { year, month, date: _date } = date;
  return await instance.get(`${path.selfStudy}/${year}-${month}-${_date}`);
};
