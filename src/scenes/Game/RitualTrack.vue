<template>
  <div>
  <h2>Ritual Track</h2>
    <div id="ritual">
      <div
        v-for="item in ritualTrack"
        :key="item.key"
        :class="{circle: true, used: item.wasUsed}"
      >
        {{item.cost}}
      </div>
      <div id="instant-death">Instant Death 10</div>
      <button @click="ritual">Ritual</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RitualTrack',
  data () {
    return {
      rituals: {
        3: [5, 6, 7, 8, 9, 10],
        4: [5, 6, 7, 7, 8, 8, 9, 10],
        5: [5, 6, 6, 7, 7, 8, 8, 9, 9, 10],
        6: [5, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 10],
        7: [5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10],
        8: [5, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 10],
      },
    }
  },
  computed: {
    numPlayers () {
      const numPlayers =
        Object.keys(this.$store.state.factions).
        map((factionName) => this.$store.state.factions[factionName]).
        filter((faction) => faction.inUse).
        length;

      if (numPlayers < 3) throw new Error('Now enough players');
      return numPlayers;
    },

    ritualTrack () {
      return (
        this.rituals[this.numPlayers].
        map((n, index) => ({
          key: `${this.numPlayers}-${n}`,
          cost: n,
          // +1 handles index 0 with 0 consumed rituals
          wasUsed: index + 1 <= this.$store.state.ritualsTaken,
        }))
      );
    },

    ritualsTaken () {
      return this.$store.state.ritualsTaken;
    }
  },
  methods: {
    ritual () {
      this.$store.commit('incrRituals', 1);
      console.log(this.$store.state.ritualsTaken);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#ritual {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.circle {
  width: 3em;
  height: 3em;
  border-radius: 50%;
  /*font-size: 50px; */
  font-family: luminari;
  color: lightblue;
  line-height: 3em;
  text-align: center;
  background: #222;
  margin: 0.3em;
  padding: 0.5em;
  background-color: rgb(75,75,75);
}

.circle.used {
  background: #222;
}

#instant-death {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0.5em;
  padding: 0.5em;
  background: #222;
}

#instant-death.even {
  background-color: rgb(75,75,75);
}

h2 {
  justify-content: center;
}

</style>
