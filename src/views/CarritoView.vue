<template>
  <v-app>
    <v-container class="container-cart">
      <h1>Detalle de su pedido</h1>
      <v-container class="container-list-cart">
        <v-row>
          <v-col cols="12">
            <div v-for="(pizza, i) in cart" :key="i">
              <div class="list-cart">
                <div class="list-cart-1">
                  <img
                    class="d-none d-sm-none d-md-flex"
                    :src="pizza.img"
                    alt=""
                  />
                  <h4>{{ pizza.name }}</h4>
                </div>
                <div class="list-cart">
                  <h4>${{ totalPizza(pizza.cant, pizza.price) }}</h4>
                  <v-btn
                    depressed
                    class="mx-2"
                    fab
                    x-small
                    color="error"
                    @click="minusPizza(pizza.id)"
                  >
                    <v-icon> mdi-minus </v-icon>
                  </v-btn>
                  <p class="mt-3">{{ pizza.cant }}</p>
                  <v-btn
                    depressed
                    class="mx-2"
                    fab
                    x-small
                    color="primary"
                    @click="plusPizza(pizza.id)"
                  >
                    <v-icon> mdi-plus </v-icon>
                  </v-btn>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <h1>Total: ${{ formatNumber(totalCart) }}</h1>
      <v-btn color="success">Ir a pagar</v-btn>
    </v-container>
  </v-app>
</template>
<script>
import utils from "@/utils/functions";
const { formatNumber } = utils;
import { mapActions, mapGetters } from "vuex";
export default {
  name: "CarritoView",
  computed: {
    ...mapGetters(["cart", "totalCart"]),
  },
  methods: {
    ...mapActions(["plusPizza", "minusPizza"]),
    totalPizza(cant, price) {
      return formatNumber(cant * price);
    },
    formatNumber,
  },
};
</script>

<style scoped>
.container-list-cart {
  background-color: white;
}
.container-cart {
  margin-top: 100px;
  width: 70vw;
  background-color: rgb(248, 248, 248);
}
.list-cart {
  margin-top: 10px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list-cart-1 {
  margin-top: 10px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}
img {
  max-width: 50px;
}
h1 {
  color: black;
}
</style>
