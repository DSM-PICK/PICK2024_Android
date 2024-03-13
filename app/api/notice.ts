import { instance } from "./instance";
import { path } from "./path";

export const notice = async () => {
  return await instance.get(`${path.notice}/simple`);
};

export const detail = async (id: string) => {
  return await instance.get(`${path.notice}/${id}`);
};
