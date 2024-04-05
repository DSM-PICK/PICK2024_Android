import { instance } from "./instance";
export * from "./instance";

export const get = async (url: string) => {
  return await instance.get(url);
};

export const post = async (url: string, data?: any) => {
  if (!!data) {
    return await instance.post(url, data);
  } else {
    return await instance.post(url);
  }
};

export const patch = async (url: string, data?: any) => {
  if (!!data) {
    return await instance.patch(url, data);
  } else {
    return await instance.patch(url);
  }
};

export const deleet = async (url: string) => {
  // delete 왜 예약어냐..
  return await instance.delete(url);
};
