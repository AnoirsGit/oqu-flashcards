<script lang="ts">
  import UserCard from '$/lib/components/user-card.svelte';
  import Icon from '@iconify/svelte';
</script>

<h1 class="text-4xl my-8">Журнал</h1>

<div class="flex items-center">
  <UserCard />
  <div class="flex items-center ml-10">
    <input type="text" class="default-input" placeholder="Поиск" value="" />
    <div class="text-3xl"><Icon icon="ic:outline-search" /></div>
  </div>
</div>

<div class="flex my-10">
  <div class="flex flex-col border border-slate-300">
    <div class="h-20 w-40 flex justify-center items-center">Дата</div>
    <div class="h-20 w-40 flex justify-center items-center bg-main-blue-100">24-01-2023</div>
    <div class="h-20 w-40 flex justify-center items-center">25-01-2023</div>
    <div class="h-20 w-40 flex justify-center items-center bg-main-blue-100">26-01-2023</div>
  </div>
  <div class="flex flex-col  border border-slate-300">
    <div class="h-20 w-40 flex justify-center items-center">Урок</div>
    <div class="h-20 w-40 flex justify-center items-center bg-main-blue-100">
      Урок с Аноир Толеген и с Роза Байчапаноава
    </div>
    <div class="h-20 w-40 flex justify-center items-center" />
    <div class="h-20 w-40 flex justify-center items-center bg-main-blue-100" />
  </div>
  <div class="flex flex-col  border border-slate-300">
    <div class="h-20 w-40 flex justify-center items-center">Кол-во Задач</div>
    <div class="h-20 w-40 flex justify-center items-center bg-main-blue-100">2</div>
    <div class="h-20 w-40 flex justify-center items-center" />
    <div class="h-20 w-40 flex justify-center items-center bg-main-blue-100" />
  </div>
  <div class="flex flex-col border border-slate-300">
    <div class="h-20 w-40 flex justify-center items-center">Темы</div>
    <div class="h-20 w-40 flex justify-center items-center bg-main-blue-100" />
    <div class="h-20 w-40 flex justify-center items-center" />
    <div class="h-20 w-40 flex justify-center items-center bg-main-blue-100" />
  </div>
  <div class="flex flex-col border border-slate-300">
    <div class="h-20 w-40 flex justify-center items-center">Примечания</div>
    <div class="h-20 w-40 flex justify-center items-center bg-main-blue-100" />
    <div class="h-20 w-40 flex justify-center items-center" />
    <div class="h-20 w-40 flex justify-center items-center bg-main-blue-100" />
  </div>
</div>
