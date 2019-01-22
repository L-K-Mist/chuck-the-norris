import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    jokes: null,
    categories: null
  },
  getters: {
    jokes(state) {
      return state.jokes
    },
    categories(state) {
      return state.categories
    }
  },
  mutations: {}, // Evan You has mentioned the likelihood of doing away with mutations, so I'm getting used to doing without them too.
  actions: {
    async getJokes({
      state
    }) {
      state.loading = true;
      try {
        const response = await axios.get("https://api.chucknorris.io/jokes/random")
        state.jokes = response.data.value
      } catch (error) {
        console.log("​error", error);
      }
      state.loading = false;

    },
    async getCategories({
      state
    }) {
      try {
        const response = await axios.get("https://api.chucknorris.io/jokes/categories")
        state.categories = response.data.value
        console.log('​response.data', response.data)

      } catch (error) {
        console.log("​error", error);
      }
    }
  }
});