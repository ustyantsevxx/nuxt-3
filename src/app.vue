<script setup lang="ts">
const { data } = useAsyncData(async () => '1243')
</script>

<template>
  <div class="text-red-300">{{ data }}</div>
</template>
