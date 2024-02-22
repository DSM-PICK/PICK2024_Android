let timer;

export const debounce = (action: () => void, delay: number) => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    action();
  }, delay);
};
