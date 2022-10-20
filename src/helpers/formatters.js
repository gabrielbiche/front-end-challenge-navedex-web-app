import { format, addMinutes, intervalToDuration } from 'date-fns';

export const formatDateFromApi = date =>
  format(addMinutes(new Date(date), new Date().getTimezoneOffset()), 'dd/MM/yyyy');

export const formatPeriodInYears = dateString => {
  const { years } = intervalToDuration({ start: new Date(dateString), end: new Date() });
  const yearsFormatted = `${years} anos`;
  return yearsFormatted;
};

export const formatPeriodInYearsAndMonths = dateString => {
  const { years, months } = intervalToDuration({ start: new Date(dateString), end: new Date() });
  const yearsFormatted = years > 1 ? `${years} anos` : `${years} ano`;
  const monthsFormatted = months > 1 ? `${months} meses` : `${months} mês`;

  let periodFormatted = '';

  if (years && months) {
    periodFormatted = `${yearsFormatted} e ${monthsFormatted}`;
  } else if (years) {
    periodFormatted = `${yearsFormatted}`;
  } else {
    periodFormatted = `${monthsFormatted}`;
  }

  return periodFormatted;
};
