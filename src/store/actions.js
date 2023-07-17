import axiosClient from '../axiosClient';

export function searchDogs({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword}`)
    .then(({ data }) => {
      commit('setSearchedDogs', data.dogs)
    })
}

export function searchDogsByLetter({ commit }, letter) {
  axiosClient.get(`search.php?f=${letter}`)
    .then(({ data }) => {
      commit('setDogsByLetter', data.dogs)
    })
}

export function searchDogsByBreed({ commit }, ing) {
  axiosClient.get(`filter.php?i=${ing}`)
    .then(({ data }) => {
      commit('setDogsByBreed', data.dogs)
    })
}