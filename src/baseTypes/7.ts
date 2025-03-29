/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum dayOfThrWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thurthday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: dayOfTheWeek): boolean => {
  return day === Weekday.Saturday || day === Weekday.Sunday;
};
