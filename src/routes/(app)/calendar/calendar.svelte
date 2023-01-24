<script lang="ts">
  import '$/styles/calendar.css';
  import dayjs from 'dayjs';
  import * as timeHelper from '$lib/modules/date-helper';
  import type { Lesson, CalendarDayObj } from '$lib/_interfaces/lesson.interface';

  export let lessons: Lesson[] = [];
  const hours: number[] = timeHelper.getDayHoursRaw();
  const dayOfWeek = timeHelper.getThisWeekDays();
  const today = dayjs();
  // TODO make compatible with month and date for show in column

  const isToShowOnCalendarCol = (lesson: Lesson, day: CalendarDayObj) => {
    const date = lesson.startDate;
    return date.$D === day.day && date.$M === day.month && date.$y;
  };
</script>

<div class="w-full h-full flex flex-col calendar-table">
  <div class="w-full">
    <div class="flex text-center">
      <div class="day-size" />
      {#each dayOfWeek as day}
        <div class="day-size flex flex-col justify-center items-center">
          <div
            class="date-bubble"
            class:bg-main-blue-500={today.$D === day.day}
            class:bg-main-blue-200={today.$D !== day.day}
          >
            {day.day}
          </div>
          <p class="day-label">{day.dayLabel}</p>
        </div>
      {/each}
    </div>
    <div class="flex w-full">
      <!-- HOURS LABEL -->
      <div class="day-size">
        {#each hours as hour}
          <div class="h-15 relative">
            <p class="absolute top-[-12px] right-3">
              {hour}:00
            </p>
          </div>
        {/each}
      </div>
      {#each dayOfWeek as day}
        <!-- DAYS -->
        <div class="relative day-size flex flex-col">
          {#each lessons.filter((lesson) => isToShowOnCalendarCol(lesson, day)) as lesson}
            <div
              class="lesson text-white p-2 text-xs"
              style={`height: ${lesson.lessonDuration}px; top: ${timeHelper.calcLessonTop(lesson)}px`}
            >
              {lesson.participant?.firstName}
              {lesson.participant?.lastName}
            </div>
          {/each}
          <!-- DAY's HOUR -->
          {#each hours as hour, i}
            <div class="h-15 border-x border-slate-300" class:bg-main-blue-100={i % 2 == 0} />
          {/each}
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .day-size {
    width: calc(100% / 8);
  }
</style>
