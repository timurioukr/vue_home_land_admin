<template lang="pug">
div.block-first
  div.text-center
    h2 {{ $t('MyPetProject')}}
    p {{ $t('Timur Schekhovtsov')}}
    v-btn.mt-5(color="#000080", large, rounded class="block-first-btn" href="/404") {{ $t('Contact with me')}}
</template>

<script>
export default {
  name: "FirstBlock",
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    closeVideo() {
      this.show = false,
      this.dialog = false
    }
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

.first-block-logo {
  display: none;
}

.block-first {
  background: linear-gradient(
      rgba(161, 178, 251, 0.589),
      rgba(255, 255, 255, 0.678)
    ),
    url("../../assets/img/HomePage/koridor.jpg");
  background-size: cover;
  height: 900px;
  background-position: center;
  @include position-firs-block;
}

.block-first-right {
  position: relative;
  @include position-firs-block;
}

.block-first-left {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: flex-start;
  flex-direction: column;
}

.block-first-right-play {
  position: absolute;
  z-index: 100;
}

.block-first-right-video {
  position: absolute;
  z-index: 99;
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
  .first-block-logo {
  display: block;
  width: 100px;
  height: 100px;
}
  .block-first {
    height: 500px;
  }
  .block-first-right {
    display: none;
  }
  .block-first-left {
    text-align: center;
    align-items: center;
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