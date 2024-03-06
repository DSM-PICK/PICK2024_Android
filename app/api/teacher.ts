import { instance } from "./instance";
import { path } from "./path";

export const today = async () => {
  return await instance.get(`${path.selfStudy}/today`);
};
