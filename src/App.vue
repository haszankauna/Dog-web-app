<template>
 <router-view />
</template>

<script setup>
  import { ref } from 'vue';

  const listItems = ref([]);

  async function getData() {
    const res = await fetch("https://dog.ceo/api/breeds/list/all");
    const finalRes = await res.json();
    listItems.value = finalRes;
  }

 getData()
</script>

<style scoped>
</style>
