import { instance } from "./instance";
import { path } from "./path";

export const todayNotice = async () => {
  return await instance.get(`${path.notice}/today`);
};

export const title = async (title: number) => {
  return await instance.get(`${path.notice}/title/${title}`);
};
