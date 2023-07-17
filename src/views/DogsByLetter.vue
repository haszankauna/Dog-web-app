<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Dogs by Letter</h1>
  </div>
  <div class="flex flex-wrap justify-center gap-3 px-8 mb-6">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
      class="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all"
    >
      {{ letter }}
    </router-link>
  </div>

  <Dogs :dogs="dogs" />
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Dogs from "../components/Dogs.vue";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const dogs = computed(() => store.state.dogsByLetter);

watch(route, () => {
  store.dispatch("searchDogsByLetter", route.params.letter);
});

onMounted(() => {
  store.dispatch("Letter", route.params.letter);
});
</script>
