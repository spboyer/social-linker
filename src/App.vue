<template>
  <div id="app">
    <div id="nav">
      <Nav/>
    </div>
     <keep-alive include="home">
      <router-view/>
     </keep-alive>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
export default {
  name: 'app',
  components: {
    Nav
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

<style lang="scss">
@import './styles/custom.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
