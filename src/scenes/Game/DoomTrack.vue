<template>
  <div id="doom">
    <div v-for="n in 50" :key="'doom-token' + n" class="circle">{{n}}</div>
  </div>
</template>

<script>
export default {
  name: 'DoomTrack',
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
#doom {
  display: flex;
  flex-wrap: wrap;
}

.circle {
  width: 3em;
  height: 3em;
  border-radius: 50%;
  /*font-size: 50px; */
  color: #fff;
  line-height: 3em;
  text-align: center;
  background: #000
}
</style>
