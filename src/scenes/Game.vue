<template>
  <div id="factions">
    <div v-for="faction in factions" :key="faction.name">{{faction}}</div>
  </div>
</template>

<script>
export default {
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
          factionName,
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
