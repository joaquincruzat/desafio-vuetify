<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#2E7D32"
      dark
      prominent
      scroll-target="#scrolling-techniques-2"
      height="80"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-toolbar-title>
        <router-link class="navbar-title" :to="{ name: 'HomeView' }"
          >Mamma Mia 🍕</router-link
        ></v-toolbar-title
      >

      <v-spacer></v-spacer>
      <router-link :to="{ name: 'CarritoView' }">
        <v-btn class="navbar-cart" icon>
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </router-link>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-2"
      class="overflow-y-auto"
      max-height="600"
    >
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
* {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 24px;
}
.navbar-title {
  margin-left: 50px;
  width: 100%;
  text-decoration: none;
  color: white;
}
.navbar-cart {
  margin-top: 25px;
  margin-right: 50px;
  align-content: space-between;
}
.navbar-price {
  margin-left: 5px;
}
</style>
