<template>
  <div id="app">
    <FinnaFront />
  </div>
</template>

<script>
import FinnaFront from './components/FinnaFront.vue'

export default {
  name: 'app',
  components: {
      FinnaFront
  }
}
</script>

<style>
 body {
     margin-top:0;
     padding-top: 0;
     background: #FCFCFC;
 }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
</style>
