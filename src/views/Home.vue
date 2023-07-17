<template>
  <div>
    <div class="p-8 pb-0 text-orange-500">
      <h1 class="text-4xl font-bold mb-4">Random Dogs</h1>
    </div>
    <!-- {{ users.message }} -->
    <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-4" v-if="dogs.message">
      <div class="rounded-2 m-1 bg-white drop-shadow-md p-2" v-for="(dog, index) in dogs.message.splice(0, 100)" :key="index">
        <div   class="w-full">
          <img :src="dog" alt="" class="w-100 object-cover" style="height: 300px" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const msg = ref("Welcome to my Vuex Store");
const getDogs = computed(() => {
  return store.getters.getDogs;
});
const dogs = computed(() => {
  return store.state.dogs;
});
onMounted(() => {
  store.dispatch("fetchDogs");
});
</script>