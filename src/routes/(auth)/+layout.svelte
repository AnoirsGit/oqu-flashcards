<script>
  import '../../app.css';
</script>

<header class="relative flex p-2 md:p-4 ">
  <img src="images/blue-icon.webp" class="absolute" alt="logo" width="160" height="160" />
</header>
<div class="p-4 md:p-8 flex flex-col justify-center items-center mt-32">
  <h1 class="text-3xl py-2 mb-6 text-main-blue-500">Добро Пожаловать</h1>
  <div
    class="w-full md:w-[512px] h-max p-4 md:p-8 rounded-lg border border-main-blue-500 shadow-lg text-main-blue-500 flex flex-col"
  >
    <slot />
  </div>
</div>
