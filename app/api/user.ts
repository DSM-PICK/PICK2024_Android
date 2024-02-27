import { instance } from "./instance";

const path = "/user";
interface loginType {
  account_id: string;
  password: string;
}

export const login = async (data: loginType) => {
  return await instance.post(`${path}/login`, data);
};