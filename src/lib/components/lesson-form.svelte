<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { DAYSOFWEEK, DAYSOFWEEKTONUM } from '$lib/modules/date-helper';
  import MultiSelect from 'svelte-multiselect';
  import { DateInput } from 'date-picker-svelte';
  import dayjs, { Dayjs } from 'dayjs';
  import type { Participant, Lesson } from '$lib/_interfaces/lesson.interface';

  interface ParticipantSelect extends Participant {
    label: string;
  }
  const today = dayjs();
  const dispatch = createEventDispatcher();

  const timesHour: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const timesMin: number[] = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
  const participants: ParticipantSelect[] = [
    { firstName: 'Роза', lastName: 'Байчапаноав', role: 'student', label: 'Роза Байчапаноав' }
  ];
  const durationMin: number[] = [15, 30, 45, 60, 75, 90, 105, 120];

  let days: string[] = [DAYSOFWEEK[today.day()]];
  let startDate = new Date();
  let startH: number[] = [today.$H];
  let startM: number[] = [0];
  let lessonDuration: number[] = [45];
  let participant: ParticipantSelect[] = [];
  const subject: string = 'Математика';

  //   export interface Lesson {
  //   days: number[];
  //   subject: string;
  //   participant: Participant | null;
  //   startDate: Dayjs;
  //   //TODO need to make days for show in calendar
  //   startTime: Dayjs;
  //   lessonIndex: number;
  //   lessonCount: number;
  //   lessonDuration: number; //minutes
  // }

  export const onCreateLesson = () => {
    dispatch('lesson', {
      days: days.map((day) => DAYSOFWEEKTONUM[day]),
      subject,
      participant: participant[0],
      startDate: dayjs(startDate),
      startTime: today.set('hour', startH[0]).set('minute', startM[0]),
      lessonCount: 1,
      lessonDuration: lessonDuration[0]
    });
  };
</script>

<div class="lesson-form flex flex-col gap-4">
  <div class="flex gap-3 ">
    <label>Дни недели:</label>
    <MultiSelect options={DAYSOFWEEK} bind:selected={days} placeholder="Выберите дни недели для уроков" />
  </div>
  <div class="flex gap-3">
    <label>Ученик:</label>
    <MultiSelect maxSelect={1} options={participants} bind:selected={participant} />
  </div>
  <div class="flex gap-3">
    <label>День начало урока:</label>
    <DateInput bind:value={startDate} min={new Date()} format="yyyy-MM-dd" />
  </div>
  <div class="flex gap-3">
    <label>Время начало урока:</label>
    <div class="flex items-center gap-2 time-select">
      <MultiSelect maxSelect={1} options={timesHour} bind:selected={startH} /><span>Ч</span>
    </div>
    <div class="flex items-center gap-2 time-select">
      <MultiSelect maxSelect={1} options={timesMin} bind:selected={startM} /><span>Мин</span>
    </div>
  </div>
  <div class="flex gap-3">
    <label>Продолжительность урока:</label>
    <div class="flex items-center gap-2 time-select">
      <MultiSelect maxSelect={1} options={timesMin} bind:selected={lessonDuration} /><span>Мин</span>
    </div>
  </div>
  <button class="primary-btn" on:click={onCreateLesson}>Создать запись</button>
</div>

<style>
  :global(div.multiselect > ul.options) {
    max-height: 256px;
  }
  :global(div.time-select > div.multiselect) {
    max-width: 96px;
  }
  :global(div.multiselect > ul > li) {
    /* input inside the top-level wrapper div */
    background: #e5f0fe;
  }
</style>
