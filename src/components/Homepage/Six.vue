<template lang="pug">
  v-row.ma-15
    v-row(class="pa-10").align-center
      v-col.fife-block-right.text-center(cols="12", md="12")
        h2.white--text Go to admin page?
        v-btn.ma-1(color="#ffff", large, outlined, rounded @click="$router.push('/login')") Here
</template>

<script>
export default {
  mounted() {
    // console.log( 'ffff')
  }
}
</script>

<style lang="scss" scoped>

$color-block: linear-gradient(
  rgba(161, 178, 251, 0.589),
  rgba(2, 7, 77, 0.486)
);

@mixin leadgen-fife-block {
  background-size: cover;
  height: 250px;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 25px 25px;
}


@mixin comments-seven-block {
  background-size: cover;
  width: 20px;
  background-position: center;
  display: flex;
  flex-direction: column;
  border-radius: 25px 25px;
}

$color-block: linear-gradient(
  rgba(161, 178, 251, 0.589),
  rgba(2, 7, 77, 0.486)
);

$colorBrend: #282f7e;

.seven-block-left {  
@include comments-seven-block;
}

.seven-block-right {
  background: $color-block, url("../../assets/img/petProject/kod.jpg");
  @include comments-seven-block;
}

h2 {
    font-size: 45px;
    font-family: "Montserrat";
    color: $colorBrend;
  }
p {
  color: $colorBrend;
  font-size: 20px;
  font-weight: 400;
  font-family: "Montserrat";
}

.icon__img {
  width: 40px;
  height: 40px;
}

.fife-block-right {
  background: $color-block, url("../../assets/img/petProject/kod.jpg");
  @include leadgen-fife-block;
}

@media only screen and (max-width: 945px) {
  h2 {
    font-size: 25px;
  }

  p {
    font-size: 15px;
  }

  .v-btn {
    font-size: 12px;
    max-width: 150px;
  }

  .fife-block-right {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}

</style>