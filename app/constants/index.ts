import { AxiosResponse } from "axios";
export * from "./queryKeys";

const size = 10;

export const hitSlop = { top: size, left: size, right: size, bottom: size };

export const months = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];

export const days = ["일", "월", "화", "수", "목", "금", "토"];
