export const getDates = (date: number[]) => {
  const [year, month] = date;

  const startDay = new Date(year, month - 1, 1).getDay();
  const endDate = new Date(year, month, 0).getDate();

  return { startDay, endDate };
};
