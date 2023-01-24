<script lang="ts">
  import Icon from '@iconify/svelte';
</script>

<h1 class="text-4xl my-8">Профиль</h1>
<div class="flex flex-col mb-8">
  <div class="flex items-center gap-12">
    <img src="images/female.png" width="150px" height="160px" alt="user" />
    <div class="">
      <div class="text-2xl font-bold">Айша Таукебаев</div>
      <p>Был(а) онлайн 2 часа назад</p>
      <div class="flex gap-8">
        <div class="flex text-3xl text-yellow-300">
          <Icon icon="material-symbols:star" /><Icon icon="material-symbols:star" /><Icon
            icon="material-symbols:star"
          /><Icon icon="material-symbols:star" /><Icon icon="material-symbols:star-half" />
        </div>
        <div class="flex gap-3">
          <Icon icon="ic:baseline-message" />
          <p>26 Отзывов</p>
        </div>
      </div>
      <div class="">4.78/5 (400 голосов)</div>
    </div>
  </div>

  <div class="mb-4">
    <h1 class="text-2xl font-bold">Предметы:</h1>
    <p>Математика, Вышмат, Физика</p>
  </div>
  <div class="mb-4">
    <h1 class="text-2xl font-bold">Образование:</h1>
    <ul>
      <li class="flex">
        <span class="text-green-300 text-2xl"><Icon icon="mdi:check-bold" /></span>Сертификат IELTS – 5.52013 г.
      </li>
      <li class="flex">
        <span class="text-green-300 text-2xl"><Icon icon="mdi:check-bold" /></span>
        Казахский национальный университет им. аль-Фараби, физико-технический факультет, специальность – физика, бакалавр
        (2016 г.), специальность – физика, магистр естественных наук2018 г.
      </li>
      <li class="flex">
        <span class="text-green-300 text-2xl"><Icon icon="mdi:check-bold" /></span>С отличием окончила Московскую
        физико-техническую заочную школу при МФТИ (2008-2012 гг.).
      </li>
      <li class="flex">
        <span class="text-green-300 text-2xl"><Icon icon="mdi:check-bold" /></span>Диплом 2 степени на олимпиаде
        «Магистратура физтеха 2016».
      </li>
    </ul>
  </div>
</div>
<div class="mb-4">
  <h1 class="text-2xl font-bold">O себе:</h1>
  <p>
    Здравствуйте! Меня зовут Айша. Я репетитор по математике и физике. Начала работать в 2013 году. Даю уроки школьникам
    средних и старших классов. Готовлю к выпускным и вступительным экзаменам, ЕНТ. Моя цель показать как интересна и
    увлекательна наука и рассказать, где применяются знания физики и математики. Покажу, что не все формулы обязательно
    нужно учить, многие можно вывести. На уроках мы решаем задачи не просто подставляя в «формулу по теме», а обсуждаем
    физические процессы и таким образом вырабатываем критическое мышление.
  </p>
</div>
