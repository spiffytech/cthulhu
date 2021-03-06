import Vue from 'vue';
import Vuex from 'vuex';
const createPersistedState = require('vuex-persistedstate');

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    ritualsTaken: 0,
    factions: {
      blackGoat: {
        friendlyName: 'Black Goat',
        doom: 0,
        gates: 0,
        signs: 0,
        inUse: true,
      },
      crawlingChaos: {
        friendlyName: 'Crawling Chaos',
        doom: 0,
        gates: 0,
        signs: 0,
        inUse: true,
      },
      cthulhu: {
        friendlyName: 'Cthulhu',
        doom: 0,
        gates: 0,
        signs: 0,
        inUse: true,
      },
      opener: {
        friendlyName: 'Opener of the Way',
        doom: 0,
        gates: 0,
        signs: 0,
        inUse: true,
      },
      sleeper: {
        friendlyName: 'Sleeper',
        doom: 0,
        gates: 0,
        signs: 0,
        inUse: true,
      },
      tchoTcho: {
        friendlyName: 'Tcho-Tcho',
        doom: 0,
        gates: 0,
        signs: 0,
        inUse: true,
      },
      windwalker: {
        friendlyName: 'Windwalker',
        doom: 0,
        gates: 0,
        signs: 0,
        inUse: true,
      },
      yellowSign: {
        friendlyName: 'Yellow Sign',
        doom: 0,
        gates: 0,
        signs: 0,
        inUse: true,
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
    },
    incrRituals (state, amount) {
      state.ritualsTaken += amount;
    },
    hideFaction (state, faction) {
      state.factions[faction].inUse = false;
    },
    showFactions (state) {
      Object.keys(state.factions).forEach(factionname => { state.factions[factionname].inUse = true });
    },
    resetGame (state) {
      Object.keys(state.factions).forEach(factionname => { state.factions[factionname].doom = 0; state.factions[factionname].signs = 0; state.factions[factionname].gates = 0; state.factions[factionname].inUse = true });
    }
  },
  actions: {
  }
});

export default store;
