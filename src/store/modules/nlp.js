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

const actions = {
  splitSentences({ state }, payload) {
    // So we can have first sentence at top of meme and rest below.
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
  },
  setTopSentence({ state }, payload) {
    state.topSentence = payload;
  },
  setBottomSentences({ state }, payload) {
    state.bottomSentences = payload;
  }
};

export default {
  state,
  actions,
  getters
};
