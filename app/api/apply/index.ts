import { instance } from "../instance";
import { path } from "../path";
export * from "./weekendMeal";
export * from "./earlyReturn";
export * from "./moveClass";
export * from "./out";

// 교실이동, 외출, 조기귀가
export const checkApply = async () => {
  return await instance.get("/main");
};
