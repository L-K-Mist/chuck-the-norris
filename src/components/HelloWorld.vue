<template>
  <v-container fill-height grid-list-md text-xs-center>
    <v-layout
      row wrap 
      justify-center
    >
      <v-flex mb-4>
        <h1 id="first" v-if="startAnim" class="animated bounceInLeft display-2 font-weight-bold mb-3">
          When you just don't know what to do...
        </h1>   
        <h1 id="second" v-if="startAnim" class="animated bounceInRight slow display-2 font-weight-bold mb-3">
          ... Chuck them a Norris!!
        </h1>
        <p id="third"  class="animated fadeIn subheading font-weight-regular">
          You have a friend, 
          <br>they have a problem.
          <br>And there's nothing you can do to make it all better...
          <br>So Chuck them a topical Norris! And at least give them a smile.
        </p>
      </v-flex>
      <v-flex xs12 v-if="categories" class="animated bounceInUp text-uppercase">
          <v-btn small color="primary" 
            v-for="category in categories" :key="category"
            @click="fetch(category)"
          >
            {{category}}
          </v-btn>
      </v-flex>
      <v-flex v-if="categories" class="animated bounceInUp" xs12 md10 xl8>
        <v-img
          :src="require('../assets/chuckBackground.jpg')"
          class="my-3"
          contain
        >
        <v-container grid-list-xs>
          <v-layout column fluid>
            <v-flex xs11>
              <transition 
                enter-active-class="animated bounceInLeft"
                leave-active-class="animated bounceOutRight"
              >
              <p v-if="topSentence" class="meme-words" style="font-size: calc(14px + 2vw)">{{topSentence}}</p>           
              </transition>
            </v-flex>
            <v-flex xs12 style="position: absolute; bottom: 1vw; left: 5%; right: 5%">
              <transition 
                enter-active-class="animated bounceInLeft delay-1s"
                leave-active-class="animated bounceOutRight delay-1s"
              >            
                <p v-if="bottomSentences"  class="meme-words" style="font-size: calc(14px + 2vw)">
                  <span class="text-xs-center" v-for="(sentence, index) in bottomSentences" :key="index">
                    {{sentence.text}}
                  </span>
                </p>    
              </transition>       
            </v-flex>
          </v-layout>
        </v-container>
        </v-img>
      </v-flex>  
    </v-layout>
  </v-container>
</template>

<script>
// Animations are done using Animate.css (see Index.html in public folder)
// BONUS: They help keep the user's eyes entertained while fetching from the api
export default {
  created() {
    this.$store.dispatch("getCategories");
  },
  mounted() {
    this.$nextTick(() => {
      // To allow startAnim to go from false to true, thereby triggering animation
      this.startAnim = true;
    });
  },
  data: () => ({
    startAnim: false,
    sequence: 0
  }),
  computed: {
    topSentence: {
      // Using getters and setters here to nullify values between loads for triggering animation.
      get() {
        return this.$store.getters.topSentence;
      },
      set(val) {
        this.$store.dispatch("setTopSentence", val);
      }
    },
    bottomSentences: {
      // Also for animation's sake
      get() {
        return this.$store.getters.bottomSentences;
      },
      set(val) {
        this.$store.dispatch("setBottomSentences", val);
      }
    },
    categories() {
      return this.$store.getters.categories;
    }
  },

  methods: {
    fetch(category) {
      this.topSentence = null; // activates the setter for topSentence in computed.
      this.bottomSentences = null;
      this.$store.dispatch("fetchCategoryJoke", category);
    }
  }
};
</script>

<style scoped>
.meme-words {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  -webkit-text-fill-color: white;
  -webkit-text-stroke-width: 0.17vw;
  -webkit-text-stroke-color: black;
}
/* Instead of a timeline, crudely (efficiently?) using animation-delay to manage animation sequence. */
#second {
  animation-delay: 1.5s;
}
#third {
  animation-delay: 3s;
}
</style>
