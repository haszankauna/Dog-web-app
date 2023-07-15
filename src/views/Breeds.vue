<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Breeds</h1>
  </div>
  <div class="px-8">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 mb-3 w-full"
      placeholder="Search for breeds"
    />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <a href="#"
        @click.prevent="openBreed(breed)"
        v-for="breed of computedBreeds"
        :key="breed.idBreed"
        class="block bg-white rounded p-3 mb-3 shadow"
      >
        <h3 class="text-2xl font-bold mb-2">{{ breed.strBreed }}</h3>
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import axiosClient from "../axiosClient";
import store from "../store";

const router = useRouter();
const keyword = ref("");
const breeds = ref([]);
const computedBreeds = computed(() => {
  if (!computedBreeds) return breeds;
  return breeds.value.filter((i) =>
    i.strBreed.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

function openBreed(breed) {
  store.commit('setBreed', breed)
  router.push({
    name: "byBreed",
    params: { breed: breed.strBreed },
  });
}

onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    breeds.value = data.dogs;
  });
});
</script>
