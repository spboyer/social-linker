<template>
  <v-app class="blue lighten-5">
    <v-toolbar color="primary">
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title color="white">Social Linker</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn color="white" to="/" flat>Home</v-btn>
        <v-btn color="white" to="/settings" flat>Settings</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" class="primary" disable-resize-watcher app light>
      <v-layout column flex>
        <v-btn color="white" to="/" flat>Home</v-btn>
        <v-btn color="white" to="/settings" flat>Settings</v-btn>
      </v-layout>
    </v-navigation-drawer>
    <router-view></router-view>
    <v-footer fixed height="auto" color="primary" center>
      <v-layout align-center justify-center>
        <v-btn color="white" flat round to="/credits">Credits</v-btn>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  },
  methods: {
    toggleDrawer(event) {
      this.showDrawer = event;
    }
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.wrapper {
  padding: 10px;
}

.v-toolbar__title {
  color: white;
}

.card {
  margin: 5px;
  padding: 5px;
}
</style>
