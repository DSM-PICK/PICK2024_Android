export const getDates = (date: number[]) => {
  const _date = new Date(`${date[0]}-${date[1]}-1`);

  const startDay = new Date(date[0], date[1] - 1, 1).getDay();
  const endDate = new Date(date[0], date[1], 0).getDate();

  return { startDay, endDate };
};
