export function setSearchedDogss(state, dogs) {
  state.searchedDogs = dogs || []
}
export function setDogsByLetter(state, dogs) {
  state.dogsByLetter = dogs || []
}
export function setDogsByBreeds(state, dogs) {
  state.dogsByBreed = dogs || []
}
export function setBreed(state, breed) {
  state.breed = breed
}