<template>
  <div>
    <span>{{faction.friendlyName}}:</span>
    <span>Doom: {{faction.doom}}</span>
    <span>Signs: {{faction.signs}}</span>
    <span>Projected score: {{projectedScore}}</span>
    <button @click="incrDoom(faction.name, -1)">Doom -1</button>
    <button @click="incrDoom(faction.name, 1)">Doom +1</button>
    <button @click="incrElderSigns(faction.name, -1)">Signs -1</button>
    <button @click="incrElderSigns(faction.name, 1)">Signs +1</button>
  </div>
</template>

<script>
export default {
  name: 'Faction',
  props: ['faction'],
  data () {
    return {
    }
  },
  computed: {
    projectedScore () {
      return this.faction.doom + Math.round(this.faction.signs * 1.66);
    }
  },
  methods: {
    incrDoom (faction, amount) {
      this.$store.commit('incrDoom', {faction, amount});
    },
    incrElderSigns (faction, amount) {
      this.$store.commit('incrElderSigns', {faction, amount});
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
