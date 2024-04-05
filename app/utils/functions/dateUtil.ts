import { days } from "@/constants";

const curr = new Date();
const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;
const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
const _date = new Date(utc + KR_TIME_DIFF);

type dateType = {
  year: number;
  month: number;
  date: number;
};

export const calcDate = (date: dateType) => {
  return Object.values(date)
    .map((i) => i.toString().padStart(2, "0"))
    .join("-");
};
export const getToday = () => {
  const year = _date.getFullYear();
  const month = _date.getMonth() + 1;
  const date = _date.getDate();
  const day = days[_date.getDay()];
  const fullDay = `${year}-${month.toString().padStart(2, "0")}-${date
    .toString()
    .padStart(2, "0")}`;
  const fullDayShort = `${month}월 ${date}일 (${day})`;
  return { year, month, date, day, fullDay, fullDayShort };
};

export const getDates = (date: number[]) => {
  const [year, month] = date;

  const startDay = new Date(year, month - 1, 1).getDay();
  const endDate = new Date(year, month, 0).getDate();

  return { startDay, endDate };
};

export const getDiff = (date: string) => {
  const { fullDay } = getToday();

  const date1 = new Date(fullDay);
  const date2 = new Date(date);
  let diff = date1.getTime() - date2.getTime();
  diff = Math.ceil(diff / (1000 * 60 * 60 * 24));
  if (diff === 0) {
    return "오늘";
  } else if (diff === 1) {
    return "어제";
  } else if (diff < 7) {
    return `${diff}일 전`;
  } else {
    return date;
  }
};
