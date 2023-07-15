import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from '../components/DefaultLayout.vue';
import GuestLayout from '../components/GuestLayout.vue';
import Home from '../views/Home.vue'
import DogsByBreed from '../views/DogsByBreed.vue'
import DogsByLetter from '../views/DogsByLetter.vue'
import DogsByName from '../views/DogsByName.vue'
import DogDetails from '../views/DogDetails.vue'
import Breeds from '../views/Breeds.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: DogsByName,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: DogsByLetter,
      },
      {
        path: "/breeds",
        name: "breeds",
        component: Breeds,
      },
      {
        path: "/by-breed/:breed",
        name: "byBreed",
        component: DogsByBreed,
      },
      {
        path: '/dog/:id',
        name: 'dogDetails',
        component: DogDetails
      }
    ]
  },
  {
    path: '/guest',
    component: GuestLayout
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
