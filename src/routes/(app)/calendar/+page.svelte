<script lang="ts">
  import LessonCollapsible from '$lib/components/lesson-collapsible.svelte';
  import '$/styles/calendar.css';
  import dayjs, { Dayjs } from 'dayjs';
  import Calendar from './calendar.svelte';
  import Icon from '@iconify/svelte';
  import * as timeHelper from '$lib/modules/date-helper';
  import Portal from 'svelte-portal';
  import Modal from '$lib/components/UI/modal.svelte';
  import LessonForm from '$lib/components/lesson-form.svelte';
  import type { Lesson } from '$lib/_interfaces/lesson.interface';

  const today: Dayjs = dayjs();
  let eventModalForm: boolean = false;

  let lessons = timeHelper.MOCKLESSONS;

  // TODO map of today lessons
  // lessons this week
  // form to create lesson
  const onCreateLesson = (e: any) => {
    eventModalForm = !eventModalForm;
    lessons = [...lessons, e.detail];
  };
</script>

<h1 class="text-4xl my-8">Календарь</h1>

<div class="calendar-wrapper">
  <div class="calendar-left">
    <p class="text-3xl">
      {`${timeHelper.DAYSOFWEEK[today.$W]}`}, <br />{today.$D}
      {`${timeHelper.MONTHOFYEAR[today.$M]} ${today.$y}`}
    </p>
    <div class="flex my-5 justify-center">
      <button class="primary-btn shadow-lg w-max flex items-center" on:click={() => (eventModalForm = !eventModalForm)}>
        <span class="text-xl mr-2">
          <Icon icon="ic:baseline-plus" />
        </span>
        Создать запись
      </button>
    </div>
    <div class="my-3">
      {#each lessons as lesson}
        <LessonCollapsible {lesson} />
      {/each}
    </div>
  </div>
  <div class="calendar-right">
    <Calendar {lessons} />
  </div>
  <Portal target="body">
    <Modal isOpen={eventModalForm}>
      <h1 class="text-xl font-bold" slot="header">Записать урок в колендаре</h1>
      <LessonForm slot="content" on:lesson={onCreateLesson} />
    </Modal>
  </Portal>
</div>
