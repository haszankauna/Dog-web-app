<template>
  <div
    class="bg-white shadow rounded-xl hover:scale-105 transition-all"
  >
    <router-link :to="{ name: 'dogDetails', params: { id: dog.idDog } }">
      <img
        :src="dog.strDogThumb"
        :alt="dog.strDog"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-bold">{{ dog.strDog }}</h3>
      <p class="mb-4">
        {{ $filters.truncateWords(dog.strInstructions, 20) }}
      </p>
      <div class="flex items-center justify-between">
        <MoreButton :href="dog.strMore" />
      </div>
    </div>
  </div>
</template>

<script setup>
//import More from './More.vue';

const { dog } = defineProps({
  dog: {
    required: true,
    type: Object
  }
})

</script>
