import { instance } from "./instance";

const path = "/self-study";

export const today = async () => {
  return await instance.get(`${path}/today`);
};
