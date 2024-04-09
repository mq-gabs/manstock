export const getDateAndTime = (dateTime: string) => {
  const [date, time] = dateTime.split(' ');
  const [year, month, day] = date.split('-');
  const formatedDate = [day, month, year].join('/');
  const [hour, minutes, ] = time.split(':');
  const formatedTime = [hour,minutes].join(':');
  return [formatedDate, formatedTime];
}