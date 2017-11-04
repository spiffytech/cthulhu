<template>
  <div class="faction" v-if="faction.inUse">
    <span class="title">{{faction.friendlyName}}<button class="button decrement" @click="hideFaction(faction.name)">-</button></span><br>
    <span>Doom: {{faction.doom}} ({{projectedScore}})</span>
    <div>
      <button class="button decrement" @click="incrDoom(faction.name, -1)">-</button>
      <button class="button increment" @click="incrDoom(faction.name, 1)">+</button>
    </div>
    <span>Signs: {{faction.signs}}</span>
    <div>
      <button class="button decrement" @click="incrElderSigns(faction.name, -1)">-</button>
      <button class="button increment" @click="incrElderSigns(faction.name, 1)">+</button>
    </div>
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
    hideFaction (faction) {
      this.$store.commit('hideFaction', faction);
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.faction {
  font-family: luminari;
  color: white;
  flex-basis: auto;
  margin: 20px;
  text-align: left;
}

.title {
  color: goldenrod;
  font-size: 20px;
}

.button {
  background-color:rgba(0,0,0,0);
  border: none;
}

.increment {
  color: green;
}

.decrement {
  color: red;
}
</style>
