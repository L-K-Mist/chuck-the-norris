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
          <br>There's nothing you can do about their tanking career, right?
          <br>So Chuck them a topical Norris! And at least give them a smile.
        </p>
      </v-flex>
<v-flex xs12>
      <v-btn class="text-uppercase"
        v-for="(category, index) in categories" :key="index"
        @click="fetch(category)"
      >
        {{category}}
      </v-btn>
  
</v-flex>

      </v-flex>
      <v-flex xs12>
        <v-img
          :src="require('../assets/chuckBackground.jpg')"
          class="my-3"
          contain
          height="800"
        ></v-img>
      </v-flex>
      <v-flex
        xs12
        mb-5
      >
        <h2 class="headline font-weight-bold mb-3">Ecosystem</h2>

        <v-layout justify-center>
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  created(){
    // this.$store.dispatch("getJokes")
    this.$store.dispatch("getCategories")
  },
  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader"
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify"
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify"
      }
    ],
  }),
  computed: {
    jokes() {
      return this.$store.getters.jokes
    },
    categories() {
      return this.$store.getters.categories
    }
  },
  watch: {
    jokes(newVal){
      console.log("jokes", newVal)
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

<style>
</style>
