<template>
  <v-app>
    <v-toolbar dark scroll-off-screen color="primary" app>
      <v-toolbar-title class="headline font-weight-bold text-uppercase">
        <span>Chuck-the-Norris</span>
      </v-toolbar-title>
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
