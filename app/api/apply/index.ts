import { instance } from "../instance";
import { path } from "../path";
export * from "./weekendMeal";
export * from "./earlyReturn";
export * from "./moveClass";
export * from "./out";

// 교실이동, 외출, 조기귀가
export const checkApply = async () => {
  const move = await instance
    .get(`${path.classRoom}/move`)
    .then((res) => res.data)
    .catch(() => undefined);
  const out = await instance
    .get(`${path.out}/my`)
    .then((res) => res.data)
    .catch(() => undefined);
  const earlyReturn = await instance
    .get(`${path.earlyReturn}/my`)
    .then((res) => res.data)
    .catch(() => undefined);
  if (move || out || earlyReturn) {
    return (
      (move && ["move", move]) ||
      (out && ["out", out]) ||
      (earlyReturn && ["home", earlyReturn])
    );
  } else {
    return false;
  }
};
