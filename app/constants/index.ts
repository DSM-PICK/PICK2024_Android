import { AxiosResponse } from "axios";
export * from "./queryKeys";

const size = 10;

export const hitSlop = { top: size, left: size, right: size, bottom: size };

export const placeholderData: AxiosResponse = {
  data: {
    name: "홍길동",
    birth_day: "1944-12-21",
    school_num: 1111,
    account_id: "gildong",
    classRoom: "undefined",
    start_time: "00:00",
    end_time: "00:00",
    reason: "집 보내주세요",
    teacher: "홍판서",
  },
  status: 200,
  statusText: "",
  headers: {},
  config: {},
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
