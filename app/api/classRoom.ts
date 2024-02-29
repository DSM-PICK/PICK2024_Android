import { instance } from "./instance";

const path = "/class-room";

interface MovePropData {
  floor: number;
  classroom_name: string;
}

export const moveClass = async (data: MovePropData) => {
  return await instance.post(`${path}/move`, data);
};

export const returnClass = async () => {
  return await instance.delete(`${path}/return`);
};

export const getClass = async () => {
  return await instance.get(`${path}/move`);
};
