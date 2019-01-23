import nlp from "compromise";

const state = {
  topSentence: null,
  bottomSentences: null
};

const getters = {
  topSentence: state => {
    return state.topSentence;
  },
  bottomSentences: state => {
    return state.bottomSentences;
  }
};

const mutations = {};

const actions = {
  splitSentences({
      // So we can have first sentence at top of meme and rest below. (Trying to not cover Chuck's face with words)
      state
    },
    payload
  ) {
    const sentences = nlp(payload) // Gives us an array of sentences
      .sentences()
      .data();
    state.topSentence = sentences.shift().text; // Gives us the first element of the array as a string

    if (sentences.length) {
      // If there's still a sentence left after .shift()
      state.bottomSentences = sentences;
    } else {
      state.bottomSentences = null;
    }
    console.log("​bottomSentences", state.bottomSentences);
  },
  setTopSentence({
    state
  }, payload) {
    state.topSentence = payload
  },
  setBottomSentences({
    state
  }, payload) {
    state.bottomSentences = payload
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};