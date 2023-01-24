<script lang="ts">
  import Icon from '@iconify/svelte';

  const close = () => {
    isOpen = !isOpen;
  };
  export let isOpen: boolean = false;
</script>

{#if isOpen}
  <div class="backdrop inset-0" on:click={close} />
  <div class="modal inset-0 rounded-xl h-max text-main-blue-500">
    
      <div class="flex justify-between items-center px-4 py-2">
        <div><slot name="header" /></div>
        <button class="text-2xl" on:click={close}><Icon icon="material-symbols:close" /></button>
      </div>
      <div class="p-4">
        <slot name="content" />
      </div>
      <slot name="footer" />
    
  </div>
{/if}

<style>
  .modal {
    position: fixed;
    top:50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 512px;
    display: flex;
    flex-direction: column;
    background: white;
  }

  .backdrop {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
  }
</style>
