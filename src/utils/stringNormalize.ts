export const stringNormalize = (str: string): string => {
  return str
    .replace(/[^a-zа-яё0-9\s]/gi, " ")
    .split(" ")
    .filter((item) => item)
    .join("|");
};
