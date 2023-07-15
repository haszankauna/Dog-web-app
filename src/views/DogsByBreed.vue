<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Dogs for {{ dog.strDogs }}</h1>
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
const breed = computed(() => store.state.breed)
const dogs = computed(() => store.state.dogssByBreed)

onMounted(() => {
  store.dispatch('searchDogsByIngredient', route.params.breed)
})

</script>
