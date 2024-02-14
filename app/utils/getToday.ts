export const getToday = () => {
  const _date = new Date();
  const days = ["일", "월", "화", "수", "목", "금", "토"];

  const month = (_date.getMonth() + 1).toString() + "월";
  const date = _date.getDate().toString() + "일";
  const day = "(" + days[_date.getDay()] + ")";

  return `${month} ${date} ${day}`;
};
