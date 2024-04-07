export * from "./queryKeys";

const size = 10;

export const hitSlop = { top: size, left: size, right: size, bottom: size };

export const defaultData = {
  name: "박수현",
  birth_day: "2024-02-24",
  grade: 1,
  class_num: 4,
  num: 8,
  account_id: "soohyeon",
  classRoom: "2-1",
  start_time: "08:30",
  end_time: "16:20",
};

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
