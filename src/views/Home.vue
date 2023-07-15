<template>
  <div class="p-8 pb-0 text-orange-500">
    <h1 class="text-4xl font-bold mb-4">Random Dogs</h1>
  </div>
  <Dogss :dogs="dogs" />
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import Dogs from "../components/Dogs.vue";
import axiosClient from "../axiosClient.js";

const dogs = ref([]);

onMounted(async () => {
  for (let i = 0; i < 10; i++) {
    axiosClient
      .get(`random.php`)
      .then(({ data }) => dogs.value.push(data.dogs[0]));
  }
});
</script>
