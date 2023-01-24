<script lang="ts">
  import UserCard from '$/lib/components/user-card.svelte';
  import Icon from '@iconify/svelte';
</script>

<h1 class="text-4xl my-8">Мои курсы</h1>
<div class="flex items-center mb-6">
  <input type="text" class="default-input" placeholder="Поиск" value="" />
  <div class="text-3xl"><Icon icon="ic:outline-search" /></div>
</div>
<div class="flex flex-col">
  <UserCard />
</div>
