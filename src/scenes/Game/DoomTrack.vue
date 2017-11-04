<template>
  <div id="doom">
    <div v-for="n in 50" :key="'doom-token' + n">
      <div v-if="n != 30 && n <= 15" class="circle normal">{{n}}</div>
      <div v-if="n != 30 && n > 15 && n <= 29" class="circle warning">{{n}}</div>
      <div v-if="n==30" class="circle end">End</div>
      <div v-if="n > 30" class="circle over">{{n}}</div>
    </div>
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
  justify-content: center;
}

.circle {
  width: 2em;
  height: 2em;
  border-radius: 50%;
  /*font-size: 50px; */
  font-family: luminari;
  color: #fff;
  line-height: 2em;
  text-align: center;
  background: #222;
  margin: 3px;
  padding: 10px;
}

.normal {
  color: green;
}

.warning {
  color: #9a9521;
}

.end {
  color: red;
}

.over {
  color: darkred;
}
</style>
