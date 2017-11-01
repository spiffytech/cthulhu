import Vue from 'vue';
import Vuex from 'vuex';
const createPersistedState = require('vuex-persistedstate');

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    factions: {
      blackGoat: {
        friendlyName: 'Black Goat',
        doom: 0,
        gates: 0,
        signs: 0,
      },
      crawlingChaos: {
        friendlyName: 'Crawling Chaos',
        doom: 0,
        gates: 0,
        signs: 0,
      },
      cthulhu: {
        friendlyName: 'Cthulhu',
        doom: 0,
        gates: 0,
        signs: 0,
      },
      opener: {
        friendlyName: 'Opener of the Way',
        doom: 0,
        gates: 0,
        signs: 0,
      },
      sleeper: {
        friendlyName: 'Sleeper',
        doom: 0,
        gates: 0,
        signs: 0,
      },
      tchoTcho: {
        friendlyName: 'Tcho-Tcho',
        doom: 0,
        gates: 0,
        signs: 0,
      },
      windwalker: {
        friendlyName: 'Windwalker',
        doom: 0,
        gates: 0,
        signs: 0,
      },
      yellowSign: {
        friendlyName: 'Yellow Sign',
        doom: 0,
        gates: 0,
        signs: 0,
      },
    }
  },
  getters: {
  },
  mutations: {
    incrDoom (state, {faction, amount}) {
      state.factions[faction].doom += amount;
    },
    incrElderSigns (state, {faction, amount}) {
      state.factions[faction].signs += amount;
    }
  },
  actions: {
  }
});

export default store;
