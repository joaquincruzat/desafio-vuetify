<template>
  <div class="header">
    <div class="header-titles">
      <h1>¡Pizzería Mamma Mia!</h1>
      <h6>¡Tenemos las mejores pizzas que podrás encontrar!</h6>
    </div>
  </div>
</template>

<style scoped>
.header {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("~@/assets/Header.jpg");
  background-size: cover;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  text-align: center;
}
.header-titles {
  margin-top: 60px;
}

h1 {
  font-size: 4vh;
}

h6 {
  font-size: 2vh;
}
</style>

<script>
export default {
  name: "HeaderPizza",
};
</script>
