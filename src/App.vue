<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Chuck-the </span>
        <span class="font-weight-light">-Norris</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      //
    };
  }
};
</script>
