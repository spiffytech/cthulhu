<template>
  <div id="factions" class="main">
    <doom-track></doom-track>
    <ritual-track></ritual-track>
    <div class="container">
      <faction v-for="faction in factions" :faction="faction" :key="faction.name"></faction>
    </div>
    <div class="container">
      <button class="button" @click="showFactions()">Show All</button>  <button class="button" @click="resetGame()">Reset Game</button>
    </div>
  </div>
</template>

<script>
import DoomTrack from './Game/DoomTrack';
import Faction from './Game/Faction';
import RitualTrack from './Game/RitualTrack';

export default {
  components: {DoomTrack, Faction, RitualTrack},
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    factions () {
      return (
        Object.keys(this.$store.state.factions).
        map((factionName) => ({
          name: factionName,
          ...this.$store.state.factions[factionName]
        }))
      );
    }
  },
  methods: {
    showFactions () {
      this.$store.commit('showFactions');
    },
    resetGame () {
      this.$store.commit('resetGame');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  background-color:rgba(0,0,0,0.85);
}

.container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

.button {
  background-color:rgba(0,0,0,0);
  border: none;
  color: red;
}
</style>
