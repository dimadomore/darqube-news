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
  const shouldTruncate = value?.length > truncateAt;

  return shouldTruncate ? `${value.substring(0, truncateAt)} ...` : value;
};
