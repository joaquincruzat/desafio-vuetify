<template>
  <v-app>
    <v-main>
      <HeaderPizza />
      <v-container>
        <v-row>
          <v-col
            cols="12"
            lg="3"
            md="6"
            sm="9"
            v-for="(pizza, index) in pizzas"
            :key="index"
          >
            <CardsPizza :pizza="pizza" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import HeaderPizza from "@/components/HeaderPizza";
import CardsPizza from "@/components/CardsPizza";
import { mapState } from "vuex";
export default {
  name: "homeView",
  components: { CardsPizza, HeaderPizza },
  computed: {
    ...mapState(["pizzas"]),
  },
};
</script>
<style></style>
