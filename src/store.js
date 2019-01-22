import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    jokes: null,
    categories: null,
    categoryJoke: null
  },
  getters: {
    jokes(state) {
      return state.jokes
    },
    categories(state) {
      return state.categories
    },
    categoryJoke(state) {
      return state.categoryJoke
    },
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
        state.categories = response.data
        console.log('​response.data', response.data)

      } catch (error) {
        console.log("​error", error);
      }
    },
    async fetchCategoryJoke({
      state
    }, payload) {
      /**
       * EXAMPLE RESULT: {
         "category": ["science"],
         "icon_url": "https:\/\/assets.chucknorris.host\/img\/avatar\/chuck-norris.png",
         "id": "_en05aqcsvuu3v2vopnoga",
         "url": "https:\/\/api.chucknorris.io\/jokes\/_en05aqcsvuu3v2vopnoga",
         "value": "While urinating, Chuck Norris is easily capable of welding titanium."
       }
       */
      try {
        const link = `https://api.chucknorris.io/jokes/random?category=${payload}`
        const response = await axios.get(link)
        state.categoryJoke = response.data.value
        console.log('​response.data', response.data)

      } catch (error) {
        console.log("​error", error);
      }
    }
  }
});