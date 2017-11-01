<template>
  <div id="factions">
    <doom-track></doom-track>
    <faction v-for="faction in factions" :faction="faction" :key="faction.name"></faction>
  </div>
</template>

<script>
import DoomTrack from './Game/DoomTrack';
import Faction from './Game/Faction';

export default {
  components: {DoomTrack, Faction},
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
