import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pizzas: [],
    cart: [],
  },
  mutations: {
    GET_PIZZAS(state, pizzas) {
      state.pizzas = pizzas;
    },
    ADD_TO_CART(state, pizza) {
      state.cart.push(pizza);
    },
    UPDATE_CART(state, cart) {
      state.cart = cart;
    },
  },
  actions: {
    async GET_PIZZAS({ commit }) {
      const { data: pizzas } = await axios.get("/pizzas.json");
      commit("GET_PIZZAS", pizzas);
    },
    addToCart({ commit, dispatch }, pizzaID) {
      const pizzaExist = this.state.cart.find((p) => p.id == pizzaID);
      if (pizzaExist) {
        dispatch("plusPizza", pizzaID);
      } else {
        const pizza = { id: pizzaID, cant: 1 };
        commit("ADD_TO_CART", pizza);
      }
      alert("¡Pizza agregada con éxito!");
    },
    plusPizza({ state, commit }, id) {
      const cart = state.cart.map((p) => (p.id == id ? (p.cant++, p) : p));
      commit("UPDATE_CART", cart);
    },
    minusPizza({ state, commit }, id) {
      const { cant } = state.cart.find((p) => p.id == id);
      let cart;
      if (cant == 1) {
        cart = state.cart.filter((p) => p.id !== id);
      } else {
        cart = state.cart.map((p) => (p.id == id ? (p.cant--, p) : p));
      }
      commit("UPDATE_CART", cart);
    },
  },
  getters: {
    cart: (state) => {
      const cart = state.cart.map((p) => {
        const pizza = state.pizzas.find((pizza) => pizza.id == p.id);
        return { ...pizza, cant: p.cant };
      });
      return cart;
    },
    totalCart: (state) => {
      return state.cart.reduce((a, b) => {
        const pizza = state.pizzas.find((p) => p.id == b.id);
        const totalPizza = b.cant * pizza.price;
        return a + totalPizza;
      }, 0);
    },
  },
});
