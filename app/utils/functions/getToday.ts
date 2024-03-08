export const days = ["일", "월", "화", "수", "목", "금", "토"];

export const getToday = () => {
  const _date = new Date();

  const year = _date.getFullYear();
  const month = _date.getMonth() + 1;
  const date = _date.getDate();
  const day = days[_date.getDay()];

  return { year, month, date, day };
};
