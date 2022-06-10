<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="250" :src="pizza.img"></v-img>

    <v-card-title>{{ pizza.name }}</v-card-title>
    <v-divider class="mx-4"></v-divider>
    <h4 class="ml-4 mt-2">Ingredientes:</h4>
    <v-card-text>
      <div>
        <ul
          class="m-0"
          v-for="(ingredient, index) in pizza.ingredients"
          :key="index"
        >
          <li>&#127829; {{ ingredient }}</li>
        </ul>
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text
      ><h2 class="text-center m-5">
        ${{ formatNumber(pizza.price) }}
      </h2></v-card-text
    >

    <v-card-actions class="cards-buttons">
      <v-btn class="mb-5" color="primary" @click="dialog = true">
        Ver Más &#128064;
      </v-btn>
      <v-btn class="mb-5" color="success" @click="addToCart(pizza.id)"
        >Añadir</v-btn
      >
    </v-card-actions>
    <!-- v-dialog -->
    <v-dialog v-model="dialog" width="500" persistent>
      <v-card>
        <v-img
          class="white--text align-end"
          height="200px"
          :src="pizza.img"
          cover
        >
          <v-card-title>
            <h3>{{ pizza.name }}</h3></v-card-title
          >
        </v-img>
        <v-divider></v-divider>
        <v-card-text class="mt-5"> {{ pizza.desc }}</v-card-text>
        <v-card-text>
          <div>
            <h4 class="mb-2">Ingredientes:</h4>
            <ul
              class="m-0"
              v-for="(ingredient, index) in pizza.ingredients"
              :key="index"
            >
              <li>&#127829; {{ ingredient }}</li>
            </ul>
          </div>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <v-card-text
            ><h2>Precio: ${{ formatNumber(pizza.price) }}</h2></v-card-text
          >
          <v-btn color="success" @click="addToCart(pizza.id)">Añadir</v-btn>
          <v-btn color="error" @click="dialog = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- fin dialog -->
  </v-card>
</template>

<script>
import utils from "@/utils/functions";
import { mapActions } from "vuex";
const { formatNumber } = utils;
export default {
  name: "CardsPizza",
  data() {
    return {
      dialog: false,
    };
  },
  props: ["pizza"],
  methods: {
    formatNumber,
    ...mapActions(["addToCart"]),
  },
};
</script>

<style>
.cards-buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 15px;
}
</style>
