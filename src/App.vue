<template>
  <div>
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import { mapActions } from "vuex";
export default {
  name: "App",
  data: () => ({
    //
  }),
  components: { NavBar },
  methods: {
    ...mapActions(["GET_PIZZAS"]),
  },
  mounted() {
    this.GET_PIZZAS();
  },
};
</script>
