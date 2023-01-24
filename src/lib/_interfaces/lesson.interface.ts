import type { Dayjs } from 'dayjs';

export interface Participant{
  firstName: string;
  lastName: string;
  role:string
}

export interface Lesson {
  days: number[];
  subject: string;
  participant: Participant | null;
  startDate: Dayjs;
  //TODO need to make days for show in calendar
  startTime: Dayjs;
  lessonIndex?: number;
  lessonCount: number;
  lessonDuration: number; //minutes
}

// DATE FROM BACK MUST BE (yyyy-mm-ddTHH:mm)

export interface CalendarDayObj {
  dayLabel: string | number;
  day: string | number;
  month: string | number;
  year: string | number; 
}