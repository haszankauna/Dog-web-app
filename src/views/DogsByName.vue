<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Search Dogs by Name</h1>
  </div>
  <div class="px-8 pb-3">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full"
      placeholder="Search for Dogs"
      @change="searchDogs"
    />
  </div>

  <Dogs :dogs="dogs" />
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Dogs from '../components/Dogs.vue'

const route = useRoute();
const keyword = ref("");
const dogs = computed(() => store.state.searchedDogs);

function searchDogs() {
  if (keyword.value) {
    store.dispatch("searchDogs", keyword.value);
  } else {
    store.commit("setSearchedDogs", []);
  }
}

onMounted(() => {
  keyword.value = route.params.name
  if (keyword.value) {
    searchDogs()
  }
})
</script>
