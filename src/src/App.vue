<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <LinkShare msg="Social Media Linker" alias="marouill"/>
  </div>
</template>

<script>
import LinkShare from './components/LinkShare.vue'

export default {
  name: 'app',
  components: {
    LinkShare
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
