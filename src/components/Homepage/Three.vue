<template lang="pug">
  v-container(class="text-left three-block")
    h2(class="mx-10" ) {{ $t('Make beautiful code')}}
    v-row(justify="center" class="mt-10" )
      template
        v-col(cols="4" md="2" class="ma-5")
          a(href="")
          v-img(class="leader-foto elevation-1" src="https://reqres.in/img/faces/3-image.jpg")
          h3(class="mt-3") {{ $t('Carolina Ibn Akhmad')}}
          p {{ $t('Designer')}}
        v-col(cols="4" md="2" class="ma-5")
          a(href="#")
          v-img(class="leader-foto elevation-1" src="https://reqres.in/img/faces/5-image.jpg")
          h3(class="mt-3") {{ $t('John Carter')}}
          p  {{ $t('Marketologist')}}
</template>

<script>
export default {
  name: "ThreeBlock",
  data() {
    return {
      
    };
  },
};
</script>

<style lang="scss" scoped>

$colorBrend: #282f7e;

@mixin font-three-block {
  color: $colorBrend;
  font-family: "Montserrat";
}

.three-block {
  max-width: 100%;

}

h2 {
  font-size: 45px;
  @include font-three-block;
}

h3 {
  font-weight: 600;
  font-size: 20px;
  @include font-three-block;
}

p {
  font-size: 20px;
  font-weight: 400;
  @include font-three-block

}

.leader-foto {
  border-radius: 15% 15% 15% 15%;
  width: 200px;

}

@media only screen and (max-width: 945px) {
  h2 {
    font-size: 30px;

  }
  h3 {
    font-size: 15px;
  }
  p {
    font-size: 13px;

  }
}

</style>
