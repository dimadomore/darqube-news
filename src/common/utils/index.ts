export const formatTimestamp = (
  timestamp: number,
  options: Intl.DateTimeFormatOptions,
) => {
  const defaultLocale = 'en-GB';
  const datetime = new Date(timestamp * 1000);

  const dtFormat = new Intl.DateTimeFormat(defaultLocale, options);

  return dtFormat.format(datetime);
};

export const truncateText = (value: string, truncateAt = 50) => {
  return value?.length > truncateAt
    ? `${value.substring(0, truncateAt)} ...`
    : value;
};

export const filterByTextInKeys = (
  objArr: Record<string, any>[],
  filterValue: string,
  keys: string[],
) => {
  return objArr.filter((obj) =>
    keys.some(
      (key) =>
        obj[key] &&
        typeof obj[key] === 'string' &&
        obj[key].toLowerCase().includes(filterValue.toLowerCase()),
    ),
  );
};
