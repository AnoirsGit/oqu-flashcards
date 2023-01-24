<script lang="ts">
  import '$/app.css';
  import { fade } from 'svelte/transition';
  import Icon from '@iconify/svelte';

  let wideNav: boolean = true;

  const openNav = () => (wideNav = !wideNav);

  const navElements = [
    {
      name: 'Мои курсы',
      icon: 'ic:baseline-list-alt',
      link: '/'
    },
    {
      name: 'Календарь',
      icon: 'material-symbols:calendar-month-outline',
      link: '/calendar'
    },
    {
      name: 'Журнал',
      icon: 'material-symbols:note-alt-outline-rounded',
      link: '#'
    },
    {
      name: 'Аналитика',
      icon: 'ri:pie-chart-line',
      link: '#'
    }
  ];
</script>

<div class="w-screen h-full flex">
  <div class:w-64={wideNav} class:w-28={!wideNav}>
    <div
      class="animated-nav fixed inset-0 h-screen p-2 md:p-4 flex flex-col bg-main-blue-800 text-lg text-main-blue-300"
      class:w-60={wideNav}
      class:w-24={!wideNav}
    >
      <button
        class="absolute right-[-1rem] top-16 p-1 rounded-full text-2xl bg-main-blue-300"
        on:click={openNav}
        class:rotate-180={!wideNav}
      >
        <Icon class="text-main-blue-800" icon="material-symbols:chevron-left-rounded" />
      </button>
      <!-- <div class="absolute w-4 h-4 right-[-8px] top-10 bg-red-300" on:click={openNav} /> -->
      <div class="flex mt-4 mb-10">
        <img src="images/white-icon.webp" alt="logo" width="80" height="80" />
        <p class="ml-4" />
      </div>

      {#each navElements as navEl}
        <div class="flex">
          <div class="w-16 h-16 text-4xl">
            <Icon icon={navEl.icon} />
          </div>
          {#if wideNav}<a transition:fade href={navEl.link}>{navEl.name}</a>{/if}
        </div>
      {/each}
    </div>
  </div>
  <div class="p-4 md:pl-16 md:pr-12 w-full text-main-blue-600">
    <slot />
  </div>
</div>

<style>
  .animated-nav {
    transition: width 0.3s ease-in-out;
  }
  .backdrop {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
  }
</style>
