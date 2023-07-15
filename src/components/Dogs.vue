<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
    <DogItem v-for="dog of dogs" :key="dog.idDog" :dog="dog" />
  </div>
  <div v-if="!dogs.length" class="flex justify-center text-gray-600 p-8">
    There are no Dogs
  </div>
</template>

<script setup>
import DogItem from './DogItems.vue';

const { dogs } = defineProps({
  dogs: {
    required: true,
    type: Array,
  }
})

</script>
