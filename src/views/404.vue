<template>
    <v-container>
      <div class="text-center">
        <h1>Вау, да это же ошибка 404</h1>
        <img src="../assets/img/image404.gif" alt="">
      </div>
      <div class="text-center">
        <h2>Значит, что вы потерялись!</h2>
        
        <v-btn class="mt-10 white--text" to="/" color="blue">На главную</v-btn>
      </div>
        
    </v-container>
</template>

<script>
export default {
  name: "404",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>

.bg {
  
  height: 20vh;
  background-position: center;
  background-size: cover;
}

h1 {
  font-size: 50px;
  font-family: 'Montserrat';
}

h3 {
  font-size: 80px;
  font-family: 'Montserrat'
}

img {
  max-width: 70%;
  }
</style>
