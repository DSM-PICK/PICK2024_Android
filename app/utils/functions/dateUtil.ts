import { days } from "@/constants";

const _date = new Date();

export const getToday = () => {
  const year = _date.getFullYear();
  const month = _date.getMonth() + 1;
  const date = _date.getDate();
  const day = days[_date.getDay()];

  return { year, month, date, day };
};

export const getDates = (date: number[]) => {
  const [year, month] = date;

  const startDay = new Date(year, month - 1, 1).getDay();
  const endDate = new Date(year, month, 0).getDate();

  return { startDay, endDate };
};

export const getDiff = (date: string) => {
  const y = _date.getFullYear();
  const m = (_date.getMonth() + 1).toString().padStart(2, "0");
  const d = _date.getDate().toString().padStart(2, "0");

  const date1 = new Date(`${y}-${m}-${d}`);
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
