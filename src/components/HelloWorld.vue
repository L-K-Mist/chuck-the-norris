<template>
  <v-container>
    <v-layout
      text-xs-center
      row
      wrap
    >
      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          When you just don't know what to do...
        </h1>
        <h1 class="display-2 font-weight-bold mb-3">
          ... Chuck them a Norris!!
        </h1>
        <p class="subheading font-weight-regular">
          You have a friend, 
          <br>they have a problem.
          <br>And there's nothing you can do to make it all better...
          <br>So Chuck them a topical Norris! And at least give them a smile.
        </p>
      </v-flex>
      <v-flex xs12>
        <v-btn small class="text-uppercase"
          v-for="(category, index) in categories" :key="index"
          @click="fetch(category)"
        >
          {{category}}
        </v-btn>
      </v-flex>
      </v-flex>
      <v-flex xs12 xl10>
        <v-img
          :src="require('../assets/chuckBackground.jpg')"
          class="my-3"
          contain
        >
        <v-container grid-list-xs>
          <v-layout column fluid>
            <v-flex xs11>
              <p class="meme-words" style="font-size: 4.5vw">{{topSentence}}</p>           
            </v-flex>
            <v-flex xs12 style="position: absolute; bottom: 1vw; left: 5%; right: 5%">
              <p v-if="bottomSentences"  class="meme-words" style="font-size: 4.5vw">
                <span class="text-xs-center" v-for="(sentence, index) in bottomSentences" :key="index">
                  {{sentence.text}}
                </span>
              </p>           
            </v-flex>
          </v-layout>
        </v-container>
        </v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  created(){
    this.$store.dispatch("getCategories")
  },
  data: () => ({
   
  }),
  computed: {
    topSentence() {
      return this.$store.getters.topSentence
    },
    bottomSentences() {
      return this.$store.getters.bottomSentences
    },
    categories() {
      return this.$store.getters.categories
    }
  },
  watch: {
    joke(newVal){
      console.log("joke", newVal)
    },
    categories(newVal){
      console.log("categories", newVal)
    },

  },
  methods: {
    fetch(category) {
			console.log('​fetch -> category', category)
      this.$store.dispatch("fetchCategoryJoke", category)
    }
  }
};
</script>

<style scoped>
.meme-words {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 0.17vw;
  -webkit-text-stroke-color: black;
}
</style>
