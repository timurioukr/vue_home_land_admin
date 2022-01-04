<template lang="pug">
div.block-first
  div.text-center
    h2 {{ $t('Home Project')}}
    p {{ $t('Timur Shekhovtsov')}}
    v-btn.mt-5(color="#000080", large, rounded class="block-first-btn" href="https://www.linkedin.com/in/shekhovtsoff/") {{ $t('Contact with me')}}
</template>

<script>
export default {
  name: "FirstBlock",
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>

@mixin position-firs-block {
  display: flex;
  justify-content: center;
  align-items: center;
}

$colorBrend: #282f7e;

.block-first {
  background: linear-gradient(
      rgba(161, 178, 251, 0.589),
      rgba(255, 255, 255, 0.678)
    ),
    url("../../assets/img/petProject/kod.jpg");
  background-size: cover;
  height: 900px;
  background-position: center;
  @include position-firs-block;
}

h2 {
  font-size: 85px;
  color: $colorBrend;
  font-family: "Montserrat";
}

p {
  font-size: 30px;
  font-weight: 400;
  color: $colorBrend;
  font-family: "Montserrat";
  width: 600px;
}

.v-btn{
  max-width: 350px;
  color: rgb(255, 255, 255);
}

@media only screen and (max-width: 1000px) {
  .block-first {
    height: 500px;
  }

  h2 {
    font-size: 30px;
  }
  p {
    width: 300px;
    font-size: 20px;
  }
}

@media (max-width: 320px) {
  .block-first-btn {
    width: 225px;
    font-size: 10px;
    color: white;
  }
}

</style>