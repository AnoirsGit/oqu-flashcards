<script lang="ts">
  import Icon from '@iconify/svelte';
  import dayjs from 'dayjs';
  import { slide } from 'svelte/transition';
  import { addMinutes, getOnlyTime, DAYSOFWEEK } from '$lib/modules/date-helper';
  import type { Lesson } from '$lib/_interfaces/lesson.interface';

  export let lesson: Lesson = {
    days: [],
    subject: '',
    participant: { firstName: '', lastName: '', role: '' },
    startDate: dayjs(),
    startTime: dayjs(),
    lessonIndex: 0,
    lessonCount: 0,
    lessonDuration: 60//minutes
  };

  const timeToDisplay = `${getOnlyTime(lesson.startTime)}-${getOnlyTime(
    addMinutes(lesson.startTime, lesson.lessonDuration)
  )}`;

  let show: boolean = false;
</script>

<div class="w-full flex flex-col px-4 py-2 rounded-lg border border-main-blue-500 bg-white shadow-lg mb-3">
  <div class="flex justify-between items-center relative">
    <h1 class="text-md font-bold">Урок с {lesson.participant?.firstName} {lesson.participant?.lastName}</h1>
    <div class="flex items-center">
      <small>{timeToDisplay}</small>
      <button class="text-2xl" on:click={() => (show = !show)} class:rotate-180={show}>
        <Icon icon="material-symbols:keyboard-arrow-down-rounded" />
      </button>
    </div>
  </div>
  {#if show}
    <div transition:slide>
      <p>Уроков <b>{lesson.lessonIndex}/{lesson.lessonDuration}</b></p>
      <p>Предмет <b>{lesson.subject}</b></p>
      <p>
        Дни: <b>
          {#each lesson.days as day}
            {DAYSOFWEEK[day]}
          {/each}
        </b>
      </p>
    </div>
  {/if}
</div>
