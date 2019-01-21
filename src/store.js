import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    jokes: null
  },
  mutations: {}, // Evan You has mentioned the likelihood of doing away with mutations, so I'm getting used to doing without them too.
  actions: {
    getJokes({
      state
    }) {
      state.loading = true;
      axios.get("http://api.icndb.com/jokes/random/10").then(
        response => {
          state.loading = false;
          state.jokes = response.data.value;
        },
        error => {
          console.log("​error", error);

          this.loading = false;
        }
      );
    }
  }
});