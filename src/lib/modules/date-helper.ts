import dayjs, { Dayjs } from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import type { CalendarDayObj, Lesson } from '$lib/_interfaces/lesson.interface';
dayjs.extend(weekOfYear);

export const getThisWeekDays = (week?: number) => {
  let startOfWeek;
  if (week) startOfWeek = dayjs().week(week);
  else startOfWeek = dayjs().startOf('week');

  const labels = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  const days: CalendarDayObj[] = [];
  for (let i = 0; i < 7; i++) {
    const dayjsDate = startOfWeek.day(i);
    days.push({ dayLabel: labels[i], day: dayjsDate.date(), month: dayjsDate.month(), year: dayjsDate.year() });
  }
  return days;
};

export const getDayHoursRaw = () => {
  const hours: number[] = [];
  for (let i = 0; i < 24; i++) hours.push(i);
  return hours;
};

export const calcLessonTop = (lesson: Lesson) => {
  return lesson.startTime.$H * 60 + lesson.startTime.$m;
};

export const getOnlyTime = (date: Dayjs) => {
  return date.format('HH:mm');
};

export const addMinutes = (start: Dayjs, minutes: number) => {
  return start.add(minutes, 'minute');
};

export const DAYSOFWEEK: string[] = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
export const DAYSOFWEEKTONUM: any = {
  Воскресенье: 0,
  Понедельник: 1,
  Вторник: 2,
  Среда: 3,
  Четверг: 4,
  Пятница: 5,
  Суббота: 6
};

export const MONTHOFYEAR: string[] = [
  'Янаварь',
  'Февраль',
  'Март',
  'Апраель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь'
];

// eslint-disable-next-line prefer-const
export let MOCKLESSONS: Lesson[] = [
  {
    days: [],
    subject: 'Вышмат',
    participant: { firstName: 'Аноир', lastName: 'Толеген', role: '' },
    startDate: dayjs('2023-01-24'),
    startTime: dayjs('2018-01-01T12:00'),
    lessonIndex: 1,
    lessonCount: 1,
    lessonDuration: 60 //minutes
  }
];
