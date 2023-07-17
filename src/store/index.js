import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    dogs: [],
  },
  getters: {
    getDogs: (state) => state.dogs,
  },
  actions: {
    async fetchDogs({ commit }) {
      try {
        const data = await axios.get("https://dog.ceo/api/breed/hound/images");
        commit("SET_DOGS", data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  mutations: {
    SET_DOGS(state, dogs) {
      state.dogs = dogs;
    },
  },
});
