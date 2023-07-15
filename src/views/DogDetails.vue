<template>
  <div class="max-w-[800px] mx-auto p-8">
    <h1 class="text-4xl font-bold mb-5 text-orange-500">{{ dogs.strDogs }}</h1>
    <img :src="dogs.strDogsThumb" :alt="dogs.strDogs" class="max-w-[100%]">
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Category:</strong> {{ dogs.strCategory }}
      </div>
      <div>
        <strong class="font-bold">Area:</strong> {{ dogs.strArea }}
      </div>
      <div>
        <strong class="font-bold">Tags:</strong> {{ dogs.strTags }}
      </div>
    </div>

    <div class="my-3">
      {{ dogs.strInstructions }}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Breeds</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="dog[`strIngredient${ind + 1}`]">
            {{ ind + 1 }}. {{ dog[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2">Measures</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="dog[`strMeasure${ind + 1}`]">
            {{ ind + 1 }}. {{ dog[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div class="mt-4">
        <MoreButton :href="dogs.strMore" />
        <a
          :href="dog.strSource"
          target="_blank"
          class="ml-3 px-3 py-2 rounded border-2 border-transparent text-indigo-600 transition-colors"
        >
          View Source
        </a>
      </div>
    </div>


  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import More from '../components/More.vue';

const route = useRoute();
const dog = ref({})

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({ data }) => {
      dogs.value = data.dogs[0] || {}
    })
})

</script>