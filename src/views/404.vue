<template>
    <v-container>
      <div class="text-center">
        <h1>Maybe, we have a problem</h1>
        <img src="../assets/img/image404.gif" alt="">
      </div>
      <div class="text-center">
        <h2>I go to fixed, and you go to home page?</h2>
        <v-btn class="mt-10 rounded-xl white--text" to="/" color="primary">Yes</v-btn>
      </div>
    </v-container>
</template>

<script>
export default {
  name: "ErorPage",
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
