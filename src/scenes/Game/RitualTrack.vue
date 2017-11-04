<template>
  <div id="ritual">
    <button>RITUAL</button>
  </div>
</template>

<script>
export default {
  name: 'RitualTrack',
  data () {
    return {
    }
  },
  computed: {
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
  margin: 3px;
  padding: 10px;
}

</style>