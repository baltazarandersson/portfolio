const SECONDS_IN_A_MONTH = 2629746;

const convertMillisecondsToMonths = (number: number) =>
  number / 1000 / SECONDS_IN_A_MONTH;

export const getMonthsBetweenDates = (firstDate: number, secondDate: number) =>
  Math.ceil(convertMillisecondsToMonths(Math.abs(secondDate - firstDate)));
