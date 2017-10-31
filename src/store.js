import Vue from 'vue';
import Vuex from 'vuex';
const createPersistedState = require('vuex-persistedstate');

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    factions: {
      blackGoat: {
        gates: 0,
        signs: 0,
      },
      crawlingChaos: {
        gates: 0,
        signs: 0,
      },
      cthulhu: {
        gates: 0,
        signs: 0,
      },
      opener: {
        gates: 0,
        signs: 0,
      },
      sleeper: {
        gates: 0,
        signs: 0,
      },
      tchoTcho: {
        gates: 0,
        signs: 0,
      },
      windwalker: {
        gates: 0,
        signs: 0,
      },
      yellowSign: {
        gates: 0,
        signs: 0,
      },
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  }
});

export default store;
