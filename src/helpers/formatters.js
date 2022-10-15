import { format, addMinutes } from 'date-fns';

export const formatDateFromApi = date =>
  format(addMinutes(new Date(date), new Date().getTimezoneOffset()), 'dd/MM/yyyy');
